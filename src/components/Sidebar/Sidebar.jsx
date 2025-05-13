import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { menuItems } from "../../Data/Sidebardata.js";
import { useNavigate } from "react-router";
const Sidebar = ({ item, isCollapsed }) => {
  const { section } = item;
  const [expandedItems, setExpandedItems] = useState({});
  const SectionType = menuItems.filter((menu) => menu.section === section);
const navigate = useNavigate()
  const isCollapsedSubMenu = (index) => {
    setExpandedItems((p) => ({
      ...p,
      [index]: !p[index],
    }));
  };
//   const handlenavigate(path)=>{
// navigate(path)
//   }

  return (
    <>
      <div
        className={`pt-16 ${
          isCollapsed ? "w-16 p-4" : " p-6 mb-4 rounded"
        } border-b`}
      >
        <div>
          <h1
            className={`text-left pl-2  ${isCollapsed ? "hidden" :  "text-xl font-bold mb-2"}`}
          >
            {section}
          </h1>
        </div>

        <ul>
          {SectionType.map((item, index) => (
            <>
              <li key={index} className="py-1 ">
                <div
                  className={`flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2   ${
                    isCollapsed ? "border-none" : " px-2 py- rounded-md"
                  }  `}
                  onClick={() => isCollapsedSubMenu(index)}
                  
                >
                  <div className="flex gap-4 items-center">
                    <span className="w-5 text-gray-500  text-2xl ">
                      {<item.icon />}
                    </span>
                    <span
                      className={`text-gray-700 font-semibold text-lg text-left ${
                        isCollapsed ? "hidden" : ""
                      }`}
                    >
                      {item.name}
                      
                    </span>
                  </div>
                  {item.subItems?.length > 0 &&  (
                  
                    <span className={`${isCollapsed ? "hidden" : "block"} `}>
                      {expandedItems[index] ? (
                        <IoChevronUp className="transition-transform duration-700  " />
                      ) : (
                        <IoChevronDown className=" transition-transform duration-700 " />
                      )}
                    </span>
                  )}
                </div>

                {item.subItems.length > 0 && expandedItems[index] && (
                  <ul className="ml-4">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="py-1">
                        <div
                          className={`flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2  border-none  transition-all duration-300 ${
                            isCollapsed ? "" : " px-2 py-2 rounded-md"
                          }`}
                          onClick={() => subItem.path? navigate(subItem.path):
                            isCollapsedSubMenu(`${index}-${subIndex}`)
                          }
                        >
                          <span
                            className={`text-gray-600 text-left  ${
                              isCollapsed ? "hidden border-none " : ""
                            }`}
                          >
                            {subItem.name}
                          </span>
                          {subItem.subItems.length > 0 && (
                            <span
                              className={`${isCollapsed ? "hidden" : "block"}`}
                            >
                              {expandedItems[`${index}-${subIndex}`] ? (
                                <IoChevronUp />
                              ) : (
                                <IoChevronDown />
                              )}
                            </span>
                          )}
                        </div>

                        {subItem.subItems.length > 0 &&
                          expandedItems[`${index}-${subIndex}`] && (
                            <ul className="ml-8">
                              {subItem.subItems.map(
                                (subSubItem, subSubIndex) => (
                                  <li key={subSubIndex} className="py-1 my-1">
                                    <div
                                      className={`py-1 text-left hover:bg-gray-100 text-gray-600  px-2 py- rounded-md ${
                                        isCollapsed ? "hidden" : ""
                                      }`}
                                      onClick={()=>subSubItem.path && navigate(subSubItem.path)}
                                    >
                                      {subSubItem.name}
                                    </div>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;