import {
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

function Contacts() {
  return (
    <main className="min-h-screen bg-white px-10 pt-12 pb-6">
      
      {/* CONTENT */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

          {/* KIGALI */}
          <div className="py-6">
            <h1 className="font-sans text-[16px] md:text-[19px] font-light uppercase tracking-[0.42em] text-black mb-7">
              Kigali
            </h1>

            <div className="font-sans text-[15px] md:text-[17px] font-light text-black tracking-[0.08em] leading-8">
              <p>cityofkigali@gmail.com</p>
              <p>KG 7 Avenue, Kigali, Rwanda</p>
              <p>+250 788 456 789</p>
            </div>
          </div>

          {/* PHYSICAL PLACE */}
          <div className="py-6">
            <h2 className="font-sans text-[16px] md:text-[19px] font-light uppercase tracking-[0.42em] text-black mb-7">
              Physical Place
            </h2>

            <p className="font-sans text-[15px] md:text-[17px] font-light text-black tracking-[0.08em] leading-8">
              Kigali Creative House
            </p>
          </div>

          {/* SOCIALS */}
          <div className="py-6">
            <h2 className="font-sans text-[16px] md:text-[19px] font-light uppercase tracking-[0.42em] text-black mb-7">
              Socials
            </h2>

            <div className="font-sans text-[15px] md:text-[17px] font-light text-black tracking-[0.08em] leading-8">
              <p>Twitter</p>
              <p>Pinterest</p>
              <p>Instagram</p>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto flex items-center justify-between mt-10">

        <p className="font-sans text-[13px] md:text-[14px] font-light text-gray-400 tracking-[0.1em]">
          © 2026 Empire Design
        </p>

        <div className="flex items-center gap-5 text-gray-400">

          <a
            href="https://www.instagram.com/empiredesign"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-black transition-colors"
          >
            <FaInstagram size={17} />
          </a>

          <a
            href="https://www.pinterest.com/empiredesign"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className="hover:text-black transition-colors"
          >
            <FaPinterestP size={17} />
          </a>

          <a
            href="https://www.linkedin.com/company/empire-design"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-black transition-colors"
          >
            <FaLinkedinIn size={17} />
          </a>

        </div>

      </footer>
    </main>
  );
}

export default Contacts;