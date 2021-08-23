import React from "react";
import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";

export const Sidebar = ({ selectedTab, setselectedTab }) => {
  console.log({ selectedTab });
  return (
    <div className="sidebar">
      <div className={`active`} onClick={() => setselectedTab("INBOX")}>
        <FaInbox className="icons" />
        Inbox
      </div>
      <div onClick={() => setselectedTab("TODAY")}>
        <FaRegCalendarAlt className="icons" />
        Today
      </div>
      <div onClick={() => setselectedTab("NEXT_7")}>
        <FaRegCalendar className="icons" />
        Next 7 days
      </div>
    </div>
  );
};
