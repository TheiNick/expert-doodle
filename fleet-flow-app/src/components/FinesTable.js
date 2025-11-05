import React from 'react';

const fines = [
  {
    id: '#MPP-24-1054',
    dateReceived: 'May 15, 2024',
    issuer: 'Prague Police',
    issuerCountry: 'Czech Republic',
    issuerFlag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXb5CiLsVJTjlC7vvsrMM8tZZFZdraLFEU_FoSboSxn8c9eSrkZm8vmIDQnPU_mg3N3rIEkNLLHO_arXT4aCWGwaYYSj1BLv19HBMlyizSuLGxr-pYC89qr3xEK1y3-2HrTftkDayfFkYbjslDAUERk1bWhrNYRivYkkVvFBbw2aUvg7Q1EivfQc0D8bRUYWCk60_I5jaXjIRMK_BoOwLAjuv3PQ7Qj5Pan0pdaDFrH6lFU5I77P3qtoFMPOESsk7WPSDWzeb_pWQ',
    vehicle: '4A2 3001 - Škoda Octavia',
    licensePlate: '4A2 3001',
    vehicleMake: 'Škoda Octavia',
    amount: '1,500 Kč',
    dueDate: 'June 14, 2024',
    status: 'New',
    infractionDetails: 'Exceeding speed limit in a residential area. Recorded at 68 km/h in a 50 km/h zone.',
    document: 'original_fine_notice.pdf',
    documentSize: '1.2 MB',
  },
  {
    id: '#BRN-24-0812',
    dateReceived: 'May 10, 2024',
    issuer: 'Brno Municipal',
    issuerCountry: 'Czech Republic',
    issuerFlag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGVp3Q0DC4RiZoHGWge3L5JICk2WC8evGaFiN-ZBxS-zV23jnH4r5jAf34jSA7gv-FGGHZYgl0OE9ZCyLCHEbsKjwJwetusNxQW5Gmj06yGY7eoM3AltLbpn6kBwD4YGAnfpcYgPkgTr0Y-ZiBOydc55uCbgAuzEy4Iwy70oqVfbsgWzdxxabPfA5jjABekZJLQLE-ndQ2MLrRN6VqL4mrQso1p4-HtLg8ZozpuCoR_tjufmSJ_JXoSN6cYVChuP5zKkSHqlZzviQ',
    vehicle: '8B1 5529 - VW Passat',
    licensePlate: '8B1 5529',
    vehicleMake: 'VW Passat',
    amount: '500 Kč',
    dueDate: 'June 9, 2024',
    status: 'In Progress',
    infractionDetails: 'Illegal parking.',
    document: 'brno_fine.pdf',
    documentSize: '800 KB',
  },
  {
    id: '#OST-24-9133',
    dateReceived: 'April 28, 2024',
    issuer: 'Ostrava Police',
    issuerCountry: 'Czech Republic',
    issuerFlag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpS_BfUYBL931-7-nPigJKBoFIYJIk-sl3w3G218gncDbJZLgmEoxPXrhCObqAgCNxN7a38-EKlzK2lEarshdn0TKAwO4DVcazGr4V9v0OdpD68vuMfuEQGfcLF43Bw8-Qd052CFQ7QjDSSgL5L6nUonAWV_5LUBDOFA702oGnNq3BhDZTu2gMaFaZUwO2NKuys7XAchft9O_ff5e-YxyekMBH-nHttu1eiyYYdT6Sr5Swni4efoUmrGIRsYXOJaYzR7LwkD8LNHw',
    vehicle: '1AC 8802 - Hyundai i30',
    licensePlate: '1AC 8802',
    vehicleMake: 'Hyundai i30',
    amount: '2,000 Kč',
    dueDate: 'May 28, 2024',
    status: 'Overdue',
    infractionDetails: 'Running a red light.',
    document: 'ostrava_fine.pdf',
    documentSize: '1.5 MB',
  },
  {
    id: '#DE-24-5151',
    dateReceived: 'April 15, 2024',
    issuer: 'Polizei Dresden',
    issuerCountry: 'Germany',
    issuerFlag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCme5ySXWE_b4SIGbACL1urPFTKUeTHZxaIO1yMMDdqoaecTCElkksNi99UA28KsYeN-SacMVgg9gNkentlTn6RiyXYl56_RruVkT79me5bIVyqY8veoFiWc-SIpNK2zZI597IW9KY8OiKvbKNGlnVuG3_k4ez2mKreaL3WRjpYQeAcRQ7wruKsbxsdBuI7jarCrt9spFIynfTgyVILp1uqoMaCOqkUfQsYRRIr5xe2gIdr0i8E5kzHG8FC6bKPCNH9xoRIck2xz54',
    vehicle: '4A2 3001 - Škoda Octavia',
    licensePlate: '4A2 3001',
    vehicleMake: 'Škoda Octavia',
    amount: '50 €',
    dueDate: 'May 15, 2024',
    status: 'Paid',
    infractionDetails: 'Parking in a no-parking zone.',
    document: 'dresden_fine.pdf',
    documentSize: '1.1 MB',
  },
];

const statusClasses = {
  'New': 'bg-status-info/20 text-status-info',
  'In Progress': 'bg-status-warning/20 text-status-warning',
  'Overdue': 'bg-status-danger/20 text-status-danger',
  'Paid': 'bg-status-success/20 text-status-success',
}

const FinesTable = ({ onOpenModal }) => {
  return (
    <div className="flex-1 overflow-hidden rounded-lg bg-white dark:bg-background-dark shadow-sm">
      <div className="overflow-x-auto h-full">
        <table className="w-full min-w-[1000px] text-left text-sm">
          <thead className="border-b border-gray-200 dark:border-gray-700/80 bg-gray-50 dark:bg-gray-800/20">
            <tr>
              <th className="p-4 font-medium text-text-body dark:text-gray-300">Fine #</th>
              <th className="p-4 font-medium text-text-body dark:text-gray-300">Date Received</th>
              <th className="p-4 font-medium text-text-body dark:text-gray-300">Issuer</th>
              <th className="p-4 font-medium text-text-body dark:text-gray-300">Vehicle</th>
              <th className="p-4 font-medium text-text-body dark:text-gray-300 text-right">Amount</th>
              <th className="p-4 font-medium text-text-body dark:text-gray-300">Due Date</th>
              <th className="p-4 font-medium text-text-body dark:text-gray-300">Status</th>
              <th className="p-4 font-medium text-text-body dark:text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800/50">
            {fines.map((fine) => (
              <tr key={fine.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/20 cursor-pointer" onClick={() => onOpenModal(fine)}>
                <td className="p-4"><a className="font-medium text-primary" href="#">{fine.id}</a></td>
                <td className="p-4 text-text-body dark:text-gray-300">{fine.dateReceived}</td>
                <td className="p-4 text-text-body dark:text-gray-300 flex items-center gap-2">
                  <img className="w-5 h-auto" alt={`${fine.issuerCountry} flag`} src={fine.issuerFlag} />
                  {fine.issuer}
                </td>
                <td className="p-4 text-text-body dark:text-gray-300">{fine.vehicle}</td>
                <td className="p-4 text-text-body dark:text-gray-300 text-right">{fine.amount}</td>
                <td className={`p-4 text-text-body dark:text-gray-300 ${fine.status === 'Overdue' ? 'font-medium text-status-danger' : ''}`}>{fine.dueDate}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusClasses[fine.status]}`}>
                    {fine.status}
                  </span>
                </td>
                <td className="p-4"><button className="text-gray-500"><span className="material-symbols-outlined">more_vert</span></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinesTable;
