// src/components/AddUser.tsx
import React, {  useEffect, useState } from "react";
import {Button, Input, Checkbox, Link, Form, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@heroui/react";
import toast from "react-hot-toast";

import { useApi } from "../config/useUnisave";
import { Droplets } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isVisible, setIsVisible] = useState(false); // Para mostrar/ocultar contraseña
  const [loading, setLoading] = useState(false); // Estado de carga
  const [message, setMessage] = useState(''); // Mensajes de éxito/error
   const navigate = useNavigate();
  const { executeRequest,  } = useApi();
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
// Cargar email y password desde localStorage al iniciar
  useEffect(() => {
    const savedEmail = localStorage.getItem("savedEmail");
    const savedPassword = localStorage.getItem("savedPassword");
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRemember(true);
    }
  }, []);



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
        // Guardar o borrar en localStorage según el checkbox
        if (remember) {
          localStorage.setItem("savedEmail", email);
          localStorage.setItem("savedPassword", password);
        } else {
          localStorage.removeItem("savedEmail");
          localStorage.removeItem("savedPassword");
        }

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
       {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">AquaReparto</span>
          </div>
        
<Form className="flex flex-col gap-4" validationBehavior="native" onSubmit={handleAddUser}>
  <Input
  isRequired
  label="Email"
  labelPlacement="outside"
  name="email"
  placeholder="Ingresar Email"
  type="email"
  variant="bordered"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<Input
  isRequired
  endContent={
    <button type="button" onClick={toggleVisibility}>
      {isVisible ? "Ocultar" : "Mostrar"}
    </button>
  }
  label="Contraseña"
  labelPlacement="outside"
  name="password"
  placeholder="Ingresar Contraseña"
  type={isVisible ? "text" : "password"}
  variant="bordered"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

  <div className="flex w-full items-center justify-between px-1 py-2">
    <Checkbox isSelected={remember}
  onValueChange={setRemember}
  size="sm">
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
