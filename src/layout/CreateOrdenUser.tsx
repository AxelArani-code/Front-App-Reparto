import { useEffect, useState } from "react";
import {

  Button,
  Input,
  Select,
  SelectItem,
  Alert,
  Textarea,
} from "@heroui/react";
import { useApi } from "../config/useUnisave";
import toast from "react-hot-toast";
import { useLocation, useNavigate, } from "react-router-dom";
import { ArrowLeft } from "lucide-react";



export const day = [
  { key: "1", label: "Efectivo", value: "Efectivo" },
  { key: "2", label: "Transferencia", value: "Transferencia" },
  { key: "3", label: "No Pago", value: "No Pago" },
];
export const medioDePago = [
  { key: "1", label: "Pagado", value: "true" },
  { key: "2", label: "Fiado", value: "false" },
];
export default function CreateOrdenUser() {
const { state } = useLocation();
  const { DayEntityId, ClientEntityId } = state || {};
  console.log("DayEntityId:", DayEntityId, ClientEntityId);
   const navigate = useNavigate();
 // const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
  
  const AddDeliveryFacet = async () => {

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
    
      }

      console.log(result);
    } catch (err) {
      console.error("API Request Error:", err);
    }

    setTimeout(() => {
               // 👉 Volver programáticamente con los datos guardados
const savedState = sessionStorage.getItem("viewCustomEditState");
if (savedState) {
  const {  getFirstName,
    getLastName,
    getDayEntityId,
    getClientEntityId,
    getDay,
    getTelephone,
    getAddress,
    getDescription} = JSON.parse(savedState);
  navigate("/view-orders-user", {
    state: {  getFirstName,
    getLastName,
    getDayEntityId,
    getClientEntityId,
    getDay,
    getTelephone,
    getAddress,
    getDescription},
  });
  sessionStorage.removeItem("viewCustomEditState");
} else {
  navigate("/view-orders-user");
}

    }, 2000);
    
  };
   const routerBack = () => {
 const savedState = sessionStorage.getItem("viewCustomEditState");
if (savedState) {
  const {  getFirstName,
    getLastName,
    getDayEntityId,
    getClientEntityId,
    getDay,
    getTelephone,
    getAddress,
    getDescription} = JSON.parse(savedState);
  navigate("/view-orders-user", {
    state: {  getFirstName,
    getLastName,
    getDayEntityId,
    getClientEntityId,
    getDay,
    getTelephone,
    getAddress,
    getDescription},
  });
  sessionStorage.removeItem("viewCustomEditState");
} else {
  navigate("/view-orders-user");
}
  };

  return (
    <>
         <div className="p-4">
      <div className="flex mt-1">
         <Button onPress={routerBack} variant="ghost" size="sm">
                    <ArrowLeft className="h-6 w-6" />
                  </Button>
             <div className="flex justify-between items-center mb-6 ml-3">
<h1 className="text-2xl font-bold">Crear Nuevo Pedido</h1>
             </div>
        
        
      </div>

      <div className="max-h-[80vh] overflow-y-auto space-y-3">

        <Alert
          className="px-2 text-sm"
          hideIconWrapper
          color="secondary"
          description="Ingresar el valor de un solo bidón. Ej: pones 2 Unid. y un solo valor $3.300"
          title="Advertencia"
          variant="bordered"
          
        />

        {/* Bidones de 20L */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Bidones de 20-L"
            labelPlacement="outside"
            placeholder="0"
            startContent={<span className="text-default-400 text-small">N°</span>}
            type="number"
            size="sm"
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

        {/* Bidones de 12L */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Bidones de 12-L"
            labelPlacement="outside"
            placeholder="0"
            startContent={<span className="text-default-400 text-small">N°</span>}
            type="number"
            size="sm"
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

        {/* Sifón */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Sifón de Soda"
            labelPlacement="outside"
            placeholder="0"
            startContent={<span className="text-default-400 text-small">N°</span>}
            type="number"
              size="sm"
            value={siphonQuantity}
            onChange={(e) => setSiphonQuantity(e.target.value)}
          />
          <Input
            className="font-semibold"
            label="Precio de Sifón"
            labelPlacement="outside"
            placeholder="0.00"
            startContent={<span className="text-default-400 text-small">$</span>}
            type="number"
            size="sm"
            value={siphonPrice}
            onChange={(e) => handlePriceChange(e.target.value, setSiphonPrice)}
          />
        </div>

        {/* Tipo de Pago */}
        <Select
          size="sm"
          variant="bordered"
          items={day}
          label="Pagado"
          placeholder="Seleccione Tipo de Pago"
          selectedKeys={selectedPaymentMethod ? [selectedPaymentMethod] : []}
          onSelectionChange={(keys) =>
            setSelectedPaymentMethod(Array.from(keys)[0] as string)
          }
        >
          {day.map((option) => (
                    <SelectItem key={option.key} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
        </Select>

        {/* Estado del Pago */}
        <Select
          size="sm"
          variant="bordered"
          items={medioDePago}
          label="¿Se realizó el pago?"
          placeholder="Seleccione si la persona pagó o se le fió"
          selectedKeys={isPaid !== null ? [String(isPaid)] : []}
          onSelectionChange={(keys) => {
            const value = Array.from(keys)[0];
            setIsPaid(value === "true");
          }}
        >
                   {medioDePago.map((option) => (
    <SelectItem key={option.value} value={option.value}>
      {option.label}
    </SelectItem>
  ))}
        </Select>

        {/* Notas */}
        <Textarea
          className=""
          minRows={1}
          value={comments}
          onChange={(e) => handlePriceChange(e.target.value, setComments)}
          type="text"
          variant="bordered"
          label="Notas"
          size="sm"
          placeholder="Escribe notas"
        />
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <Button color="danger" variant="light" >
          Cancelar
        </Button>
        <Button color="primary" onPress={() => AddDeliveryFacet()}>
          Confirmar Pedido
        </Button>
      </div>
    </div>
    </>
  );
}
