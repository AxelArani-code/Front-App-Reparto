import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
  
    Input, 
    Select,
    SelectItem,
    DateInput,
    Card,
    CardHeader,
    CardBody
  } from "@heroui/react";
  
  import {CalendarDate, parseDate} from "@internationalized/date";
  
  export const day = [
    {key: "1", label: "Efectivo"},
    {key: "2", label: "Trasferencia"},
    {key: "3", label: "No Pago"},
   
  
  ];
  export const medioDePago = [
    {key: "1", label: "Pagado"},
    {key: "2", label: "Fiado"},
 
   
  
  ];
  
  export default function CreateOrdenUser() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
    return (
      <>
        <Button className="mt-5" onPress={onOpen} color="primary" size="lg" fullWidth >Crear Nuevo Pedido</Button>
        <Modal
          isDismissable={false}
          isKeyboardDismissDisabled={true}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Crear Nuevo Pedido</ModalHeader>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
       
      
         <Card shadow="md" className="w-full" >
     
  
<CardHeader className=" gap-4  ">
             <div className="w-2 h-10 bg-primary rounded" />
             <div>
               <h2 className="text-lg font-bold text-primary">Axel Aranibar</h2>
               <p className="text-default-500">Lunes</p>
             </div>
           </CardHeader>
             
          
          
           
           
            <CardBody>
             <p className="text-default-500">
               Recorrido - <span className="font-semibold text-primary">Alem 1202</span>
             </p>
           </CardBody>
         </Card>
       
    
     </div>   
                <ModalBody>
  
                <Input
          label="20L / $3100"
          labelPlacement="outside"
          placeholder="0"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">N°</span>
            </div>
          }
          type="number"
        />
         <Input
          label="12L / $2500"
          labelPlacement="outside"
          placeholder="0"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">N°</span>
            </div>
          }
          type="number"
        />
         <Input
          label="SF / $750"
          labelPlacement="outside"
          placeholder="0"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">N°</span>
            </div>
          }
          type="number"
        />
         <Select
                        size="lg"
                         variant="bordered"
                
                items={day}
                label="Pagado"
                placeholder="Selecione Tipo De Pago"
              >
                {(animal) => <SelectItem>{animal.label}</SelectItem>}
              </Select>
  
              <Select
                        size="lg"
                         variant="bordered"
                
                items={medioDePago}
                label="Se realizo"
                placeholder="Selecione si la persona se le fio o lo pago"
              >
                {(animal) => <SelectItem>{animal.label}</SelectItem>}
              </Select>
              <Input
          label="Total"
          labelPlacement="outside"
          placeholder="0.00"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
          type="number"
        />
      <DateInput
     
          isDisabled
          defaultValue={parseDate("2024-04-04")}
          label={"Dia Por Defecto"}
          placeholderValue={new CalendarDate(1995, 11, 6)}
        />
  
           
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Confirmar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }
  