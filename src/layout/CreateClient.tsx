import { Input, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { useApi } from "../config/useUnisave";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function CreateClientView() {
const { entity, entityId } = useParams();
   console.log(`${entity}/${entityId}`)
  const { executeRequest } = useApi();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    telephone: false,
    address: false,
    description: false,
  });

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

  const AddClientFacet = async () => {
    try {
      const sessionId = localStorage.getItem("sessionId");
      console.log(`${entity}/${entityId}`)
      const result = await executeRequest("Backend.Actions.Clients.AddClientFacet", {
        parameters: [
          {
            DayEntityId: `${entity}/${entityId}`,
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
        resetForm();
        setTimeout(() => {
         // 👉 Volver programáticamente con los datos guardados
const savedState = sessionStorage.getItem("viewListUsersState");
if (savedState) {
  const { id, date, route} = JSON.parse(savedState);
  navigate("/view-list-users", {
    state: { id, date, route},
  });
  sessionStorage.removeItem("viewListUsersState");
} else {
  navigate("/view-list-users");
}

        }, 2000);
      }

      console.log(result);
    } catch (err) {
      console.error("API Request Error:", err);
    }
  };
   const routerBack = () => {
            // 👉 Volver programáticamente con los datos guardados
const savedState = sessionStorage.getItem("viewListUsersState");
if (savedState) {
  const { id, date, route} = JSON.parse(savedState);
  navigate("/view-list-users", {
    state: { id, date, route},
  });
  sessionStorage.removeItem("viewListUsersState");
} else {
  navigate("/view-list-users");
}
  };

  return (
    
    <div className="max-w-xl mx-auto mt-1 p-6  rounded-xl ">
      
               

                    <div className="flex mt-1">
                       <Button  onPress={routerBack}  variant="ghost" size="sm">
                  <ArrowLeft className="h-6 w-6" />
                </Button>
                <div className="flex justify-between items-center mb-6 ml-3">
<h1 className="text-2xl font-semibold mb-6">Crear Cliente Nuevo </h1>   
                </div>
                         
  </div>
           


      <div className="space-y-4">
        <Input
          size="sm"
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
          size="sm"
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
          size="sm"
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
          size="sm"
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
          size="sm"
          placeholder="Escribe una pequeña descripción"
          label="Descripción"
          type="text"
          variant="bordered"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          isInvalid={errors.description}
          errorMessage={errors.description ? "La descripción es obligatoria" : ""}
        />
        
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <Button color="danger" variant="light" onPress={resetForm}>
          Cancelar
        </Button>
        <Button color="primary" onPress={AddClientFacet}>
          Crear Cliente
        </Button>
      </div>
    </div>
  );
}
