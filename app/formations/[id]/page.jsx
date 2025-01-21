"use client";

import React, { useState, useEffect } from "react";
import { formations } from "@/constants";
import NavFormation from "@/components/NavFormation";

export default function FormationPage({ params }) {
    const [formation, setFormation] = useState(null);
    const [selectedChap, setSelectedChap] = useState(null);
    const [id, setId] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            const { id: formationId } = await params;
            setId(formationId);
        };

        fetchData();
    }, [params]);

    useEffect(() => {
        if (id !== null) {
            const selectedFormation = formations.find((f) => f.id === parseInt(id, 10));
            if (selectedFormation) {
                // Add isActive property to each chapter and set first as active
                const updatedChapters = selectedFormation.videoformations[0]?.chapitre?.map((chap, index) => ({
                    ...chap,
                    isActive: index === 0, // Set first chapter as active initially
                }));
                // Update formation with new chapters
                const updatedVideoFormations = selectedFormation.videoformations.map(videoformation => ({
                    ...videoformation,
                    chapitre: updatedChapters
                }))
                setFormation({ ...selectedFormation, videoformations: updatedVideoFormations });

                // Set selected chap to the first
                setSelectedChap(updatedChapters[0]);
            }
        }
    }, [id]);


    if (!formation) {
        return <></>;
    }

    // Handle chapter click
    const handleChapClick = (clickedChap) => {
        // Update isActive property and set current chapter as active
        const updatedChapters = formation.videoformations[0].chapitre.map(chap => ({
            ...chap,
            isActive: chap.id === clickedChap.id,
        }));
        const updatedVideoFormations = formation.videoformations.map(videoformation => ({
            ...videoformation,
            chapitre: updatedChapters
        }))
        setFormation({ ...formation, videoformations: updatedVideoFormations });
        setSelectedChap(clickedChap);

    };


    return (
        <div className="flex flex-col md:flex-row h-screen ">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 bg-gray-100  border-b md:border-b-0 md:border-r fixed md:relative h-full overflow-y-auto">
                <div className="sticky top-0 bg-gray-100 z-10 h-16 py-4">
                    <h2 className="text-xl font-bold mx-4 co-primary">Chapitres</h2>
                </div>                <ul className=" mt-4">
                    {formation.videoformations?.[0]?.chapitre?.length > 0 ? (
                        formation.videoformations[0].chapitre.map((chap) => (
                            <li
                                key={chap.id}
                                onClick={() => handleChapClick(chap)}
                                className={`px-4 py-2 hover:bg-gray-300 cursor-pointer border-b border-blue-400 flex justify-between items-center ${chap.isActive ? 'bg-blue-400' : 'bg-gray-200'
                                    } `}
                                disabled={!chap.isActive}
                            >
                                <h6 className={`font-medium ${!chap.isActive ? 'text-gray-500' : ''}`}>{chap.title}</h6>
                                <div className="">
                                    <p className={`text-sm ${!chap.isActive ? 'text-gray-500' : 'text-gray-600'}`}>{chap.duration}</p>
                                    <p className={`text-sm ${!chap.isActive ? 'text-gray-500' : 'text-gray-600'}`}>Score:{chap.score}</p>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500">No chapters available.</p>
                    )}
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1">
                <NavFormation />
                <div className="p-4 md:p-8">
                    <div className="mb-4">
                        <h1 className="text-2xl font-bold">{formation.title}</h1>
                        <p className="text-gray-700">{formation.description}</p>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-xl font-bold">{selectedChap.description}</h2>
                        {selectedChap && (
                        <div className="mt-6">
                            <h2 className="text-xl font-bold">{selectedChap.title}</h2>
                            {selectedChap.video && (
                                <iframe
                                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                                width="800"
                                height="500"
                                src={selectedChap.video} allowfullscreen >
                            </iframe>   
                            )}
                        </div>
                    )}
                                             
                    </div>
                </div>
            </div>
        </div>
    );
}
