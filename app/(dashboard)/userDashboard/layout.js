"use client";
import { useState } from "react";
import Header from "@/components/userDashboard/Header";
import Sidebar from "@/components/userDashboard/Sidebar";


export default function UserDashboardLayout({ children }) {

const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
     <div className=" bg-gray-50 flex flex-col">
          <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)}  />
          <div className="flex flex-1">
            <Sidebar open={sidebarOpen} />
            <main className="flex-1 p-4 lg:p-8 ml-0 lg:ml-64   lg:min-h-[95vh] sm:min-h-[95vh]  md:min-h-[95vh] min-h-[95vh] [background:var(--background-start)]">
              {children}
            </main>
          </div>
        </div>
  );
}
