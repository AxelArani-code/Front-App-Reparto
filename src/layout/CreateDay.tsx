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
import { useNavigate } from "react-router-dom";
  

  export default function CreateDay() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const { isOpen: isModalOpen, onOpen: openModal, onClose: closeModal } = useDisclosure(); // Modal de no autenticado
     // Obtener la fecha actual
  const today = new Date();
    const navigate = useNavigate();
  const initialDate = new CalendarDate(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  );
  // Estados para la fecha seleccionada y el recorrido
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [route, setRoute] = useState("");
  const { executeRequest } = useApi();
  const [, setHasData] = useState(false);
  const formatDate = (date: CalendarDate) => {
    const day = String(date.day).padStart(2, '0');
    const month = String(date.month).padStart(2, '0');
    const year = date.year;
    return `${day}/${month}/${year}`;
};

   
const saveSettings = (settings: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.3; // 70% de éxito
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      isSuccess
        ? resolve(`Guardado correctamente: ${settings}`)
        : reject(`Error al guardar: ${settings}`);
    }, 2000); // Simula retraso de 2 segundos
  });
};
 const handleCreateDay = async (onClose: { (): void; (): void; }) => {
  if (!route.trim() || !isNaN(Number(route))) {
    toast.error("Por favor, ingrese un texto válido.");
    return; // Evita ejecutar la petición si la entrada es inválida
  }
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
    const message = result?.executionResult?.returned?.Message;
    console.log(isSuccess)
    console.log(message)
    if (!isSuccess) {
      toast.promise(
        saveSettings(message),
        {
          loading: 'Cargando...',
          error: <b>{message || 'Error Database'}</b>,
        }
      );
      setHasData(false);
      openModal(); // Abre el modal de advertencia si no hay datos
    } else {
      toast.promise(
        saveSettings(message),
        {
          loading: 'Cargando...',
          success: <b>{message}</b>,

        }
      );
      setHasData(true); // Actualiza el estado en el componente padre
      window.location.reload();
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
const routerLogin = () => {
  navigate("/login");
}
    return (
      <>
        <Button className="mt-5 w-full bg-blue-500 text-white py-4 text-center text-lg font-semibold " onPress={onOpen} color="primary" size="lg" fullWidth >Crear Nuevo Día</Button>
      
      {/* Modal de Advertencia */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent>
          <ModalHeader>Acceso Denegado</ModalHeader>
          <ModalBody>Debes iniciar sesión para poder crear un día.</ModalBody>
          <ModalFooter>
            <Button onPress={routerLogin} color="primary">
              Login
             
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
 {/* Modal Principal */}
 <Modal isDismissable={false} isKeyboardDismissDisabled={true} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Crear día de reparto</ModalHeader>
              <ModalBody className="items-center">
                <Calendar aria-label="Date (Uncontrolled)" value={selectedDate} onChange={setSelectedDate} />

                <DateInput isDisabled value={selectedDate} label={"Día Por Defecto"} placeholderValue={initialDate} />

                <Input
                  size="lg"
                  placeholder="Escribe los lugares por donde recorres"
                  label="Recorrido"
                  errorMessage="Por favor, ingrese un texto válido"
                  isInvalid={!isNaN(Number(route)) && route.trim() !== ""}
                  type="text"
                  variant="bordered"
                  value={route}
                  onChange={(e) => setRoute(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={() => handleCreateDay(onClose)} disabled={!route.trim() || !isNaN(Number(route))}>
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

