import NavBar from "../components/NavBar";
import { IoSearch } from "react-icons/io5";

export default function Hero() {
  return (
    <div className="department-hero h-145 bg-[#28574E] bg-cover bg-center px-15 w-full">
      <div className="department-content pt-5">
        <NavBar />
        <div className="flex flex-col items-center justify-center gap-13.5 relative">
          <div className="flex flex-col items-center justify-center gap-3.5 mt-20">
            <h1 className="fontLibre text-white font-extrabold text-[58px] leading-none tracking-normal">
              Find the right department for your care
            </h1>
            <p className="pt-2 w-150 text-center  text-white fontOutfit font-light text-[20px] leading-none tracking-normal">
              Explore hospital specialties, available services, and care teams.
            </p>
            <div className="flex gap-6.5 pt-8">
              <div className="relative ga">
                <IoSearch className="absolute left-4 top-1/4 text-white w-6 h-6 " />
                <input
                  className=" flex px-13 py-4.5 border text-white w-98.25 h-13.5 border-white rounded-xl "
                  placeholder="Search departments or conditions"
                  type="text"
                />
              </div>
              <button
                className="flex items-center justify-center w-38 h-13.5 rounded-xl  text-[#28574E] border border-white cursor-pointer bg-white hover:bg-[#28574E] hover:text-[white] hover:border-none "
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
