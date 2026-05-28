export default function Hero() {

  const handleScroll = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="
        max-w-[1450px]
        mx-auto
        px-6
        pt-4
      "
    >
      <div
        className="
          liquid-glass
          relative
          overflow-hidden
          rounded-[55px]
          h-[calc(100vh-140px)]
          min-h-[520px]
          shadow-[0_40px_120px_rgba(110,90,170,.12)]
        "
      >
        {/* Background Looping Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4"
        />

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40 z-10" />

        {/* Hero Content (Centered Flex) */}
        <div
          className="
            absolute
            inset-0
            z-20
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-10
          "
        >
          <p
            className="
              uppercase
              tracking-[8px]
              text-[#baa8ff]
              font-semibold
              text-xs
              sm:text-sm
            "
          >
            CREATIVE DEVELOPER
          </p>

          <h1
            className="
              mt-6
              text-white
              text-5xl
              sm:text-7xl
              md:text-8xl
              font-normal
              leading-[0.95]
              tracking-[-2.46px]
              max-w-5xl
            "
          >
            Bold Ideas That
            <br />
            <span className="opacity-70">Start With Vision.</span>
          </h1>

          <p
            className="
              text-white/70
              text-base
              sm:text-lg
              max-w-2xl
              mt-8
              leading-relaxed
            "
          >
            We help modern brands craft digital stories that inspire action and drive results.
          </p>

          {/* Action Button */}
          <div className="mt-10 relative">
            <div className="absolute inset-0 scale-[1.3] bg-white opacity-5 blur-[35px] rounded-full" />
            <button
              onClick={handleScroll}
              className="
                relative
                z-50
                liquid-glass
                text-white
                px-10
                py-4.5
                rounded-full
                font-medium
                cursor-pointer
                hover:scale-105
                hover:-translate-y-1
                transition-all
                duration-500
                animate-[float_3s_ease-in-out_infinite]
                shadow-[0_20px_70px_rgba(129,104,210,.2)]
              "
            >
              Get In Touch ↗
            </button>
          </div>
        </div>

        <style>
          {`
            @keyframes float {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-8px);
              }
            }
          `}
        </style>

      </div>
    </section>
  );
}