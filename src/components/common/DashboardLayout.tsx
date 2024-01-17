import React from "react";
import Footer from "./Footer";
import DashboardHeader from "./DashboardHeader";



function DashboardLayout({ children }: {children: React.ReactNode}) {
  return (
    <>
      <DashboardHeader />
      <div className="h-screen-90">{children}</div>
      <Footer />
    </>
  );
}

export default DashboardLayout;
