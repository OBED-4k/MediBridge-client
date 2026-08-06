// import DepartmentLayout from "../Layout/DepartmentLayout";
// import Hero from "../components/Hero";
// import { DepartmentData } from "../data";
// import DepartmentCard from "../components/DepartmentCard";
// import { Link } from "react-router";
// import { LuChevronRight } from "react-icons/lu";
// import { LuChevronLeft } from "react-icons/lu";
// import { AiOutlineDoubleRight } from "react-icons/ai";
// import { AiOutlineDoubleLeft } from "react-icons/ai";

// export default function DepartmentPage() {
//   return (
//     <DepartmentLayout>
//       <div className="bg-[#F5F5F5]">
//         <Hero />
//         {/* Cards */}
//         <div className="flex flex-col gap-5 w-full px-16">
//           <div className="flex justify-start mt-10 mb-10 overflow-x">
//             <div className="flex flex-nowrap gap-3 ">
//               <div className="flex gap-2.5 w-28.75 h-12 rounded-[28px] bg-[#28574E] px-12 py-3.75 ">
//                 <Link to="/">
//                   <p className="flex text-center fontOutfit text-white font-medium text-[16px] leading-[100%] tracking-normal ">
//                     All
//                   </p>
//                 </Link>
//               </div>
//               <div className="flex items-center justify-center gap-2.5 w-36.25 h-12 rounded-[28px] bg-[#E5E5E5] px-12 py-3.75 ">
//                 <Link to="/">
//                   <p className="flex fontOutfit font-light text-[18px] leading-[100%] tracking-normal">
//                     Medical
//                   </p>
//                 </Link>
//               </div>

//               <div className="flex items-center justify-center gap-2.5 w-34.75 h-12 rounded-[28px] bg-[#E5E5E5] px-12 py-3.75 ">
//                 <Link to="/">
//                   <p className="fontOutfit font-medium text-[16px] leading-[100%] tracking-normal">
//                     Surgical
//                   </p>
//                 </Link>
//               </div>

//               <div className="flex items-center justify-center gap-2.5 w-41.25 h-12 rounded-[28px] bg-[#E5E5E5] px-12 py-3.75 ">
//                 <Link to="/">
//                   <p className="fontOutfit font-medium text-[16px] leading-[100%] tracking-normal">
//                     Diagnostics
//                   </p>
//                 </Link>
//               </div>
//               <div className="flex items-center justify-center gap-2.5 w-45.5 h-12 rounded-[28px] bg-[#E5E5E5] px-12 py-3.75 ">
//                 <Link to="/">
//                   <p className="fontOutfit font-medium text-nowrap text-[16px] leading-[100%] tracking-normal">
//                     Mental Health
//                   </p>
//                 </Link>
//               </div>
//               <div className="flex items-center justify-center gap-2.5 w-40.75 h-12 rounded-[28px] bg-[#E5E5E5] px-12 py-3.75 ">
//                 <Link to="/">
//                   <p className="fontOutfit font-medium text-[16px] leading-[100%] tracking-normal">
//                     Emergency
//                   </p>
//                 </Link>
//               </div>
//               <div className="flex items-center justify-center gap-2.5 w-52 h-12 rounded-[28px] bg-[#E5E5E5] px-12 py-3.75 ">
//                 <Link to="/">
//                   <p className="fontOutfit text-nowrap font-medium text-[16px] leading-[100%] tracking-normal">
//                     Women & Children
//                   </p>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* SERVICES OFFERED */}
//           <section>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//               {DepartmentData.map((item) => (
//                 <DepartmentCard
//                   key={item.id}
//                   icon={item.icon}
//                   specialists={item.specialists}
//                   name={item.name}
//                   description={item.description}
//                   path={item.Link}
//                 />
//               ))}
//             </div>
//           </section>
//           {/* Page Navigation Link */}
//           <div className="flex justify-between mt-10 mb-40 items-center w-full h-16 py-1">
//             <p className="fontDMSans font-normal text-[14px] leading-[100%] tracking-normal text-[#838383] ">
//               Showing 8 of 20
//             </p>
//             <div className="flex gap-8 items-center justify-center">
//               <p className="fontDMSans text-[#202020] font-medium text-[14px] leading-[100%] tracking-[0%]">
//                 Page 1 of 10
//               </p>
//               <div className="flex gap-2">
//                 <div className="flex items-center justify-center rounded-md opacity-40 border w-8 h-8 border-[#E8E8E8]">
//                   <AiOutlineDoubleLeft className="w-4 h-4 " />
//                 </div>

//                 <div className="flex items-center justify-center rounded-md opacity-40 border w-8 h-8 border-[#E8E8E8]">
//                   <LuChevronLeft className="w-4 h-4" />
//                 </div>

//                 <div className="flex items-center justify-center rounded-md  border w-8 h-8 border-[#E8E8E8]">
//                   <LuChevronRight className="w-4 h-4 text-[#202020]" />
//                 </div>

//                 <div className="flex items-center justify-center rounded-md  border w-8 h-8 border-[#E8E8E8]">
//                   <AiOutlineDoubleRight className="w-4 h-4 text-[#202020]" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col gap-12 p-12 rounded-[40px] mb-40 bg-[#28574E] w-6xl h-72.75">
//             <div className="flex flex-col gap-1.75 items-center justify-center">
//               <p className="fontLibre font-extrabold text-white text-[34px] leading-none tracking-normal">
//                 Stay informed on your health
//               </p>
//               <p className="fontOutfit text-[#DAD8D8] font-light text-[18px] leading-none tracking-normal">
//                 Get the latest tips, medical news, and app updates delivered to
//                 your inbox a week.
//               </p>
//             </div>
//             <div className="flex gap-4 mx-auto">
//               <input
//                 className="w-80.5 h-13. text-[#DAD8D8] fontOutfit font-normal leading-none tracking-normal rounded-lg px-6 py-4.5 border border-[#FFFFFF] shadow-[0px_0px_0px_1px_#BFC8CA]  "
//                 type="text"
//                 name=""
//                 id=""
//                 placeholder="Enter your email address"
//               />
//               <button
//                 className="w-43.5 h-13.5 px-12 py-4 rounded-lg border fontOutfit font-medium text-[18px] border-white bg-white text-[#28574E] hover:bg-[#28574E] hover:text-white hover:border-white "
//                 type="button"
//               >
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </DepartmentLayout>
//   );
// }
