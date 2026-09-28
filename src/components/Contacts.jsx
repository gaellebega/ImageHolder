import {
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

function Contacts() {
  return (
    <main className="bg-white min-h-screen px-10 py-12 text-black">

      <div className="w-full">

        {/* KIGALI */}
        <div className="mb-12">
          <h1 className="font-sans text-[18px] font-light uppercase tracking-[0.4em] mb-6">
            Kigali
          </h1>

          <div className="font-sans text-[16px] font-light tracking-[0.06em] leading-8">
            <p>cityofkigali@gmail.com</p>
            <p>KG 7 Avenue, Kigali, Rwanda</p>
            <p>+250 788 456 789</p>
          </div>
        </div>

        {/* PHYSICAL PLACE */}
        <div className="mb-12">
          <h2 className="font-sans text-[18px] font-light uppercase tracking-[0.4em] mb-6">
            Physical Place
          </h2>

          <p className="font-sans text-[16px] font-light tracking-[0.06em]">
            Kigali Creative House
          </p>
        </div>

        {/* SOCIALS */}
        <div className="mb-12">
          <h2 className="font-sans text-[18px] font-light uppercase tracking-[0.4em] mb-6">
            Socials
          </h2>

          <div className="font-sans text-[16px] font-light tracking-[0.06em] leading-8">
            <p>Twitter</p>
            <p>Pinterest</p>
            <p>Instagram</p>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="flex items-center justify-between pt-6">

          <p className="font-sans text-[13px] font-light text-gray-400">
            © 2026 Empire Design
          </p>

          <div className="flex items-center gap-5 text-gray-400">

            <a
              href="https://www.instagram.com/empiredesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={17} />
            </a>

            <a
              href="https://www.pinterest.com/empiredesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterestP size={17} />
            </a>

            <a
              href="https://www.linkedin.com/company/empire-design"
              target="_blank"
              rel="noopener noreferrer"
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