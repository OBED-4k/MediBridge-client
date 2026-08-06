import React from "react";
import { Heart, Baby, Bone, Venus, Eye } from "lucide-react";
import icon from "../../assets/Brainy.svg";
import Tooth from "../../assets/Container (1).svg";
import firstAid from "../../assets/GP.svg";
import Button from "../../components/Button";
import { Link } from "react-router";

interface Idep {
  id?: number;
  icon: React.ReactNode;
  department: string;
  style?: string;
}

export default function Explore() {
  const departments: Idep[] = [
    {
      id: 1,
      icon: <Heart />,
      department: "Cardiology",
      style: "text-[#FC0707]  bg-[#FFF4F3]",
    },
    {
      id: 2,
      icon: <Baby />,
      department: "Pediatrics",
      style: "text-[#F9A836] bg-[#FFF5E8]",
    },
    {
      id: 3,
      icon: <img src={icon} alt="" />,
      department: "Mental Health",
      style: "text-[] bg-[#CFDFE0]",
    },
    {
      id: 4,
      icon: <img src={Tooth} alt="" />,
      department: "Dentistry",
      style: "text-[25px] text-[#191C1D] bg-[#E1E3E3] text-[]",
    },
    {
      id: 5,
      icon: <Bone />,
      department: "Orthopedics",
      style: "text-[#8519FF] bg-[#FEE2FF]",
    },
    {
      id: 6,
      icon: <img src={firstAid} alt="" />,
      department: "General Practice",
      style: "text-[#00454B] bg-[#D1FAFF]",
    },
    {
      id: 7,
      icon: <Venus />,
      department: "OB-GYN",
      style: "text-[#2B00FF] bg-[#ECE6FF]",
    },
    {
      id: 8,
      icon: <Eye />,
      department: "Ophthalmology",
      style: "text-[#5F330E] bg-[#FAEFE7]",
    },
  ];

  const Card = ({ icon, department, style }: Idep) => {
    return (
      <div className="bg-white rounded-lg flex flex-col items-center justify-center lg:w-62.5 md:w-62.5 lg:h-[148.5px] md:h-[148.5px] lg:gap-2 md:gap-2 gap-3 p-2">
        <span
          className={`${style} w-15 h-15 rounded-full flex items-center justify-center`}
        >
          {icon}
        </span>
        <p className="lg:text-[20px] md:text-[20px] text-[15px] flex sm:item-center font-semibold text-center text-nowrap">
          {department}
        </p>
      </div>
    );
  };

  return (
    <div className="bg-[#28574E] w-full px-5 lg:px-10 md:px-10 md:py-10 lg:py-10">
      <div className="mx-auto container py-8 flex flex-col items-center justify-center gap-4">
        <span className="bg-[#DCF2EE] text-[#28574E] text-[18px] rounded-[31px]  h-10.75 w-40.25 flex items-center justify-center">
          Specialty care
        </span>
        <h1 className="font-semibold text-center lg:text-[34px] md:text-[34px] text-[23px] text-white fontLibre">
          10+ departments. One unified record.
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 md:gap-6 gap-4 mt-8 w-full">
          {departments.map((department) => {
            return <Card key={department.id} {...department} />;
          })}
        </div>

        <Link to="/departments">
          <Button
            variant="primaryWBorder"
            width="w-[281px] mt-5"
            type="button"
            content="Explore all Departments"
          />
        </Link>
      </div>
    </div>
  );
}
