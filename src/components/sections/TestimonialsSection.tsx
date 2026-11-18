import starIcon from '../../assets/star.svg';
import { testimonials } from '../../constants/testimonials';

const TestimonialsSection = () => (
  <section className="stories-section container" id="stories">
    <div className="section-label">03 / Kind words</div>
    <div className="stories-header">
      <h2>Don&apos;t just take <em>our word</em> for it.</h2>
      <div className="stories-stars" aria-label="Five stars">
        {[1, 2, 3, 4, 5].map((star) => <img key={star} src={starIcon} alt="" />)}
      </div>
    </div>
    <div className="testimonial-grid">
      {testimonials.map((testimonial) => (
        <article className="testimonial" key={testimonial.name}>
          <p>&ldquo;{testimonial.quote}&rdquo;</p>
          <div className="person">
            <img src={testimonial.image} alt="" />
            <div>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
