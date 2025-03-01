'use client'
import React, { useState } from 'react';

const Perfil = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <>
      <div className="flex justify-end">
        <img
          className="h-[38px] w-[38px] mt-4 mr-5 cursor-pointer"
          src="img/pngwing.com.png"
          alt="Perfil"
          onClick={handleImageClick}
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] sm:w-[400px]">
            <h2 className="text-xl font-semibold mb-4">Estamos trabalhando no site</h2>
            <p className="mb-4">Estamos atualizando algumas funcionalidades no site ainda. Por favor, volte mais tarde</p>
            <button
              onClick={handleCloseModal}
              className="w-full p-3 bg-[#42807D] text-white rounded-lg hover:bg-green-500"
            >
              Voltar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Perfil;
