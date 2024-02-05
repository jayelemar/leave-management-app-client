import { Bug, CalendarCheck, CircleUserRound, Grid3X3, LogOut, } from "lucide-react";

type ChildItem = {
  title: string;
  path: string;
};

export type ItemProps = {
  title: string,
  icon: React.ReactNode,
  path?: string,
  children?: ChildItem[]
}

const items: ItemProps[] = [
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
  {
    title: "Log Out",
    icon: <LogOut  size={24} />,
    path: "/",
  },
];

export default items;



