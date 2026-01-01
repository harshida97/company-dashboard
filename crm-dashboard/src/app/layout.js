import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopHeader from "@/components/TopHeader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex font-sans bg-[#f3f4f6]">
        {/* Fixed Sidebar */}
        <Sidebar />
        
        <div className="flex-1 ml-16 flex flex-col min-h-screen min-w-0">
          <TopHeader />
          <main className="flex-1 bg-[#f3f4f6] overflow-x-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}