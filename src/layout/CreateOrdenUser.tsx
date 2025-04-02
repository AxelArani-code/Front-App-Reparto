import { useEffect, useState } from "react";
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
  Alert,
  Textarea,
} from "@heroui/react";
import { useApi } from "../config/useUnisave";
import toast from "react-hot-toast";


type CreateOrdenUserProps = {
  DayEntityId: string;
  ClientEntityId:string
};
export const day = [
  { key: "1", label: "Efectivo", value: "Efectivo" },
  { key: "2", label: "Transferencia", value: "Transferencia" },
  { key: "3", label: "No Pago", value: "No Pago" },
];
export const medioDePago = [
  { key: "1", label: "Pagado", value: "true" },
  { key: "2", label: "Fiado", value: "false" },
];
export default function CreateOrdenUser({ DayEntityId, ClientEntityId}: CreateOrdenUserProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { executeRequest } = useApi();
  // Estados para almacenar los valores seleccionados en los Select
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [isPaid, setIsPaid] = useState<boolean | null>(null);

  
  // Estado para manejar los valores de los inputs
  const [drum20LQuantity, setDrum20LQuantity] = useState("");
  const [drum12LQuantity, setDrum12LQuantity] = useState("");
  const [siphonQuantity, setSiphonQuantity] = useState("");

  const [drum20LPrice, setDrum20LPrice] = useState("");
  const [drum12LPrice, setDrum12LPrice] = useState("");
  const [siphonPrice, setSiphonPrice] = useState("");
  const [comments, setComments] = useState("");
// Estado para la fecha y hora
const [dateTime, setDateTime] = useState("");

useEffect(() => {
    const now = new Date();
    const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`;
    setDateTime(formattedDate);
    console.log(now.toISOString())
  }, []);
  const handlePriceChange = (value: string, setValue: (val: string) => void) => {
    const sanitizedValue = value.replace(/\./g, ""); // Elimina los puntos
    setValue(sanitizedValue);
  };
  
  const AddDeliveryFacet = async (onClose: { (): void; (): void; }) => {

    console.log(`DayEntity ${DayEntityId}`)
    console.log(`ClientEntityu ${ClientEntityId}`)
    try {
      const sessionId = localStorage.getItem("sessionId");
      if (!selectedPaymentMethod || isPaid === null) {
        toast.error("Por favor, seleccione el método de pago y el estado del pago.");
        return;
      }
      const result = await executeRequest("Backend.Actions.Deliveries.AddDeliveryFacet", {
        parameters: [
          {
            DayEntityId:DayEntityId, 
            ClientEntityId:ClientEntityId,
            Drum20LQuantity: drum20LQuantity, // Convertir a número antes de enviarlo
            Drum12LQuantity: drum12LQuantity,
            SiphonQuantity: siphonQuantity,
            Drum20LPrice: drum20LPrice,
            Drum12LPrice:drum12LPrice,
            SiphonPrice: siphonPrice,
            PaymentMethod: selectedPaymentMethod,
            Comments: comments,
            IsPaid: isPaid,
            Time: dateTime
          },
        ],
        sessionId: sessionId,
      });

      const isSuccess = result?.executionResult?.returned?.IsSuccessful;
      const message = result?.executionResult?.returned?.Message;

      if (!isSuccess) {
        toast.error(message || "Error en la base de datos");
      } else {
        toast.success(message);
        onClose();
      }

      console.log(result);
    } catch (err) {
      console.error("API Request Error:", err);
    }

    setTimeout(() => {
      window.location.reload();
    }, 2000);
    
  };

  return (
    <>
      <Button className="mt-5" onPress={onOpen} color="primary" size="lg" fullWidth>
        Crear Nuevo Pedido
      </Button>
      <Modal isDismissable={false} isKeyboardDismissDisabled={true} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Crear Nuevo Pedido</ModalHeader>
              <ModalBody>
              <Alert
        hideIconWrapper
        color="secondary"
        description="La cantidad de producto ingresado, será calculado automáticamente su valor. Ej: 2 Bidones 20-L precio $6.400 (ud. $3.200) "
        title="Advertencia"
        variant="bordered"
      />
      <div className="grid grid-cols-2 gap-4">
    <Input
                  label="Bidones de 20-L"
                  labelPlacement="outside"
                  placeholder="0"
                  startContent={<span className="text-default-400 text-small">N°</span>}
                  type="number"
                  size="md"
                  value={drum20LQuantity}
                  onChange={(e) => setDrum20LQuantity(e.target.value)}
                />
               <Input
                className="font-semibold"
  label="Precio de 20-L"
  labelPlacement="outside"
  placeholder="0.00"
  startContent={<span className="text-default-400 text-small">$</span>}
  type="number"
  size="sm"
  value={drum20LPrice}
  onChange={(e) => handlePriceChange(e.target.value, setDrum20LPrice)}
/>
            
      </div>

      <div className="grid grid-cols-2 gap-4">
<Input
                  label="Bidones de 12-L"
                  labelPlacement="outside"
                  placeholder="0"
                  startContent={<span className="text-default-400 text-small">N°</span>}
                  type="number"
                  size="md"
                  value={drum12LQuantity}
                  onChange={(e) => setDrum12LQuantity(e.target.value)}
                />
               <Input
                className="font-semibold"
  label="Precio de 12-L"
  labelPlacement="outside"
  placeholder="0.00"
  startContent={<span className="text-default-400 text-small">$</span>}
      type="number"
  size="sm"
  value={drum12LPrice}
  onChange={(e) => handlePriceChange(e.target.value, setDrum12LPrice)}
/>
              
      </div>

      <div className="grid grid-cols-2 gap-4">
  <Input
                  label="Sifon De Soda"
                  labelPlacement="outside"
                  placeholder="0"
                  startContent={<span className="text-default-400 text-small">N°</span>}
                  type="number"
                  value={siphonQuantity}
                  onChange={(e) => setSiphonQuantity(e.target.value)}
                />
                                <Input
                                className="font-semibold"
  label="Precio De Sifon"
  labelPlacement="outside"
  placeholder="0.00"
  startContent={<span className="text-default-400 text-small">$</span>}
      type="number"
  size="sm"
  value={siphonPrice}
  onChange={(e) => handlePriceChange(e.target.value, setSiphonPrice)}
/>          
      </div>
                
      
  {/* Select para Tipo de Pago */}
                <Select
                  size="sm"
                  variant="bordered"

                  items={day}
                  label="Pagado"
                  placeholder="Selecione Tipo De Pago"
                  selectedKeys={selectedPaymentMethod ? [selectedPaymentMethod] : []}
                  onSelectionChange={(keys) => setSelectedPaymentMethod(Array.from(keys)[0] as string)}
                >
                   {day.map((option) => (
                    <SelectItem key={option.key} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </Select>
 {/* Select para Estado del Pago (Booleano) */}
                <Select
                  size="sm"
                  variant="bordered"

                  items={medioDePago}
                  label="Se realizo"
                  placeholder="Selecione si la persona se le fio o lo pago"
                  selectedKeys={isPaid !== null ? [String(isPaid)] : []}
                  onSelectionChange={(keys) => {
                    const value = Array.from(keys)[0]; // Obtiene el primer valor del Set
                    setIsPaid(value === "true"); // Convierte el string en boolean
                  }}
                >
                 {medioDePago.map((option) => (
    <SelectItem key={option.value} value={option.value}>
      {option.label}
    </SelectItem>
  ))}
                </Select>
                
                                <Textarea    
                                value={comments}
                                onChange={(e) => handlePriceChange(e.target.value, setComments)}  type="text"   variant="bordered"  label="Notas"   size="sm"placeholder="Escribe Notas" />

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary"  onPress={() => AddDeliveryFacet(onClose)} >
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
