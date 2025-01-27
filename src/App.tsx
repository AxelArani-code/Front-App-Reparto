import React, { useState } from 'react';
import NavigationButton from './components/NavigationButton';
import HeaderNav from './components/HeaderNav';


const ScheduleCard = ({ day, date, route, borderColor }) => (
  <div className={`bg-card rounded-lg p-4 mb-4 border-l-4 ${borderColor}`}>
    <h2 className="font-semibold">Día - {day}</h2>
    <p className='ext-muted-foreground'>{date}</p>
    <p className='text-muted-foreground'>Recorrido: {route}</p>
  </div>
);


function App() {
  const [count, setCount] = useState(0);

  const scheduleData = [
    { day: 'Lunes', date: '24/01/24', route: 'Sarmiento, Toledano, Constitución, etc', borderColor: 'border-red-500' },
    { day: 'Martes', date: '24/01/24', route: 'Sarmiento, Toledano, Constitución, etc', borderColor: 'border-orange-500' },
    { day: 'Miércoles', date: '24/01/24', route: 'Sarmiento, Toledano, Constitución, etc', borderColor: 'border-blue-500' },
    { day: 'Jueves', date: '24/01/24', route: 'Sarmiento, Toledano, Constitución, etc', borderColor: 'border-purple-500' },
    { day: 'Viernes', date: '24/01/24', route: 'Sarmiento, Toledano, Constitución, etc', borderColor: 'border-purple-500' },
    
  ];

  return (
    <div className="flex flex-col items-center bg-background p-4 rounded-lg shadow-lg max-w-md mx-auto">
      <HeaderNav/>
      {scheduleData.map((schedule, index) => (
        <ScheduleCard key={index} {...schedule} />
      ))}
      <NavigationButton/>
      <ScheduleCard/>
    </div>
  );
}

export default App;
