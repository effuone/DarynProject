import React from "react"
import * as Icon from "react-feather"

const horizontalMenuConfig = [
  {
    id: "home",
    title: "Home",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },
  {
    id: "about",
    title: "About",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/page2", //TODO Edit link
  },
  {
    id: "portfolio",
    title: "My Portfolio",
    type: "item",
    icon: <Icon.Book size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/page2", //TODO Edit link
  },
  {
    id: "resources",
    title: "Resources",
    type: "item",
    icon: <Icon.Box size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/page2", //TODO Edit link
  },
  {
    id: "profile",
    title: "My profile",
    type: "item",
    icon: <Icon.Settings size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/page2", //TODO Edit link
  }  
]

export default horizontalMenuConfig
