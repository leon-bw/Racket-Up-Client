import { MdPersonSearch } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { MdEmojiEvents } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";

export const links = [
  {
    title: "Home",
    href: "/",
    Icon: SlCalender,
  },
  {
    title: "Find Matches",
    href: "/find-matches",
    Icon: MdPersonSearch,
  },
  {
    title: "Events",
    href: "#",
    Icon: MdEmojiEvents,
  },
  {
    title: "More",
    href: "#",
    Icon: MdOutlineExpandMore,
  },
];