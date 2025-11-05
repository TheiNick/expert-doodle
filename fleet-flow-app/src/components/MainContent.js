import React from 'react';
import FinesTable from './FinesTable';

const MainContent = ({ onOpenModal }) => {
  return (
    <main className="flex-1 pl-5">
      <div className="flex h-full flex-col gap-5">
        <div className="flex flex-wrap justify-between gap-3 items-center">
          <div className="flex flex-col gap-1">
            <p className="text-text-heading dark:text-white text-3xl font-bold">Traffic Fines Management</p>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal">View, filter, and manage all traffic fines for your fleet.</p>
          </div>
          <div className="flex h-10 w-64 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700/50 p-1">
            <label className="flex h-full flex-1 cursor-pointer items-center justify-center rounded-lg px-2 text-sm font-medium has-[:checked]:bg-white dark:has-[:checked]:bg-gray-900/50 has-[:checked]:text-text-heading dark:has-[:checked]:text-white text-gray-500">
              <span className="truncate">Table View</span>
              <input defaultChecked className="invisible w-0" name="view-toggle" type="radio" value="Table View" />
            </label>
            <label className="flex h-full flex-1 cursor-pointer items-center justify-center rounded-lg px-2 text-sm font-medium has-[:checked]:bg-white dark:has-[:checked]:bg-gray-900/50 has-[:checked]:text-text-heading dark:has-[:checked]:text-white text-gray-500">
              <span className="truncate">Card View</span>
              <input className="invisible w-0" name="view-toggle" type="radio" value="Card View" />
            </label>
          </div>
        </div>
        <FinesTable onOpenModal={onOpenModal} />
      </div>
    </main>
  );
};

export default MainContent;
