"use client";

import type {ButtonProps, CalendarDate, CardProps, RangeValue} from "@heroui/react";
import {parseDate} from "@internationalized/date";
import React, { useEffect, useState } from "react";
import {ResponsiveContainer, PieChart, Pie, Tooltip, Cell} from "recharts";
import {
  Card,

  cn,
  Progress,

  DateRangePicker,
  Button,
} from "@heroui/react";
import {Icon} from "@iconify/react";
import NavBar from "../components/NavBar";
import { useApi } from "../config/useUnisave";
import { today } from "@internationalized/date"; // ✅ IMPORTANTE
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type ChartData = {
  name: string;
  [key: string]: string | number;
};

type CircleChartProps = {
  title: string;
  color: ButtonProps["color"];
  categories: string[];
  chartData: ChartData[];
};



export default function UserAnalysis() {

  const { state } = useLocation();
  const { getClientEntityId, getFirstName, getLastName} = state || {};
  console.log("getClientEntityId:", getClientEntityId);

  const { executeRequest, } = useApi();
    const navigate = useNavigate();
  const sessionId = localStorage.getItem('sessionId');
  //Valores de Rosca y datos que quiero obtener dentro del facet 
  const [cashPaid, setCashPaid] = useState<number>(0);
  const [transferPaid, setTransferPaid] = useState<number>(0);
  const [debitoPaid, setDevitoPaid] = useState<number>(0);
//Datos de tabala
const [drum20LAmounts, setDrum20LAmounts] = useState<number>(0);
const [drum12LAmounts, setDrum12LAmounts] = useState<number>(0);
const [siphonAmounts, setSiphonAmounts] = useState<number>(0);



  const data: CircleChartProps[] = [
    {
       title: "Pagado Efectivo",
       categories: ["Pagado Efectivo"],
       chartData: [
        { name: "Pagado Efectivo", value: cashPaid },
        { name: "Transferencia", value: transferPaid },
        { name: "Debito", value: debitoPaid },
      ],
       color: "primary", // usa el color que desees
     },
     
   ];

   const dataPorUnidad = [
    {
      title: "Total Bidones De 20-L",
      value: drum20LAmounts,
      status: "good",
      iconName: "material-symbols:water-drop-rounded",
    },
    {
      title: "Total Bidones De 12-L",
      value: drum12LAmounts,
      status: "good",
      iconName: "material-symbols:water-drop-rounded",
    },
    {
      title: "Total De Sifonos",
      value: siphonAmounts,
      status: "bad",
      iconName: "mdi:bottle-soda",
    },
    
  ];

    // ✅ Estado compatible con null
   const [selectedRange, setSelectedRange] = useState<RangeValue<CalendarDate> | null>(null);

 // ✅ Formatear fecha como "d/M/yyyy H:mm"
 const formatDate = (date: CalendarDate) => {
  // Siempre establecer la hora a 12:00
  const jsDate = new Date(date.year, date.month - 1, date.day, 12, 0);
jsDate.setDate(jsDate.getDate() + 1); // ✅ sumar 1 día
  jsDate.setHours(0, 0); // o 23, 59 si querés el final del día
  const pad = (num: number) => num.toString().padStart(2, "0");

  const day = pad(jsDate.getDate());
  const month = pad(jsDate.getMonth() + 1);
  const year = jsDate.getFullYear();
  const hour = pad(jsDate.getHours());
  const minute = pad(jsDate.getMinutes());

  return `${day}/${month}/${year} ${hour}:${minute}`;
};


  // ✅ Recuperar fechas desde localStorage al iniciar
  useEffect(() => {
    const savedRange = localStorage.getItem("selectedDateRange");
    if (savedRange) {
      try {
        const parsed = JSON.parse(savedRange);
        if (parsed.start && parsed.end) {
          setSelectedRange({
            start: parseDate(parsed.start),
           end: today("UTC"), // <-- Fuerza usar la fecha actual
          });
        }
      } catch (error) {
        console.error("Error al leer fechas del localStorage", error);
      }
    } else {
      // Por defecto si no hay nada guardado
      setSelectedRange({
        start: parseDate("2025-01-01"),
       end: today("UTC"),
      });
    }
  }, []);

  // ✅ Guardar en localStorage cada vez que se modifiquen las fechas
  useEffect(() => {
    if (selectedRange?.start && selectedRange?.end) {
      localStorage.setItem(
        "selectedDateRange",
        JSON.stringify({
          start: selectedRange.start.toString(), // formato ISO
          end: selectedRange.end.toString(),
        })
      );
    }
  }, [selectedRange]);

 // ✅ Llamada a la API cada vez que se cambia el rango
 useEffect(() => {
  const fetchDataWithDate = async () => {
    if (selectedRange?.start && selectedRange?.end) {
      const startFormatted = formatDate(selectedRange.start);
      const endFormatted = formatDate(selectedRange.end);

      console.log("Inicio:", startFormatted);
      console.log("Final:", endFormatted);

      try {
        const result = await executeRequest("Backend.Actions.Deliveries.GetDeliveryStats", {
          parameters: [{ 
            StartDate: startFormatted,
            EndDate: endFormatted,
            ClientId: getClientEntityId
           }],
          sessionId,
        });
        console.log("Datos con rango:", result);

        // 👇 Validar y guardar el valor
        const totalCash = result?.executionResult?.returned?.TotalInCash ?? 0 ;
        const transfer = result?.executionResult?.returned?.TotalInTransfer ?? 0 ;
        const debito = result?.executionResult?.returned?.TotalInDebt ?? 0 ;
        const drumAmounts = result?.executionResult?.returned?.Drum20LAmounts ?? 0 ;
        const drum12LAmounts = result?.executionResult?.returned?.Drum12LAmounts ?? 0 ;
        const siphonAmounts = result?.executionResult?.returned?.SiphonAmounts ?? 0 ;

        setCashPaid(totalCash);
        setTransferPaid(transfer);
        setDevitoPaid(debito)
        console.log("TotalCash :", totalCash);
        console.log("TotalTrasferencia :", transfer);
        setDrum20LAmounts(drumAmounts)
        setDrum12LAmounts(drum12LAmounts)
        setSiphonAmounts(siphonAmounts)
      } catch (err) {
        console.error("Error al obtener datos con fecha:", err);
      }
    }
  };

  fetchDataWithDate();
}, [selectedRange]);


  return (
<div className="mx-2 items-center">
  <NavBar />
 <div className="px-1 py-1 ">
        <div className=" mt-1"> 

          <Button onPress={()=>{navigate('/')}} variant="ghost" size="sm">
            <ArrowLeft className="h-6 w-6" />
          </Button>
     
        <div className="font-semibold text-primary">
         
          <h2 className="text-lg mt-1 font-semibold text-center text-primary">
  {`Stock De ${getFirstName} ${getLastName}`}
</h2>

       
        
         
        </div>
      </div>
        </div>

{/*Fecha*/}


<DateRangePicker
       isRequired
       className="mt-5 "
       value={selectedRange}
       onChange={setSelectedRange}
       label="Filtrar Por Fecha"
    />



   {/*Analisis de rosca */}
 <dl className="mt-5  grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
 {data.map(() => (
  <CircleChartCard
  title="Medios De Pagos"
  color="primary"
  categories={["Efectivo", "Transferencia", "Debito"]}
  chartData={[
    { name: "Efectivo", value: cashPaid },
    { name: "Transferencia", value: transferPaid },
    { name: "Debito", value: debitoPaid }
  ]}
/>
))}
    </dl>
              {/*Analisis de tablar */}
            <dl className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 mt-5">
      {dataPorUnidad.map(({title, value, status, iconName}, index) => (
        <Card
          key={index}
          className="flex flex-col border border-transparent p-4 dark:border-default-100"
        >
          <div
            className={cn("flex h-8 w-8 items-center justify-center rounded-md border p-0.5", {
              "border-success-200 bg-success-50 dark:border-success-100": status === "good",
              "border-warning-200 bg-warning-50 dark:border-warning-100": status === "warn",
              "border-danger-200 bg-danger-50 dark:border-danger-100": status === "danger",
            })}
          >
            {status === "good" ? (
              <Icon className="text-success-500" icon={iconName} width={20} />
            ) : status === "warn" ? (
              <Icon className="text-warning-500" icon={iconName} width={20} />
            ) : (
              <Icon className="text-danger-500" icon={iconName} width={20} />
            )}
          </div>

          <div className="pt-1">
            <dt className="my-2 text-sm font-medium text-default-500">{title}</dt>
            <dd className="text-2xl font-semibold text-default-700">{value}/Ud.</dd>
          </div>
          <Progress
            aria-label="status"
            className="mt-2"
            color={status === "good" ? "success" : status === "warn" ? "warning" : "danger"}
            value={value}
          />
         
        </Card>
      ))}
    </dl>


      
</div>
  );
}

const formatTotal = (total: number) => {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  }).format(total);
};

const CircleChartCard = React.forwardRef<
  HTMLDivElement,
  Omit<CardProps, "children"> & CircleChartProps
>(({className, title, categories, color, chartData, ...props}, ref) => {
  return (
    <Card
      ref={ref}
      className={cn("min-h-[240px] border border-transparent dark:border-default-100", className)}
      {...props}
    >
      <div className="flex flex-col gap-y-2 p-4 pb-0">
        <div className="flex items-center justify-between gap-x-2">
          <dt>
            <h3 className="text-small font-medium text-default-500">{title}</h3>
          </dt>
          
        </div>
      </div>
      <div className="flex h-full flex-wrap items-center justify-center gap-x-2 lg:flex-nowrap">
      <ResponsiveContainer height={200} width="100%">

          <PieChart accessibilityLayer margin={{top: 0, right: 0, left: 0, bottom: 0}}>
            <Tooltip
              content={({label, payload}) => (
                <div className="flex h-8 min-w-[120px] items-center gap-x-2 rounded-medium bg-background px-1 text-tiny shadow-small">
                  <span className="font-medium text-foreground">{label}</span>
                  {payload?.map((p, index) => {
                    const name = p.name;
                    const value = p.value;
                    const category = categories.find((c) => c.toLowerCase() === name) ?? name;

                    return (
                      <div key={`${index}-${name}`} className="flex w-full items-center gap-x-2">
                        <div
                          className="h-2 w-2 flex-none rounded-full"
                          style={{
                            backgroundColor: `hsl(var(--heroui-${color}-${(index + 1) * 200}))`,
                          }}
                        />
                        <div className="flex w-full items-center justify-between gap-x-2 pr-1 text-xs text-default-700">
                          <span className="text-default-500">{category}</span>
                          <span className="font-mono font-medium text-default-700">
                            {formatTotal(value as number)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              cursor={false}
            />
            <Pie
              animationDuration={1000}
              animationEasing="ease"
              data={chartData}
              dataKey="value"
              innerRadius="68%"
              nameKey="name"
              paddingAngle={-20}
              strokeWidth={0}
            >
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`hsl(var(--heroui-${color}-${(index + 1) * 200}))`}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="flex w-full flex-col justify-center gap-4 p-4 text-tiny text-default-500 lg:p-0">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: `hsl(var(--heroui-${color}-${(index + 1) * 200}))`,
                }}
              />
              <span className="capitalize">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
});

CircleChartCard.displayName = "CircleChartCard";
