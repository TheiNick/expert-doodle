import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 flex h-[90px] items-center justify-between border-b border-gray-200/80 bg-white dark:bg-background-dark dark:border-gray-700/80 px-5 shadow-sm" style={{ margin: '0 20px', top: '20px', borderRadius: '12px', width: 'calc(100% - 40px)' }}>
      <div className="flex items-center gap-4">
        <div className="text-primary size-6">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-text-heading dark:text-white text-xl font-bold">FleetFlow</h2>
      </div>
      <nav className="flex items-center gap-6">
        <a className="text-text-body dark:text-gray-300 text-sm font-medium hover:text-primary" href="#">Dashboard</a>
        <a className="text-text-body dark:text-gray-300 text-sm font-medium hover:text-primary" href="#">Vehicles</a>
        <a className="text-primary dark:text-primary text-sm font-bold border-b-2 border-primary pb-1" href="#">Fines</a>
        <a className="text-text-body dark:text-gray-300 text-sm font-medium hover:text-primary" href="#">Reports</a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700/50 text-text-body dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600/50">
          <span className="material-symbols-outlined text-xl">notifications</span>
        </button>
        <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700/50 text-text-body dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600/50">
          <span className="material-symbols-outlined text-xl">settings</span>
        </button>
        <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQnoIoIsuuEDUNI0sm4dg2SfdxDk3iyb6yxV0V4rnD1t2mPEavcREsQ4ZmXOKjQOwu7D3kko168kmqgRFhtNpHIu5ZhjunU5-LRZfCBmmYD9fufVWpFp_znUDeN6J4F1dsmjDTWwqxLRCN8-AWuO7_8I9w5WH5IzQOFlXBOyDaZM02C9a9M9pQEDuzhZPxH0dDnhMS7wMi2hBIsCfPcWPGfNwfCekEkrqd7JeAx-esEGm7wnX1bAtLKLibc9qGGbJ077NG1x0wbNM")' }}></div>
      </div>
    </header>
  );
};

export default Header;
