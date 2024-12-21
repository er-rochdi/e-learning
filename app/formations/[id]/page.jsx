"use client";

import React, { useState, useEffect } from "react";
import { formations } from "@/constants";
import Image from "next/image";
import NavFormation from "@/components/NavFormation";

export default function FormationPage({ params }) {
    const [formation, setFormation] = useState(null);
    const [selectedChap, setSelectedChap] = useState(null);
    const [id, setId] = useState(null);

    // Use React.use() to unwrap the `params` promise
    useEffect(() => {
        const fetchData = async () => {
            // Wait for params to resolve
            const { id: formationId } = await params;
            setId(formationId);
        };

        fetchData();
    }, [params]);

    useEffect(() => {
        if (id !== null) {
            // Simulate async data fetch based on `id`
            const selectedFormation = formations.find((f) => f.id === parseInt(id, 10));
            if (selectedFormation) {
                setFormation(selectedFormation);
                setSelectedChap(selectedFormation.videoformations[0]?.chapitre[0]);
            }
        }
    }, [id]);

    // Handle cases where the formation is not found
    if (!formation) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl font-bold text-red-500">Formation not found!</p>
            </div>
        );
    }

    // Handle chapter click
    const handleChapClick = (chap) => {
        setSelectedChap(chap);
    };

    return (
        <div className="flex h-screen">

            {/* Sidebar */}
            <div className="w-1/4 bg-gray-100 p-4 border-r">
                <h2 className="text-xl font-bold my-4">Chapters</h2>
                <ul className="space-y-2">
                    {formation.videoformations?.[0]?.chapitre?.length > 0 ? (
                        formation.videoformations[0].chapitre.map((chap) => (
                            <li
                                key={chap.id}
                                onClick={() => handleChapClick(chap)} // Handle chapter click
                                className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer"
                            >
                                <h6 className="font-medium">{chap.title}</h6>
                                <p className="text-sm text-gray-600">Duration: {chap.duration}</p>
                                <p className="text-sm text-gray-600">Score: {chap.score}</p>
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
                <div className="p-8">
                <div className="mb-4">
                    <h1 className="text-2xl font-bold">{formation.title}</h1>
                    <p className="text-gray-700">{formation.description}</p>
                </div>

                {/* Display content for selected chapter */}
                {selectedChap && (
                    <div className="mt-6">
                        <h2 className="text-xl font-bold">{selectedChap.title}</h2>
                        <p className="text-gray-600">Duration: {selectedChap.duration}</p>
                        <p className="text-gray-600">Score: {selectedChap.score}</p>
                        {selectedChap.video && (
                            <iframe
                                src={selectedChap.video}
                                title={selectedChap.title}
                                className="w-full h-[500px] rounded-md mt-2"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                )}
                </div>
            </div>
        </div>
    );
}
