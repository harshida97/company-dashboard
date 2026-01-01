"use client";

import { useState } from 'react';
import {
  Gauge, Building2, UserCircle2, Calendar1, CircleDollarSign, ClipboardList,
  Ticket, Layers, AtSign, MessageCircleMore, ChartColumnBig, Target, Wrench, ChevronRight
} from 'lucide-react';

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Company');

  const navItems = [
    { id: 'Dashboard', icon: Gauge },
    { id: 'Company', icon: Building2 },
    { id: 'Contacts', icon: UserCircle2 },
    { id: 'Activities', icon: Calendar1 },
    { id: 'Sales', icon: CircleDollarSign },
    { id: 'Tasks', icon: ClipboardList },
    { id: 'Tickets', icon: Ticket },
    { id: 'Projects', icon: Layers },
    { id: 'Mail', icon: AtSign },
    { id: 'Message', icon: MessageCircleMore },
    { id: 'Analytics', icon: ChartColumnBig},
    { id: 'Target', icon: Target },
    { id: 'Settings', icon: Wrench },
  ];

  return (
    <aside className="w-16 bg-maincolor h-screen flex flex-col items-center py-1 fixed left-0 top-0 text-white shadow-xl z-20">
      
      {/*Logo*/}
      <div className="flex items-center justify-center text-white text-3xl mb-2 cursor-pointer select-none flex-shrink-0">
        L
      </div>

      {/* Scrollable Navigation List  */}
      <div className="flex flex-col flex-1 overflow-y-auto no-scrollbar w-full items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <div
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className="relative flex items-center justify-center cursor-pointer w-full py-0.5"
            >
              <div className={`
                relative flex items-center justify-center transition-all duration-200
                w-10 h-10 rounded-lg flex-shrink-0 text-white
                ${isActive ? 'bg-white/20' : 'hover:bg-white/10'}
              `}>
                <Icon size={18} strokeWidth={2} />
              </div>

              {isActive && (
                <div className="absolute left-0 w-0.5 h-6 bg-white rounded-r-full" />
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Section */}
      <div className="mt-auto w-full flex flex-col items-center flex-shrink-0">
       
        <div className="w-8 border-t border-white/10 mb-1" />

        {/* Arrow Button */}
        <div className="pb-2 w-full flex justify-center">
          <button className="text-white/70 hover:text-white hover:bg-white/10 transition-all p-2 rounded-full border-none bg-transparent">
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </aside>
  );
}