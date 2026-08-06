import { Link } from "react-router";

type Props = {
  name: string;
  description: string;
  specialists: number;
  icon: string;
  path: string;
};

export default function DepartmentCard({
  name,
  description,
  specialists,
  icon,
  path,
}: Props) {
  return (
    <Link to={`/${path}`} className="w-full">
      <div className="flex flex-col border border-[#DDDDDD] w-full h-98 rounded-[20px] p-6 bg-white">
        <div className="flex justify-between">
          <img className="w-15 h-15" src={icon} alt={name} />
          <div className="">
            <p className="bg-[#DCF2EE] fontOutfit w-26 h-7 text-center font-normal text-sm/none px-3.5 py-1.75 gap-2.5 rounded-4xl text-nowrap">
              {specialists} Specialists
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-1 mt-15">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#28574E] fontOutfit font-medium text-2xl leading-none tracking-normal pb-3">
              {name}
            </h3>
            <p className="fontOutfit font-light text-[#757575] text-[18px] leading-[110%] tracking-normal w-full ">
              {description}
            </p>
          </div>

          <button
            type="submit"
            className="flex items-center mt-auto justify-center w-full h-13.5 fontOutfit font-medium text-[18px] leading-[100%] tracking-normal gap-2.5 text-[#28574E] border-[#28574E] border rounded-lg px-6 py-3 "
          >
            View Department
          </button>
        </div>
      </div>
    </Link>
  );
}
