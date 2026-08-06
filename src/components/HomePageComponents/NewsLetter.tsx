import Button from "../../components/Button";

export default function NewsLetter() {
  return (
    <div className="w-full pt-20 pb-25 lg:px-15 md:px-10 bg-[#F5F5F5]">
      <div className="container mx-auto flex flex-col items-center gap-5 bg-[#28574E] justify-center md:w-full w-96 max-w-5xl rounded-4xl py-10 md:px-10 px-5">
        <h1 className="fontLibre text-center text-white font-bold text-[34px]">
          Stay informed on your health
        </h1>
        <p className="text-[#DAD8D8] text-[18px] text-center md:w-175 w-full max-w-3xl">
          Get the latest health tips, medical news, and app updates delivered to
          your inbox once a week.
        </p>

        <div className="flex items-center gap-3">
          <input
            className="border-2 border-[#FFFFFF] text-white bg-transparent rounded-lg px-3 md:w-80.5 w-50 h-13.5"
            placeholder="Enter your email address"
            type="email"
          />
          <Button
            variant="secondary"
            content="Subscribe"
            type="button"
            width="w-[150px]"
          />
        </div>
      </div>
    </div>
  );
}
