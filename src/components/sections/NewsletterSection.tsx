import newsImg from "../../assets/news.png";

const NewsletterSection = () => (
  <section className="bg-white px-5 pb-20 pt-24 text-[#091a38] sm:px-8 lg:px-10 lg:pb-24 lg:pt-28" id="newsletter">
    <div className="mx-auto max-w-275">
      <div className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.48em] text-[#949494]">
          Our Team
        </p>
        <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
          Subscribe Our Newsletter
        </h2>
      </div>

      <div className="mx-auto mt-20 grid max-w-235 items-center gap-12 lg:grid-cols-[0.7fr_1.7fr] lg:gap-16">
        <img
          src={newsImg}
          alt="Newsletter illustration"
          className="mx-auto h-60 w-auto max-w-full object-contain sm:h-72 lg:h-80"
        />

        <form className="space-y-10" action="#newsletter">
          <p className="max-w-190 text-base leading-[1.6] text-[#171717]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
          <label className="block">
            <span className="sr-only">Your email address</span>
            <input
              type="email"
              required
              placeholder="Your E-mail here..."
              className="h-16 w-full rounded-full border border-[#e6e6e6] px-14 text-lg text-[#171717] shadow-[0_15px_25px_rgba(0,0,0,0.15)] outline-none placeholder:text-[#171717] focus:border-[#ff650d]"
            />
          </label>
          <button
            type="submit"
            className="h-10 w-full rounded-lg bg-[#ff650d] text-sm font-medium text-white transition hover:bg-[#e95500]"
          >
            Subscribe Our Newsletter
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default NewsletterSection;
