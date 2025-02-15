import React from "react";

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex border-b border-gray-200">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === tab
              ? "border-b-2 border-gray-500 text-gray-600"
              : "text-gray-500"
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
