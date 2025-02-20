import { ArrowLeft, } from "lucide-react";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import NavBar from "../components/NavBar";

import { Link } from "react-router-dom";

export default function EditProfile() { 
  const { isOpen: isSessionOpen, onOpenChange: onDeleteChange } = useDisclosure();

 

  return (
    <div className="min-h-screen bg-background ">
      <NavBar />
      <div className="px-4 py-6 ">
        <Link to="/profile">
        <Button variant="ghost" size="md" className="mb-6">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        </Link>
        

        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>

          </div>
          <h1 className="mt-4 text-xl font-semibold">User Name</h1>
        </div>

        <nav className="space-y-6 ">
        <Input
      isReadOnly
      className="mt-4"
      defaultValue="junior@heroui.com"
      label="Email"
      type="email"
      variant="bordered"
    />
    <Input
      isReadOnly
      className="mt-4"
      defaultValue="Nombre Apellido"
      label="Nombre Apellido"
      type="text"
      variant="bordered"
    />
    <Input
      isReadOnly
      className="mt-4"
      defaultValue="Nombre Apellido"
      label="Nombre Apellido"
      type="text"
      variant="bordered"
    />
    <Input
      isReadOnly
      className="mt-4 "
      defaultValue="Constraseña"
      label="Constraseña"
      type="password"
      variant="bordered"
    />
        </nav>
      </div>




       {/* Modal Eliminar */}
       <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isSessionOpen}
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

     
    </div>
  );
}
