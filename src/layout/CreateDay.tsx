import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
  
    Input, 
  
    DateInput,
    Calendar
  } from "@heroui/react";
  
  import {CalendarDate, } from "@internationalized/date";
import { useState } from "react";
import { useApi } from "../config/useUnisave";
import toast from "react-hot-toast";
  

  export default function CreateDay() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
     // Obtener la fecha actual
  const today = new Date();
  const initialDate = new CalendarDate(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  );
  // Estados para la fecha seleccionada y el recorrido
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [route, setRoute] = useState("");
  const { executeRequest } = useApi();

  const formatDate = (date: CalendarDate) => {
    const day = String(date.day).padStart(2, '0');
    const month = String(date.month).padStart(2, '0');
    const year = date.year;
    return `${day}/${month}/${year}`;
};

   

 const handleCreateDay = async (onClose: { (): void; (): void; }) => {
  // Obtener sessionId desde localStorage
const sessionId = localStorage.getItem('sessionId');
console.log("Session ID recuperado:", sessionId);
const formattedDate = formatDate(selectedDate);
  try {
    const result = await executeRequest('Backend.Actions.Days.AddDayFacet', {
      parameters: [{ 
        Date: formattedDate,
        Route: route
       }],
      sessionId: sessionId
    });
    const isSuccess = result?.executionResult?.returned?.IsSuccessful      ;
    if (!isSuccess) {
      toast.error(result?.executionResult?.returned?.Message|| 'Login failed')
    }else{
      toast.success(result?.executionResult?.returned?.Message)
    // Reset modal fields after submission
    setSelectedDate(initialDate);
    setRoute("");
    onClose();
    }

   
    
    console.log(result)
  } catch (err) {
    console.error('API Request Error:', err);
  }
};
    return (
      <>
        <Button className="mt-5 w-full bg-blue-500 text-white py-4 text-center text-lg font-semibold " onPress={onOpen} color="primary" size="lg" fullWidth >Crear Nuevo Día</Button>
        <Modal
          isDismissable={false}
          isKeyboardDismissDisabled={true}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Crear dia de reparto</ModalHeader>
                <ModalBody className="items-center">
  
                <Calendar aria-label="Date (Uncontrolled)" 
                 value={selectedDate}
                 onChange={setSelectedDate} />
  
      <DateInput
     
          isDisabled
          value={selectedDate}
          label={"Dia Por Defecto"}
          placeholderValue={initialDate}
         
        />
  
                <Input
        size="lg"
        placeholder="Escribe los luegares por donde recorres"
        label="Recorrrido"
        type="text"
         pattern="string"
        variant="bordered"
        value={route}
                  onChange={(e) => setRoute(e.target.value)}
      />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary"   onPress={() => handleCreateDay(onClose)}>
                    Crear Día
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }

