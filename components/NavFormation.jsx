import React from 'react';
import { useRouter } from 'next/navigation'; 
import Image from 'next/image';

const NavFormation = () => {
  const router = useRouter();

  // Function to handle the "Back home" button
  const handleBackClick = () => {
    router.push('/');
  };

  return (
    <nav className="bg-gray-100 p-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center ">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold co-primary">BLENDED OFPPT</span>
        </div>

        {/* Back Button */}
        <Image
          onClick={handleBackClick}
          src="/back.svg"
          alt="Back"
          width={50}
          height={50}
          className="cursor-pointer"
        />

          
      </div>
    </nav>
  );
};

export default NavFormation;
