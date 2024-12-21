import React from "react";
import { formations } from "@/constants";
import Image from "next/image";

export default async function FormationPage(props) {
  const params = await props.params; // Await the params promise
  const { id } = params;

  // Find the formation based on ID
  const formation = formations.find((f) => f.id === parseInt(id));

  if (!formation) {
    return <p>Formation not found!</p>;
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 border-r">
        <h2 className="text-xl font-bold mb-4">Formation Details</h2>
        <ul className="space-y-2">
          {formation.chapitre &&
            formation.chapitre.map((chap) => (
              <li
                key={chap.id}
                className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                <h6 className="font-medium">{chap.title}</h6>
                <p className="text-sm text-gray-600">{chap.description}</p>
              </li>
            ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">{formation.title}</h1>
          <p className="text-gray-700">{formation.description}</p>
        </div>
        <Image
          src={formation.image}
          alt={formation.title}
          width={600}
          height={400}
          className="rounded-md"
        />
      </div>
    </div>
  );
}
