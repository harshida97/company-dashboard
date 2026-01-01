"use client";
import { useState, useEffect } from "react"; 
import CompanyHeader from "@/components/CompanyHeader";
import SalesTable from "@/components/SalesTable";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  const [headerTab, setHeaderTab] = useState("Company");
  const [tableTab, setTableTab] = useState("Sales"); 
  const [isPreviewOpen, setIsPreviewOpen] = useState(true);
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/sales");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setSalesData(data);
      } catch (error) { console.error("Error loading sales:", error); }
    };
    fetchSales();
  }, []);

  const handleAddSale = async (newSale) => {
    try {
      const response = await fetch("http://localhost:5000/api/sales", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSale),
      });
      if (response.ok) {
        const savedSale = await response.json();
        setSalesData((prev) => [savedSale, ...prev]);
      }
    } catch (error) { console.error("Network error:", error); }
  };

  return (
    <div className="relative flex min-h-screen bg-[#f3f4f6]">
      
      <div className={`flex-1 transition-all duration-300 ease-in-out pt-2 px-3 md:px-6 
        ${isPreviewOpen ? "lg:mr-80 mr-0" : "mr-0"}`}>
        <div className="max-w-6xl mx-auto space-y-4 pb-10">
          <CompanyHeader 
            activeTab={headerTab} 
            setActiveTab={setHeaderTab} 
            onOpenPreview={() => setIsPreviewOpen(!isPreviewOpen)}
          />
          <SalesTable 
            data={salesData} 
            activeTab={tableTab}      
            setActiveTab={setTableTab} 
            onAddSale={handleAddSale} 
          />
        </div>
      </div>
      <RightSidebar 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
      />
    </div>
  );
}