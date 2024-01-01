// Tab.js
import React from "react";

const Tab = ({ id, title, active, onClick }) => (
  <button
    key={id}
    className={`bg-white text-md text-navy px-4 py-2 rounded-md ${active ? 'bg-texlight' : ''}`}
    onClick={onClick}
  >
    {title}
  </button>
);

export default Tab;