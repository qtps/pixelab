import heroImage from '../../assets/hero.png';
import bulbIcon from '../../assets/bulb.svg';
import activityIcon from '../../assets/Activity.svg';
import arrowImg from '../../assets/arrow.png';
import playIcon from '../../assets/Play.svg';
import SiteHeader from '../layout/SiteHeader';

const HeroSection = () => (
  <section className="hero-section overflow-hidden bg-white text-[#101f3a]">
    <SiteHeader />

    <div className="mx-auto grid min-h-[calc(100vh-500px)] container items-center gap-8 px-5  sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-0 lg:px-10  ">
      <div className="relative z-10 max-w-xl">
        <h1 className="max-w-137.5 text-6xl font-extrabold leading-[1.13] tracking-[-0.04em] sm:text-6xl lg:text-[4rem]">
          We boost
          <br />
          growth for your
          <br />
          startup business
        </h1>
        <p className="mt-5 max-w-102.5 text-sm font-medium leading-5 text-[#171717] sm:text-base">
          Our goal is top at the heart of creativity services industry
          <br className="hidden sm:block" /> as a digital creator. In has a after comment
        </p>

        <div className="mt-10 flex items-center gap-6">
          <a
            href="#contact"
            className="rounded-md bg-[#ff650d] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#e95500]"
          >
            Get Started
          </a>
          <a
            href="#work"
            className="group flex items-center gap-3 text-xs font-semibold text-[#171717]"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#ff650d] border-r-transparent">
              <img src={playIcon} alt="" className="h-7 w-7" />
            </span>
            <span className="transition group-hover:text-[#ff650d]">Learn More</span>
          </a>
        </div>
      </div>

      <div className="relative mx-auto h-90 w-full max-w-147.5 sm:h-110 lg:h-130">
        <div className="absolute right-[5%] top-[12%] h-[78%] w-[78%] rounded-full bg-[#f7f7f7] shadow-[0_20px_45px_rgba(16,31,58,0.08)]" />
        <img
          src={heroImage}
          alt="Creative professional using a smartphone"
          className="absolute bottom-0 right-[4%] z-10 h-[95%] w-auto max-w-[92%] object-contain object-bottom"
        />
        <img
          src={bulbIcon}
          alt="Bulb icon"
          aria-hidden="true"
          className="absolute left-[8%] top-[38%] z-20 h-auto w-[43%] max-w-52.5 opacity-70"
        />

        <img
          src={arrowImg}
          alt="arrow pointing to the right"
          aria-hidden="true"
          className="absolute right-[-10%] top-[15%] z-20 h-auto w-[50%] max-w-50 opacity-70"
        />

        <div className="absolute left-[4%] top-[8%] z-30 flex items-center gap-3 rounded-lg bg-white px-3 py-2 shadow-[0_8px_24px_rgba(16,31,58,0.14)]">
          <img src={activityIcon} alt="" className="h-7 w-7" />
          <div className="leading-tight">
            <p className="text-[9px] font-bold text-[#171717]">100% Business Growth</p>
            <p className="mt-1 flex items-center gap-1 text-[7px] text-gray-500">
              <span className="text-[#ffb11b]">★</span> 4.9 (1520 Reviews)
            </p>
          </div>
        </div>

        <div className="absolute bottom-[10%] left-[0%] z-30 rounded-lg bg-white px-3 py-2 shadow-[0_8px_24px_rgba(16,31,58,0.14)]">
          <p className="text-[8px] font-bold text-[#171717]">100,000 Happy Clients</p>
          <p className="mt-1 flex items-center gap-1 text-[7px] text-gray-500">
            <span className="text-[#ffb11b]">★</span> 4.9 (15 Reviews)
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
