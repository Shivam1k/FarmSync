import React from "react";

const teamMembers = [
  {
    name: "Shivam Kumar",
    role: "Full-Stack Developer",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    description: "An enthusiastic developer with expertise in Java, React, and Golang.",
  },
  {
    name: "Aarav Gupta",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    description: "Passionate about creating user-centered designs and seamless experiences.",
  },
  {
    name: "Ishita Sharma",
    role: "Project Manager",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    description: "Ensures smooth project workflows and timely deliveries.",
  },
  {
    name: "Rahul Verma",
    role: "Data Analyst",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    description: "Specializes in analyzing and interpreting data for actionable insights.",
  },
];

const TeamPage = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 min-h-screen py-10">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white drop-shadow-md">
          Meet Our Team
        </h1>
        <p className="text-gray-100 mt-4 text-lg">
          Passionate individuals driving innovation and success
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-5">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-green-500 font-medium">{member.role}</p>
              <p className="text-gray-600 mt-3">{member.description}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 hover:opacity-80 transition duration-300">
              <div className="absolute bottom-5 left-5 text-white">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
