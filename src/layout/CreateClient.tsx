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
  id: string;
};

export default function CreateClient({ id }: MyComponentProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { executeRequest } = useApi();

  // Estados para capturar los valores de los inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  // Estados para errores de validación
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    telephone: false,
    address: false,
    description: false,
  });

  // Expresiones regulares para validar
  const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/; // Solo letras y espacios (soporta tildes)
  const phoneRegex = /^\d+$/; // Solo números

  // Función para validar los campos
  const validateFields = () => {
    const newErrors = {
      firstName: !nameRegex.test(firstName.trim()), // Verifica que sean solo letras
      lastName: !nameRegex.test(lastName.trim()), // Verifica que sean solo letras
      telephone: !phoneRegex.test(telephone), // Solo números
      address: address.trim() === "",
      description: description.trim() === "",
    };

    setErrors(newErrors);

    // Si algún campo es inválido, retorna false
    return !Object.values(newErrors).includes(true);
  };

  const AddClientFacet = async () => {
    if (!validateFields()) {
      toast.error("Por favor, completa todos los campos correctamente.");
      return;
    }

    try {
      const sessionId = localStorage.getItem("sessionId");
      const result = await executeRequest("Backend.Actions.Clients.AddClientFacet", {
        parameters: [
          {
            DayEntityId: id,
            FirstName: firstName,
            LastName: lastName,
            Telephone: telephone,
            Address: address,
            Description: description,
          },
        ],
        sessionId: sessionId,
      });

      const isSuccess = result?.executionResult?.returned?.IsSuccessful;
      const message = result?.executionResult?.returned?.Message;

      if (!isSuccess) {
        toast.error(message || "Error en la base de datos");
      } else {
        toast.success(message);
      }

      console.log(result);
    } catch (err) {
      console.error("API Request Error:", err);
    }

    setTimeout(() => {
      window.location.reload();
    }, 4200);
  };

  // Función para limpiar los campos al cerrar el modal
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setTelephone("");
    setAddress("");
    setDescription("");
    setErrors({
      firstName: false,
      lastName: false,
      telephone: false,
      address: false,
      description: false,
    });
  };

  return (
    <>
      <Button className="mt-5" onPress={onOpen} color="primary" size="lg" fullWidth>
        Crear Cliente
      </Button>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={(open) => {
          if (!open) resetForm(); // Resetea los campos al cerrar
          onOpenChange();
        }}
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
                  variant="bordered"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  isInvalid={errors.firstName}
                  errorMessage={errors.firstName ? "El nombre debe contener solo letras" : ""}
                />
                <Input
                  size="lg"
                  placeholder="Escribe Apellido"
                  label="Apellido"
                  type="text"
                  variant="bordered"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  isInvalid={errors.lastName}
                  errorMessage={errors.lastName ? "El apellido debe contener solo letras" : ""}
                />
                <Input
                  size="lg"
                  placeholder="Escribe Teléfono"
                  label="Teléfono"
                  type="tel"
                  variant="bordered"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  isInvalid={errors.telephone}
                  errorMessage={errors.telephone ? "El teléfono debe contener solo números" : ""}
                />
                <Input
                  size="lg"
                  placeholder="Escribe la calle del cliente"
                  label="Ubicación"
                  type="text"
                  variant="bordered"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  isInvalid={errors.address}
                  errorMessage={errors.address ? "La ubicación es obligatoria" : ""}
                />
                <Input
                  size="lg"
                  placeholder="Escribe una pequeña descripción"
                  label="Descripción"
                  type="text"
                  variant="bordered"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  isInvalid={errors.description}
                  errorMessage={errors.description ? "La descripción es obligatoria" : ""}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    resetForm(); // Limpia los campos
                    onClose(); // Cierra el modal
                  }}
                >
                  Cerrar
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    AddClientFacet();
                    onClose();
                    resetForm(); // Limpia los campos después de enviar
                  }}
                >
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
