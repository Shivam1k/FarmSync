
// import React, { useState, useEffect } from "react";

// const CalendarPage = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [reminders, setReminders] = useState({}); // To store reminders
//   const [showModal, setShowModal] = useState(false); // Modal state
//   const [selectedDate, setSelectedDate] = useState(null); // Currently selected date
//   const [label, setLabel] = useState("");
//   const [time, setTime] = useState("");

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

//     // Add days of the month with labels
//     for (let i = 1; i <= daysInMonth; i++) {
//       const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${i}`;
//       const hasReminder = reminders[dateKey];

//       days.push(
//         <div
//           key={`day-${i}`}
//           className="text-center p-4 border border-transparent rounded-lg bg-green-50 hover:bg-green-200 cursor-pointer transition-all relative"
//           onClick={() => openModal(i)}
//         >
//           <div className="w-8 h-8 bg-green-200 rounded-full mx-auto flex items-center justify-center">
//             <span className="text-sm font-semibold">{i}</span>
//           </div>
//           {/* Show label if present */}
//           {hasReminder && (
//             <div className="text-xs mt-2 text-green-800">
//               <i className="fas fa-bell"></i> {hasReminder.label}
//             </div>
//           )}
//         </div>
//       );
//     }

//     return days;
//   };

//   // Open modal for adding a reminder
//   const openModal = (day) => {
//     setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
//     setShowModal(true);
//   };

//   // Close modal
//   const closeModal = () => {
//     setLabel("");
//     setTime("");
//     setShowModal(false);
//   };

//   // Save reminder
//   const saveReminder = () => {
//     if (selectedDate && label && time) {
//       const dateKey = selectedDate.toISOString().split("T")[0];
//       setReminders((prev) => ({
//         ...prev,
//         [dateKey]: { label, time },
//       }));
//       closeModal();
//     } else {
//       alert("Please fill out all fields.");
//     }
//   };

//   // Trigger reminder alerts
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date();
//       const currentDateKey = now.toISOString().split("T")[0];
//       const currentTime = now.toTimeString().slice(0, 5);

//       if (reminders[currentDateKey] && reminders[currentDateKey].time === currentTime) {
//         alert(`Reminder: ${reminders[currentDateKey].label}`);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [reminders]);

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-green-100 via-green-200 to-green-300 rounded-xl shadow-lg">
//       {/* Header */}
//       <header className="mb-6 text-center">
//         <h1 className="text-4xl font-extrabold text-green-700 tracking-wide">Crop Calendar</h1>
//         <p className="text-lg text-green-600 italic">Track your plants' growth, harvest schedules & more!</p>
//       </header>

//       {/* Month Navigation */}
//       <div className="flex justify-between items-center mb-6 px-4">
//         <button
//           onClick={handlePreviousMonth}
//           className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-all transform hover:scale-105"
//         >
//           ← Previous
//         </button>
//         <h2 className="text-2xl font-semibold text-gray-800">
//           {month} {year}
//         </h2>
//         <button
//           onClick={handleNextMonth}
//           className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-all transform hover:scale-105"
//         >
//           Next →
//         </button>
//       </div>

//       {/* Calendar Grid */}
//       <div className="grid grid-cols-7 gap-4 text-center text-green-700">
//         <div className="font-bold text-sm">Sun</div>
//         <div className="font-bold text-sm">Mon</div>
//         <div className="font-bold text-sm">Tue</div>
//         <div className="font-bold text-sm">Wed</div>
//         <div className="font-bold text-sm">Thu</div>
//         <div className="font-bold text-sm">Fri</div>
//         <div className="font-bold text-sm">Sat</div>
//         {getDaysInMonth()}
//       </div>

//       {/* Footer */}
//       <footer className="mt-6 text-center text-gray-500 text-sm">
//         <p>Care for your crops, track milestones, and enjoy the green goodness!</p>
//       </footer>

//       {/* Reminder Modal */}
//       {showModal && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
//             <h2 className="text-lg font-bold text-green-700 mb-4">Add Reminder</h2>
//             <label className="block text-sm font-semibold mb-2">
//               Label
//               <input
//                 type="text"
//                 className="form-control w-full p-2 border rounded-md"
//                 value={label}
//                 onChange={(e) => setLabel(e.target.value)}
//               />
//             </label>
//             <label className="block text-sm font-semibold mb-4">
//               Time (HH:MM)
//               <input
//                 type="time"
//                 className="form-control w-full p-2 border rounded-md"
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//               />
//             </label>
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={closeModal}
//                 className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={saveReminder}
//                 className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CalendarPage;




import React, { useState, useEffect } from "react";

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 0, 1)); // Set the starting year to 2024
  const [reminders, setReminders] = useState({}); // To store reminders
  const [showModal, setShowModal] = useState(false); // Modal state
  const [selectedDate, setSelectedDate] = useState(null); // Currently selected date
  const [label, setLabel] = useState("");
  const [time, setTime] = useState("");

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

    // Add days of the month with labels
    for (let i = 1; i <= daysInMonth; i++) {
      const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${i}`;
      const hasReminder = reminders[dateKey];

      days.push(
        <div
          key={`day-${i}`}
          className="text-center p-4 border border-transparent rounded-lg bg-green-50 hover:bg-green-200 cursor-pointer transition-all relative"
          onClick={() => openModal(i)}
        >
          <div className="w-8 h-8 bg-green-200 rounded-full mx-auto flex items-center justify-center">
            <span className="text-sm font-semibold">{i}</span>
          </div>
          {/* Show label if present */}
          {hasReminder && (
            <div className="text-xs mt-2 text-green-800">
              <i className="fas fa-bell"></i> {hasReminder.label}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  // Open modal for adding a reminder
  const openModal = (day) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setLabel("");
    setTime("");
    setShowModal(false);
  };

  // Save reminder
  const saveReminder = () => {
    if (selectedDate && label && time) {
      const dateKey = selectedDate.toISOString().split("T")[0];
      setReminders((prev) => ({
        ...prev,
        [dateKey]: { label, time },
      }));
      closeModal();
    } else {
      alert("Please fill out all fields.");
    }
  };

  // Trigger reminder alerts
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentDateKey = now.toISOString().split("T")[0];
      const currentTime = now.toTimeString().slice(0, 5);

      if (reminders[currentDateKey] && reminders[currentDateKey].time === currentTime) {
        alert(`Reminder: ${reminders[currentDateKey].label}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [reminders]);

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
        <h2 className="text-2xl font-semibold text-gray-800">
          {month} {year}
        </h2>
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

      {/* Reminder Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-lg font-bold text-green-700 mb-4">Add Reminder</h2>
            <label className="block text-sm font-semibold mb-2">
              Label
              <input
                type="text"
                className="form-control w-full p-2 border rounded-md"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
              />
            </label>
            <label className="block text-sm font-semibold mb-4">
              Time (HH:MM)
              <input
                type="time"
                className="form-control w-full p-2 border rounded-md"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </label>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={saveReminder}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
