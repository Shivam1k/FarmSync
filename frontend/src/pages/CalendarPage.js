// import React, { useState } from "react";

// const CalendarPage = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());

//   // Get month and year
//   const month = currentDate.toLocaleString("default", { month: "long" });
//   const year = currentDate.getFullYear();

//   // Navigate Months
//   const handlePreviousMonth = () => {
//     setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
//   };

//   const handleNextMonth = () => {
//     setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
//   };

//   // Generate Days for Calendar
//   const getDaysInMonth = () => {
//     const days = [];
//     const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
//     const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

//     // Add empty cells for the days before the first day
//     for (let i = 0; i < firstDay; i++) {
//       days.push(<div key={`empty-${i}`} className="text-center p-4 border bg-gray-100"></div>);
//     }

//     // Add days of the month
//     for (let i = 1; i <= daysInMonth; i++) {
//       days.push(
//         <div
//           key={`day-${i}`}
//           className="text-center p-4 border bg-green-100 hover:bg-green-200 cursor-pointer"
//         >
//           {i}
//         </div>
//       );
//     }

//     return days;
//   };

//   return (
//     <div className="p-6">
//       {/* Header */}
//       <header className="mb-6 text-center">
//         <h1 className="text-3xl font-bold text-green-600">Crop Calendar</h1>
//       </header>

//       {/* Month Navigation */}
//       <div className="flex justify-between items-center mb-4">
//         <button
//           onClick={handlePreviousMonth}
//           className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//         >
//           ← Previous
//         </button>
//         <h2 className="text-xl font-semibold">
//           {month} {year}
//         </h2>
//         <button
//           onClick={handleNextMonth}
//           className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//         >
//           Next →
//         </button>
//       </div>

//       {/* Calendar Grid */}
//       <div className="grid grid-cols-7 gap-2">
//         <div className="text-center font-bold">Sun</div>
//         <div className="text-center font-bold">Mon</div>
//         <div className="text-center font-bold">Tue</div>
//         <div className="text-center font-bold">Wed</div>
//         <div className="text-center font-bold">Thu</div>
//         <div className="text-center font-bold">Fri</div>
//         <div className="text-center font-bold">Sat</div>
//         {getDaysInMonth()}
//       </div>

//       {/* Footer */}
//       <footer className="mt-6 text-center">
//         <p className="text-gray-600">Manage your crops effectively with the calendar!</p>
//       </footer>
//     </div>
//   );
// };

// export default CalendarPage;







// import React, { useState } from "react";

// const CalendarPage = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());

//   // Get month and year
//   const month = currentDate.toLocaleString("default", { month: "long" });
//   const year = currentDate.getFullYear();

//   // Navigate Months
//   const handlePreviousMonth = () => {
//     setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
//   };

//   const handleNextMonth = () => {
//     setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
//   };

//   // Generate Days for Calendar
//   const getDaysInMonth = () => {
//     const days = [];
//     const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
//     const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

//     // Add empty cells for the days before the first day
//     for (let i = 0; i < firstDay; i++) {
//       days.push(<div key={`empty-${i}`} className="text-center p-4 border border-transparent"></div>);
//     }

//     // Add days of the month
//     for (let i = 1; i <= daysInMonth; i++) {
//       days.push(
//         <div
//           key={`day-${i}`}
//           className="text-center p-4 border border-gray-200 bg-white hover:bg-green-100 rounded-lg transition-colors cursor-pointer"
//         >
//           {i}
//         </div>
//       );
//     }

//     return days;
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
//       {/* Header */}
//       <header className="mb-6 text-center">
//         <h1 className="text-4xl font-extrabold text-green-600">Crop Calendar</h1>
//       </header>

//       {/* Month Navigation */}
//       <div className="flex justify-between items-center mb-6 px-4">
//         <button
//           onClick={handlePreviousMonth}
//           className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all"
//         >
//           ← Previous
//         </button>
//         <h2 className="text-2xl font-semibold text-gray-800">{month} {year}</h2>
//         <button
//           onClick={handleNextMonth}
//           className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all"
//         >
//           Next →
//         </button>
//       </div>

//       {/* Calendar Grid */}
//       <div className="grid grid-cols-7 gap-4">
//         <div className="text-center font-bold text-sm text-gray-600">Sun</div>
//         <div className="text-center font-bold text-sm text-gray-600">Mon</div>
//         <div className="text-center font-bold text-sm text-gray-600">Tue</div>
//         <div className="text-center font-bold text-sm text-gray-600">Wed</div>
//         <div className="text-center font-bold text-sm text-gray-600">Thu</div>
//         <div className="text-center font-bold text-sm text-gray-600">Fri</div>
//         <div className="text-center font-bold text-sm text-gray-600">Sat</div>
//         {getDaysInMonth()}
//       </div>

//       {/* Footer */}
//       <footer className="mt-6 text-center text-gray-500 text-sm">
//         <p>Manage your crops effectively with the calendar!</p>
//       </footer>
//     </div>
//   );
// };

// export default CalendarPage;






// import React, { useState } from "react";

// const CalendarPage = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());

//   // Get month and year
//   const month = currentDate.toLocaleString("default", { month: "long" });
//   const year = currentDate.getFullYear();

//   // Navigate Months
//   const handlePreviousMonth = () => {
//     setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
//   };

//   const handleNextMonth = () => {
//     setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
//   };

//   // Generate Days for Calendar
//   const getDaysInMonth = () => {
//     const days = [];
//     const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
//     const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

//     // Add empty cells for the days before the first day
//     for (let i = 0; i < firstDay; i++) {
//       days.push(<div key={`empty-${i}`} className="text-center p-4"></div>);
//     }

//     // Add days of the month
//     for (let i = 1; i <= daysInMonth; i++) {
//       days.push(
//         <div
//           key={`day-${i}`}
//           className="text-center p-4 border border-transparent rounded-lg bg-green-50 hover:bg-green-200 cursor-pointer transition-all"
//         >
//           <div className="w-8 h-8 bg-green-200 rounded-full mx-auto flex items-center justify-center">
//             <span className="text-sm font-semibold">{i}</span>
//           </div>
//         </div>
//       );
//     }

//     return days;
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-green-100 rounded-xl shadow-lg">
//       {/* Header */}
//       <header className="mb-6 text-center">
//         <h1 className="text-4xl font-extrabold text-green-700">Crop Calendar</h1>
//         <p className="text-lg text-green-600">Track your plant growth and harvest schedule</p>
//       </header>

//       {/* Month Navigation */}
//       <div className="flex justify-between items-center mb-6 px-4">
//         <button
//           onClick={handlePreviousMonth}
//           className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-all"
//         >
//           ← Previous
//         </button>
//         <h2 className="text-2xl font-semibold text-gray-800">{month} {year}</h2>
//         <button
//           onClick={handleNextMonth}
//           className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-all"
//         >
//           Next →
//         </button>
//       </div>

//       {/* Calendar Grid */}
//       <div className="grid grid-cols-7 gap-4">
//         <div className="text-center font-bold text-sm text-green-700">Sun</div>
//         <div className="text-center font-bold text-sm text-green-700">Mon</div>
//         <div className="text-center font-bold text-sm text-green-700">Tue</div>
//         <div className="text-center font-bold text-sm text-green-700">Wed</div>
//         <div className="text-center font-bold text-sm text-green-700">Thu</div>
//         <div className="text-center font-bold text-sm text-green-700">Fri</div>
//         <div className="text-center font-bold text-sm text-green-700">Sat</div>
//         {getDaysInMonth()}
//       </div>

//       {/* Footer */}
//       <footer className="mt-6 text-center text-gray-500 text-sm">
//         <p>Manage your crops and plant schedules effectively with this calendar!</p>
//       </footer>
//     </div>
//   );
// };

// export default CalendarPage;





import React, { useState } from "react";

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Get month and year
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  // Navigate Months
  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  // Generate Days for Calendar
  const getDaysInMonth = () => {
    const days = [];
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    // Add empty cells for the days before the first day
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="text-center p-4"></div>);
    }

    // Add days of the month with plant icons and hover animations
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div
          key={`day-${i}`}
          className="text-center p-4 border border-transparent rounded-lg bg-green-50 hover:bg-green-200 cursor-pointer transition-all relative"
        >
          {/* Plant Icon as a Marker */}
          <div className="absolute top-2 left-2 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-xs text-green-700">🌱</span>
          </div>
          <div className="w-8 h-8 bg-green-200 rounded-full mx-auto flex items-center justify-center">
            <span className="text-sm font-semibold">{i}</span>
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-green-100 via-green-200 to-green-300 rounded-xl shadow-lg">
      {/* Header */}
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-extrabold text-green-700 tracking-wide">Crop Calendar</h1>
        <p className="text-lg text-green-600 italic">Track your plants' growth, harvest schedules & more!</p>
      </header>

      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-6 px-4">
        <button
          onClick={handlePreviousMonth}
          className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-all transform hover:scale-105"
        >
          ← Previous
        </button>
        <h2 className="text-2xl font-semibold text-gray-800">{month} {year}</h2>
        <button
          onClick={handleNextMonth}
          className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-all transform hover:scale-105"
        >
          Next →
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-4 text-center text-green-700">
        <div className="font-bold text-sm">Sun</div>
        <div className="font-bold text-sm">Mon</div>
        <div className="font-bold text-sm">Tue</div>
        <div className="font-bold text-sm">Wed</div>
        <div className="font-bold text-sm">Thu</div>
        <div className="font-bold text-sm">Fri</div>
        <div className="font-bold text-sm">Sat</div>
        {getDaysInMonth()}
      </div>

      {/* Footer */}
      <footer className="mt-6 text-center text-gray-500 text-sm">
        <p>Care for your crops, track milestones, and enjoy the green goodness!</p>
      </footer>
    </div>
  );
};

export default CalendarPage;
