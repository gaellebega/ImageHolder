import {
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

function Contacts() {
  return (
    <main className="bg-white min-h-screen px-10 py-12 text-black">

      <div className="w-full">

        {/* CONTACT INFORMATION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* KIGALI */}
          <div>
            <h1 className="font-sans text-[16px] font-light uppercase tracking-[0.4em] mb-6">
              Kigali
            </h1>

            <div className="font-sans text-[15px] font-light tracking-[0.06em] leading-8 text-black/70">
              <p>cityofkigali@gmail.com</p>
              <p>KG 7 Avenue, Kigali, Rwanda</p>
              <p>+250 788 456 789</p>
            </div>
          </div>

          {/* PHYSICAL PLACE */}
          <div>
            <h2 className="font-sans text-[16px] font-light uppercase tracking-[0.4em] mb-6">
              Physical Place
            </h2>

            <p className="font-sans text-[15px] font-light tracking-[0.06em] text-black/70">
              Kigali Creative House
            </p>
          </div>

          {/* SOCIALS */}
          <div>
            <h2 className="font-sans text-[16px] font-light uppercase tracking-[0.4em] mb-6">
              Socials
            </h2>

            <div className="font-sans text-[15px] font-light tracking-[0.06em] leading-8 text-black/70">
              <p>Twitter</p>
              <p>Pinterest</p>
              <p>Instagram</p>
            </div>
          </div>

        </div>

        {/* FOOTER */}
        <footer className="flex items-center justify-between pt-20">

          <p className="font-sans text-[13px] font-light text-black/40">
            © 2026 Empire Design
          </p>

          <div className="flex items-center gap-5 text-black/50">

            <a
              href="https://www.instagram.com/empiredesign"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={17} />
            </a>

            <a
              href="https://www.pinterest.com/empiredesign"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
            >
              <FaPinterestP size={17} />
            </a>

            <a
              href="https://www.linkedin.com/company/empire-design"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={17} />
            </a>

          </div>

        </footer>

      </div>

    </main>
  );
}

export default Contacts;