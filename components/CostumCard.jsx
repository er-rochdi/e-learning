import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CostumCard = ({ formations = [] }) => {
  if (formations.length === 0) {
    return (
      <main className="p-8">
        <h2 className="text-xl font-semibold mb-4">Available Courses</h2>
        <p className="text-gray-500">No courses available at the moment. Please check back later.</p>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h2 className="text-xl font-semibold mb-4">Available Courses</h2>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {formations.map((formation) => (
          <li key={formation.id} className="p-4 mb-4 bg-white shadow rounded hover:shadow-lg transition">
            <Image src={formation.image} alt={formation.title} width={420} height={200} />
            <h3  className="text-lg font-semibold mt-2">{formation.title}</h3>
            <p className="text-gray-600">{formation.description}</p>
            <Link href={`/courses/${formation.id}`} className="text-blue-500 hover:underline">
            View Details
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CostumCard;
