import Header from "../../components/NavBar";
import AboutBg from "../../assetss/about-hero-image.jpg";

const AboutHero = () => {
  return (
    <section
      className="relative min-h-160 bg-cover bg-center"
      style={{
        backgroundImage: `url(${AboutBg})`,
      }}
    >
      <div className="absolute inset-0 bg-[#28574E]/85" />

      <div className="relative z-20">
        <Header />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 pb-15 text-center">
        <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-2 font-serif text-lg font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
          ABOUT MEDIBRIDGE
        </span>

        <h1 className="mt-5 max-w-4xl font-serif text-6xl font-bold leading-tight text-white">
          Connecting People, Connecting Care.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#E8E8E8]">
          Making healthcare simpler, faster and more human through technology.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
