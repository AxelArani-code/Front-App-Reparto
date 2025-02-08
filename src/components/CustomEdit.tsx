import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Tooltip,

} from "@heroui/react";
import NavBar from "./NavBar";
import { useState } from "react";
import CreateOrdenUser from "../layout/CreateOrdenUser";

export const columns = [
  { name: "FECHA", uid: "fecha" },
  { name: "20L", uid: "cantidad" },
  { name: "12 L", uid: "doceLitros" },
  { name: "SIF", uid: "sif" },
  { name: "TOTAL", uid: "total" },
  { name: "EF", uid: "ef" },
  { name: "TRAS", uid: "tras" },
  { name: "ACTIONS", uid: "actions" },
];

export const users = [
  {
    id: 1,
    nombre: "Axel Aranibar",
    fecha: "2025-01-01",
    cantidad: "2",
    doceLitros: "1",
    sif: "10",
    total: "10.000",
    ef: true,
    tras: false,

  },
  {
    id: 2,
    nombre: "Axel Aranibar",
    fecha: "2025-01-02",
    cantidad: "3",
    doceLitros: "8",
    sif: "17",
    total: "23.000",
    ef: false,
    tras: true,

  },
  {
    id: 3,
    nombre: "Axel Aranibar",
    fecha: "2025-01-03",
    cantidad: "25",
    doceLitros: "12",
    sif: "17",
    total: "37.000",
    ef: true,
    tras: true,

  },
  {
    id: 4,
    nombre: "Axel Aranibar",
    fecha: "2025-01-04",
    cantidad: "18",
    doceLitros: "9",
    sif: "20",
    total: "27.000",
    ef: false,
    tras: false,

  },
  {
    id: 5,
    nombre: "Axel Aranibar",
    fecha: "2025-01-05",
    cantidad: "22",
    doceLitros: "11",
    sif: "10",
    total: "33.000",
    ef: true,
    tras: false,

  },
];

export const EyeIcon = () => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"

    >
      <path
        d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const DeleteIcon = () => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"

    >
      <path
        d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M8.60834 13.75H11.3833"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M7.91669 10.4167H12.0834"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const EditIcon = () => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"

    >
      <path
        d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M2.5 18.3333H17.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
}; export const CheckIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ff4c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
  );
};

export const CameraIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
  );
};

export default function CustomEdit() {
  const [selectedRow,] = useState(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCell = React.useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "fecha":
        return (
          <User


            name={cellValue}
          >

          </User>
        );
      case "cantidad":
      case "doceLitros":
      case "sif":
      case "total":
        return <p className="text-sm capitalize">{cellValue}</p>;
      case "ef":
      case "tras":
        return cellValue ? <CheckIcon /> : null;
      case "actions":
        return (

          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">

                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (

    <div>
      <NavBar />
      <h2 className="text-2xl mt-1 font-semibold text-center text-primary">Lunes, <p>Axel Aranibar</p></h2>

      <Table className="mt-10">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid}>{column.name}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(user) => (
            <TableRow className={`cursor-pointer transition-colors border-2 ${selectedRow === user.id ? "border-blue-500 bg-white" : "border-transparent hover:bg-gray-700  "
              }`} key={user.id}>
              {(columnKey) => (
                <TableCell key={columnKey}>
                  {renderCell(user, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>

    <CreateOrdenUser/>

    </div>

  );
}
