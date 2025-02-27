import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,

  Input,

} from "@heroui/react";


import toast from "react-hot-toast";
import { useApi } from "../config/useUnisave";
import { useState } from "react";


type MyComponentProps = {
  id: string; // O usa 'number' si el ID es numérico
};


export default function CreateClient({ id }: MyComponentProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
const { executeRequest, } = useApi();

  // Estados para capturar los valores de los inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");




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




  const AddClientFacet = async () => {
  
    try {
      // Obtener sessionId desde localStorage
      const sessionId = localStorage.getItem('sessionId');
      const result = await executeRequest('Backend.Actions.Clients.AddClientFacet', {
        parameters: [{ 
          DayEntityId: id,
          FirstName: firstName,
          LastName: lastName,
          Telephone: telephone,
          Address: address,
          Description: description
          
        }],
        sessionId: sessionId
      });
      const isSuccess = result?.executionResult?.returned?.IsSuccessful;
      const message = result?.executionResult?.returned?.Message;

      if (!isSuccess) {
        toast.promise(
          saveSettings(message),
          {
            loading: 'Cargando...',
            error: <b>{message || 'Error Database'}</b>,
          }
        );
      } else {
        toast.promise(
          saveSettings(message),
          {
            loading: 'Cargando...',
            success: <b>{message}</b>,

          }
        );
      }

      console.log(result)
    } catch (err) {
      console.error('API Request Error:', err);
    }
    setTimeout(() => {
      window.location.reload();
  }, 4200);
  

};

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

                  placeholder="Escribe Nombre"
                  label="Nombre"
                  type="text"
                  pattern="string"
                  variant="bordered"
                  value={firstName} onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                  size="lg"

                  placeholder="Escribe Apellido"
                  label="Apellido"
                  type="text"
                  pattern="string"
                  variant="bordered"
                  value={lastName} onChange={(e) => setLastName(e.target.value)}
                />
                <Input
                  size="lg"

                  placeholder="Escribe Telefono"
                  label="Telefonó"
                  type="tel"
                  pattern="string"
                  variant="bordered"
                  value={telephone} onChange={(e) => setTelephone(e.target.value)} 
                />
                <Input
                  size="lg"

                  placeholder="Escribe la calle del cliente"
                  label="Ubicación"
                  type="tel"
                  pattern="string"
                  variant="bordered"
                  value={address} onChange={(e) => setAddress(e.target.value)}
                />
                <Input
                  size="lg"

                  placeholder="Escribe un pequeño de talle "
                  label="Descripción"
                  type="tel"
                  pattern="string"
                  variant="bordered"
                  value={description} onChange={(e) => setDescription(e.target.value)}
                />


               


              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary"onPress={() => { AddClientFacet(); onClose(); }}>
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
