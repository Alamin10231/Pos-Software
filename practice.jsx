




















import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { menuItems } from "../../Data/Sidebardata.js";

const Sidebar = ({ item, isCollapsed }) => {
  const { section } = item;
  const [expandedItems, setExpandedItems] = useState({});
  const SectionType = menuItems.filter((menu) => menu.section === section);
  console.log(SectionType)

  const toggleMenu = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const renderSubItems = (subItems, parentId) => {
    return (
      <div
        className={`overflow-hidden transition-all  duration-300 ${
          expandedItems[parentId] ? "max-h-[1000px] " : "max-h-0"
        }`}
      >
        <ul className="ml-4">
          {subItems.map((subItem, subIndex) => (
            <li key={`${parentId}-${subIndex}`}>
              <div
                className={`flex items-center justify-between  cursor-pointer  hover:bg-gray-100 p-2 ${
                  isCollapsed ? "" : "rounded-md"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMenu(`${parentId}-${subIndex}`);
                }}
              >
                <span className={isCollapsed ? "hidden " : ""}>
                  {subItem.name}
                </span>
                {subItem.subItems.length > 0 && (
                  <span className={isCollapsed ? "hidden" : "block"}>
                    {expandedItems[`${parentId}-${subIndex}`] ? (
                      <IoChevronUp />
                    ) : (
                      <IoChevronDown />
                    )}
                  </span>
                )}
              </div>

              {subItem.subItems.length > 0 &&
                renderSubItems(subItem.subItems, `${parentId}-${subIndex}`)}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={`${isCollapsed ? "w-16 p-4" : "p-6 mb-4 rounded"} border-b`}>
      {!isCollapsed && <h1 className="text-xl font-bold mb-2">{section}</h1>}

      <ul>
        {SectionType.map((item) => (
          <li key={item.id} className="py-1">
            <div
              className={`flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 ${
                isCollapsed ? "border-none" : "px-2 rounded-md"
              } transition-all duration-300`}
              onClick={() => toggleMenu(item.id)}
            >
              <div className="flex gap-4 items-center">
                <item.icon className="text-2xl text-gray-500" />
                {!isCollapsed && (
                  <span className="font-semibold">{item.name}</span>
                )}
              </div>
              {!isCollapsed && item.subItems.length > 0 && (
                <span className="transition-transform duration-300">
                  {expandedItems[item.id] ? <IoChevronUp /> : <IoChevronDown />}
                </span>
              )}
            </div>

            {item.subItems.length > 0 && renderSubItems(item.subItems, item.id)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;