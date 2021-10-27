import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "home",
    title: "Home",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },
  {
    id: "universities",
    title: "Universities",
    type: "item",
    icon: <Icon.Briefcase size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/universities",
  },
  {
    id: "about",
    title: "About",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/about",
  },
  {
    id: "portfolio",
    title: "My Portfolio",
    type: "item",
    icon: <Icon.Book size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/portfolio",
  }
]

export default navigationConfig
