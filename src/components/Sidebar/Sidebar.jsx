import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const Sidebar = ({ item }) => {
  const { section, items } = item;

  const [isParentOpen, setIsParentOpen] = useState(null);
  const handletoggle = (index) => {
    setIsParentOpen(isParentOpen === index ? null : index);
  };

  return (
    <div>
      <div className="">
        <h1 className="absolute top-5 ">Company Logo</h1>
      </div>
      <div className="border-t border-gray-400 w-full pt-5">
        <h3 className=""> {section}</h3>
      </div>

      <div className=" w-[240px] mb-6">
        {items.map((sub, index) => (
          <div>
            <li
              onClick={() => handletoggle(index)}
              className="flex items-center justify-between px-2 py-2 rounded-md my-2 
                       border border-gray-400 cursor-pointer transition-all 
                       hover:bg-gray-100 duration-300 ease-in-out text-sm"
              key={index}
            >
              {sub.name}

              <span>
                <button>
                  <FaAngleRight
                    className={` transition-all duration-500 ${
                      isParentOpen === index ? "rotate-0" : "rotate-90"
                    }`}
                  />
                </button>
              </span>
            </li>

            <div
              className={` overflow-hidden duration-700 ${
                isParentOpen === index ? "max-h-96" : "max-h-0"
              }`}
            >
              {sub.subItems?.map((sb, index) => (
                <ul className="">
                  <li
                    className="border border-gray-400 cursor-pointer rounded-md my-2 px-2 text-sm"
                    key={index}
                  >
                    {sb}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
