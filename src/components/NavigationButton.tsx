import { Button, Dialog, DialogPanel, Disclosure, DisclosurePanel } from '@headlessui/react';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Fieldset from './Fieldset'; // Importa el componente Fieldset

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

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 inline-flex left-0 mx-auto justify-between bg-[#C0E6F9] w-11/12 rounded-3xl h-15 max-w-lg ">
        <a
          aria-current="page"
          className="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-[#160817] flex-grow rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800"
          href="#"
        >
          <svg
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
          </svg>
          <span className="sr-only">Home</span>
        </a>

        <button onClick={open} className="relative inline-flex flex-col items-center text-xs font-medium text-[#2B112C] py-3 px-6 flex-grow">
          <div className="absolute bottom-5 p-3 rounded-full border-4 border-white bg-[#81C1F1]">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
            </svg>
          </div>
          <span className="sr-only">Chat</span>
        </button>

        <a
          className="inline-flex flex-col items-center text-xs font-medium text-[#160817] py-3 px-4 flex-grow rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800"
          href="#"
        >
          <svg
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Profile</span>
        </a>
      </div>
    </>
  );
}
