import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { motion } from "framer-motion";


interface SortableItemProps {
  id: string;
  day: string;
  date: string;
  route: string;
  telefono: string;
  isDragEnabled: boolean;
}

export default function SortableItem({ id, day, date, route, telefono, isDragEnabled }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    pointerEvents: isDragEnabled ? "auto" : "none", // Activa o desactiva la interacción con drag
    touchAction: isDragEnabled ? "none" : "auto", // Bloquea el scroll si drag está activo
  };

  return (
    <motion.div 
    ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="cursor-pointer"
      animate={isDragEnabled ? { x: [0, 10, -10, 0] } : {}} // Animación cuando el Drag está activado
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
    >
        <div className="mx-4 " ref={setNodeRef} style={style} {...(isDragEnabled ? { ...attributes, ...listeners } : {})}>
      <Card shadow="md" className="w-full">
    
          <CardHeader className="gap-4">
            <div className="w-2 h-10 bg-primary rounded" />
            <div>
              <h2 className="text-base font-bold text-primary">{day}</h2>
              <p className="text-default-500 text-sm">{date}</p>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-default-500 text-xs">
              Dirección - <span className="font-semibold text-primary ">{route}</span>
            </p>
            <p className="text-default-500 ">
              Teléfono - <span className="font-semibold text-primary">{telefono}</span>
            </p>
          </CardBody>

      </Card>
    </div>
    </motion.div>
  
  );
}
