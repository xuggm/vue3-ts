export type MenuItem = {
  name: string
  path?: string
  children?: MenuItem[]
}

let menu: MenuItem[] = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Users",
    children: [
      {
        name: "List",
        path: "/user/list",
      },
      {
        name: "Family",
        path: "/user/family",
      },
    ],
  },
]

export default menu
