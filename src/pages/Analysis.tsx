"use client";

import type {ButtonProps, CardProps} from "@heroui/react";
import {parseDate} from "@internationalized/date";
import React, { useEffect } from "react";
import {ResponsiveContainer, PieChart, Pie, Tooltip, Cell} from "recharts";
import {
  Card,
  Button,
  Select,
  SelectItem,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  cn,
  Progress,

  DateRangePicker,
} from "@heroui/react";
import {Icon} from "@iconify/react";
import NavBar from "../components/NavBar";
import { useApi } from "../config/useUnisave";

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
const data1 = [
  {
    title: "Server Load",
    value: 38,
    status: "good",
    iconName: "solar:server-square-linear",
  },
  {
    title: "Server Load",
    value: 98,
    status: "danger",
    iconName: "solar:server-square-linear",
  },
  {
    title: "Average Memory Used",
    value: 64,
    status: "warn",
    iconName: "solar:sd-card-linear",
  },
];
const data: CircleChartProps[] = [
  {
    title: "Analisis",
    categories: ["Pagado Efectivo", "Pagado Transferencia", "Fiados", "De Más"],
    color: "warning",
    chartData: [
      {name: "Pagado Efectivo", value: 600},
      {name: "Pagado Transferencia", value: 300},
      {name: "Fiados", value: 300},
      {name: "De Más", value: 100},
    ],
  },
  
];

export default function Analisis() {
  const { executeRequest, } = useApi();
  const sessionId = localStorage.getItem('sessionId');
  // Asegurar que el tema se aplica correctamente en el cliente
  useEffect(() => {


    // Hacer una solicitud al cargar el componente
    const fetchData = async () => {
      try {
        const result = await executeRequest('Backend.Actions.Deliveries.GetDeliveryStats', {
          parameters: [{ TimeFilter:"" }],
          sessionId: sessionId
        });
        // Check if returned is null

        //setSchedule(result?.executionResult?.returned)

        console.log(result)
      } catch (err) {
        console.error('API Request Error:', err);
      }

    };
    fetchData();

  }, []);

  return (
<div>
  <NavBar />


{/*Fecha*/}


<DateRangePicker
      isRequired
      className="max-w-xs"
      defaultValue={{
        start: parseDate("2024-04-01"),
        end: parseDate("2024-04-08"),
      }}
      label="Filtrar Por Fecha"
    />



   {/*Analisis de rosca */}
 <dl className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      {data.map((item, index) => (
        <CircleChartCard key={index} {...item} />
      ))}
    </dl>
              {/*Analisis de tablar */}
            <dl className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 mt-5">
      {data1.map(({title, value, status, iconName}, index) => (
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
            <dd className="text-2xl font-semibold text-default-700">{value}%</dd>
          </div>
          <Progress
            aria-label="status"
            className="mt-2"
            color={status === "good" ? "success" : status === "warn" ? "warning" : "danger"}
            value={value}
          />
          <Dropdown
            classNames={{
              content: "min-w-[120px]",
            }}
            placement="bottom-end"
          >
            <DropdownTrigger>
              <Button
                isIconOnly
                className="absolute right-2 top-2 w-auto rounded-full"
                size="sm"
                variant="light"
              >
                <Icon height={16} icon="solar:menu-dots-bold" width={16} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              itemClasses={{
                title: "text-tiny",
              }}
              variant="flat"
            >
              <DropdownItem key="view-details">View Details</DropdownItem>
              <DropdownItem key="export-data">Export Data</DropdownItem>
              <DropdownItem key="set-alert">Set Alert</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Card>
      ))}
    </dl>


      
</div>
  );
}

const formatTotal = (total: number) => {
  return total >= 1000 ? `${(total / 1000).toFixed(1)}K` : total;
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
          <div className="flex items-center justify-end gap-x-2">
            <Select
              aria-label="Time Range"
              classNames={{
                trigger: "min-w-[100px] min-h-7 h-7",
                value: "text-tiny !text-default-500",
                selectorIcon: "text-default-500",
                popoverContent: "min-w-[120px]",
              }}
              defaultSelectedKeys={["per-day"]}
              listboxProps={{
                itemClasses: {
                  title: "text-tiny",
                },
              }}
              placeholder="Per Day"
              size="sm"
            >
              <SelectItem key="per-day">Por Dia</SelectItem>
              <SelectItem key="per-week">Por Semana</SelectItem>
              <SelectItem key="per-month">Por Mes</SelectItem>
            </Select>
            <Dropdown
              classNames={{
                content: "min-w-[120px]",
              }}
              placement="bottom-end"
            >
              <DropdownTrigger>
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <Icon height={16} icon="solar:menu-dots-bold" width={16} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                itemClasses={{
                  title: "text-tiny",
                }}
                variant="flat"
              >
                <DropdownItem key="view-details">View Details</DropdownItem>
                <DropdownItem key="export-data">Export Data</DropdownItem>
                <DropdownItem key="set-alert">Set Alert</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="flex h-full flex-wrap items-center justify-center gap-x-2 lg:flex-nowrap">
        <ResponsiveContainer
          className="[&_.recharts-surface]:outline-none"
          height={200}
          width="100%"
        >
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
