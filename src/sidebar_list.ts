export interface SideBarItemInterface {
  id: Number;
  title: String;
  description: String;
  name: String;
  path: String;
}

// Add your side bar items here (+ its page link)
const SIDE_BAR_ITEMS: SideBarItemInterface[] = [
  {
    id: 0,
    title: "Chats",
    description: "See your chat room list.",
    name: "ChatList",
    path: "/chats",
  },
  // {
  //   id: 1,
  //   title: "Settings",
  //   description: "Change your app settings.",
  //   name: "Settings",
  //   path: "/settings",
  // },
];

export default SIDE_BAR_ITEMS;
