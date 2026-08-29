import logo from "@/assets/img/evermorelogoblack.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0E2258] text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0F9AC5]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00E57B]/10 rounded-full blur-[120px]" />
      </div>

      {/* Large Background Watermark */}
      <div
        className="
          absolute
          bottom-[-40px]
          left-1/2
          -translate-x-1/2
          select-none
          pointer-events-none
          whitespace-nowrap
          font-black
          tracking-[0.08em]
          text-[100px]
          sm:text-[220px]
          md:text-[320px]
          lg:text-[420px]
          xl:text-[520px]
          text-white/[0.04]
          leading-none
          z-0
        "
      >
        Evermore
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Brand */}
            <div className="lg:col-span-5">
              <img
                src={logo}
                alt="Evermore"
                className="h-14 w-auto object-contain"
              />

              <p className="mt-5 text-white/70 leading-relaxed text-sm max-w-md">
                EverAI is our flagship Artificial Intelligence platform,
                designed to learn, evolve and become more intelligent through
                real human interaction and training.
              </p>
            </div>

            {/* Platform */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-base">Platform</h4>

              <ul className="mt-4 space-y-3 text-sm text-white/60">
                <li>
                  <a href="about" className="hover:text-white transition">
                    About Evermore
                  </a>
                </li>

                <li>
                  <a href="#how" className="hover:text-white transition">
                    How It Works
                  </a>
                </li>

                <li>
                  <a href="#reward" className="hover:text-white transition">
                    Reward System
                  </a>
                </li>

                <li>
                  <a href="#everai" className="hover:text-white transition">
                    EverAI
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-base">Company</h4>

              <ul className="mt-4 space-y-3 text-sm text-white/60">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>

                <li>
                  <a href="privacy" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="terms" className="hover:text-white transition">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* Bottom */}
          <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-white/40 text-xs md:text-sm">
              © 2026 Evermore. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
