import { Bug, CalendarCheck, CircleUserRound, Grid3X3, LogOut, } from "lucide-react";

type ChildItem = {
  title: string;
  path: string;
  id:number
};

export type ItemProps = {
  title: string,
  icon: React.ReactNode,
  path?: string,
  children?: ChildItem[],
  id: number,
}

const items: ItemProps[] = [
  {
    title: "Dashboard",
    icon: <Grid3X3 size={24} />,
    path: "/dashboard",
    id: 1,
  },
  {
    title: "Request Leave",
    icon: <CalendarCheck size={25} />,
    path: "/request-leave",
    id: 2,
  },
  {
    title: "Account Setting",
    icon: <CircleUserRound size={24} />,
    id:3,
    children: [
      {
        title: "Profile",
        path: "/profile",
        id: 4,
      },
      {
        title: "Change Password",
        path: "/change-password",
        id: 5,
      },
    ],
  },
  {
    title: "Report Bug",
    icon: <Bug size={24} />,
    path: "/contact-us",
    id: 6,
  },
  {
    title: "Log Out",
    icon: <LogOut  size={24} />,
    path: "/",
    id: 7,
  },
];

export default items;



