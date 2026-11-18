import bulbIcon from '../../assets/bulb.svg';
import chartIcon from '../../assets/Chart.svg';
import videoIcon from '../../assets/Video.svg';

const services = [
  {
    number: '01',
    title: <>Brand<br />strategy</>,
    description: 'Find your voice, define your difference, and build a brand people connect with.',
    icon: bulbIcon,
    accent: false,
  },
  {
    number: '02',
    title: <>Digital<br />experiences</>,
    description: 'Websites and products that feel intuitive, look considered, and perform brilliantly.',
    icon: chartIcon,
    accent: true,
  },
  {
    number: '03',
    title: <>Content &amp;<br />motion</>,
    description: 'Stories in motion, made to make an impact across every screen and channel.',
    icon: videoIcon,
    accent: false,
  },
];

const ServicesSection = () => (
  <section className="services-section" id="process">
    <div className="container">
      <div className="section-heading">
        <div className="section-label">02 / How we help</div>
        <h2>Built for the <em>bold.</em></h2>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className={`service-card ${service.accent ? 'card-accent' : ''}`} key={service.number}>
            <div className="service-icon"><img src={service.icon} alt="" /></div>
            <span className="service-number">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#contact" aria-label={`Learn about ${service.number} service`}>↗</a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
