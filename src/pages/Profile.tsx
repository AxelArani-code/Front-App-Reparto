import { ArrowLeft, ChevronRight } from "lucide-react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import NavBar from "../components/NavBar";
import { Link, useNavigate } from "react-router-dom";
export default function ProfileView() { 
  const { isOpen: isSessionOpen, onOpen: onOut, onOpenChange: onDeleteChange } = useDisclosure();
  const menuItems = [
    { icon: "user", label: "Editar Perfil", path: "/edit-profile" },
    { icon: "heart", label: "Precios", path: "/favoritos" },
    { icon: "help-circle", label: "Ayuda", path: "/help-support" },
    { icon: "log-out", label: "Cerrar Sesión", path: null },
  ];
   const navigate = useNavigate();
  const routerHome =()=>{
    navigate("/");
  }
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
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>
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
                      { item.icon === "user" && (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>)
                      
                      }
                    {item.icon === "heart" && (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>)}
                  
                    {item.icon === "help-circle" && (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>)}
                 
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
                    <span className="text-muted-foreground">   {item.icon === "log-out" && (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>)}</span>
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
      {/* Modal beta */}
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={true}
        onOpenChange={routerHome}
        placement="center"
        backdrop="blur"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 ">Alert AppRepart-Beta</ModalHeader>
              <ModalBody>
             
   <div className="flex flex-col items-center justify-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-list"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></svg>
          <h1 className="text-3xl font-bold text-foreground">AppRepart-Beta</h1>
      

        </div>
<p>Esta es una app que está en proceso de desarrollo (Beta) ya que algunas partes no estarán disponibles lo cual estamos haciendo lo mejor posible para que tenga la mejor experiencia. </p>
              </ModalBody>
              <Button size="lg" color="danger"  onPress={routerHome}>
                  Cerrar
                </Button>
          
            </>
          )}
        </ModalContent>
      </Modal>
     
    </div>
  );
}
