import React from "react";
import DashboardHeader from "./DashboardHeader";
import Footer from "./Footer";





function DashboardLayout({ children }: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <DashboardHeader/>

        {children}

      <Footer/>
    </div>
  );
}

export default DashboardLayout;
