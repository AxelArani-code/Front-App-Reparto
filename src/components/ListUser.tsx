import {  Card, CardBody, CardHeader, Input, } from "@heroui/react";

import NavBar from "../components/NavBar";

import { Link, useNavigate } from "react-router-dom";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";
import CreateClient from "../layout/CreateClient";


const schedule = [
  { day: "Axel Aranibar", date: "24/01/24", route: "Circumbalacion 1814", telefono:"2604134567" },
  { day: "Cristian Cruz", date: "25/01/24", route: "Alem 1816" ,telefono:"2604134567"},
  { day: "Maria Antonella", date: "26/01/24", route: "Av Rivadavia 186" ,telefono:"2604134567"},
  { day: "Luciano Lucero", date: "27/01/24", route: "Las Heras 657" ,telefono:"2604134567"},
  { day: "Lucia Peralta", date: "28/01/24", route: "San Juan 1975" ,telefono:"2604134567"},
  { day: "Martin Bucca", date: "28/01/24", route: "Las Heras 123" ,telefono:"2604134567"},
];
export const day = [
  {key: "1", label: "Lunes"},
  {key: "2", label: "Martes"},
  {key: "3", label: "Miercoles"},
  {key: "4", label: "Jueves"},
  {key: "5", label: "Viernes"},
  {key: "6", label: "Sabado"},

];


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


export default function ListUser() {

  const navigate = useNavigate();


  return (
    <div className="container mx-auto p-4 ">
      <NavBar />
      <h2 className="text-2xl mt-1 font-semibold text-center text-primary">Dia, Lunes</h2>
        <div className="mt-7"> 
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
     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
       
          {schedule.map(({ day, date, route, telefono }) => (
            <Card shadow="md" className="w-full" onPress={() => navigate("/scheduleCard")}
            >

        
              <Link to="/viewOrdersUser" >    
<CardHeader className=" gap-4  ">
                <div className="w-2 h-10 bg-primary rounded" />
                <div>
                  <h2 className="text-lg font-bold text-primary">{`${day}`}</h2>
                  <p className="text-default-500">{date}</p>
                </div>


              </CardHeader>
                
             
             
              
              
               <CardBody>
                <p className="text-default-500">
                  Dirección - <span className="font-semibold text-primary">{route}</span>
                </p>
                <p className="text-default-500">
                  Telefono - <span className="font-semibold text-primary">{telefono}</span>
                </p>
              </CardBody>
</Link>
              
             
            </Card>
          
          ))}
        </div>   
    <CreateClient/>

   
     
    </div>

  )
}
