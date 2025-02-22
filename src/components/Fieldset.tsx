import { Description, Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'
import {  Dialog, DialogPanel,  } from '@headlessui/react';
import { useState } from 'react';
export default function Fieldset() {
  const [isOpen, setIsOpen] = useState(true);
  function close() {
    setIsOpen(false);
    // Opcional: ocultar Fieldset al cerrar el diálogo
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
            <h2 className="text-2xl font-semibold text-center text-white">Creacion de reparto</h2>
            <div className="w-full max-w-md px-4 ">
  
      <Field>
        <Label className="text-xl font-medium text-white">Dia</Label>
        <Description className="text-base text-white/50">Colocar el día de reparto.</Description>
        <Input
           className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-[#ffffff50] py-1.5 px-3 text-sm/6 text-black',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white'
          )}
        />
      </Field>
      <Field>
        <Label className="text-xl font-medium text-white">Recorrido</Label>
        <Description className="text-base text-white/50">Colocar el recorrido del día.</Description>
        <Input
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-[#ffffff50] py-1.5 px-3 text-sm/6 text-black',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white'
          )}
        />
      </Field>
       <Field>
        <Label className="text-xl font-medium text-white">Fecha</Label>
        <Description className="text-base text-white/50">Se crea una fecha automatica el dia que creas un reparto.</Description>
        <Input
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-[#ffffff50] py-1.5 px-3 text-sm/6 text-black',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white'
          )}
        />
      </Field>
      
    </div>
    
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    
    </>
  )
}
