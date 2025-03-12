import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,

  User,

  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,

} from "@heroui/react";
import NavBar from "../components/NavBar";
import { useApi } from "../config/useUnisave";
import toast from "react-hot-toast";
import { UserAdminItem } from "../interface/UserAdminItem";
import { JSX } from "react/jsx-runtime";




export const PlusIcon = ({size = 24, width= 24, height= 24, ...props}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M6 12h12" />
        <path d="M12 18V6" />
      </g>
    </svg>
  );
};

export const VerticalDotsIcon = ({size = 24, width= 24, height= 24, ...props}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SearchIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
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
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export const ChevronDownIcon = ({strokeWidth = 1.5, ...otherProps}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...otherProps}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};



export default function App() {
  

  const sessionId = localStorage.getItem("sessionId");
    const { executeRequest } = useApi();
      // Estados para capturar los valores de los inputs
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [userName, setUserName] = useState("");
      const [dni, setDNI] = useState("");

        const [users, setUsers] = useState<UserAdminItem[]>([]); // Estado para almacenar usuarios
const [selectedRow, setSelectedRow] = useState<UserAdminItem | null>(null);
const [isOpenView, setIsOpenView] = useState(false);

        const { isOpen, onOpen, onOpenChange } = useDisclosure();
        // Estados para errores de validación
        const [errors, setErrors] = useState({
          userName: false,
          firstName: false,
          lastName: false,
          email: false,
          dni: false,
          password: false,
        });
        
  // Función para limpiar los campos al cerrar el modal
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setDNI("");
    setErrors({
      userName: false,
      firstName: false,
      lastName: false,
      email: false,
      dni: false,
      password: false,
    });
  };
      



  //FACET

  // Asegurar que el tema se aplica correctamente en el cliente
  useEffect(() => {
    // Hacer una solicitud al cargar el componente
    const fetchData = async () => {
      try {
        const result = await executeRequest('Backend.Actions.Admin.Users.GetUsersFacet', {
          sessionId: sessionId
        });
          // Verifica si los datos existen y actualiza el estado
          if (result?.executionResult?.returned.Users) {
            setUsers(result.executionResult.returned.Users);
          }
        //setSchedule(result?.executionResult?.returned)
     
        console.log(result)
      } catch (err) {
        console.error('API Request Error:', err);
      }

    };
    fetchData();

  }, []);


  const AddUserFacet = async () => {

    try {
      
      const result = await executeRequest("Backend.Actions.Admin.Users.AddUserFacet", {
        parameters: [
          {
          Username:userName,
            Email:email,
            FirstName:firstName,
            LastName:lastName,
            DNI:dni,
             Password:password
    
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

  const handleRowClick = (item: UserAdminItem) => {
    setSelectedRow(item);
    setIsOpenView(true);
  };



  return (
    <div>
         <NavBar/>

         <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Escribir...."
            startContent={<SearchIcon />}
     
   
          />
          <div className="flex gap-3">
           
          
            <Button color="primary"  onPress={onOpen} endContent={<PlusIcon />}>
              Añadir Cliente 
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {users.length} users</span>
        
        </div>
      </div>

   <Table className="mt-10">
        <TableHeader>
          <TableColumn>Usuario</TableColumn>
          <TableColumn>Administrador</TableColumn>

        </TableHeader>
        <TableBody>
          {users.length > 0 ? (
            users.map((item) => (
              <TableRow
                key={item._id}
                onClick={() => handleRowClick(item)}
              >
           
               
                <TableCell><User
      avatarProps={{
        src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXIiPjxwYXRoIGQ9Ik0xOSAyMXYtMmE0IDQgMCAwIDAtNC00SDlhNCA0IDAgMCAwLTQgNHYyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+PC9zdmc+",
      }}
      description={item.Email}
      name={item.FirstName+" "+item.LastName}
    /></TableCell>
      
      <TableCell>
       
        {item.IsAdmin ?(
           <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
        ):(
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-octagon-x"><path d="m15 9-6 6"/><path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"/><path d="m9 9 6 6"/></svg>
        )}
      
      </TableCell>
     
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell children={undefined}>
                {/** Celda vacía para alinear con la cantidad de columnas */}
              </TableCell>
           
              <TableCell className="text-center py-4">
                No tiene ninguna entrega
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>



 {/* Modal View Component */}
      <Modal isOpen={isOpenView} onClose={() => setIsOpenView(false)}>
        <ModalContent>
          <ModalHeader>Detalles del Usuario</ModalHeader>
          <ModalBody>
            {selectedRow && (
              <div>
                  <div className="flex justify-between mb-4">
                  <div className="flex items-center">
                   
                    <div>
                      <h3 className="font-semibold">
                        <strong>{`UserName:  ${selectedRow.Username}`} </strong>
                      </h3>
                      
                    </div>
                  </div>
                  <span className="font-bold">
                  
                  </span>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="flex items-center">
                   
                    <div>
                      <h3 className="font-semibold">
                        <strong>{`Nombre Apellido:  ${selectedRow.FirstName+ selectedRow.LastName}`} </strong>
                      </h3>
                      
                    </div>
                  </div>
                  <span className="font-bold">
                  
                  </span>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="flex items-center">
                   
                    <div>
                      <h3 className="font-semibold">
                        <strong>{`Email: ${selectedRow.Email}`}</strong>
                      </h3>
                     
                    </div>
                  </div>
                  <span className="font-bold"></span>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="flex items-center">
                   
                    <div>
                      <h3 className="font-semibold">
                        <strong>Admin</strong>
                      </h3>
                      <p className="text-muted-foreground">
                      {selectedRow.IsAdmin ?(
           <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
        ):(
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-octagon-x"><path d="m15 9-6 6"/><path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"/><path d="m9 9 6 6"/></svg>
        )}
      
                      </p>
                    </div>
                  </div>
                  <span className="font-bold"></span>
                </div>
                
               
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
          
              variant="bordered"
            >
              Borrar
            </Button>
            <Button color="success" >Editar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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

                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                isInvalid={errors.userName}
                errorMessage={errors.userName ? "Escribir el UserName" : ""}
                
              />
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
                placeholder="Escribe Email"
                label="Email"
                type="mail"
                variant="bordered"

                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={errors.email}
                errorMessage={errors.email ? "Escribir el email" : ""}
               
              />
              <Input
                size="lg"
                placeholder="Escribe DNI"
                label="DNI"
                type="text"
                variant="bordered"

                value={dni}
                onChange={(e) => setDNI(e.target.value)}
                isInvalid={errors.dni}
                errorMessage={errors.dni ? "Escribir el DNI" : ""}
               
              />
              <Input
                size="lg"
                placeholder="Escribe Contraseña"
                label="Contraseña"
                type="text"
                variant="bordered"

                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={errors.password}
                errorMessage={errors.password ? "Escribir el DNI" : ""}
               
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
                onPress={() => {
                  AddUserFacet()
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
    </div>
 
  );
}

