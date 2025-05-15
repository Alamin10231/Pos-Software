// const LeftSideCopyPanel = () => {
//   const [activeTab, setActiveTab] = useState("primary");

//   return (


      
//         <div className="mt-4">
//           <div className="flex space-x-1 justify-between items-center">
//             {[
//               { id: "primary", label: "Primary Text" },
//               { id: "headline", label: "Headline (Optional)" },
//               { id: "cta", label: "Call To Action" },
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={
//                   px-4 py-2 text-[15px] font-semibold transition-colors duration-200 rounded-none
//                   ${
//                     activeTab === tab.id
//                       ? "text-gray-900 border-b-2 border-[#126DFE]"
//                       : "text-[#252830] hover:text-gray-800 hover:border-gray-300"
//                   }
//                 }
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/ Scrollable Content Section */}
//       <div className="flex-1 overflow-y-auto p-6 custom-scrollbar my-4">
//         {activeTab === "primary" && (
//           <div className="space-y-4">
//             <PrimaryTextTab />
//           </div>
//         )}

//         {activeTab === "headline" && (
//           <div className="space-y-4">
//             <HeadlinesTab />
//           </div>
//         )}

//         {activeTab === "cta" && (
//           <div className="space-y-4">
//             <CallToActionTab />
//           </div>
//         )}
//       </div>{" "}
//     </div>
//   );
// };

// export default LeftSideCopyPanel;