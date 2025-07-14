/* eslint-disable @typescript-eslint/no-explicit-any */
import { SVGProps, useEffect, useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Skeleton,
} from "@heroui/react";
import NavBar from "./NavBar";
import { JSX } from "react/jsx-runtime";
import CreateClient from "../layout/CreateClient";
import {  useLocation, useNavigate } from "react-router-dom";
import { useApi } from "../config/useUnisave";
import { ClientItem } from "../interface/ClientItem";
import { ArrowLeft } from "lucide-react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export const SearchIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
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
export const CheckIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};
export default function ListUser() {
  const location = useLocation();
  const { id, date, route } = location.state || {};
  const navigate = useNavigate();
  const [isDragEnabled, setIsDragEnabled] = useState(false);
  const { executeRequest } = useApi();
  const [client, setClient] = useState<ClientItem[]>([]);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para la búsqueda
  const sessionId = localStorage.getItem("sessionId");
  const [isLoaded, setIsLoaded] = useState(false);

  const getStorageKey = (id: string) => `CLIENT_ORDER_${id}`;

  const fetchClients = async () => {
    if (!id) return;
    const hasVisited = localStorage.getItem("hasVisited-ListUser");
    const storageKey = getStorageKey(id);
   //let storedClients: ClientItem[] = [];
   const storedClients: ClientItem[] = JSON.parse(localStorage.getItem(storageKey) || "[]");



    try {
      const result = await executeRequest(
        "Backend.Actions.Clients.GetDayClientsFacet",
        {
          parameters: [{ Id: id }],
          sessionId: sessionId,
        }
      );

      if (result?.executionResult?.returned) {
        const apiClients = result.executionResult.returned;

        const updatedClients = storedClients.filter((stored) =>
          apiClients.some((api: { _id: string }) => api._id === stored._id)
        );

        apiClients.forEach((api: any) => {
          if (!updatedClients.find((stored) => stored._id === api._id)) {
            updatedClients.push(api);
          }
        });

        setClient(updatedClients);
               // Guardar directamente la respuesta de la API en localStorage
               localStorage.setItem(storageKey, JSON.stringify(apiClients));
      //  saveScheduleToStorage(id, updatedClients);
        setTimeout(() => {
          setIsLoaded(true);
          if (!hasVisited) {
            localStorage.setItem("hasVisited-ListUser", "true");
              const driverObj = driver({
            showProgress: true,
            steps: [
              {
                element: "#create-cliente",
                popover: {
                  title: "Crear Clientes",
                  description:
                    "Ingresar los datos del cliente para el día del reparto.",
                },
              },
    
              {
                element: "#view-client",
                popover: {
                  title: "Clientes",
                  description:
                    "Podras ver todo los cliente y su dirección para que luego anotes los pedidos.  ",
                },
              },
              {
                element: "#button-organizar",
                popover: {
                  title: "Ordena Los Clientes",
                  description:
                    "Puedes ordenar cada cliente a tu gusto para que tenga mas comodidad.",
                },
              },
              {
                element: "#button-busqueda",
                popover: {
                  title: "Busqueda Cliente",
                  description:
                    "Puedes escribir la palabra de un cliente para poder encontrarlo mas rapido.",
                },
              },
            ],
          });
          driverObj.drive();
          }
        
        }, 3000);
      }
    } catch (err) {
      console.error("Error al obtener clientes:", err);
    }
  };

 // Ejecutar fetchClients cada vez que se entra a la vista
 useEffect(() => {
  if (id) {
    fetchClients();
  }
}, [id, location.key]); // Se ejecuta cada vez que la vista cambia

  // Detectar cambios en `client` y guardar automáticamente en localStorage
  /*
    useEffect(() => {
    if (id && client.length > 0) {
      localStorage.setItem(getStorageKey(id), JSON.stringify(client));
    }
  }, [client]);

  */

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = client.findIndex((item) => item._id === active.id);
    const newIndex = client.findIndex((item) => item._id === over.id);

    const updatedClients = [...client];
    updatedClients.splice(newIndex, 0, updatedClients.splice(oldIndex, 1)[0]);

    setClient(updatedClients);
  };

  const filteredClients = client.filter((c) =>
    `${c.FirstName} ${c.LastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const routerBack = () => {
    navigate("/");
  };
  return (
    <div>
      <NavBar />
      <div className="px-4 py-1 ">
   
          <Button onPress={routerBack} variant="ghost" size="md">
            <ArrowLeft className="h-6 w-6" />
          </Button>
     
        <div className="flex flex-col items-center p-4 relative">
          <h2 className="text-2xl mt-10 font-semibold text-center text-primary">
            {`Día - ${
              new Date(new Date(date).setDate(new Date(date).getDate() + 1))
                .toLocaleDateString("es-ES", {
                  weekday: "long",
                  timeZone: "America/Argentina/Buenos_Aires",
                })
                .charAt(0)
                .toUpperCase() +
              new Date(new Date(date).setDate(new Date(date).getDate() + 1))
                .toLocaleDateString("es-ES", {
                  weekday: "long",
                  timeZone: "America/Argentina/Buenos_Aires",
                })
                .slice(1)
            }`}
          </h2>
          <p className="mt-2 text-default-500">
            Recorrido -{" "}
            <span className="font-semibold text-primary">
              {decodeURIComponent(route)}{" "}
            </span>
          </p>
          <div className="absolute top-6 right-2 flex space-x-2">
            <Button id="button-organizar"
              size="sm"
              onPress={() => setIsDragEnabled(!isDragEnabled)}
              className="mb-4"
            >
              {isDragEnabled ? "Listo..." : "Organizar"}
            </Button>
          </div>
          {/* Campo de búsqueda */}
        
          <Input
          id="button-busqueda"
            isClearable
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Maneja la entrada
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "hover:bg-default-200/70",
              ],
            }}
            label="Buscar"
            placeholder="Escribe el cliente..."
            radius="lg"
            startContent={
              <SearchIcon className="text-slate-400 flex-shrink-0" />
            }
          />
        </div>
      </div>
      <p id="view-client" className="ml-5 font-semibold text-primary">{`Clientes del ${
              new Date(new Date(date).setDate(new Date(date).getDate() + 1))
                .toLocaleDateString("es-ES", {
                  weekday: "long",
                  timeZone: "America/Argentina/Buenos_Aires",
                })
                .charAt(0)
                .toUpperCase() +
              new Date(new Date(date).setDate(new Date(date).getDate() + 1))
                .toLocaleDateString("es-ES", {
                  weekday: "long",
                  timeZone: "America/Argentina/Buenos_Aires",
                })
                .slice(1)
            }`}</p>

            <div className="mx-4 ">
    {/* Renderizado de los clientes filtrados */}
      {!isLoaded ? (
        Array.from({ length: client.length || 1 }).map((_, index) => (
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
      ) : filteredClients.length === 0 ? (
       <Alert
        color="warning"
        description="No se encuentra clientes en este día"
        
        title="Alerta"
        variant="faded"
      />
      ) : (
        <DndContext 
      
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={filteredClients.map((c) => c._id)}
            strategy={verticalListSortingStrategy}
          >
            <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClients.map((item, index) => (
                <SortableItem
                  key={item._id || index}
                  id={item._id}
                  Date={date}
                  Owner={item.Owner}
                  Day={item.Day || "Día no disponible"}
                  FirstName={item.FirstName || "Nombre no disponible"}
                  LastName={item.LastName || "Apellido no disponible"}
                  Telephone={item.Telephone || "Teléfono no disponible"}
                  Address={item.Address || "Dirección no disponible"}
                  Description={item.Description || "Descripción no disponible"}
                  AddressExtra={item.AddressExtra || ""}
                  isDragEnabled={isDragEnabled}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
<div id="create-cliente">
     <CreateClient id={id} />
</div>
   
            </div>

  
    </div>
  );
}
