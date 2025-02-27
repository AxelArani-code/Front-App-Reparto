import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Definir los props que recibirá SortableItem
interface SortableItemProps {
  id: string;
  Owner: string;
  Day: string;
  FirstName: string;
  LastName: string;
  Telephone: string;
  Address: string;
  Description: string;
  AddressExtra: string;
  isDragEnabled: boolean;
}

export default function SortableItem({
  id,
  Owner,
  Day,
  FirstName,
  LastName,
  Telephone,
  Address,
  Description,
  AddressExtra,
  isDragEnabled,
}: SortableItemProps) {
  console.log("Datos en SortableItem:", {
    id,
    Owner,
    Day,
    FirstName,
    LastName,
    Telephone,
    Address,
    Description,
    AddressExtra,
    isDragEnabled,
  });

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style: React.CSSProperties = {
    transform: transform ? CSS.Transform.toString(transform) : undefined,
    transition: transition || undefined,
    touchAction: isDragEnabled ? "none" : "auto",
  };

  return (
    <motion.div
      ref={setNodeRef}
      {...(isDragEnabled ? listeners : {})} // Aplicar solo si Drag & Drop está activo
      {...attributes}
      style={style}
      className="cursor-pointer"
      animate={isDragEnabled ? { x: [10, 5, -5, 10] } : {}} // Animación cuando el Drag está activado
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
    >
      <div className="mx-4" ref={setNodeRef} style={style} {...(isDragEnabled ? { ...attributes, ...listeners } : {})}>
        <Card shadow="md" className="w-full">
          {isDragEnabled ? (
            // 🔹 Si el Drag & Drop está habilitado, no permite la navegación
            <div className="pointer-events-none select-none">
              <CardHeader className="gap-4">
                <div className="w-2 h-10 bg-primary rounded" />
                <div>
                  <h2 className="text-lg font-bold text-primary">{FirstName} {LastName}</h2>
                  <p className="text-default-500">{Day}</p>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-default-500">
                  Dirección - <span className="font-semibold text-primary">{Address}</span>
                </p>
                <p className="text-default-500">
                  Teléfono - <span className="font-semibold text-primary">{Telephone}</span>
                </p>
                <p className="text-default-500">
                Descripción - <span className="font-semibold text-primary">{Description}</span>
              </p>
              </CardBody>
            </div>
          ) : (
            // 🔹 Si el Drag & Drop está deshabilitado, se permite la navegación
            <Link to="/view-orders-user" className="block">
              <CardHeader className="gap-4">
                <div className="w-2 h-10 bg-primary rounded" />
                <div>
                  <h2 className="text-lg font-bold text-primary">{FirstName} {LastName}</h2>
                  <p className="text-default-500">{Day}</p>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-default-500">
                  Dirección - <span className="font-semibold text-primary">{Address}</span>
                </p>
                <p className="text-default-500">
                  Teléfono - <span className="font-semibold text-primary">{Telephone}</span>
                </p>
                <p className="text-default-500">
                Descripción - <span className="font-semibold text-primary">{Description}</span>
              </p>
              </CardBody>
            </Link>
          )}
        </Card>
      </div>
    </motion.div>
  );
}
