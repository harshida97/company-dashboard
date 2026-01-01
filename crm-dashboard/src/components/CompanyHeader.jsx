import { Star, Pencil, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";

export default function CompanyHeader({ activeTab = "Company", setActiveTab, onOpenPreview }) {
  const tabs = ["Company", "More", "Interest", "Note", "Market data", "Misc"];

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm relative overflow-hidden">
     
      <div className="overflow-x-auto">
        
        <div className="min-w-[700px] md:min-w-full">
          <div className="p-5 pb-2">
            {/* Header Row */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4 items-center">
                {/* Logo */}
                <div className="w-12 h-12 bg-[oklch(38%_0.189_293.745/0.1)] rounded-full flex items-center justify-center text-[oklch(38%_0.189_293.745)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" />
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z" />
                    <path d="M6 13h12" /><path d="M6 17h12" />
                  </svg>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-xl font-bold text-gray-800">SuperCompany Ltd ASA</h1>
                    <Star size={18} className="text-orange-400 cursor-pointer fill-none stroke-[2]" />
                  </div>
                  <p className="text-sm text-gray-400">Department Stockholm</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-sm">
                  <Pencil size={14} strokeWidth={3} />
                </button>
                <button onClick={onOpenPreview} className="w-8 h-8 flex items-center justify-center text-teal-600 border border-teal-600 rounded-full">
                  <MoreVertical size={18} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="flex mt-1 gap-2 mb-6 border-b border-gray-200 pb-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${isActive ? "bg-[#e8f3f3] text-teal-700" : "text-gray-500 hover:text-gray-700"
                      }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </nav>

            {/* Company Content Grid */}
            {activeTab === "Company" && (
              <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-[13px]">
                <div className="space-y-2">
                  <div className="flex"><span className="w-24 text-gray-400">Postal:</span> <span className="text-blue-500 cursor-pointer">Västgötagatan 5, 102 61 Stock..</span></div>
                  <div className="flex"><span className="w-24 text-gray-400">Country:</span> <span className="text-gray-800">Sweden</span></div>
                  <div className="flex"><span className="w-24 text-gray-400">Phone:</span> <span className="text-blue-500 cursor-pointer">+46 800 193 2820</span> <span className="ml-2 text-gray-400">Main</span></div>
                  <div className="flex"><span className="w-24 text-gray-400">Webbadress:</span> <span className="text-blue-500 cursor-pointer">info@sc.se</span></div>
                  <div className="flex"><span className="w-24 text-gray-400">E-mail:</span> <span className="text-blue-500 cursor-pointer">www.sc.se</span></div>
                </div>
                <div className="space-y-2">
                  <div className="flex"><span className="w-24 text-gray-400">Category:</span> <span className="text-gray-800">Customer A</span></div>
                  <div className="flex"><span className="w-24 text-gray-400">Code:</span> <span className="text-gray-800">SUPERCO</span></div>
                  <div className="flex"><span className="w-24 text-gray-400">Number:</span> <span className="text-gray-800">2002</span></div>
                  <div className="flex"><span className="w-24 text-gray-400">VAT No.:</span> <span className="text-gray-800">SE123456789</span></div>
                  <div className="flex"><span className="w-24 text-gray-400">Business:</span> <span className="text-gray-800">IT</span></div>
                </div>
              </div>
            )}
          </div>

          {/* Footer section */}
          <div className="bg-white border-t border-gray-200 mx-4 px-6 py-3 flex justify-between items-center relative">
            <div className="flex items-center gap-5 z-10">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 rounded border border-gray-300 appearance-none bg-white checked:bg-white checked:border-gray-300 relative cursor-pointer after:content-[''] after:hidden checked:after:block after:absolute after:left-[5px] after:top-[1px] after:w-[4px] after:h-[8px] after:border-r-2 after:border-b-2 after:border-gray-400 after:rotate-45"
                />
                <span className="text-gray-800 text-[12px] font-medium">Stop</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 bg-white" />
                <span className="text-gray-800 text-[12px]">No mailings</span>
              </label>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-gray-600 text-[12px]">Updated: 18/09/2023 OG</span>
            </div>

            <div className="flex items-center gap-1 z-10">
              <button className="p-1 border border-gray-200 rounded-full text-teal-600"><ChevronLeft size={14} /></button>
              <button className="p-1 border border-gray-200 rounded-full text-teal-600"><ChevronRight size={14} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}