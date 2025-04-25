
import CreateDay from "../layout/CreateDay";

export default function Landing() {
  return (
    <div className="font-sans ">

    {/* Hero Section */}
    <section className="py-16 px-4 md:px-32">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Organiza tu día, <span className="text-blue-600">entrega mejor</span> 
          </h1>
          <p className="text-blue-600 text-2xl mt-4">¿Qué es RepartoApp?</p>
          <p className="text-gray-600 mt-6">
          Es una app web pensada exclusivamente para repartidores de agua. Te permite organizar tus días de trabajo, registrar cada entrega y comunicarte rápidamente con tus clientes.
          </p>
          <div className="mt-6 items-center w-full max-w-md">
                  <CreateDay />
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:ml-12">
          
          <img src="/iphone_1.png" alt="Device Mockup" className="w-90 md:w-100" />
        </div>
      </div>
    </section>

    

    {/* Features Section */}
    <section className="relative">
      {/* Black Background Block Behind the Title */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-black z-0 rounded-b-[40px] overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-start pt-12">
          <div className="w-[300px] h-[300px] bg-[radial-gradient(circle,_#ffffff20,_transparent_70%)] rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 py-24 px-4 max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-semibold mb-16 text-white">
        Usar RepartoApp <span className="text-blue-500">Es Facil!</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="bg-white text-black rounded-[28px] p-6 shadow-xl flex flex-col items-center">
            <img src="/iphone_4.png" alt="QR" className="mb-6 h-48 object-contain" />
            <p className="text-lg font-medium">Organización total</p>
            <p className="text-gray-600 mt-6">
            Planificá cada día con tus clientes asignados. Sabés a quién vas, qué llevás y cuándo.
          </p>
          </div>
          <div className="bg-white text-black rounded-[28px] p-6 shadow-xl flex flex-col items-center">
            <img src="/iphone_3.png" alt="Transaction" className="mb-6 h-48 object-contain" />
            <p className="text-lg font-medium">Historial automático de entregas
            </p>
            <p className="text-gray-600 mt-6">
            Cada registro queda guardado. No necesitás llevar papeles ni memorizar pedidos.
          </p>
          </div>
          <div className="bg-white text-black rounded-[28px] p-6 shadow-xl flex flex-col items-center">
          <img src="/iphone_2.png" alt="QR" className="mb-6 h-48 object-contain" />
            <p className="text-lg font-medium">Conexión rápida con clientes.</p>
            <p className="text-gray-600 mt-6">
            Cada cliente tiene un botón de WhatsApp directo, para que puedas avisarle en segundos cuándo estás llegando o confirmar pedidos.
           </p>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className=" py-10 px-6 md:px-32">
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div>
          <h4 className="text-xl font-bold text-blue-700">Repart-Beta</h4>
          <p className="text-sm text-gray-500 mt-2">© Company 2025</p>
          
        </div>
        <div className="mt-6 md:mt-0 grid grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold">Creadores</h5>
            <ul className="text-sm text-gray-600 space-y-2 mt-2">
              <li>Axel Aranibar</li>
              <li>Nicolas Manzanares</li>
             
            </ul>
          </div>
         
        </div>
      </div>
    </footer>
  </div>
  )
}
