import { Bug, CalendarCheck, CircleUserRound, Grid3X3, } from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: <Grid3X3 size={24} />,
    path: "/dashboard",
  },
  {
    title: "Request Leave",
    icon: <CalendarCheck size={25} />,
    path: "/request-leave",
  },
  {
    title: "Account Setting",
    icon: <CircleUserRound size={24} />,
    children: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Report Bug",
    icon: <Bug size={24} />,
    path: "/contact-us",
  },
];

export default menu;
