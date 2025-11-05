import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import FineDetailModal from './components/FineDetailModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFine, setSelectedFine] = useState(null);

  const handleOpenModal = (fine) => {
    setSelectedFine(fine);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFine(null);
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-body dark:text-gray-300">
      <div className="relative flex h-screen w-full flex-col overflow-hidden">
        <Header />
        <div className="flex h-full w-full pt-[130px] pr-5 pb-5">
          <Sidebar />
          <MainContent onOpenModal={handleOpenModal} />
        </div>
        {isModalOpen && <FineDetailModal fine={selectedFine} onClose={handleCloseModal} />}
      </div>
    </div>
  );
}

export default App;
