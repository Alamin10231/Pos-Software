import { AiOutlineLayout, AiOutlineStock } from "react-icons/ai";
import { GrUserAdmin } from "react-icons/gr";
import { LiaProductHunt } from "react-icons/lia";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

export const menuItems = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    name: "Application",
    icon: MdOutlineSettingsApplications,
    section: "Main",
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
  {
    id: 4,
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
  {
    id: 5,
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
  {
    id: 6,
    name: "Stock",
    icon: AiOutlineStock,
    active: true,
    section: "",
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
    id: 6,
    name: "Purchases",
    icon: AiOutlineStock,
    active: true,
    section: "Inventory",
    lastUpdated: "2025-05-05 16:45:42",
    updatedBy: "jubair-jx",
    subItems: [
      {
        name: "List Purchases",
        subItems: [],
      },
      {
        name: "Add Purchase",
        subItems: [],
      },
      {
        name: "Purchase Order",
        subItems: [],
      },
      {
        name: "Purchase Return",
        subItems: [],
      },
    ],
  },
  // sales
  {
    id: 3,
    name: "Sales",
    icon: MdOutlineSettingsApplications,
    section: "Inventory",
    lastUpdated: "2025-05-05 16:45:42",
    updatedBy: "jubair-jx",
    subItems: [
      {
        name: "Sales",
        subItems: [
          {
            name: "Online Orders",
            subItems: [],
          },
          {
            name: "POS Orders",
            subItems: [],
          },
        ],
      },
      {
        name: "List Sales",
        subItems: [],
      },
      {
        name: "Add Sale",
        subItems: [],
      },
      {
        name: "Deliveries",
        subItems: [],
      },
      {
        name: "Invoices",
        subItems: [],
      },
      {
        name: "Sales Return",
        subItems: [],
      },
      {
        name: "Quotations",
        subItems: [
          {
            name: "List Quotation",
            subItems: [],
          },
          {
            name: "Add Quotation",
            subItems: [],
          },
        ],
      },
    ],
  },
  // Promo
  {
    id: 1,
    name: "Promo",
    icon: RxDashboard,
    active: true,
    section: "Inventory",
    lastUpdated: "2025-05-05 16:45:42",
    updatedBy: "jubair-jx",
    subItems: [
      {
        name: "Coupons",
        subItems: [],
      },
      {
        name: "Discount Plan",
        subItems: [
          {
            name: "Disocunt Plan",
            subItems: [],
          },
          {
            name: "Disocunt ",
            subItems: [],
          },
        ],
      },
    ],
  },
  // Payment
  {
    id: 1,
    name: "Payment & Receipt Handling",
    icon: RxDashboard,
    active: true,
    section: "Inventory",
    lastUpdated: "2025-05-05 16:45:42",
    updatedBy: "jubair-jx",
    subItems: [
      {
        name: "Split payments",
        subItems: [],
      },
      {
        name: "Refund method selection",
        subItems: [],
      },
      {
        name: "Digital receipt via SMS/Email",
        subItems: [],
      },
      {
        name: "Customizable receipt format (branding)",
        subItems: [],
      },
      {
        name: "List Returns",
        subItems: [],
      },
      {
        name: "Add Returns",
        subItems: [],
      },
      {
        name: "List Transfer",
        subItems: [],
      },
      {
        name: "Add Transfer",
        subItems: [],
      },
    ],
  },
  // Finance & Accounts
  {
    id: 1,
    name: "Finance & Accounts",
    icon: RxDashboard,
    active: true,
    section: "Inventory",
    lastUpdated: "2025-05-05 16:45:42",
    updatedBy: "jubair-jx",
    subItems: [
      {
        name: "Expenses",
        subItems: [
          {
            name: "Expense",
            subItems: [],
          },
          {
            name: "Expense Catgory",
            subItems: [],
          },
        ],
      },

      {
        name: "Income",
        subItems: [
          {
            name: "Income List",
            subItems: [],
          },
          {
            name: "Income Category",
            subItems: [],
          },
        ],
      },

      {
        name: "Bank Accounts",
        subItems: [],
      },
      {
        name: "Money Transfer",
        subItems: [],
      },
      {
        name: "Balance Sheet",
        subItems: [],
      },
      {
        name: "Trial Balance",
        subItems: [],
      },
      {
        name: "Cash Flow",
        subItems: [],
      },
      {
        name: "Account Statement",
        subItems: [],
      },
    ],
  },
];
