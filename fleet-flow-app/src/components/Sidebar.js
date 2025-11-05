import React from 'react';

const Sidebar = () => {
  return (
    <aside className="flex h-full w-72 flex-col gap-6 bg-white dark:bg-background-dark p-5 shadow-sm" style={{ marginLeft: '20px', borderRadius: '12px' }}>
      <h3 className="text-text-heading dark:text-white font-bold">Filters</h3>
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium text-text-body dark:text-gray-400">Status</label>
        <div className="flex flex-wrap gap-2">
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/20 dark:bg-primary/30 px-3 text-sm font-medium text-primary">All</button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-gray-700/50 px-3 text-sm font-medium text-text-body dark:text-gray-300 hover:bg-gray-200">New</button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-gray-700/50 px-3 text-sm font-medium text-text-body dark:text-gray-300 hover:bg-gray-200">In Progress</button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-gray-700/50 px-3 text-sm font-medium text-text-body dark:text-gray-300 hover:bg-gray-200">Paid</button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium text-text-body dark:text-gray-400">Date Range</label>
        <div className="relative">
          <input className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 h-10 px-3 text-sm" readOnly type="text" value="01/05/2024 - 31/05/2024" />
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">calendar_today</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium text-text-body dark:text-gray-400">Legal Entity</label>
          <select className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 h-10 px-3 text-sm">
            <option>All Entities</option>
            <option>Entity A</option>
            <option>Entity B</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium text-text-body dark:text-gray-400">Fine Issuer</label>
          <select className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 h-10 px-3 text-sm">
            <option>All Issuers</option>
            <option>Prague Police</option>
            <option>Brno Municipal</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium text-text-body dark:text-gray-400">Vehicle</label>
          <select className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 h-10 px-3 text-sm">
            <option>All Vehicles</option>
            <option>4A2 3001</option>
          </select>
        </div>
      </div>
      <div className="mt-auto flex flex-col gap-2 pt-4">
        <button className="flex h-10 w-full cursor-pointer items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white">Apply Filters</button>
        <button className="flex h-10 w-full cursor-pointer items-center justify-center rounded-lg bg-transparent px-4 text-sm font-medium text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700/50">Clear Filters</button>
      </div>
    </aside>
  );
};

export default Sidebar;
