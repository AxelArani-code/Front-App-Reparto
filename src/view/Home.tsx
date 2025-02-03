"use client";
import { Card, CardBody, CardHeader } from "@heroui/react";
import NavigationButton from "../components/NavigationButton";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const schedule = [
  { day: "Lunes", date: "24/01/24", route: "Sarmiento, Toledano, Constitución, etc" },
  { day: "Martes", date: "25/01/24", route: "Belgrano, Mitre, San Martín, etc" },
  { day: "Miércoles", date: "26/01/24", route: "Av. Siempre Viva, Independencia, Rivadavia, etc" },
  { day: "Jueves", date: "27/01/24", route: "Ruta 9, Av. Central, 25 de Mayo, etc" },
  { day: "Viernes", date: "28/01/24", route: "Las Heras, San Juan, Mendoza, etc" },
];
export default function  Home()  {

  return(
 <div className="container mx-auto p-4">
    <NavBar/>
    <Link to="/viewComponet">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {schedule.map(({ day, date, route }) => (
        <Card shadow="md" className="w-full"
         >
          <CardHeader className="flex gap-4">
            <div className="w-2 h-10 bg-primary rounded" />
            <div>
              <h2 className="text-lg font-bold text-primary">{`Día - ${day}`}</h2>
              <p className="text-default-500">{date}</p>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-default-500">
              Recorrido - <span className="font-semibold text-primary">{route}</span>
            </p>
          </CardBody>
        </Card>
      ))}
    </div>
    </Link>
    
    <NavigationButton/>
  </div>

  ) 
}
