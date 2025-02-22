import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input, 
  Select,
  SelectItem,
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
export default function NavigationButton() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
      <Button className="mt-5" onPress={onOpen} color="primary" size="lg" fullWidth >Crear Nuevo Día</Button>
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
              <ModalBody>
              <Select
              size="lg"
               variant="bordered"
      
      items={day}
      label="Dias Semanal"
      placeholder="Selecionar Dias"
    >
      {(animal) => <SelectItem>{animal.label}</SelectItem>}
    </Select>
    <DateInput
   
        isDisabled
        defaultValue={parseDate("2024-04-04")}
        label={"Dia Por Defecto"}
        placeholderValue={new CalendarDate(1995, 11, 6)}
      />
              <Input
      size="lg"
   
      placeholder="Escribe los luegares por donde recorres"
      label="Recorrrido"
      type="text"
       pattern="string"
      variant="bordered"
    />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={onClose}>
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
