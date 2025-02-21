/* eslint-disable react-hooks/rules-of-hooks */


{/* Modal Editar 
  
  

"use client";

import React from "react";
import { Button, Input, Form, Modal, useModal, useDisclosure } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function UserAdmin() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [password, setPassword] = React.useState("");
  //const { isOpen, onOpen, onClose } = useModal();
  const { isOpen: isEditOpen, onOpen: onOpenEdit, onOpenChange: onEditChange } = useDisclosure();

  const toggleVisibility = () => setIsVisible(!isVisible);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === "Ax43353606") {
      onOpen();
    } else {
      alert("Contraseña incorrecta");
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large px-8 pb-10 pt-6">
        <p className="pb-4 text-left text-3xl font-semibold">
          Admin
          <span aria-label="emoji" className="ml-2" role="img">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36"><path fill="#99aab5" d="M19 9h2v11h-2z"/><path fill="#55acee" d="M10 9c-2 2-4 5-4 7c0 4 5 1 5 1V9z"/><circle cx="5" cy="32" r="4" fill="#292f33"/><circle cx="5" cy="32" r="2" fill="#99aab5"/><path fill="#1e5200" d="M29 23h-2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2m-10 0h-2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2"/><path fill="#5c913b" d="M2 28.377c-1.387.225-2.581-1.152-1-2.435c2-1.623 7-2.435 9-1.623S12 33 11 33s-4-5.435-9-4.623"/><path fill="#3e721d" d="M11 33h13c1 0 2 0 2-2c0-1 1-4 3-4s5 3 5 4s0 2 1 2s1-1 1-2V19h-8c0 3-1 8-1 8s-1-1-1 1c0 .606-1 2-2 2h-1c-1 0-2-.666-2-1.672V19c0-1-2-1-2 0v9.328C19 29.334 18.262 30 17.341 30h-3.33C13 30 12 29 12 28v-9H5c0 6 5 14 6 14"/><path fill="#5c913b" d="M34 32c0 1 1 0 1-2c0-3-.833-5-5-5s-5 3-5 5c0 1 1 3 1 2s.667-2 4-2s4 1 4 2"/><path fill="#ffac33" d="M12 19H5c0-1 1-3 1-3h4a1 1 0 0 0 1-1v-4s-2 0-2-2c0-.326.106-.652.25-.944C9.573 7.4 10.258 7 10.99 7H33c2 0 3 5 3 12h-8s0-8-3-8H12z"/><circle cx="30" cy="32" r="4" fill="#292f33"/><circle cx="30" cy="32" r="2" fill="#99aab5"/><path fill="#f4900c" d="M9 18.5v-1a.5.5 0 0 0-.5-.5H5.552C5.286 17.648 5 18.464 5 19h3.5a.5.5 0 0 0 .5-.5"/></svg>
          </span>
        </p>
        <Form className="flex flex-col gap-4" validationBehavior="native" onSubmit={handleSubmit}>
          <Input
            isRequired
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <Icon className="pointer-events-none text-2xl text-default-400" icon="solar:eye-closed-linear" />
                ) : (
                  <Icon className="pointer-events-none text-2xl text-default-400" icon="solar:eye-bold" />
                )}
              </button>
            }
            label="Contraseña"
            labelPlacement="outside"
            name="password"
            placeholder="Ingresar Contraseña"
            type={isVisible ? "text" : "password"}
            variant="bordered"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="w-full" color="primary" type="submit">
            Ingresar
          </Button>
        </Form>
        <Modal isOpen={isOpen} onClose={onClose}>
          <p>Contraseña correcta. Bienvenido.</p>
        </Modal>
      </div>
    </div>
  );
}
  
  */}