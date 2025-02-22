import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
  
    Input, 
    DateInput
  } from "@heroui/react";
  
  import {CalendarDate, parseDate} from "@internationalized/date";
  
  export const day = [
    {key: "1", label: "Lunes"},
    {key: "2", label: "Martes"},
    {key: "3", label: "Miercoles"},
    {key: "4", label: "Jueves"},
    {key: "5", label: "Viernes"},
    {key: "6", label: "Sabado"},
  
  ];
  
  export default function CreateClient() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
    return (
      <>
        <Button className="mt-5" onPress={onOpen} color="primary" size="lg" fullWidth >Crear Cliente</Button>
        <Modal
          isDismissable={false}
          isKeyboardDismissDisabled={true}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Crear Cliente Nuevo</ModalHeader>
                <ModalBody>
  
                <Input
        size="lg"
     
        placeholder="Escribe nombre y apellido del cliente"
        label="Nombre Apellido"
        type="text"
         pattern="string"
        variant="bordered"
      />
<Input
        size="lg"
     
        placeholder="Escribe Telefono"
        label="Telefonó"
        type="tel"
         pattern="string"
        variant="bordered"
      />
      <Input
        size="lg"
     
        placeholder="Escribe la calle del cliente"
        label="Ubicación"
        type="tel"
         pattern="string"
        variant="bordered"
      />
      <Input
        size="lg"
     
        placeholder="Escribe un pequeño de talle "
        label="Descripción"
        type="tel"
         pattern="string"
        variant="bordered"
      />
      
  
      <DateInput
     
          isDisabled
          defaultValue={parseDate("2024-04-04")}
          label={"Dia Por Defecto"}
          placeholderValue={new CalendarDate(1995, 11, 6)}
        />
  
        
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Crear Cliente
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }
  