import { testimonials } from '../../constants/testimonials';

const TestimonialsSection = () => (
  <section className="bg-white px-5 pb-24 pt-20 text-[#0d1d39] sm:px-8 lg:px-10 lg:pb-32 lg:pt-28" id="stories">
    <div className="mx-auto max-w-220">
      <div className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.48em] text-[#949494]">
          Testimonials
        </p>
        <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
          What Clients say about us
        </h2>
      </div>

      <div className="mt-24 grid gap-x-16 gap-y-20 sm:grid-cols-2 lg:mt-28 lg:gap-x-20 lg:gap-y-20">
        {testimonials.map((testimonial) => (
          <article className="grid grid-cols-[3.75rem_1fr] gap-6" key={testimonial.name}>
            <img
              src={testimonial.image}
              alt=""
              className="h-15 w-15 rounded-lg object-cover"
            />
            <div>
              <p className="text-base font-medium leading-[1.65]">{testimonial.quote}</p>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#b8bdc7]">
                {testimonial.name}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
