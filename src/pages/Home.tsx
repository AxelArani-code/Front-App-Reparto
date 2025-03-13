import { Button, Card, CardBody, CardHeader, DateInput, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader,  useDisclosure, cn,  Calendar, Skeleton, } from "@heroui/react";
import NavBar from "../components/NavBar";
import { CalendarDate,   } from "@internationalized/date";
import { Link, useNavigate } from "react-router-dom";
import { SVGProps, useEffect, useState, } from "react";
import { JSX } from "react/jsx-runtime";
import CreateDay from "../layout/CreateDay";
import { useApi } from "../config/useUnisave";
import { DayItem } from "../interface/DayItem";


import toast from "react-hot-toast";


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

  const { executeRequest, } = useApi();
  const sessionId = localStorage.getItem('sessionId');
  const [schedule, setSchedule] = useState<DayItem[]>([]); // Manejar el estado del schedule
  const [isLoaded, setIsLoaded] = useState(false); // Estado para Skeleton

       // Obtener la fecha actual
       const today = new Date();
       const initialDate = new CalendarDate(
         today.getFullYear(),
         today.getMonth() + 1,
         today.getDate()
       );
       // Estados para la fecha seleccionada y el recorrido
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [route, setRoute] = useState("");
  const formatDate = (date: CalendarDate) => {
    const day = String(date.day).padStart(2, '0');
    const month = String(date.month).padStart(2, '0');
    const year = date.year;
    return `${day}/${month}/${year}`;
};


  
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
  // Asegurar que el tema se aplica correctamente en el cliente
  useEffect(() => {
    // Hacer una solicitud al cargar el componente
    const fetchData = async () => {
      try {
        const result = await executeRequest('Backend.Actions.Days.GetDaysFacet', {
          sessionId: sessionId
        });
         // Check if returned is null
       
         if (!result?.executionResult?.returned || result.executionResult.returned.length === 0) {
          setSchedule([]);
     
        } else {
          setSchedule(result.executionResult.returned);
     
        }
        //setSchedule(result?.executionResult?.returned)
     
        console.log(result)
      } catch (err) {
        console.error('API Request Error:', err);
      }
      setTimeout(() => {
        setIsLoaded(true); // Datos cargados, ocultar Skeleton
    }, 3000);
    };
    fetchData();

  }, []);


  //Elimnar Peticion 
  const [selectedId, setSelectedId] = useState<string | null>(null);
  // Make sure to clear the selectedDayId after deletion if needed:
  const handleDelete = async () => {
  
      try {
        // Obtener sessionId desde localStorage
        const sessionId = localStorage.getItem('sessionId');
        console.log(selectedId)
        const result = await executeRequest('Backend.Actions.Days.DeleteDayFacet', {
          parameters: [{ Id: selectedId }],
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
  //Edit Facet 
  const handleEdit = async () => {
    if (!route.trim() || !isNaN(Number(route))) {
      toast.error("Por favor, ingrese un texto válido.");
      return; // Evita ejecutar la petición si la entrada es inválida
    }
    try {
      // Obtener sessionId desde localStorage
      const sessionId = localStorage.getItem('sessionId');
      console.log(selectedId)
      const formattedDate = formatDate(selectedDate);
      const result = await executeRequest('Backend.Actions.Days.UpdateDayFacet', {
        parameters: [{ 
          Id: selectedId ,
          Date: formattedDate,
          Route: route
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
    <div className="container  mx-auto p-4 ">
      <NavBar />


       
      
      {!isLoaded ? (
        
          Array.from({ length: schedule?.length || 1 }).map((_, index) => (
            <Card key={index} shadow="md" className="w-full mt-5">
              <CardHeader className="gap-4">
                <Skeleton className="w-3 h-10 bg-primary rounded" />
                <div>
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-24 mt-1" />
                </div>
              </CardHeader>
              <CardBody>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </CardBody>
            </Card>
          ))
          
        ) : schedule?.length===0?(
          <div className=" ">
           <div className="flex flex-col items-center justify-center  bg-background p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-list"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></svg>
          <h1 className="text-3xl font-bold text-foreground">AppRepart-Beta</h1>
          <Card className="mt-5">
            <CardHeader>
              <div className="flex items-start mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-tabs"><path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M15 2v20" /><path d="M15 7h5" /><path d="M15 12h5" /><path d="M15 17h5" /></svg>
              </div>
              <div className="flex flex-col gap-1">

                <p className="text-medium">Registro de pedido</p>
                <p className="text-tiny text-default-400">
                  Es es espesificamente para repartidores
                </p>
              </div>

            </CardHeader>
          </Card>

          <Card className="mt-5">
            <CardHeader>
              <div className="flex items-start mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer"><line x1="10" x2="14" y1="2" y2="2" /><line x1="12" x2="15" y1="14" y2="11" /><circle cx="12" cy="14" r="8" /></svg>
              </div>
              <div className="flex flex-col gap-1">

                <p className="text-medium">Menos tiempo</p>
                <p className="text-tiny text-default-400">
                  Lleva los registro con una facilidad mas rapida asi, haces los recorrido mas factible
                </p>
              </div>

            </CardHeader>

          </Card>

          <Card className="mt-5">
            <CardHeader>
              <div className="flex items-start mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-checks"><path d="m3 17 2 2 4-4" /><path d="m3 7 2 2 4-4" /><path d="M13 6h8" /><path d="M13 12h8" /><path d="M13 18h8" /></svg>
              </div>
              <div className="flex flex-col gap-1">

                <p className="text-medium">Oraniza Cliente </p>
                <p className="text-tiny text-default-400">
                  Vas a tener un orden de tus cliente los que debe o los que estan al día
                </p>
              </div>

            </CardHeader>

          </Card>

        </div>
       

        </div>
      
        ):(
          schedule?.map(({ _id, Date: dateStr, Route, CreatedAt }) => (
            <Card key={_id} shadow="md" className="w-full mt-5" onPress={() => navigate("/scheduleCard")}>
              <Link to="/view-list-users" state={{ id: _id, date: dateStr, route: Route, createdAt: CreatedAt }}>
                <CardHeader className="gap-4">
                  <div className="w-2 h-10 bg-primary rounded" />
                  <div>
                    <h2 className="text-lg font-bold text-primary">
                      {`Día - ${new Date(new Date(dateStr).setDate(new Date(dateStr).getDate() + 1))
                        .toLocaleDateString("es-ES", { weekday: "long", timeZone: "America/Argentina/Buenos_Aires" })
                        .charAt(0)
                        .toUpperCase() + new Date(new Date(dateStr).setDate(new Date(dateStr).getDate() + 1))
                        .toLocaleDateString("es-ES", { weekday: "long", timeZone: "America/Argentina/Buenos_Aires" })
                        .slice(1)}`}
                    </h2>
                    <p className="text-default-500">{`Día Creación - ${new Date(CreatedAt).toLocaleDateString()}`}</p>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-default-500">
                    Recorrido - <span className="font-semibold text-primary">{Route}</span>
                  </p>
            
                </CardBody>
              </Link>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered">Modificación</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Dropdown menu with description" variant="faded">
                  <DropdownSection showDivider title="Acción">
                    <DropdownItem 
                    onPress={() => {
                      setSelectedId(_id);
                      onOpenEdit();      // Abre el modal
                    }}
                    startContent={<EditDocumentIcon className={iconClasses} />}
                    key="edit" description="Vas a poder editar el reparto">
                      Editar Reparto
                    </DropdownItem>
                  </DropdownSection>
                  <DropdownSection title="Precaución">
                    <DropdownItem 
                    onPress={() => {
                      setSelectedId(_id);
                      onOpenDelete();      // Abre el modal
                    }}
                    startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
                    key="delete" className="text-danger" color="danger" description="Eliminarás los clientes de ese día">
                      Eliminar Reparto
                    </DropdownItem>
                  </DropdownSection>
                </DropdownMenu>
              </Dropdown>
            </Card>
            
          )
        
        )
      
        )
       
        
        }
       
     


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
              <ModalHeader className="flex flex-col gap-1 text-danger">Borrar Día De Reparto</ModalHeader>
              <ModalBody>
                <p>¿Estas seguro que quieres borrar el día?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" variant="bordered" onPress={handleDelete}>
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
              <ModalHeader className="flex flex-col gap-1 text-success">Editar Dia De Reparto</ModalHeader>
              <ModalBody className="items-center">
                <p>¿Estas seguro que quieres editar el día?</p>
                <Calendar aria-label="Date (Uncontrolled)" 
                value={selectedDate}
                onChange={setSelectedDate} 
                />
                <DateInput

                  isDisabled
                  value={selectedDate}
            
                  label={"Dia Por Defecto"}
                  placeholderValue={new CalendarDate(1995, 11, 6)}
                />
                <Input
                  size="lg"

                  placeholder="Modificar El Recorrido"
                  label="Recorrrido"
                  errorMessage="Por favor, ingrese un texto válido"
                  isInvalid={!isNaN(Number(route)) && route.trim() !== ""} // Se invalida si es un número
                  type="text"
                  pattern="string"
                  variant="bordered"
                  value={route}
                  onChange={(e) => setRoute(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" variant="bordered"  disabled={!route.trim() || !isNaN(Number(route))} onPress={handleEdit}>
                  Aceptar
                </Button>
              </ModalFooter>  
            </>
          )}
        </ModalContent>
      </Modal>

<CreateDay/>
    </div>
  )
}
