import React from 'react';

const statusClasses = {
  'New': 'bg-status-info/20 text-status-info',
  'In Progress': 'bg-status-warning/20 text-status-warning',
  'Overdue': 'bg-status-danger/20 text-status-danger',
  'Paid': 'bg-status-success/20 text-status-success',
};

const FineDetailModal = ({ fine, onClose }) => {
  if (!fine) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-5" id="fine-detail-modal">
      <div className="w-full max-w-6xl h-[90vh] bg-white dark:bg-background-dark rounded-xl shadow-2xl flex flex-col overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-700/80">
          <h2 className="text-xl font-bold text-text-heading dark:text-white">Fine Details: {fine.id}</h2>
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center h-10 px-4 rounded-lg bg-gray-100 dark:bg-gray-700/50 text-sm font-medium hover:bg-gray-200">Assign to Driver</button>
            <button className="flex items-center justify-center h-10 px-4 rounded-lg bg-primary text-sm font-bold text-white">Pay Fine</button>
            <button className="text-gray-500 hover:text-gray-800 dark:hover:text-white ml-4" onClick={onClose}><span className="material-symbols-outlined text-2xl">close</span></button>
          </div>
        </div>
        <div className="flex flex-1 overflow-hidden">
          <div className="w-2/3 p-6 overflow-y-auto border-r border-gray-200 dark:border-gray-700/80">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Fine ID</h4>
                <p className="text-base text-text-body dark:text-gray-200">{fine.id}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</h4>
                <p><span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusClasses[fine.status]}`}>{fine.status}</span></p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Amount</h4>
                <p className="text-base text-text-body dark:text-gray-200 font-bold">{fine.amount}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Due Date</h4>
                <p className="text-base text-text-body dark:text-gray-200">{fine.dueDate}</p>
              </div>
              <div className="col-span-2">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Issuer</h4>
                <p className="text-base text-text-body dark:text-gray-200">{fine.issuer}, {fine.issuerCountry}</p>
              </div>
              <div className="col-span-2">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Infraction Details</h4>
                <p className="text-base text-text-body dark:text-gray-200">{fine.infractionDetails}</p>
              </div>
              <div className="col-span-2 border-t border-gray-200 dark:border-gray-700/80 pt-6">
                <h3 className="text-lg font-bold text-text-heading dark:text-white mb-3">Vehicle Information</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">License Plate</h4>
                    <p className="text-base text-text-body dark:text-gray-200">{fine.licensePlate}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Make &amp; Model</h4>
                    <p className="text-base text-text-body dark:text-gray-200">{fine.vehicleMake}</p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 border-t border-gray-200 dark:border-gray-700/80 pt-6">
                <h3 className="text-lg font-bold text-text-heading dark:text-white mb-3">Documents</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center p-3 border rounded-lg border-gray-200 dark:border-gray-700/80 bg-gray-50 dark:bg-gray-800/20">
                    <span className="material-symbols-outlined text-red-500 mr-3">picture_as_pdf</span>
                    <div className="flex-1">
                      <p className="font-medium text-text-body dark:text-gray-200">{fine.document}</p>
                      <p className="text-xs text-gray-500">{fine.documentSize}</p>
                    </div>
                    <button className="text-gray-500 hover:text-primary"><span className="material-symbols-outlined">download</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 p-6 overflow-y-auto bg-gray-50/50 dark:bg-gray-800/20">
            <h3 className="text-lg font-bold text-text-heading dark:text-white mb-6">History &amp; Timeline</h3>
            <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
              <div className="mb-8">
                <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-primary ring-4 ring-white dark:ring-gray-800/20"></div>
                <p className="text-sm text-gray-500 dark:text-gray-400">May 15, 2024</p>
                <h4 className="font-medium text-text-body dark:text-gray-200">Fine Created</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Fine received and entered into the system by Admin User.</p>
              </div>
              <div className="mb-8">
                <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-gray-300 ring-4 ring-white dark:ring-gray-800/20"></div>
                <p className="text-sm text-gray-500 dark:text-gray-400">May 16, 2024</p>
                <h4 className="font-medium text-text-body dark:text-gray-200">Notification Sent</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Email notification sent to the fleet manager.</p>
              </div>
              <div className="mb-8">
                <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-gray-300 ring-4 ring-white dark:ring-gray-800/20"></div>
                <p className="text-sm text-gray-500 dark:text-gray-400">May 17, 2024</p>
                <h4 className="font-medium text-text-body dark:text-gray-200">Status changed to 'In Progress'</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Manager marked as investigating.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FineDetailModal;
