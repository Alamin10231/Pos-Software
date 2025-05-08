import { AiOutlineLayout, AiOutlineStock } from "react-icons/ai";
import { GrUserAdmin } from "react-icons/gr";
import { LiaProductHunt } from "react-icons/lia";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

export const menuItems = [
  {
    section: "Main",
    items: [
      {
        name: "Dashboard",
        icon: RxDashboard,
        active: true,
        lastUpdated: "2025-05-05 16:45:42",
        updatedBy: "jubair-jx",
        subItems: [
          { name: "Admin Dashboard 1", subItems: [] },
          { name: "Admin Dashboard 2", subItems: [] },
          { name: "Sales Dashboard", subItems: [] }
        ]
      },
      {
        name: "Super Admin",
        icon: GrUserAdmin,
        active: true,
        lastUpdated: "2025-05-05 16:45:42",
        updatedBy: "jubair-jx",
        subItems: [
          { name: "Dashboard", subItems: [] },
          { name: "Companies", subItems: [] },
          { name: "Subscriptions", subItems: [] },
          { name: "Packages", subItems: [] },
          { name: "Domain", subItems: [] },
          { name: "Purchase Transaction", subItems: [] }
        ]
      },
      {
        name: "Layouts",
        icon: AiOutlineLayout,
        active: true,
        lastUpdated: "2025-05-05 16:45:42",
        updatedBy: "jubair-jx",
        subItems: [
          { name: "Customizable themes/colors", subItems: [] },
          { name: "Responsive design", subItems: [] }
        ]
      }
    ]
  },
  {
    section: "Inventory",
    items: [
      {
        name: "Application",
        icon: MdOutlineSettingsApplications,
        lastUpdated: "2025-05-05 16:45:42",
        updatedBy: "jubair-jx",
        subItems: [
          { name: "Chat", subItems: [] },
          { 
            name: "Call",
            subItems: [
              { name: "Video Call", subItems: [] },
              { name: "Audio Call", subItems: [] },
              { name: "Call History", subItems: [] }
            ]
          },
          { name: "Calendar", subItems: [] },
          { name: "Contacts", subItems: [] },
          { name: "E-mail", subItems: [] },
          { name: "Notes", subItems: [] },
          { name: "File Manager", subItems: [] },
          { name: "Project", subItems: [] },
          {
            name: "E-Commerce",
            subItems: [
              { name: "Products", subItems: [] },
              { name: "Orders", subItems: [] },
              { name: "Customers", subItems: [] },
              { name: "Cart", subItems: [] },
              { name: "Checkout", subItems: [] },
              { name: "Wishlist", subItems: [] },
              { name: "Reviews", subItems: [] }
            ]
          },
          { name: "Social Feed", subItems: [] },
          { name: "Search List", subItems: [] }
        ]
      },
      {
        name: "Products",
        icon: LiaProductHunt,
        active: true,
        lastUpdated: "2025-05-05 16:45:42",
        updatedBy: "jubair-jx",
        subItems: [
          { name: "Add/edit/delete products", subItems: [] },
          { name: "Import Products", subItems: [] },
          { name: "Expired Products", subItems: [] },
          { name: "Category", subItems: [] },
          { name: "Sub Category", subItems: [] },
          { name: "Brands", subItems: [] },
          { name: "Barcode generation & scanning", subItems: [] },
          { name: "Warranties", subItems: [] },
          { name: "Product variants (size, color, etc.)", subItems: [] },
          { name: "Count Stock", subItems: [] }
        ]
      },
      {
        name: "Stock",
        icon: AiOutlineStock,
        active: true,
        lastUpdated: "2025-05-05 16:45:42",
        updatedBy: "jubair-jx",
        subItems: [
          { name: "Admin Dashboard 1", subItems: [] },
          { name: "Admin Dashboard 2", subItems: [] },
          { name: "Sales Dashboard", subItems: [] }
        ]
      }
    ]
  }
];












// jubaiyer vai er code
import { AiOutlineLayout, AiOutlineStock } from "react-icons/ai";
import { GrUserAdmin } from "react-icons/gr";
import { LiaProductHunt } from "react-icons/lia";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

export const menuItems = [
  {
    name: "Dashboard",
    icon: RxDashboard,
    active: true,
    section: "Main",
    lastUpdated: "2025-05-05 16:45:42",
    updatedBy: "jubair-jx",
    subItems: [
      {
        name: "Admin Dashboard 1",
        subItems: [],
      },
      {
        name: "Admin Dashboard 2",
        subItems: [],
      },
      {
        name: "Sales Dashboard",
        subItems: [],
      },
    ],
  },
  {
    name: "Super Admin",
    icon: GrUserAdmin,
    active: true,
    section: "Main",
    lastUpdated: "2025-05-05 16:45:42",
    updatedBy: "jubair-jx",
    subItems: [
      {
        name: "Dasboard",
        subItems: [],
      },
      {
        name: "Companies",
        subItems: [],
      },
      {
        name: "Subscriptions",
        subItems: [],
      },
      {
        name: "Packages",
        subItems: [],
      },
      {
        name: "Domain",
        subItems: [],
      },
      {
        name: "Purchase Transaction",
        subItems: [],
      },
    ],
  },
  {
    name: "Application",
    icon: MdOutlineSettingsApplications,
    section: "Inventory",
    lastUpdated: "2025-05-05 16:45:42",
    updatedBy: "jubair-jx",
    subItems: [
      {
        name: "Chat",
        subItems: [],
      },
      {
        name: "Call",
        subItems: [
          {
            name: "Video Call",
            subItems: [],
          },
          {
            name: "Audio Call",
            subItems: [],
          },
          {
            name: "Call History",
            subItems: [],
          },
        ],
      },
      {
        name: "Calender",
        subItems: [],
      },
      {
        name: "Contacts",
        subItems: [],
      },
      {
        name: "E-mail",
        subItems: [],
      },
      {
        name: "Notes",
        subItems: [],
      },
      {
        name: "File Manager",
        subItems: [],
      },
      {
        name: "Project",
        subItems: [],
      },
      {
        name: "E-Commerce",
        subItems: [
          {
            name: "Products",
            subItems: [],
          },
          {
            name: "Orders",
            subItems: [],
          },
          {
            name: "Customers",
            subItems: [],
          },
          {
            name: "Cart",
            subItems: [],
          },
          {
            name: "Checkout",
            subItems: [],
          },
          {
            name: "Wishlist",
            subItems: [],
          },
          {
            name: "Reviews",
            subItems: [],
          },
        ],
      },
      {
        name: "Social Feed",
        subItems: [],
      },
      {
        name: "Search List",
        subItems: [],
      },
    ],
  },
  // lay out
  {
    name: "Layouts",
    icon: AiOutlineLayout,
    active: true,
    section: "Main",
    lastUpdated: "2025-05-05 16:45:42",
    updatedBy: "jubair-jx",
    subItems: [
      {
        name: "Customizable themes/colors",
        subItems: [],
      },
      {
        name: "Responsive design",
        subItems: [],
      },
     
    ],
    
  },
  //Products
  {
    name: "Products",
    icon: LiaProductHunt,
    active: true,
    section: "Inventory",
    lastUpdated: "2025-05-05 16:45:42",
    updatedBy: "jubair-jx",
    subItems: [
      {
        name: "Add/edit/delete products",
        subItems: [],
      },
      {
        name: "Import Products",
        subItems: [],
      },
      {
        name: "Expired Products",
        subItems: [],
      },
      {
        name: "Category",
        subItems: [],
      },
      {
        name: "Sub Category",
        subItems: [],
      },
      {
        name: "Brands",
        subItems: [],
      },
      {
        name: "Barcode generation & scanning",
        subItems: [],
      },
      {
        name: "Warranties",
        subItems: [],
      },
      {
        name: "Product variants (size, color, etc.)",
        subItems: [],
      },
      {
        name: "Count Stock",
        subItems: [],
      },
     
    ],
    
  },
  //Stock
  {
    name: "Stock",
    icon: AiOutlineStock,
    active: true,
    section: "Main",
    lastUpdated: "2025-05-05 16:45:42",
    updatedBy: "jubair-jx",
    subItems: [
      {
        name: "Admin Dashboard 1",
        subItems: [],
      },
      {
        name: "Admin Dashboard 2",
        subItems: [],
      },
      {
        name: "Sales Dashboard",
        subItems: [],
      },
    ],
  },
];
