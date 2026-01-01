import { ChevronDown, TextSearch, CircleDollarSign, Calendar1, ClipboardList, Sparkles } from "lucide-react";



export default function RightSidebar({ isOpen, onClose }) {

  if (!isOpen) return null;



  return (

    <div className="fixed top-16 right-0 w-80 bg-white rounded-xl border-l border-b border-gray-200 z-50  overflow-hidden flex flex-col animate-in slide-in-from-right duration-300">

      {/* Header */}

      <div className="p-3 flex justify-between items-center bg-white flex-shrink-0">

        <div className="flex items-center gap-4">

          <div className="w-8 h-8 rounded-full bg-[#e8f3f3] flex items-center justify-center">

            <TextSearch size={18} className="text-gray-500" />

          </div>

          <CircleDollarSign size={18} className="text-gray-400 cursor-pointer" />

          <Calendar1 size={18} className="text-gray-400 cursor-pointer" />

          <ClipboardList size={18} className="text-gray-400 cursor-pointer" />

          <Sparkles size={18} className="text-emerald-500 fill-emerald-500 cursor-pointer" />

        </div>



        <button

          onClick={onClose}

          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-100 text-gray-400 hover:bg-gray-50"

        >

          <ChevronDown size={16} />

        </button>

      </div>



      <div className="h-[1px] bg-gray-100 w-full" />



      {/* Content Area */}

      <div className="p-4 flex-1 flex flex-col justify-start space-y-5 overflow-hidden">

       

        {/* Preview Section */}

        <section>

          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Preview</h3>

          <div className="flex gap-3 items-center mb-3">

            <div className="w-9 h-9 bg-[#f0f7f7] text-[#5ba4a4] rounded-full flex items-center justify-center border border-[#e0eded]">

              <CircleDollarSign size={18} />

            </div>

            <div>

              <h4 className="text-[#3b82f6] font-semibold text-[16px] leading-tight">45 Components - RTS</h4>

              <p className="text-gray-500 font-bold text-[12px]">17 344 EUR</p>

            </div>

          </div>



          <div className="space-y-1.5">

            {[

              { label: "Company:", value: "SuperCompany Ltd ASA", blue: true },

              { label: "Contact:", value: "Peter Elliot", blue: true },

              { label: "Sale date:", value: "01/02/2025", bold: true },

              { label: "Owner:", value: "Eric Davies" },

              { label: "Sale type:", value: "Cross-sale to existing cust...", truncate: true },

              { label: "Status:", value: "Open (20%)" },

            ].map((item, idx) => (

              <div key={idx} className="flex items-start text-[11px]">

                <span className="w-20 text-gray-400 flex-shrink-0">{item.label}</span>

                <span className={`

                  ${item.blue ? 'text-[#3b82f6] cursor-pointer hover:underline' : 'text-gray-700'}

                  ${item.bold ? 'font-bold' : 'font-medium'}

                  ${item.truncate ? 'truncate' : ''}

                `}>

                  {item.value}

                </span>

              </div>

            ))}

          </div>

        </section>



        <hr className="border-gray-100" />



        {/* Activities Section */}

        <section>

          <h3 className="text-[12px] font-bold text-gray-800 mb-2">Activities</h3>

          <div className="space-y-2">

            {[

              { date: "04/11/2024", text: "Follow-up call" },

              { date: "01/11/2024", text: "Quote for 45 components..." },

              { date: "23/09/2024", text: "Prospect meeting" },

              { date: "22/09/2024", text: "Introduction call" }

            ].map((item, i) => (

              <div key={i} className="flex gap-4 text-[11px]">

                <span className="text-gray-400 w-16 flex-shrink-0">{item.date}</span>

                <span className="text-[#3b82f6] font-medium hover:underline cursor-pointer">{item.text}</span>

              </div>

            ))}

          </div>

        </section>



        <hr className="border-gray-100" />



        {/* Stakeholders Section */}

        <section>

          <h3 className="text-[12px] font-bold text-gray-800 mb-2">Stakeholders</h3>

          <div className="space-y-1">

            <p className="text-[11px] text-gray-600 font-medium">James Vargas</p>

            <p className="text-[11px] text-gray-600 font-medium">Lisa Jansson</p>

          </div>

        </section>

      </div>

 

      <div className="h-2 bg-white flex-shrink-0" />

    </div>

  );

}