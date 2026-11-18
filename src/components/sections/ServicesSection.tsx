import activityIcon from '../../assets/Activity.svg';
import chartIcon from '../../assets/Chart.svg';
import videoIcon from '../../assets/Video.svg';

const services = [
  {
    title: 'Graphic Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.',
    icon: activityIcon,
  },
  {
    title: 'Video Editing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.',
    icon: videoIcon,
  },
  {
    title: 'Digital Marketing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.',
    icon: chartIcon,
  },
];

const ServicesSection = () => (
  <section className="bg-white px-5 pb-20 pt-24 text-[#091a38] sm:px-8 lg:px-10 lg:pb-28 lg:pt-28" id="services">
    <div className="mx-auto max-w-275">
      <div className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.48em] text-[#949494]">
          Service
        </p>
        <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl lg:text-[2.75rem]">
          Our Vision &amp; Our Goal
        </h2>
      </div>

      <div className="mt-24 grid gap-8 md:grid-cols-3 lg:mt-28 lg:gap-12">
        {services.map((service) => (
          <article
            className="flex min-h-108 flex-col items-center rounded-b-[1.4rem] bg-white px-8 py-8 text-center shadow-[0_20px_28px_rgba(0,0,0,0.18)] sm:px-10"
            key={service.title}
          >
            <img src={service.icon} alt="" className="h-17 w-17 object-contain" />
            <h3 className="mt-7 text-[1.75rem] font-bold leading-tight tracking-[-0.04em] text-black">
              {service.title}
            </h3>
            <p className="mt-6 max-w-62.5 text-[0.98rem] leading-[1.65] text-[#303030]">
              {service.description}
            </p>
            <a
              href="#newsletter"
              className="mt-auto rounded-lg bg-[#ff650d] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#e95500]"
            >
              Learn More
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
