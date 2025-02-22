/* eslint-disable @typescript-eslint/no-explicit-any */
import { SVGProps, useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import { Button, Input, } from "@heroui/react";
import NavBar from "./NavBar";
import { JSX } from "react/jsx-runtime";
import CreateClient from "../layout/CreateClient";
// Nombre de la clave en localStorage
const STORAGE_KEY = "scheduleOrder";
// Datos iniciales si no hay nada en localStorage
const defaultScheduleData = [
  { id: "1", day: "Axel Aranibar", date: "24/01/24", route: "Circumbalacion 1814", telefono: "2604134567" },
  { id: "2", day: "Cristian Cruz", date: "25/01/24", route: "Alem 1816", telefono: "2604134567" },
  { id: "3", day: "Maria Antonella", date: "26/01/24", route: "Av Rivadavia 186", telefono: "2604134567" },
  { id: "4", day: "Maria Antonella", date: "26/01/24", route: "Av Rivadavia 186", telefono: "2604134567" },
  { id: "5", day: "Maria Antonella", date: "26/01/24", route: "Av Rivadavia 186", telefono: "2604134567" },
  { id: "6", day: "Maria Antonella", date: "26/01/24", route: "Av Rivadavia 186", telefono: "2604134567" },
];
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
  const [isDragEnabled, setIsDragEnabled] = useState(false);
  //const [schedule, setSchedule] = useState(scheduleData);
  const [schedule, setSchedule] = useState(() => {
    // Cargar datos desde localStorage si existen, si no, usar los datos por defecto
    const savedSchedule = localStorage.getItem(STORAGE_KEY);
    return savedSchedule ? JSON.parse(savedSchedule) : defaultScheduleData;
  });
   // Función para guardar en localStorage
   const saveScheduleToStorage = (newSchedule: typeof schedule) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newSchedule));
  };
  // Función que maneja el cambio de orden
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = schedule.findIndex((item: { id: any; }) => item.id === active.id);
      const newIndex = schedule.findIndex((item: { id: any; }) => item.id === over.id);
      const newOrder = [...schedule];
      newOrder.splice(newIndex, 0, newOrder.splice(oldIndex, 1)[0]);
      
      setSchedule(newOrder);  // Actualiza el estado
      saveScheduleToStorage(newOrder);  // Guarda en localStorage
    }
  };
  return (
    <div className="">
      <NavBar />
      <div className="flex flex-col items-center p-4  relative">
      <h2 className="text-2xl mt-1 font-semibold text-center text-primary">Lunes</h2>
      <p className="text-default-500">
                  Recorrido - <span className="font-semibold text-primary">Contitucion, salto de la roza </span>
                </p>
      <div className="absolute top-2 right-2 flex space-x-2">
        
      <Button size="sm" onClick={() => setIsDragEnabled(!isDragEnabled)} className="mb-4">
        {isDragEnabled ? "Listo..." : "Organizar"}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-notebook-pen"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>
      </Button>
         
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
      
      
           <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            
        <SortableContext items={schedule} strategy={verticalListSortingStrategy}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schedule.map((item :  { id: any; }) => (
              <SortableItem day={""} date={""} route={""} telefono={""} key={item.id} {...item} isDragEnabled={isDragEnabled} />
            ))}
          </div>
        </SortableContext>
   
      </DndContext>
      
      
 <CreateClient/>
    </div>
  );
}
