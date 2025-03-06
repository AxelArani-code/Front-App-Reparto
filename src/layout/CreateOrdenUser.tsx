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
} from "@heroui/react";
import { useApi } from "../config/useUnisave";
import toast from "react-hot-toast";


type CreateOrdenUserProps = {
  DayEntityId: string;
  ClientEntityId:string
};
export const day = [
  { key: "1", label: "Efectivo" },
  { key: "2", label: "Trasferencia" },
  { key: "3", label: "No Pago" },
];
export const medioDePago = [
  { key: "1", label: "Pagado" },
  { key: "2", label: "Fiado" },
];
export default function CreateOrdenUser({ DayEntityId, ClientEntityId}: CreateOrdenUserProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { executeRequest } = useApi();

  // Estado para manejar los valores de los inputs
  const [drum20LQuantity, setDrum20LQuantity] = useState("");
  const [drum12LQuantity, setDrum12LQuantity] = useState("");
  const [siphonQuantity, setSiphonQuantity] = useState("");

  const [drum20LPrice, setDrum20LPrice] = useState("");
  const [drum12LPrice, setDrum12LPrice] = useState("");
  const [siphonPrice, setSiphonPrice] = useState("");
// Estado para la fecha y hora
const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    // Obtener fecha y hora actual en el formato requerido
    const now = new Date();
    const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`;
    setDateTime(formattedDate);
  }, []);

  const AddDeliveryFacet = async () => {
    try {
      const sessionId = localStorage.getItem("sessionId");
      const result = await executeRequest("Backend.Actions.Deliveries.AddDeliveryFacet", {
        parameters: [
          {
            DayEntityId:DayEntityId, 
            ClientEntityId:ClientEntityId,
            Drum20LQuantity: Number(drum20LQuantity), // Convertir a número antes de enviarlo
            Drum12LQuantity: Number(drum12LQuantity),
            SiphonQuantity: Number(siphonQuantity),
            Drum20LPrice: Number(drum20LPrice),
            Drum12LPrice: Number(drum12LPrice),
            SiphonPrice: Number(siphonPrice),
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
                  label="Precio de 20-L"
                  labelPlacement="outside"
                  placeholder="0.00"
                  startContent={<span className="text-default-400 text-small">$</span>}
                  type="number"
                  size="sm"
                  value={drum20LPrice}
                  onChange={(e) => setDrum20LPrice(e.target.value)}
                />
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
                  label="Precio de 12-L"
                  labelPlacement="outside"
                  placeholder="0.00"
                  startContent={<span className="text-default-400 text-small">$</span>}
                  type="number"
                  size="sm"
                  value={drum12LPrice}
                  onChange={(e) => setDrum12LPrice(e.target.value)}
                />
                <Input
                  label="Sifon De Soda"
                  labelPlacement="outside"
                  placeholder="0"
                  startContent={<span className="text-default-400 text-small">N°</span>}
                  type="number"
                  value={siphonQuantity}
                  onChange={(e) => setSiphonQuantity(e.target.value)}
                />
                <Select
                  size="sm"
                  variant="bordered"

                  items={day}
                  label="Pagado"
                  placeholder="Selecione Tipo De Pago"
                >
                  {(animal) => <SelectItem>{animal.label}</SelectItem>}
                </Select>

                <Select
                  size="sm"
                  variant="bordered"

                  items={medioDePago}
                  label="Se realizo"
                  placeholder="Selecione si la persona se le fio o lo pago"
                >
                  {(animal) => <SelectItem>{animal.label}</SelectItem>}
                </Select>
                <Input
                  label="Precio De Sifon"
                  labelPlacement="outside"
                  placeholder="0.00"
                  startContent={<span className="text-default-400 text-small">$</span>}
                  type="number"
                  size="sm"
                  value={siphonPrice}
                  onChange={(e) => setSiphonPrice(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={AddDeliveryFacet}>
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
