import { Button, Card, CardBody, CardHeader, DateInput, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, useDisclosure, cn, } from "@heroui/react";
import NavigationButton from "../components/NavigationButton";
import NavBar from "../components/NavBar";
import {CalendarDate, parseDate} from "@internationalized/date";
import { Link, useNavigate } from "react-router-dom";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";


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


export const EditDocumentIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M15.48 3H7.52C4.07 3 2 5.06 2 8.52v7.95C2 19.94 4.07 22 7.52 22h7.95c3.46 0 5.52-2.06 5.52-5.52V8.52C21 5.06 18.93 3 15.48 3Z"
        fill="currentColor"
        opacity={0.4}
      />
      <path
        d="M21.02 2.98c-1.79-1.8-3.54-1.84-5.38 0L14.51 4.1c-.1.1-.13.24-.09.37.7 2.45 2.66 4.41 5.11 5.11.03.01.08.01.11.01.1 0 .2-.04.27-.11l1.11-1.12c.91-.91 1.36-1.78 1.36-2.67 0-.9-.45-1.79-1.36-2.71ZM17.86 10.42c-.27-.13-.53-.26-.77-.41-.2-.12-.4-.25-.59-.39-.16-.1-.34-.25-.52-.4-.02-.01-.08-.06-.16-.14-.31-.25-.64-.59-.95-.96-.02-.02-.08-.08-.13-.17-.1-.11-.25-.3-.38-.51-.11-.14-.24-.34-.36-.55-.15-.25-.28-.5-.4-.76-.13-.28-.23-.54-.32-.79L7.9 10.72c-.35.35-.69 1.01-.76 1.5l-.43 2.98c-.09.63.08 1.22.47 1.61.33.33.78.5 1.28.5.11 0 .22-.01.33-.02l2.97-.42c.49-.07 1.15-.4 1.5-.76l5.38-5.38c-.25-.08-.5-.19-.78-.31Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const DeleteDocumentIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M21.07 5.23c-1.61-.16-3.22-.28-4.84-.37v-.01l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3h-2.62c-2.33 0-2.55 1.32-2.71 2.29l-.21 1.28c-.93.06-1.86.12-2.79.21l-2.04.2c-.42.04-.72.41-.68.82.04.41.4.71.82.67l2.04-.2c5.24-.52 10.52-.32 15.82.21h.08c.38 0 .71-.29.75-.68a.766.766 0 0 0-.69-.82Z"
        fill="currentColor"
      />
      <path
        d="M19.23 8.14c-.24-.25-.57-.39-.91-.39H5.68c-.34 0-.68.14-.91.39-.23.25-.36.59-.34.94l.62 10.26c.11 1.52.25 3.42 3.74 3.42h6.42c3.49 0 3.63-1.89 3.74-3.42l.62-10.25c.02-.36-.11-.7-.34-.95Z"
        fill="currentColor"
        opacity={0.399}
      />
      <path
        clipRule="evenodd"
        d="M9.58 17a.75.75 0 0 1 .75-.75h3.33a.75.75 0 0 1 0 1.5h-3.33a.75.75 0 0 1-.75-.75ZM8.75 13a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Home() {
  const { isOpen: isDeleteOpen, onOpen: onOpenDelete, onOpenChange: onDeleteChange } = useDisclosure();
  const { isOpen: isEditOpen, onOpen: onOpenEdit, onOpenChange: onEditChange } = useDisclosure();
  const navigate = useNavigate();
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <div className="container mx-auto p-4 ">
      <NavBar />
   
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
       
          {schedule.map(({ day, date, route }) => (
            <Card shadow="md" className="w-full" onPress={() => navigate("/scheduleCard")}
            >

        
              <Link to="/viewComponet" >    
<CardHeader className=" gap-4  ">
                <div className="w-2 h-10 bg-primary rounded" />
                <div>
                  <h2 className="text-lg font-bold text-primary">{`Día - ${day}`}</h2>
                  <p className="text-default-500">{date}</p>
                </div>


              </CardHeader>
                
             
             
              
              
               <CardBody>
                <p className="text-default-500">
                  Recorrido - <span className="font-semibold text-primary">{route}</span>
                </p>
              </CardBody>
</Link>
              
<Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Open Menu</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with description" variant="faded">
        <DropdownSection showDivider title="Acción">
         
          <DropdownItem
            key="edit"
            description="Vas a poder editar el reparto"
           onPress={onOpenEdit}
            startContent={<EditDocumentIcon className={iconClasses} />}
          >
            Editar Reparto
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Precausión">
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            description="Eliminaras los clientes de ese día"
          onPress={onOpenDelete}
            startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
          >
            Eliminar Reparto
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
             
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
