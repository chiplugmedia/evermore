import React from "react";

const PageHero = ({
  title = "Welcome",
  subtitle = "Building scalable digital solutions and seamless web experiences.",
  category = "Page",
  showBadge = true,
}) => {
  return (
    <section className="relative overflow-hidden bg-white text-gray-900 pt-28 sm:pt-36 pb-16 lg:pb-24 px-6 sm:px-12 lg:px-20 border-b border-slate-100">
      {/* Background Decorative Grid Pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Color Blur Accent */}
      <div
        className="absolute -top-24 -left-20 w-96 h-96 bg-gradient-to-tr from-[#0F9AC5]/15 to-[#00E57B]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-2 sm:px-4 text-left">
        {/* Top Eyebrow / Breadcrumb Badge */}
        {showBadge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E2258]/5 border border-[#0E2258]/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00E57B] animate-pulse" />
            <span className="text-xs font-semibold tracking-wide uppercase text-[#0E2258]">
              {category}
            </span>
          </div>
        )}

        {/* Dynamic Page Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
          <span className="block bg-gradient-to-r from-[#0E2258] via-[#0F9AC5] to-[#00E57B] bg-clip-text text-transparent drop-shadow-sm pb-1">
            {title}
          </span>
        </h1>

        {/* Decorative Divider Accent Line */}
        <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[#0E2258] to-[#0F9AC5] rounded-full" />

        {/* Subtitle / Description */}
        <p className="mt-5 text-lg sm:text-xl leading-relaxed text-[#0E2258]/80 max-w-2xl font-medium">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
