import React from "react";
import contactBg from "../assets/contact-bg.png";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div
          className="relative w-full rounded-[2.5rem] overflow-hidden min-h-[600px] flex flex-col items-center justify-center text-center p-8 md:p-16 transition-transform duration-500 hover:scale-[1.01]"
          style={{
            backgroundImage: `url(${contactBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            fontFamily: "sans-serif",
          }}
        >
          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
            <h2 className="text-white text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Let's Turn Your Great Visions Into Reality.
            </h2>

            <p className="text-white/90 text-sm sm:text-lg md:text-xl font-light mb-12 max-w-2xl">
              Ready to discuss opportunities further? Feel Free to Reach Out
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
              {/* Email Button */}
              <a
                href="mailto:shawnforbusiness01@gmail.com"
                className="px-4 py-3 sm:px-8 sm:py-4 bg-white text-black rounded-full font-semibold text-xs sm:text-sm md:text-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 min-w-0 sm:min-w-[160px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                ShawnForBusiness01@gmail.com
              </a>

              {/* Instagram Button */}
              <a
                href="https://www.instagram.com/daviez_shawn/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-xs sm:text-sm md:text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 min-w-0 sm:min-w-[160px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
                daviez_shawn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
