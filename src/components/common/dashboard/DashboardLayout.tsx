import React from "react";
import DashboardHeader from "./DashboardHeader";
import Footer from "../layout/Footer";





function DashboardLayout({ children }: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <DashboardHeader/>
        <div className="flex flex-col flex-grow w-full">
        {children}
        </div>
      <Footer/>
    </div>
  );
}

export default DashboardLayout;
