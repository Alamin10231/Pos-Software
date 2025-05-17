import { AiOutlineLayout, AiOutlineStock } from "react-icons/ai";
import { BiPurchaseTag } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { FcSalesPerformance } from "react-icons/fc";
import { GoPeople } from "react-icons/go";
import { GrUserAdmin } from "react-icons/gr";
import { LiaProductHunt } from "react-icons/lia";
import { LuReceipt } from "react-icons/lu";
import {
  MdOutlineAccountBalance,
  MdOutlineSettingsApplications,
} from "react-icons/md";
import { RiPagesLine, RiProductHuntLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { TbReportSearch, TbTransfer } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router";
import { admindashboard1, admindashboard2, SalesDashboard } from "../Utilities/constant";

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
      path:admindashboard1,
      subItems: [],
    },
    {
      name: "Admin Dashboard 2",
      path: admindashboard2, 
      subItems: [],
    },
    {
      name: "Sales Dashboard",
      path:SalesDashboard, 
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
  // product
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
  // stock
  {
    id: 6,
    name: "Stock",
    icon: AiOutlineStock,
    active: true,
    section: "Inventory",
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
  // purhcase
  {
    id: 7,
    name: "Purchases",
    icon: BiPurchaseTag,
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
    id: 8,
    name: "Sales",
    icon: FcSalesPerformance,
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
  // promo
  {
    id: 9,
    name: "Promo",
    icon: RiProductHuntLine,
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
  // payment
  {
    id: 10,
    name: "Payment & Receipt Handling",
    icon: LuReceipt,
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

  // extra alamin section
  {
    id: 11,
    name: "Layouts",
    icon: AiOutlineLayout,
    active: true,
    section: "alamin",
    lastUpdated: "2025-05-05 16:45:42",
    updatedBy: "jubair-jx",
    subItems: [
      {
        name: "themes/colors",
        subItems: [],
      },
      {
        name: " design",
        subItems: [
          {
            name: "themes/colors",
            subItems: [],
          },
        ],
      },
    ],
  },

  // Returns
  {
    id: 12,
    name: "Returns",
    icon: MdOutlineAccountBalance,
    active: true,
    section: "Inventory",
    lastUpdated: "2025-05-05 16:45:42",
    updatedBy: "jubair-jx",
    subItems: [
      {
        name: "List Returns",
        subItems: [],
      },

      {
        name: "Add Returns",
        subItems: [],
      },
    ],
  },
  // Transfers
  {
    id: 13,
    name: "Transfer",
    icon: TbTransfer,
    active: true,
    section: "Inventory",
    lastUpdated: "2025-05-05 16:45:42",
    updatedBy: "jubair-jx",
    subItems: [
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
  // finance & account
  {
    id: 14,
    name: "Finance & Accounts",
    icon: VscAccount,
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
  // Peoples
  {
    id: 15,
    name: "Peoples",
    icon: GoPeople,
    active: true,
    section: "Inventory",
    lastUpdated: "2025-05-05 16:45:42",
    updatedBy: "jubair-jx",
    subItems: [
      {
        name: "Customers",
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
  // Reports

  {
    id: 16,
    name: "Reports",
    icon: TbReportSearch ,
    active: true,
    section: "Inventory",
    lastUpdated: "2025-05-05 16:45:42",
    updatedBy: "jubair-jx",
    subItems: [
      {
        name: "Sales reports",
        subItems: [
          {
            name: "Sales reports",
            subItems: [],
          },
          {
            name: "Best Seller",
            subItems: [],
          },
          {
            name: "Daily Sales",
            subItems: [],
          },
          {
            name: "Monthly Sales",
            subItems: [],
          },
        ],
      },

      {
        name: "Purchases Reports",
        subItems: [
          {
            name: "Purchases Reports",
            subItems: [],
          },
          {
            name: " Daily Purchases ",
            subItems: [],
          },
          {
            name: " Monthly Purchases ",
            subItems: [],
          },
        ],
      },

      {
        name: "Inventory Report",
        subItems: [
          {
            name: "Inventory Reports",
            subItems: [],
          },
          {
            name: "Stock History",
            subItems: [],
          },
          {
            name: "Sold Stock",
            subItems: [],
          },
        ],
      },

      {
        name: "Invoice Report",
        subItems: [],
      },
      {
        name: "Suppliers Report",
        subItems: [
          {
            name: "Suppliers Report",
            subItems: [],
          },
          {
            name: "Supplier Report",
            subItems: [],
          },
          {
            name: "Supplier Due Report",
            subItems: [],
          },
        ],
      },
      {
        name: "Customers Report",
        subItems: [
          {
            name: "Customers Report",
            subItems: [],
          },
          {
            name: "Customer Report",
            subItems: [],
          },
          {
            name: "Customer Due Report",
            subItems: [],
          },
        ],
      },
      {
        name: "Produc Reports",
        subItems: [
          {
            name: "Product Report",
            subItems: [],
          },
          {
            name: "Product Expiry Report",
            subItems: [],
          },
          {
            name: "Product Quantity Alert",
            subItems: [],
          },
        ],
      },
      {
        name: "Expense Report",
        subItems: [],
      },
      {
        name: "Income Report",
        subItems: [],
      },
      {
        name: "Tax Report",
        subItems: [],
      },
      {
        name: "Profit & Loss",
        subItems: [],
      },
      {
        name: "Adjustment Report",
        subItems: [],
      },
      {
        name: "Staff Report",
        subItems: [],
      },
      {
        name: "Register Report",
        subItems: [],
      },
      {
        name: "Categories Report",
        subItems: [],
      },
      {
        name: "Brands Report",
        subItems: [],
      },
      {
        name: "Annual Report",
        subItems: [],
      },
    ],
  },
  // Pages
  {
    id: 17,
    name: "Pages",
    icon: RiPagesLine,
    active: true,
    section: "Inventory",
    lastUpdated: "2025-05-05 16:45:42",
    updatedBy: "jubair-jx",
    subItems: [
      {
        name: "Profile",
        subItems: [],
      },

      {
        name: "Authentications",
        subItems: [
          {
            name: "Login",
            subItems: [],
          },
          {
            name: "Register",
            subItems: [],
          },
          {
            name: "Forgot Password",
            subItems: [],
          },
          {
            name: "Reset Password",
            subItems: [],
          },
          {
            name: "Email Varification",
            subItems: [],
          },
          {
            name: "2-step Varification",
            subItems: [],
          },
          {
            name: "Lock Screen",
            subItems: [],
          },
        ],
      },
      {
        name: "Error Pages",
        subItems: [
          {
            name: "404 Error",
            subItems: [],
          },
          {
            name: "500 Error",
            subItems: [],
          },
        ],
      },
      {
        name: "Blank Page",
        subItems: [],
      },
      {
        name: "Pricing",
        subItems: [],
      },
      {
        name: "Coming Soon",
        subItems: [],
      },
      {
        name: "Under Maintanance",
        subItems: [],
      },
    ],
  },
    // setting

  {
    id: 18,
    name: "Settings",
    icon: CiSettings,
    active: true,
    section: "Inventory",
    lastUpdated: "2025-05-05 16:45:42",
    updatedBy: "jubair-jx",
    subItems: [
      {
        name: "General Settings",
        subItems: [
          {
            name: "General Settings",
            subItems: [],
          },
          {
            name: "Profile",
            subItems: [],
          },
          {
            name: "Security",
            subItems: [],
          },
          {
            name: "Notificaiton",
            subItems: [],
          },
          {
            name: "Connected Apps",
            subItems: [],
          },
        ],
      },

      {
        name: "Website Settings",
        subItems: [
          {
            name: "Website Settings",
            subItems: [],
          },
          {
            name: " System Settings ",
            subItems: [],
          },
          {
            name: " Localizations ",
            subItems: [],
          },
          {
            name: " Company Settings ",
            subItems: [],
          },
          {
            name: " Prefixes ",
            subItems: [],
          },
          {
            name: "Preferance",
            subItems: [],
          },
          {
            name: " Appearance",
            subItems: [],
          },
          {
            name: " Social Autentication",
            subItems: [],
          },
          {
            name: " Language ",
            subItems: [],
          },
        ],
      },

      {
        name: "App Settings",
        subItems: [
          {
            name: "App Settings",
            subItems: [],
          },
          {
            name: "Invoice",
            subItems: [],
          },
          {
            name: "Printer",
            subItems: [],
          },
          {
            name: "POS",
            subItems: [],
          },
          {
            name: "Custom Fields",
            subItems: [],
          },
        ],
      },

      
      {
        name: "System Settings",
        subItems: [
          {
            name: "System Settings",
            subItems: [],
          },
          {
            name: "Email",
            subItems: [],
          },
          {
            name: "SMS",
            subItems: [],
          },
          {
            name: "OTP",
            subItems: [],
          },
          {
            name: "GDPR Cokkies",
            subItems: [],
          },
        ],
      },
      {
        name: "Finanial Settings",
        subItems: [
          {
            name: "Finanial Settings",
            subItems: [],
          },
          {
            name: "Payment Gateway",
            subItems: [],
          },
          {
            name: "Bank Accounts",
            subItems: [],
          },
          {
            name: "Tax rates",
            subItems: [],
          },
          {
            name: "Currencies",
            subItems: [],
          },
        ],
      },
      {
        name: "Other Settings",
        subItems: [
          {
            name: "Other Settings",
            subItems: [],
          },
          {
            name: "Storage",
            subItems: [],
          },
          {
            name: "Ban IP Address",
            subItems: [],
          },
          {
            name: "Categories",
            subItems: [],
          },
          {
            name: "Warehouse",
            subItems: [],
          },
          {
            name: "Group Permission",
            subItems: [],
          },
          {
            name: "Change Logo",
            subItems: [],
          },
          {
            name: "Customer Group",
            subItems: [],
          },
          {
            name: "Price Group",
            subItems: [],
          },
          {
            name: "Brands",
            subItems: [],
          },
          {
            name: "Varient",
            subItems: [],
          },
          
        ],
      },
      {
        name: "Site Logs",
        subItems: [],
      },
      {
        name: "Backups",
        subItems: [],
      },
      {
        name: "Logout",
        subItems: [],
      },
      
    ],
  },
];
