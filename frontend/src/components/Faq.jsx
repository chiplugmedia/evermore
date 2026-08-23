import heroAI from "@/assets/img/image0AI.jpeg";

const FAQS = [
  {
    q: "What is Evermore?",
    a: "Evermore bridges the gap between the digital world and real-world opportunities while contributing to the development of next-generation Generative Artificial Intelligence.",
  },
  {
    q: "What is Evermore's mission?",
    a: "We focus on creating better prompts, more intelligent interactions, and increasing human-like responses to make AI more useful and natural.",
  },
  {
    q: "How can I earn rewards?",
    a: "Users can earn rewards by helping train our AI, improving memory functions, and contributing to the growth of our platform.",
  },
];

export default function FAQ() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* ABOUT EVERAI */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F9AC5]/10 text-[#0E2258] text-sm font-semibold">
              About EverAI
            </span>

            <h3 className="mt-5 text-4xl md:text-6xl font-black leading-tight text-[#0E2258]">
              Unlock Global Remote Job
              <span className="block bg-gradient-to-r from-[#0E2258] via-[#0F9AC5] to-[#00E57B] bg-clip-text text-transparent">
                Opportunities with EverAI
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
              <span className="font-semibold text-[#0E2258]">$18.6/hour</span>.
              Most job offers are simple tasks that require little to no
              experience, special skills, or qualifications.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#0F9AC5]/10 rounded-full blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-black/10">
              <img
                src={heroAI}
                alt="EverAI Remote Jobs"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div id="faq" className="max-w-5xl mx-auto mt-24">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F9AC5]/10 text-[#0E2258] text-sm font-semibold">
              FAQ EverAI
            </span>

            <h3 className="mt-5 text-4xl md:text-6xl font-black leading-tight text-[#0E2258]">
              Frequently Asked
              <span className="block bg-gradient-to-r from-[#0E2258] via-[#0F9AC5] to-[#00E57B] bg-clip-text text-transparent">
                Questions
              </span>
            </h3>

            <p className="mt-3 text-sm md:text-base text-slate-600">
              Learn more about Evermore, our AI mission, reward system, and
              opportunities.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {FAQS.map((item) => (
              <details
                key={item.q}
                className=""
              >
                <summary className="cursor-pointer list-none p-5 flex items-center justify-between font-semibold text-[#0E2258]">
                  {item.q}
                  <span className="text-[#0F9AC5] text-xl">+</span>
                </summary>

                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
