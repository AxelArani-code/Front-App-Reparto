import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Switch,
} from "@heroui/react";
import { SVGProps } from "react";
import { Link, useNavigate } from "react-router-dom";
import { JSX } from "react/jsx-runtime";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useApi } from "../config/useUnisave";
import toast from "react-hot-toast";
export const AcmeLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-clipboard-list"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  );
};
export const MoonIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
        fill="currentColor"
      />
    </svg>
  );
};
export const SunIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <g fill="currentColor">
        <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
        <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
      </g>
    </svg>
  );
};
export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { executeRequest } = useApi();
  const navigate = useNavigate();
  //Variables String
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false); // Estado para validar si es admin


  // Asegurar que el tema se aplica correctamente en el cliente
  useEffect(() => {
    // Hacer una solicitud al cargar el componente
    const fetchData = async () => {
      try {
        const result = await executeRequest("Backend.Actions.GetMyUserFacet", {
          sessionId: "",
        });
        if (result?.executionResult?.returned == null) {
          setIsAuthenticated(false);
        } else {
          const firstName = result?.executionResult?.returned?.FirstName || "";
          setFirstName(firstName);
          const lastName = result?.executionResult?.returned?.LastName || "";
          setLastName(lastName);
          const Email = result?.executionResult?.returned?.Email || "";
          setEmail(Email);
          
          // Validar si el usuario es administrador
          setIsAdmin(result?.executionResult?.returned?.IsAdmin === true);
        }

        console.log(result);
      } catch (err) {
        console.error("API Request Error:", err);
      }
    };
    fetchData();

    setMounted(true);
  }, []);

  const saveSettings = (settings: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.3; // 70% de éxito
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        isSuccess
          ? resolve(`Guardado correctamente: ${settings}`)
          : reject(`Error al guardar: ${settings}`);
      }, 2000); // Simula retraso de 2 segundos
    });
  };

  const handleAddUser = async () => {
    // Obtener sessionId desde localStorage
    const sessionId = localStorage.getItem("sessionId");
    console.log("Session ID recuperado:", sessionId);
    try {
      const result = await executeRequest("Backend.Actions.LogoutFacet", {
        sessionId: sessionId,
      });
      const isSuccess = result?.executionResult?.returned?.IsSuccessful;
      const message = result?.executionResult?.returned?.Message;

      if (!isSuccess) {
        toast.promise(saveSettings(message), {
          loading: "Cargando...",
          error: <b>{message || "Login failed"}</b>,
        });
      } else {
        toast.promise(saveSettings(message), {
          loading: "Cargando...",
          success: <b>{message}</b>,
        });

        localStorage.removeItem("sessionId");
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message + "Error al autenticar el usuario.");
    }
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };
  const routerProfile = () => {
    navigate("/profile");
  };
  const routerLogin = () => {
    navigate("/Login");
  };
  const handleAddAdmin = () => {
    navigate("/admin-user");
  };
  const routerAnalisis = () => {
    navigate("/analysis");
  };
  if (!mounted) return null; // Evita el error de SSR en Next.js
  return (
    <Navbar>
      <Link to="/">
        <NavbarBrand className="mx-px">
          <AcmeLogo />
          <p className="font-bold  text-inherit">AppRepart-Beta</p>
        </NavbarBrand>
        <NavbarBrand className="mx-px">
          <p className="text-sm">{firstName + lastName}</p>
        </NavbarBrand>
      </Link>
      <NavbarContent as="div" justify="end">
        <Switch
          isSelected={theme === "dark"}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          color="success"
          size="lg"
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-user-round"
            >
              <path d="M18 20a6 6 0 0 0-12 0" />
              <circle cx="12" cy="10" r="4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </DropdownTrigger>
          {isAuthenticated ? (
  <DropdownMenu aria-label="Profile Actions" variant="flat">
    <DropdownItem key="profile" onPress={routerProfile} className="h-14 gap-2">
      <p className="font-semibold">Cuenta de </p>
      <p className="font-semibold">{Email}</p>
    </DropdownItem>

    {/* ✅ Se usa el operador ternario para evitar errores */}
    {isAdmin ? (
      <DropdownItem onPress={handleAddAdmin} key="admin" color="warning">
        Admin
      </DropdownItem>
    ) : null}

<DropdownItem onPress={routerAnalisis} key="logout" color="danger">
    Analisis
    </DropdownItem>
    <DropdownItem onPress={handleAddUser} key="logout" color="danger">
      Cerrar Sesión
    </DropdownItem>
  </DropdownMenu>
) : (
  <DropdownMenu aria-label="Profile Actions" variant="flat">
    <DropdownItem key="login" onPress={routerLogin} color="primary">
      Login
    </DropdownItem>
  </DropdownMenu>
)}


        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
