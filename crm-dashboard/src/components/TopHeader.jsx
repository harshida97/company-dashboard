import { Search, Bell, ChevronDown, TextSearch, UserCircle, Menu, PanelRight } from "lucide-react";

export default function TopHeader() {
  return (
    <header className="h-14 bg-[#f3f4f6] flex items-center justify-between px-4 md:px-6 sticky top-0 z-50">
      
      {/* Left Section */}
      <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
        <div className="flex items-center bg-white border border-gray-200 rounded-full pl-3 pr-2 py-1.5 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors group">
          <span className="text-emerald-600 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 12h4" /><path d="M10 8h4" />
              <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
              <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
              <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
            </svg>
          </span>
          <span className="text-sm font-semibold text-gray-700 mr-2">New</span>
          <div className="h-4 w-[1px] bg-gray-200 mr-2" />
          <ChevronDown size={14} className="text-gray-500 group-hover:text-gray-800" />
        </div>

        
        <button className="p-2 bg-white border border-gray-200 rounded-full shadow-sm text-gray-500 hover:bg-gray-50 transition-all hidden xs:block">
          <TextSearch size={18} />
        </button>
      </div>

      {/*  Search Bar  */}
      <div className="relative flex-1 max-w-[450px] mx-2 md:mx-4 flex items-center">
        <span className="absolute left-3 text-gray-400">
          <Search size={16} />
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-white border border-gray-200 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 md:gap-5 flex-shrink-0">
        <div className="relative cursor-pointer group flex items-center">
          <Bell className="text-gray-500 group-hover:text-emerald-600 transition-colors" size={20} />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] font-bold h-4 w-4 flex items-center justify-center rounded-full border-2 border-[#f3f4f6]">
            3
          </span>
        </div>
        <UserCircle className="text-gray-500 cursor-pointer hover:text-emerald-600 hidden sm:block" size={22} />
        <Menu className="text-gray-500 cursor-pointer hover:text-emerald-600" size={22} />
        <button className="text-sm font-semibold text-gray-600 hover:text-emerald-600 hidden md:block">Help</button>
        <PanelRight className="text-gray-500 ml-0 md:ml-2 cursor-pointer hover:text-emerald-600" size={20} />
      </div>
    </header>
  );
}