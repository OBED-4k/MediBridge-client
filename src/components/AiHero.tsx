import NavBar from "../components/NavBar";

export default function AiHero() {
  return (
    <div className="aiSupport-hero h-145 bg-[#28574E] bg-cover bg-center px-15 w-full">
      <div className="aiSupport-content pt-5">
        <NavBar />
        <div className="flex flex-col items-center justify-center gap-13.5 relative">
          <div className="flex flex-col items-center justify-center gap-3.5 mt-20">
            <h1 className="fontLibre text-white font-extrabold text-[58px] leading-none tracking-normal">
              Talk to MediCare AI Support
            </h1>
            <p className="pt-2 w-150 text-center  text-white fontOutfit font-light text-[20px] leading-none tracking-normal">
              Describe your symptoms or ask any hospital-related question. The
              AI will guide you step-by-step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
