import { Button, Card, CardBody, CardHeader, DateInput, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, useDisclosure } from "@heroui/react";
import NavigationButton from "../components/NavigationButton";
import NavBar from "../components/NavBar";

import {CalendarDate, parseDate} from "@internationalized/date";

const schedule = [
  { day: "Lunes", date: "24/01/24", route: "Sarmiento, Toledano, Constitución, etc" },
  { day: "Martes", date: "25/01/24", route: "Belgrano, Mitre, San Martín, etc" },
  { day: "Miércoles", date: "26/01/24", route: "Av. Siempre Viva, Independencia, Rivadavia, etc" },
  { day: "Jueves", date: "27/01/24", route: "Ruta 9, Av. Central, 25 de Mayo, etc" },
  { day: "Viernes", date: "28/01/24", route: "Las Heras, San Juan, Mendoza, etc" },
  { day: "Sabado", date: "28/01/24", route: "Las Heras, San Juan, Mendoza, etc" },
];
export const day = [
  {key: "1", label: "Lunes"},
  {key: "2", label: "Martes"},
  {key: "3", label: "Miercoles"},
  {key: "4", label: "Jueves"},
  {key: "5", label: "Viernes"},
  {key: "6", label: "Sabado"},

];
export default function Home() {
  const { isOpen: isDeleteOpen, onOpen: onOpenDelete, onOpenChange: onDeleteChange } = useDisclosure();
  const { isOpen: isEditOpen, onOpen: onOpenEdit, onOpenChange: onEditChange } = useDisclosure();

  return (
    <div className="container mx-auto p-4 ">
      <NavBar />
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {schedule.map(({ day, date, route }) => (
            <Card shadow="md" className="w-full"
            >

              <div className="flex justify-end gap-4 p-3 ">
<CardHeader className=" gap-4 justify-center items-center  ">
                <div className="w-2 h-10 bg-primary rounded" />
                <div>
                  <h2 className="text-lg font-bold text-primary">{`Día - ${day}`}</h2>
                  <p className="text-default-500">{date}</p>
                </div>


              </CardHeader>
                
                <Button isIconOnly color="danger" size="sm" variant="faded" onPress={onOpenDelete}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                </Button>
                <Button isIconOnly color="success" variant="faded" onPress={onOpenEdit}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="m15 5 4 4" /></svg>
                </Button>

              </div>

              

              <CardBody>
                <p className="text-default-500">
                  Recorrido - <span className="font-semibold text-primary">{route}</span>
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
    

      <NavigationButton />

       {/* Modal Eliminar */}
       <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isDeleteOpen}
        onOpenChange={onDeleteChange}
        placement="center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Borrar Día De Reparto</ModalHeader>
              <ModalBody>

              <p>¿Estas seguro que quieres borrar el día?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger"  onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" variant="bordered" onPress={onClose}>
                  Aceptar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {/* Modal Editar */}
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isEditOpen}
        onOpenChange={onEditChange}
        placement="center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Editar Dia De Reparto</ModalHeader>
              <ModalBody>

              <p>¿Estas seguro que quieres editar el día?</p>

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
                <Button color="danger"  onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" variant="bordered" onPress={onClose}>
                  Aceptar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>

  )
}
