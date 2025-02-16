import React, { SVGProps } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Tooltip,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  cn,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,

  Input,
  Textarea,

} from "@heroui/react";
import NavBar from "./NavBar";
import { useState } from "react";
import CreateOrdenUser from "../layout/CreateOrdenUser";

export const columns = [
  { name: "FECHA", uid: "fecha" },
  { name: "20L", uid: "cantidad" },
  { name: "12 L", uid: "doceLitros" },
  { name: "SIF", uid: "sif" },
  { name: "TOTAL", uid: "total" },
  { name: "EF", uid: "ef" },
  { name: "TRAS", uid: "tras" },
  { name: "ACTIONS", uid: "actions" },
];

export const users = [
  {
    id: 1,
    nombre: "Axel Aranibar",
    fecha: "2025-01-01",
    cantidad: "2",
    doceLitros: "1",
    sif: "10",
    total: "10.000",
    ef: true,
    tras: false,

  },
  {
    id: 2,
    nombre: "Axel Aranibar",
    fecha: "2025-01-02",
    cantidad: "3",
    doceLitros: "8",
    sif: "17",
    total: "23.000",
    ef: false,
    tras: true,

  },
  {
    id: 3,
    nombre: "Axel Aranibar",
    fecha: "2025-01-03",
    cantidad: "25",
    doceLitros: "12",
    sif: "17",
    total: "37.000",
    ef: true,
    tras: true,

  },
  {
    id: 4,
    nombre: "Axel Aranibar",
    fecha: "2025-01-04",
    cantidad: "18",
    doceLitros: "9",
    sif: "20",
    total: "27.000",
    ef: false,
    tras: false,

  },
  {
    id: 5,
    nombre: "Axel Aranibar",
    fecha: "2025-01-05",
    cantidad: "22",
    doceLitros: "11",
    sif: "10",
    total: "33.000",
    ef: true,
    tras: false,

  },
  {
    id: 5,
    nombre: "Axel Aranibar",
    fecha: "2025-01-05",
    cantidad: "22",
    doceLitros: "11",
    sif: "10",
    total: "33.000",
    ef: true,
    tras: false,

  },
  {
    id: 5,
    nombre: "Axel Aranibar",
    fecha: "2025-01-05",
    cantidad: "22",
    doceLitros: "11",
    sif: "10",
    total: "33.000",
    ef: true,
    tras: false,

  },
  {
    id: 5,
    nombre: "Axel Aranibar",
    fecha: "2025-01-05",
    cantidad: "22",
    doceLitros: "11",
    sif: "10",
    total: "33.000",
    ef: true,
    tras: false,

  },
  {
    id: 5,
    nombre: "Axel Aranibar",
    fecha: "2025-01-05",
    cantidad: "22",
    doceLitros: "11",
    sif: "10",
    total: "33.000",
    ef: true,
    tras: false,

  },
  {
    id: 5,
    nombre: "Axel Aranibar",
    fecha: "2025-01-05",
    cantidad: "22",
    doceLitros: "11",
    sif: "10",
    total: "33.000",
    ef: true,
    tras: false,

  },
  {
    id: 5,
    nombre: "Axel Aranibar",
    fecha: "2025-01-05",
    cantidad: "22",
    doceLitros: "11",
    sif: "10",
    total: "33.000",
    ef: true,
    tras: false,

  },
  {
    id: 5,
    nombre: "Axel Aranibar",
    fecha: "2025-01-05",
    cantidad: "22",
    doceLitros: "11",
    sif: "10",
    total: "33.000",
    ef: true,
    tras: false,

  },
];

export const EyeIcon = () => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"

    >
      <path
        d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const DeleteIcon = () => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"

    >
      <path
        d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M8.60834 13.75H11.3833"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M7.91669 10.4167H12.0834"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const EditIcon = () => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"

    >
      <path
        d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M2.5 18.3333H17.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
}; export const CheckIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ff4c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
  );
};

export const CameraIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
  );
};
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


export default function CustomEdit() {

  const handleCall = () => {
    window.location.href = `tel:2604278415`;
  };
  const handleWhatsApp = () => {
    window.open(`https://wa.me/2604278415?text=Hola, quiero más información!`, "_blank");
  };

  const { isOpen: isDeleteOpen, onOpen: onOpenDelete, onOpenChange: onDeleteChange } = useDisclosure();
  const { isOpen: isEditOpen, onOpen: onOpenEdit, onOpenChange: onEditChange } = useDisclosure();

  const [isOpen, setIsOpen] = useState(false);

  const handleRowClick = () => {
    
    setIsOpen(true);
  };


  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  
  const [selectedRow,] = useState(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCell = React.useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];

    switch (columnKey) { 
      case "fecha":
        return (
          <User


            name={cellValue}
          >

          </User>
        );
      case "cantidad":
      case "doceLitros":
      case "sif":
      case "total":
        return <p className="text-sm capitalize">{cellValue}</p>;
      case "ef":
      case "tras":
        return cellValue ? <CheckIcon /> : null;
      case "actions":
        return (

          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">

                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (

    <div>

      <NavBar />

      <div className="flex flex-col items-center p-4  relative">
         <h2 className="text-2xl mt-1 font-semibold text-center text-primary">Lunes, <p>Axel Aranibar</p></h2>
        <p>Alem 12012</p>
        <div className="absolute top-2 right-2 flex space-x-2">
       

        <Dropdown>
      <DropdownTrigger>
        <Button variant="light" size="sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg></Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with description" variant="faded">
        <DropdownSection showDivider title="Acción">
         
          <DropdownItem
            key="edit"
            description="Vas a poder editar el cliente"
            onPress={onOpenEdit}
            startContent={<EditDocumentIcon className={iconClasses} />}
          >
            Editar Cliente
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Precausión">
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            description="Eliminar por completo el cliente"
            onPress={onOpenDelete}
            startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
          >
            Eliminar Cliente
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
</div>

<div className="relative"> 
   <div className="flex space-x-4 mt-4">

          <Button variant="ghost"  color="success" onPress={handleCall} className="p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          </Button>
          <Button  variant="ghost"  color="success" onPress={handleWhatsApp} radius="full" className="p-2 left-4 rounded-full ">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
          </Button>
        </div>
</div>

     

      </div>


      <Table className="mt-10">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid}>{column.name}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(user) => (
            <TableRow onClick={() => handleRowClick()} className={`cursor-pointer transition-colors border-2 ${selectedRow === user.id ? "border-blue-500 bg-white" : "border-transparent hover:bg-gray-700  "
              }`} key={user.id}>
              {(columnKey) => (
                <TableCell key={columnKey}>
                  {renderCell(user, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      



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
              <ModalHeader className="flex flex-col gap-1 text-danger">Borrar Cliente</ModalHeader>
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
              <ModalHeader className="flex flex-col gap-1 text-success " >Editar Cliente</ModalHeader>
              <ModalBody>

              <p>¿Estas seguro que quieres editar el día?</p>

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
                <Button color="danger"  variant="bordered" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="success"  onPress={onClose}>
                  Aceptar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>



       {/* Modal View Component */}
       <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalContent>
          <ModalHeader>Detalles del Usuario</ModalHeader>
          <ModalBody>
          <div className="flex justify-between mb-4">
    <div className="flex items-center">
      <span className="text-accent mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-milk"><path d="M8 2h8"/><path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"/><path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"/></svg></span>
      <div>
        <h3 className="font-semibold">20L</h3>
        <p className="text-muted-foreground">Dejaste 3 Unidad</p>
      </div>
    </div>
    <span className="font-bold">$3.2000</span>
    </div>

    <div className="flex justify-between mb-4">
    <div className="flex items-center">
      <span className="text-accent mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-milk"><path d="M8 2h8"/><path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"/><path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"/></svg></span>
      <div>
        <h3 className="font-semibold">12L</h3>
        <p className="text-muted-foreground">Dejaste 1 Unidad</p>
      </div>
    </div>
    <span className="font-bold">$1.6000</span>
    </div>

    <div className="flex justify-between mb-4">
    <div className="flex items-center">
      <span className="text-accent mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-fire-extinguisher"><path d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"/><path d="M9 18h8"/><path d="M18 3h-3"/><path d="M11 3a6 6 0 0 0-6 6v11"/><path d="M5 13h4"/><path d="M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"/></svg></span>
      <div>
        <h3 className="font-semibold">Sifon</h3>
        <p className="text-muted-foreground">Dejaste 20 Unidad</p>
      </div>
    </div>
    <span className="font-bold">$9.8000</span>
    </div>


    <div className= "flex justify-between text-muted-foreground mb-4 font-bold">
      <span>Total</span>
      <span>$20.80</span>
    </div>

    <Textarea  isReadOnly
      
      defaultValue="Aqui van las notas"
      label="Notas"
      labelPlacement="outside"
      placeholder="Aqui van las notas"
      variant="bordered"/>

          </ModalBody>
          <ModalFooter>


            <Button color="danger" onClick={() => setIsOpen(false)} variant="bordered" >
                  Cerrar
                </Button>
                <Button color="success"  >
                  Editar
                </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


      <CreateOrdenUser  />

    </div>

  );
}
