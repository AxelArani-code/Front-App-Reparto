import { ArrowLeft, ChevronRight } from "lucide-react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import NavBar from "../components/NavBar";

import { Link } from "react-router-dom";

export default function ProfileView() { 
  const { isOpen: isSessionOpen, onOpen: onOut, onOpenChange: onDeleteChange } = useDisclosure();

  const menuItems = [
    { icon: "user", label: "Editar Perfil", path: "/EditProfile" },
    { icon: "heart", label: "Precios", path: "/favoritos" },
    { icon: "help-circle", label: "Ayuda", path: "/HelpsSupport" },
    { icon: "log-out", label: "Cerrar Sesión", path: null },
  ];
  return (
    <div className="min-h-screen bg-background ">
      <NavBar />
      <div className="px-4 py-6 ">
        <Link to="/">
        <Button variant="ghost" size="md" className="mb-6">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        </Link>
        

        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>

          </div>
          <h1 className="mt-4 text-xl font-semibold">User Name</h1>
        </div>

        <nav className="space-y-5">
        {menuItems.map((item) => (
            item.path ? (
              <div>
                 <Link to={item.path} key={item.label}>
                <Button  key={item.label} variant="ghost" className=" w-full  justify-between px-2 py-6 h-auto font-normal hover:bg-muted">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <span className="text-muted-foreground ">
                      { item.icon === "user" && (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>)
                      
                      }
                    {item.icon === "heart" && (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>)}
                  
                    {item.icon === "help-circle" && (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-help"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>)}

                 
                      </span>
                    </div>
                    {item.label}
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </Button>
              </Link>
              </div>
             
            ) : (
              <Button key={item.label} variant="ghost" className="w-full justify-between px-2 py-6 h-auto font-normal hover:bg-muted" onClick={() => onOut()}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <span className="text-muted-foreground">   {item.icon === "log-out" && (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>)}</span>
                  </div>
                  {item.label}
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </Button>
            )
          ))}
        </nav>
      </div>




       {/* Modal Eliminar */}
       <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isSessionOpen}
        onOpenChange={onDeleteChange}
        placement="center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 ">Cerrar Session</ModalHeader>
              <ModalBody>

              <p>¿Estas seguro que quieres salir?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger"  onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" variant="bordered" onPress={onClose}>
                  Aceptar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

     
    </div>
  );
}
