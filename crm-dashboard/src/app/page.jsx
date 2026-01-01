"use client";
import { useState, useEffect } from "react"; 
import CompanyHeader from "@/components/CompanyHeader";
import SalesTable from "@/components/SalesTable";
import RightSidebar from "@/components/RightSidebar";

// This checks for your Vercel Environment Variable. 
// If it doesn't find it, it defaults to your local backend.
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function Home() {
  const [headerTab, setHeaderTab] = useState("Company");
  const [tableTab, setTableTab] = useState("Sales"); 
  const [isPreviewOpen, setIsPreviewOpen] = useState(true);
  const [salesData, setSalesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  // 1. Fetch Sales from the Backend
  useEffect(() => {
    const fetchSales = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/api/sales`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setSalesData(data);
      } catch (error) { 
        console.error("Error loading sales:", error); 
      } finally {
        setIsLoading(false);
      }
    };
    fetchSales();
  }, []);

  // 2. Add New Sale to Database
  const handleAddSale = async (newSale) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/sales`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSale),
      });
      
      if (response.ok) {
        const savedSale = await response.json();
        // Add the new sale to the top of the list immediately
        setSalesData((prev) => [savedSale, ...prev]);
      } else {
        console.error("Server responded with an error");
      }
    } catch (error) { 
      console.error("Network error while adding sale:", error); 
    }
  };

  return (
    <div className="relative flex min-h-screen bg-[#f3f4f6]">
      {/* Main Content Area */}
      <div className={`flex-1 transition-all duration-300 ease-in-out pt-2 px-3 md:px-6 
        ${isPreviewOpen ? "lg:mr-80 mr-0" : "mr-0"}`}>
        
        <div className="max-w-6xl mx-auto space-y-4 pb-10">
          
          <CompanyHeader 
            activeTab={headerTab} 
            setActiveTab={setHeaderTab} 
            onOpenPreview={() => setIsPreviewOpen(!isPreviewOpen)}
          />

          {/* If the server is waking up (Render Free Tier), show a loading message */}
          {isLoading ? (
            <div className="bg-white rounded-xl p-20 border border-gray-100 flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-teal-600 mb-4"></div>
              <p className="text-gray-500 text-sm font-medium">Connecting to Database...</p>
            </div>
          ) : (
            <SalesTable 
              data={salesData} 
              activeTab={tableTab}      
              setActiveTab={setTableTab} 
              onAddSale={handleAddSale} 
            />
          )}

        </div>
      </div>

      {/* Preview Sidebar */}
      <RightSidebar 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
      />
    </div>
  );
}