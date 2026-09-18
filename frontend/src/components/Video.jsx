import heroVideo1 from "@/assets/img/Video002e.mp4";
import heroAIvide from "@/assets/img/Video001e.mp4";
import { Link } from "react-router-dom";

export default function Video() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* SECTION 1 */}
        <div className="mt-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Left */}
          <div className="order-2 lg:order-1">
            <h3 className="mt-5 text-4xl md:text-6xl font-black leading-tight text-[#0E2258]">
              Evermore is Opening{" "}
              <span className="block bg-gradient-to-r from-[#0E2258] via-[#0F9AC5] to-[#00E57B] bg-clip-text text-transparent">
                Opportunities for Africans!
              </span>
            </h3>

            <p className="mt-6 text-[#0E2258]/80 leading-relaxed text-lg">
              Evermore has opened opportunities for thousands of Africans to
              earn money hourly by doing something as simple as answering
              questions and providing human responses that help make EverAI
              smarter before its launch.
            </p>

            <p className="mt-4 text-[#0E2258]/70 leading-relaxed">
              You don’t need to be an AI expert. You simply share your
              knowledge, experiences, and opinions through simple tasks—and get
              paid for your contribution.
            </p>

            <p className="mt-4 text-[#0E2258]/70 leading-relaxed font-medium">
              Why watch others earn when you can be part of it? This could be
              your opportunity to turn your free time into extra income while
              contributing to the development of smarter AI.
            </p>

            <p className="mt-4 text-[#0E2258] font-semibold leading-relaxed">
              Join Evermore. Start participating. Start earning. Grab the
              opportunity now… and thank me later!
            </p>
          </div>

          {/* Video Container 2 */}
          <div className="order-1 lg:order-2 relative group">
            {/* Ambient Background Glow */}
            <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full transition duration-500" />

            <div className="relative overflow-hidden rounded-[32px]">
              <video
                src={heroAIvide}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-[32px]"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2 - EVERAI */}
        <div className="mt-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Video Container 1 */}
          <div className="relative group">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-2 rounded-3xl transition duration-500" />

            <div className="relative overflow-hidden rounded-2xl">
              <video
                src={heroVideo1}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="mt-5 text-4xl md:text-6xl font-black leading-tight text-[#0E2258]">
              Get Paid to Train the
              <span className="block bg-gradient-to-r from-[#0E2258] via-[#0F9AC5] to-[#00E57B] bg-clip-text text-transparent">
                Next Generation of AI
              </span>
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-[#0E2258]/75">
              Have you ever wondered how AI assistants like ChatGPT, Claude,
              Grok, and Gemini get answers to questions and prompts they are
              asked? It is because AI assistants are trained by humans'
              interactions, knowledge, and experiences through surveys.
            </p>

            <p className="mt-5 text-[#0E2258]/70 leading-relaxed">
              This new EverAI needs the same training before it launches, and
              the brand company is paying up to{" "}
              <span className="font-semibold text-[#0E2258]">$18.6 hourly</span>{" "}
              to people training this AI. You are not penalized as there are no
              wrong answers; your responses are documented and you get paid
              hourly.
            </p>

            <p className="mt-5 text-[#0E2258]/70 leading-relaxed font-medium">
              The opportunity to join the trainers getting paid is still
              open—ask me more before slots get filled.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#0E2258] via-[#15347A] to-[#0F9AC5] hover:shadow-lg hover:shadow-[#0F9AC5]/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Join EverAI Training
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
