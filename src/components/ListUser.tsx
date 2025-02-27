/* eslint-disable @typescript-eslint/no-explicit-any */
import { SVGProps, useEffect, useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import { Button, Input, } from "@heroui/react";
import NavBar from "./NavBar";
import { JSX } from "react/jsx-runtime";
import CreateClient from "../layout/CreateClient";
import { useLocation,  } from "react-router-dom";
import { useApi } from "../config/useUnisave";
import { ClientItem } from "../interface/ClientItem";

export const SearchIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
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
export const CheckIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
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
  const { id, date, route,  } = location.state || {}; // Obtener datos


  const [isDragEnabled, setIsDragEnabled] = useState(false); // Estado para activar/desactivar drag & drop

  const { executeRequest, } = useApi();
      const [client, setClient] = useState<ClientItem[]>([]); // Manejar el estado del schedule
      

  const sessionId = localStorage.getItem('sessionId');

  const getStorageKey = (id: string) => `CLIENT_ORDER_${id}`;
  const fetchClients = async (id: string) => {
    if (!id) return;
  
    const storageKey = getStorageKey(id);
    let storedClients: ClientItem[] = [];
  
    // Recuperar el orden guardado en localStorage si existe
    const savedOrder = localStorage.getItem(storageKey);
    if (savedOrder) {
      storedClients = JSON.parse(savedOrder);
    }
  
    try {
      // Llamar siempre a la API
      const result = await executeRequest("Backend.Actions.Clients.GetDayClientsFacet", {
        parameters: [{ Id: id }],
        sessionId: sessionId,
      });
  
      if (result?.executionResult?.returned) {
        const apiClients = result.executionResult.returned;
  
        // 🔹 Filtrar solo los clientes que existen en la API
        const updatedClients = storedClients.filter((stored) =>
          apiClients.some((api: { _id: string; }) => api._id === stored._id)
        );
  
        // 🔹 Agregar nuevos clientes que no estaban en localStorage
        apiClients.forEach((api: any) => {
          if (!updatedClients.find((stored) => stored._id === api._id)) {
            updatedClients.push(api);
          }
        });
  
        setClient(updatedClients);
        saveScheduleToStorage(id, updatedClients); // Guardamos en localStorage
      }
    } catch (err) {
      console.error("Error al obtener clientes:", err);
    }
  };
  
  useEffect(() => {
    if (id) {
      fetchClients(id);
    }
  }, [id]); // Se ejecuta cada vez que `id` cambia
  
  
// Función para manejar la activación del drag & drop y almacenar el orden
const saveScheduleToStorage = (id: string, newClient: typeof client) => {
  const storageKey = getStorageKey(id);
  localStorage.setItem(storageKey, JSON.stringify(newClient));
};



  // Función para manejar el cambio de orden
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
  
    const oldIndex = client.findIndex((item) => item._id === active.id);
    const newIndex = client.findIndex((item) => item._id === over.id);
  
    const updatedClients = [...client];
    updatedClients.splice(newIndex, 0, updatedClients.splice(oldIndex, 1)[0]);
  
    setClient(updatedClients);
    saveScheduleToStorage(id, updatedClients);
  };
  

  return (
    <div className="">
      <NavBar />
      <div className="flex flex-col items-center p-4  relative">
        <h2 className="text-2xl mt-10 font-semibold text-center text-primary"> {`Dia - ${new Date(new Date(date).setDate(new Date(date).getDate() + 1))
                      .toLocaleDateString('es-ES', { weekday: 'long', timeZone: 'America/Argentina/Buenos_Aires' })
                      .charAt(0).toUpperCase() + new Date(new Date(date).setDate(new Date(date).getDate() + 1))
                        .toLocaleDateString('es-ES', { weekday: 'long', timeZone: 'America/Argentina/Buenos_Aires' })
                        .slice(1)}`}</h2>
        <p className="mt-2 text-default-500">
          Recorrido - <span className="font-semibold text-primary">{decodeURIComponent(route)} </span>
          <p>{id}</p>
        </p>
        <div className="absolute top-6 right-2 flex space-x-2">

        <Button size="sm" onPress={() => setIsDragEnabled(!isDragEnabled)} className="mb-4">
        {isDragEnabled ? "Listo..." : "Organizar"}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-notebook-pen"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>
      </Button>

        </div>
        <div className="mt-5">

        </div>
        <Input
          isClearable
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
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          label="Buscar"
          placeholder="Escribe el cliente..."
          radius="lg"
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </div>
      {/* Botón para activar/desactivar el drag & drop */}

      {client.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No tienes clientes agregados</p>
      ) : (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>

          <SortableContext items={client.map((c) => c._id)}  strategy={verticalListSortingStrategy}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {client.map((item, index) => (
              <SortableItem
    key={item._id || index} // Usar _id como key
    id={item._id} // Pasar _id como id
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




      <CreateClient id={id}/>
    </div>
  );
}
