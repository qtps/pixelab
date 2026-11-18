import videoBanner from '../../assets/video-banner.png';

const FeatureSection = () => (
  <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28" id="work">
    <div className="mx-auto grid max-w-275 items-center gap-12 lg:grid-cols-[0.72fr_1.7fr] lg:gap-16">
      <div className="flex min-h-110 flex-col justify-between px-2 sm:px-0 lg:py-5">
        <div>
          <h2 className="max-w-60 text-2xl font-medium leading-[1.45] tracking-[-0.03em] text-[#19106c] sm:text-[1.65rem]">
            Many Blocks and Components
          </h2>
          <p className="mt-10 max-w-70 text-base leading-[1.8] text-[#a0a1b3]">
            Startup Framework contains components and complex blocks which can easily be integrated into almost any design.
          </p>
        </div>

        <a
          href="#work"
          className="mt-10 inline-flex w-fit rounded-full border-2 border-[#e7e7ec] px-10 py-3 text-base font-medium text-[#19106c] transition hover:border-[#19106c]"
        >
          Explore
        </a>
      </div>

      <div className="relative overflow-hidden rounded-xl">
        <img
          src={videoBanner}
          alt="Colorful lounge chair and hanging chair"
          className="aspect-[1.92/1] h-full w-full object-cover"
        />
        <button
          type="button"
          aria-label="Play feature video"
          className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#4b2ee8] transition hover:bg-[#3920ca]"
        >
          <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
        </button>
      </div>
    </div>
  </section>
);

export default FeatureSection;
