import { Link } from "react-router";

const CTA = () => {
  const isLoggedIn = false; // Replace with your actual auth state
  return (
    <section className="bg-[#F7F7F5] py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-[40px] bg-[#28574E] px-8 py-20 text-center md:px-16">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-lg font-medium text-white">
            Get Started Today
          </span>

          <h2 className="mt-6 font-serif text-5xl font-bold text-white leading-tight">
            Ready to experience
            <br />
            better healthcare?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-white/80">
            Join thousands of patients using MediBridge to connect with trusted
            healthcare professionals, access AI-powered support, and manage
            their care with confidence.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              to={isLoggedIn ? "/appointments" : "/login"}
              className="border border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white hover:text-[#2D665A] transition-colors duration-300"
            >
              Book Appointment
            </Link>

            <Link
              to="/supportPage"
              className="border border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white hover:text-[#2D665A] transition-colors duration-300"
            >
              Chat With AI Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
