'use client';
import React, { useState } from "react";
import Image from "next/image";

const CartFormation = ({ formations = [] }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  if (formations.length === 0) {
    return <p>No formation found!</p>;
  }
  const handleFormationPage = (idformation) => {
    window.location.href = `/formations/${idformation}`;
  }

  return (
    <div>
      <div className="">
        {formations.videoformations.map((formation) => (
          <div key={formation.id} className="flex justify-center justify-items-center gap-4 flex-col sm:flex-row">
            <div className="bg-white rounded-md p-6 border shadow-sm">
              {/* Formation Card */}
              <Image
                src={formation.image || "/default-image.jpg"}
                alt={formation.title}
                width={500}
                height={400}
                className="rounded-md cursor-pointer w-full"
                onClick={() => toggleAccordion(formation.id)}
              />
              <div className="flex items-center mt-4">
                <Image
                  src="/education.svg"
                  alt="education"
                  width={20}
                  height={20}
                />
                <h4
                  className="font-semibold my-3 px-2 cursor-pointer"
                  onClick={() => toggleAccordion(formation.id)}
                >
                  {formation.title}
                </h4>
              </div>
              <span className="text-gray-500 mt-2">{formation.duration}</span>
            </div>
            <div className="mt-6 w-full">
              <h6 className="font-bold">Objectif:</h6>
              <p className="text-gray-600">{formation.objectif}</p>
              <h6 className="font-bold mt-4">Description:</h6>
              <p className="text-gray-600">{formation.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      
      {formations.videoformations.map(
        (formation) =>
          openAccordion === formation.id && formation.chapitre && (
            <div
              key={formation.id}
              className="mt-6 bg-white rounded-md p-4 border shadow-sm"
            >
              <h5 className="font-bold mb-2">Chapitres:</h5>
              {/* add border top  */}
                <div className="border-t border-blue-600 my-2"></div>
              <ul className="space-y-2">
                {formation.chapitre.map((chap) => (
                  <li
                    key={chap.id}
                    className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleFormationPage(chap.formationId)}
                  >
                    <div className="flex items-center justify-between">
                    <div className="flex items-center">
                    <Image src="/education.svg" alt="education" width={20} height={20} />
                    <h6 className="font-medium px-2">{chap.title}</h6>
                    </div>
                    <div className="flex items-center">
                    <Image src="/complete.svg" alt="education" width={20} height={20} className="" />
                    <span className="text-sm text-gray-600 px-2">{chap.score}</span>
                    <span className="text-xs text-gray-500 px-2">
                     {chap.duration}
                    </span>
                    </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )
      )}
    </div>
  );
};

export default CartFormation;
