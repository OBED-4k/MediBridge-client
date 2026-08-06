import { useState } from "react";
import AppLayout from "../Layout/AppLayout";
import { Search } from "lucide-react";
import AllDepartments from "../components/DepartmentPageComponent/AllDepartmentPage";
import Button from "../components/Button";
import NewsLetter from "../components/HomePageComponents/NewsLetter";

export default function DepartmentPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <AppLayout
      headerProps={{
        className: "departmentBg",
        heading: "Find The Right Department For Your Care",
        subHeading:
          "Explore hospital specialties, available services, and care teams.",
        others: (
          <div className="flex md:flex-row flex-col items-center gap-5 pt-5 relative">
            <span className="absolute md:left-3 left-3 md:bottom-3.5 bottom-22 text-white">
              <Search />
            </span>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search departments or conditions"
              type="text"
              className="pr-3 pl-10 text-[#DAD8D8] border-2 border-white md:h-13.5 h-13.5 md:w-98.25 w-90 rounded-xl"
            />
            <Button
              variant="secondary"
              width="w-[152px]"
              type="button"
              content="Search"
            />
          </div>
        ),
      }}
    >
      <AllDepartments searchTerm={searchTerm} id={""} />
      <NewsLetter />
    </AppLayout>
  );
}

// import SideBar from "../components/SideBar";
// import { Link } from "react-router";
// import { CiSearch } from "react-icons/ci";
// import ArrowDown from "../assets/ArrowDown.svg";
// import { AuthDepartmentItem } from "./data";
// import DepartmentCard from "../components/DepartmentCard";

// export default function Department() {
//   console.log(AuthDepartmentItem.length);
//   return (
//     <SideBar>
//       <div className="w-full">
//         {/* First section */}
//         <div className="flex w-full items-center mb-10 justify-between">
//           <div>
//             <p className="fontOutfit font-semibold text-[24px]">Appointments</p>
//             <p className="fontOutfit font-light text-[16px] text-[#707070]">
//               Manage your visits and continue your care.
//             </p>
//           </div>
//           <Link to="/BookNewAppointment">
//             <button
//               type="button"
//               className="fontOutfit font-medium text-[18px] hover:bg-white hover:text-[#28574E] border bg-[#28574E] text-white rounded-lg px-3.5 py-4
//             "
//             >
//               Book New Appointment
//             </button>
//           </Link>
//         </div>
//         <div className="w-full bg-white border border-[#E6E3E3] rounded-lg gap-2.5 ">
//           <div className="flex gap-10 py-4 mb-1.5">
//             {/* Search Bar */}
//             <div className="flex flex-col gap-1">
//               <p className="pl-8 fontOutfit font-medium text-[#494747] text-[16px] ">
//                 Search
//               </p>
//               <div className="relative pl-8">
//                 <CiSearch className="w-4.5 h-4.5 absolute left-11 top-1/2 -translate-y-1/2 text-[#A0A0A0]" />
//                 <input
//                   className="border border-[#E7E4E4] w-162 pl-9 pr-3 py-2.5 rounded-md  outline-none focus:border-[#28574E]"
//                   type="text"
//                   placeholder="Search departments, condition....."
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col gap-1 ">
//               <p className="fontDMSan font-medium text-[16px] text-[#494747] ">
//                 Filter
//               </p>
//               <div className="flex items-center justify-between gap-6 border border-[#E6E3E3] w-57.25 h-11 px-3 rounded-md">
//                 <p className="fontDMSan font-normal text-[14px] text-[#363636] ">
//                   All
//                 </p>
//                 <img className="w-3.75 h-[7.44px] " src={ArrowDown} alt="" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <section className="mx-5 my-5">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
//             {AuthDepartmentItem.map((item) => (
//               <DepartmentCard
//                 key={item.id}
//                 icon={item.icon}
//                 specialists={item.specialists}
//                 name={item.name}
//                 description={item.description}
//                 path={item.Link}
//               />
//             ))}
//           </div>
//         </section>
//       </div>
//     </SideBar>
//   );
// }
