interface SidebarItem {
  id: Number;
  title: String;
  description: String;
  href: String;
}

// Add your side bar items here (+ its page link)
const SIDE_BAR_ITEMS: SidebarItem[] = [
  {
    id: 0,
    title: "Chats",
    description: "See your chat room list.",
    href: "/chats",
  },
  {
    id: 1,
    title: "Settings",
    description: "Change your app settings.",
    href: "/settings",
  },
];

export default SIDE_BAR_ITEMS;
