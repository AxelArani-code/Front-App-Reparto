import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";

export default function CreateUserAdmin() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
    <Button className="mt-5" onPress={onOpen} color="primary" size="lg" fullWidth>
      Crear Nuevo Repartidor
    </Button>
    <Modal
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      isOpen={isOpen}
      onOpenChange={() => {
   
        onOpenChange();
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Nuevo Repartidor</ModalHeader>
            <ModalBody>
            <Input
                size="lg"
                placeholder="Escribe UserName"
                label="UserName"
                type="text"
                variant="bordered"
                
              />
              <Input
                size="lg"
                placeholder="Escribe Nombre"
                label="Nombre"
                type="text"
                variant="bordered"
                
              />
              <Input
                size="lg"
                placeholder="Escribe Apellido"
                label="Apellido"
                type="text"
                variant="bordered"
              
              />
              <Input
                size="lg"
                placeholder="Escribe Email"
                label="Email"
                type="mail"
                variant="bordered"
               
              />
              <Input
                size="lg"
                placeholder="Escribe DNI"
                label="DNI"
                type="text"
                variant="bordered"
               
              />
              <Input
                size="lg"
                placeholder="Escribe Contraseña"
                label="Contraseña"
                type="text"
                variant="bordered"
               
              />
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={onClose}
              >
                Cerrar
              </Button>
              <Button
                color="primary"
               
              >
                Crear Cliente
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  </>
  )
}
