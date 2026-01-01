import { useState } from "react";
import { 
  CirclePlus, 
  Trash2, 
  Filter, 
  Download, 
  Check, 
  X, 
  RotateCw, 
  MoveDown, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import SaleFormModal from "./SaleFormModal";

export default function SalesTable({ data = [], onAddSale }) {
  const [activeTableTab, setActiveTableTab] = useState("Sales");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  const tabs = ["Activities", "Contacts", "Projects", "Sales", "Requests"];

  // Pagination Logic
  const itemsPerPage = 4;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentData = data.slice(startIndex, endIndex);

  const getStatusBadge = (status) => {
    const styles = {
      Open: "bg-emerald-50 text-emerald-700 border-emerald-100",
      Sold: "bg-emerald-50 text-emerald-700 border-emerald-100",
      Lost: "bg-red-50 text-red-700 border-red-100",
      Stalled: "bg-orange-50 text-orange-700 border-orange-100",
    };
    
    const icons = {
      Open: <span className="mr-1">€</span>,
      Sold: <Check size={10} className="mr-1" />,
      Lost: <X size={10} className="mr-1" />,
      Stalled: <div className="mr-1 w-2 h-2 rounded-full border border-orange-400 flex items-center justify-center text-[6px]">▽</div>
    };

    return (
      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border ${styles[status] || styles.Open}`}>
        {icons[status] || icons.Open}{status}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mt-4">
      
     
      <div className="flex gap-6 px-6 pt-4 border-b border-gray-50 text-[11px] font-bold text-gray-400 overflow-x-auto no-scrollbar whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTableTab(tab);
              setCurrentPage(1);
            }}
            className={`pb-3 relative transition-colors flex-shrink-0 ${activeTableTab === tab ? "text-teal-600" : "hover:text-gray-600"}`}
          >
            {tab}
            {activeTableTab === tab && <div className="absolute bottom-0 left-0 w-full h-[2.5px] bg-teal-600" />}
          </button>
        ))}
      </div>

     
      <div className="w-full overflow-x-auto no-scrollbar">
        <table className="min-w-[850px] w-full text-left text-[11px]">
          <thead className="bg-gray-50/50 text-gray-400 font-bold border-b border-gray-100">
            <tr>
              <th className="p-3 w-10">
                 <div className="w-4 h-4 rounded border border-emerald-500 bg-emerald-500 flex items-center justify-center">
                   <div className="w-2 h-[2px] bg-white" />
                 </div>
              </th>
              <th className="p-3">Status</th>
              <th className="p-3">Sale date</th>
              <th className="p-3 text-right pr-10">Amount</th>
              <th className="p-3 flex items-center gap-1">Stage <MoveDown size={12}/></th>
              <th className="p-3">Next activity</th>
              <th className="p-3">Sale name</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {currentData.length > 0 ? (
              currentData.map((item, idx) => (
                <tr key={idx} className={`${idx === 0 && currentPage === 1 ? "bg-[#e8f3f3]/40" : "hover:bg-gray-50 transition-colors"}`}>
                  <td className="p-3">
                    <div className={`w-4 h-4 rounded border ${(idx === 0 && currentPage === 1) ? "bg-emerald-500 border-emerald-500" : "border-gray-300"} flex items-center justify-center`}>
                      {(idx === 0 && currentPage === 1) && <Check size={10} className="text-white" />}
                    </div>
                  </td>
                  <td className="p-3">{getStatusBadge(item.status)}</td>
                  <td className="p-3 text-gray-500 whitespace-nowrap">{item.saleDate}</td>
                  <td className="p-3 text-gray-800 text-right pr-10 font-medium">
                    {typeof item.amount === 'number' ? item.amount.toLocaleString() : item.amount}
                  </td>
                  <td className="p-3 text-gray-500 whitespace-nowrap">{item.stage}</td>
                  <td className="p-3 text-gray-500 whitespace-nowrap">{item.nextActivity}</td>
                  <td className="p-3 font-medium text-gray-800 break-words">{item.saleName}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="p-10 text-center text-gray-400 italic">No sales found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Responsive Footer Actions & Pagination */}
      <div className="p-4 bg-white border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Actions - Centered on mobile, Left on Desktop */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-orange-500 text-[11px] font-bold">
          <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <CirclePlus size={14} strokeWidth={3}/> Add
          </button>
          <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <Trash2 size={14} strokeWidth={3}/> Delete
          </button>
          <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <Filter size={14} strokeWidth={3}/> Filter
          </button>
          <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <Download size={14} strokeWidth={3}/> Export
          </button>
        </div>

        {/* Pagination Section */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
          <div className="flex items-center gap-2 text-[11px] font-bold text-gray-500">
            <span className="text-gray-400">{totalItems === 0 ? 0 : startIndex + 1}-{endIndex} of {totalItems}</span>
            <div className="flex gap-1 ml-2">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`p-1 border border-gray-200 rounded-full ${currentPage === 1 ? 'opacity-30' : 'text-teal-600 hover:bg-gray-50'}`}
              >
                <ChevronLeft size={14} className="text-gray-400" />
              </button>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages || totalPages === 0}
                className={`p-1 border border-gray-200 rounded-full ${currentPage === totalPages || totalPages === 0 ? 'opacity-30' : 'text-teal-600 hover:bg-gray-50'}`}
              >
                <ChevronRight size={14} className="text-gray-400" />
              </button>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 hidden sm:block">
            <RotateCw size={16} />
          </button>
        </div>
      </div>

      <SaleFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={(newSale) => {
          onAddSale(newSale);
          setCurrentPage(1); 
        }}
      />
    </div>
  );
}