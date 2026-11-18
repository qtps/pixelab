import userOne from '../assets/userpic-1.png';
import userTwo from '../assets/userpic-2.png';
import userThree from '../assets/userpic-3.png';
import type { Testimonial } from '../types/testimonial';

export const testimonials: Testimonial[] = [
  {
    quote:
      'Pixelab helped our team turn complex ideas into a clear, beautiful product experience.',
    name: 'Samantha Lee',
    role: 'Product Designer',
    image: userOne,
  },
  {
    quote:
      'The workflow is simple, focused, and flexible enough for every project we work on.',
    name: 'David Chen',
    role: 'Creative Director',
    image: userTwo,
  },
  {
    quote:
      'A thoughtful toolkit for teams that want to move faster without losing the details.',
    name: 'Olivia Martin',
    role: 'Founder, Northstar',
    image: userThree,
  },
];
