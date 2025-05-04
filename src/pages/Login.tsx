// src/components/AddUser.tsx
import React, {  useState } from "react";
import {Button, Input, Checkbox, Link, Form, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@heroui/react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useApi } from "../config/useUnisave";
const Login = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isVisible, setIsVisible] = useState(false); // Para mostrar/ocultar contraseña
  const [loading, setLoading] = useState(false); // Estado de carga
  const [message, setMessage] = useState(''); // Mensajes de éxito/error
  const navigate = useNavigate();
  const { executeRequest,  } = useApi();
 
  // Función para alternar visibilidad de la contraseña
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  // Función para manejar el envío del formulario
  const handleAddUser = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evitar recarga de página
    setLoading(true);
    setMessage('');
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
  const password = (form.elements.namedItem('password') as HTMLInputElement).value;
// Obtener sessionId desde localStorage
const sessionId = localStorage.getItem('sessionId');
console.log("Session ID recuperado:", sessionId);
    try {
      const result = await  executeRequest('Backend.Actions.LoginFacet', {
        parameters: [{ Email: email, Password: password }],
        sessionId: sessionId
      });
      const isSuccess = result?.executionResult?.returned?.IsSuccessful      ;
      if (!isSuccess) {
        toast.error(result?.executionResult?.returned?.Message|| 'Login failed')
      }else{
        toast.success(result?.executionResult?.returned?.Message)
        navigate('/')
      }
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      toast.error(error.message+"Error al autenticar el usuario.")
      
    } finally {
      setLoading(false);
    }
  };
  const routerContact=()=>{
    const gmailLink =
      'https://mail.google.com/mail/?view=cm&fs=1&to=Axel%20Aranibar%20<axelaranibar3@gmail.com>&su=Hola&body=Hola%20Axel%2C%20me%20gustaría%20ponerme%20en%20contacto%20contigo.';
    
    window.location.href = gmailLink;
  }
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large px-8 pb-10 pt-6">
        <p className="pb-4 text-left text-3xl font-semibold">
          Login AppRepart
          <span aria-label="emoji" className="ml-2" role="img">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36"><path fill="#99aab5" d="M19 9h2v11h-2z"/><path fill="#55acee" d="M10 9c-2 2-4 5-4 7c0 4 5 1 5 1V9z"/><circle cx="5" cy="32" r="4" fill="#292f33"/><circle cx="5" cy="32" r="2" fill="#99aab5"/><path fill="#1e5200" d="M29 23h-2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2m-10 0h-2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2"/><path fill="#5c913b" d="M2 28.377c-1.387.225-2.581-1.152-1-2.435c2-1.623 7-2.435 9-1.623S12 33 11 33s-4-5.435-9-4.623"/><path fill="#3e721d" d="M11 33h13c1 0 2 0 2-2c0-1 1-4 3-4s5 3 5 4s0 2 1 2s1-1 1-2V19h-8c0 3-1 8-1 8s-1-1-1 1c0 .606-1 2-2 2h-1c-1 0-2-.666-2-1.672V19c0-1-2-1-2 0v9.328C19 29.334 18.262 30 17.341 30h-3.33C13 30 12 29 12 28v-9H5c0 6 5 14 6 14"/><path fill="#5c913b" d="M34 32c0 1 1 0 1-2c0-3-.833-5-5-5s-5 3-5 5c0 1 1 3 1 2s.667-2 4-2s4 1 4 2"/><path fill="#ffac33" d="M12 19H5c0-1 1-3 1-3h4a1 1 0 0 0 1-1v-4s-2 0-2-2c0-.326.106-.652.25-.944C9.573 7.4 10.258 7 10.99 7H33c2 0 3 5 3 12h-8s0-8-3-8H12z"/><circle cx="30" cy="32" r="4" fill="#292f33"/><circle cx="30" cy="32" r="2" fill="#99aab5"/><path fill="#f4900c" d="M9 18.5v-1a.5.5 0 0 0-.5-.5H5.552C5.286 17.648 5 18.464 5 19h3.5a.5.5 0 0 0 .5-.5"/></svg>
          </span>
        </p>
        
<Form className="flex flex-col gap-4" validationBehavior="native" onSubmit={handleAddUser}>
  <Input
    isRequired
    label="Email"
    labelPlacement="outside"
    name="email"
    placeholder="Ingresar Email"
    type="email"
    variant="bordered"
  />
  <Input
    isRequired
    endContent={
      <button type="button" onClick={toggleVisibility}>
       
      </button>
    }
    label="Contraseña"
    labelPlacement="outside"
    name="password"
    placeholder="Ingresar Contraseña"
    type={isVisible ? "text" : "password"}
    variant="bordered"
  />
  <div className="flex w-full items-center justify-between px-1 py-2">
    <Checkbox defaultSelected name="remember" size="sm">
      Recordar
    </Checkbox>
    <Link className="text-default-500" href="#" size="sm">
      Recuperar Contraseña ?
    </Link>
  </div>
  <Button className="w-full" color="primary" type="submit" isLoading={loading}>
    Ingresar
  </Button>
  <Button className="w-full" color="success" onPress={onOpen} >
    Registrarme
  </Button>
  {message && <p className="text-center text-sm">{message}</p>}
</Form>


 {/* Modal beta */}
 <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
       
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 ">Registrarse</ModalHeader>
              <ModalBody>
             
   <div className="flex flex-col items-center justify-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-list"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></svg>
          <h1 className="text-3xl font-bold text-foreground">AppRepart-Beta</h1>
      

        </div>
<p>Para poder acceder a las funcionalidades de esta plataforma. Debes contactarnos y nosotros te creamos el usuario. </p>
<p>Para que puedas disfrutar la experiencia y te brindamos la organización de tu reparto y a su vez te facilitamos el día a día además si tienes un problema te puedes comunicar con nosotros y te ayudaremos </p>
              </ModalBody>
              <Button size="lg" onPress={routerContact}color="success" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  Contactarnos
                </Button>
          
            </>
          )}
        </ModalContent>
      </Modal>
     
</div>
</div>
  );
};
export default Login;
