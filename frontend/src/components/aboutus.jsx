import heroVisual from "@/assets/img/evermorehero0.jpg";
import heroAI from "@/assets/img/image0AI.jpeg";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        {/* SECTION 1 - EVERAI */}
        <div className="mt-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            {/* Image Card */}
            <div
              className="
        relative
        overflow-hidden
       
        
      "
            >
              <img
                src={heroVisual}
                alt="EverAI"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div
              className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        bg-[#0F9AC5]/10
        text-[#0E2258]
        text-sm
        font-semibold
      "
            >
              Core Product
            </div>

            <h3
              className="
        mt-5
        text-4xl
        md:text-6xl
        font-black
        leading-tight
        text-[#0E2258]
      "
            >
              Meet
              <span
                className="
          block
          bg-gradient-to-r
          from-[#0E2258]
          via-[#0F9AC5]
          to-[#00E57B]
          bg-clip-text
          text-transparent
        "
              >
                EverAI
              </span>
            </h3>

            <p
              className="
        mt-6
        text-lg
        leading-relaxed
        text-[#0E2258]/75
      "
            >
              EverAI is the core product developed by the Evermore brand and
              serves as the foundation for many of our future technologies,
              features and intelligent systems.
            </p>

            <p
              className="
        mt-5
        text-[#0E2258]/70
        leading-relaxed
      "
            >
              Built as a Generative Artificial Intelligence assistant, EverAI is
              designed to understand human language, process prompts and
              generate intelligent responses based on user instructions.
            </p>

            <p
              className="
        mt-5
        text-[#0E2258]/70
        leading-relaxed
      "
            >
              To become smarter and more human-like, EverAI requires training,
              feedback and continuous improvements. We provide opportunities for
              contributors to help train, correct and enhance its memory,
              reasoning and response capabilities through simple tasks.
            </p>

            <p
              className="
        mt-5
        text-[#0E2258]/70
        leading-relaxed
      "
            >
              Through our reward system, contributors are recognized and paid
              based on the value of their completed tasks and their impact on
              EverAI's development and intelligence growth.
            </p>

            {/* Highlights */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div
                className="
          px-4
          py-2
          rounded-full
          bg-[#0E2258]
          text-white
          text-sm
          font-medium
        "
              >
                AI Training
              </div>

              <div
                className="
          px-4
          py-2
          rounded-full
          bg-[#0F9AC5]
          text-white
          text-sm
          font-medium
        "
              >
                Memory Enhancement
              </div>

              <div
                className="
          px-4
          py-2
          rounded-full
          bg-[#00E57B]
          text-[#0E2258]
          text-sm
          font-medium
        "
              >
                Earn Rewards
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to="/register"
                className="
          inline-flex
          items-center
          justify-center
          px-8
          py-4
          rounded-2xl
          font-semibold
          text-white
          bg-gradient-to-r
          from-[#0E2258]
          via-[#15347A]
          to-[#0F9AC5]
        
          transition-all
          duration-300
        "
              >
                Join EverAI Training
              </Link>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="mt-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Left */}
          <div className="order-2 lg:order-1">
            <span
              className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        bg-[#0F9AC5]/10
        text-[#0E2258]
        text-sm
        font-semibold
      "
            >
              About EverAI
            </span>

            <h3
              className="
        mt-5
        text-4xl
        md:text-6xl
        font-black
        leading-tight
        text-[#0E2258]
      "
            >
              Unlock Global Remote Job
              <span
                className="
          block
          bg-gradient-to-r
          from-[#0E2258]
          via-[#0F9AC5]
          to-[#00E57B]
          bg-clip-text
          text-transparent
        "
              >
                Opportunities with EverAI.
              </span>
            </h3>

            <p className="mt-6 text-black/60 leading-relaxed text-lg">
              Signing up on EverAI Assistant gives you access to a new dimension
              of opportunities within the global digital labour market.
            </p>

            <p className="mt-4 text-black/60 leading-relaxed">
              EverAI has been developed to source and distribute remote job
              opportunities from around the world, helping subscribers discover
              relevant opportunities without having to search endlessly across
              multiple platforms.
            </p>

            <p className="mt-4 text-black/60 leading-relaxed">
              The system is designed to identify, filter, and promptly notify
              subscribers when new remote jobs and opportunities become
              available, paying as high as{" "}
              <span className="font-semibold">$18.6/hour</span>. Most job offers
              are simple tasks that require little to no experience, special
              skills, or qualifications.
            </p>
          </div>

          {/* Image Right */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black/5 rounded-full blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-black/10">
              <img
                src={heroAI}
                alt="EverAI Remote Jobs"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
