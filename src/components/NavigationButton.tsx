import {  Dialog, DialogPanel, Disclosure, DisclosurePanel } from '@headlessui/react';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Fieldset from './Fieldset'; // Importa el componente Fieldset
import {Button} from "@heroui/react";


export const HeartIcon = ({
  fill = "currentColor",
  filled = false,
  size,
  height,
  width,
  ...props
}: {
  fill?: string;
  filled?: boolean;
  size?: number;
  height?: number;
  width?: number;
}) => {
  return (
    <svg
      fill={filled ? fill : "none"}
      height={size || height || 44}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};




export default function NavigationButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFieldset, setShowFieldset] = useState(false); // Estado para controlar la visibilidad del Fieldset

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    setShowFieldset(false); // Opcional: ocultar Fieldset al cerrar el diálogo
  }

  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-[#81C1F1] p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(85%)] data-[closed]:opacity-0"
            >
              <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/20">
                <Disclosure as="div" className="p-6" defaultOpen={true}>
                  <DisclosurePanel
                    className="group flex w-full items-center justify-between cursor-pointer"
                    onClick={() => setShowFieldset(true)} // Mostrar Fieldset al hacer clic
                  >
                    <span className="text-xl font-medium text-[#2C112D] group-data-[hover]:text-white/80">
                      ¿Crear Dia De Reparto?
                    </span>
                    <ChevronDownIcon className="size-5 text-[#0f060f] group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                  </DisclosurePanel>
                  <DisclosurePanel className="mt-2 text-sm/5 text-[#0f060f]">
                    Dia, Recorrido del reparto
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-6" defaultOpen={true}>
                  <DisclosurePanel className="group flex w-full items-center justify-between">
                    <span className="text-xl font-medium text-[#2C112D] group-data-[hover]:text-white/80">
                      ¿Crear nuevo cliente del día LUNES?
                    </span>
                    <ChevronDownIcon className="size-5 text-[#0f060f] group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                  </DisclosurePanel>
                  <DisclosurePanel className="mt-2 text-sm/5 text-[#0f060f]">
                    Nombre Apellido, Teléfono, Dirección
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      {/* Renderizar Fieldset si showFieldset es true */}
      {showFieldset && <Fieldset />}

      
      <div className="relative">
      <Button onClick={open} isIconOnly aria-label="Like" color="danger" className='z-20 text-white flex flex-col shrink-0 grow-0 justify-around 
                  fixed bottom-0  right-5  w-16 h-16 rounded-full
                  mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10'>
        <HeartIcon />
      </Button>
      
    </div>
  

    </>
  );
}
