// TabList.js
import React from "react";
import Tab from "./Tab";

const TabList = ({ tabs, activeTab, onTabChange }) => (
  <div className="justify-center mb-4 mt-10 flex space-x-4">
    {tabs.map((tab) => (
      <Tab key={tab.id} id={tab.id} title={tab.title} active={activeTab === tab.id} onClick={() => onTabChange(tab.id)} />
    ))}
  </div>
);

export default TabList;
