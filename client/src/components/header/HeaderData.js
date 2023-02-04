import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  
  {
    id: 1,
    title: "Dashboard",
    cName: "sidebar-item",
    icon: <FaIcons.FaHome />,
    path: "/",
  },
  {
    id: 2,
    title: "User List",
    cName: "sidebar-item",
    icon: <FaIcons.FaRegListAlt />,
    path: "/userlist",
  },
  {
    id: 3,
    title: "Appointment",
    cName: "sidebar-item",
    icon: <FaIcons.FaRegCalendarPlus />,
    path: "/appointment",
  },
  {
    id: 4,
    title: "Chat",
    cName: "sidebar-item",
    icon: <FaIcons.FaRegComments />,
    path: "/message",
  },
  {
    id: 5,
    title: "Forum",
    cName: "sidebar-item",
    icon: <FaIcons.FaCommentMedical />,
    path: "/forum",
  },
  {
    id: 6,
    title: "Prescription",
    cName: "sidebar-item",
    icon: <FaIcons.FaClipboardList />,
    path: "/display",
  },


];