import userOne from '../assets/userpic-1.png';
import userTwo from '../assets/userpic-2.png';
import userThree from '../assets/Mask-1.png';
import userFour from '../assets/Mask-2.png';
import type { Testimonial } from '../types/testimonial';

export const testimonials: Testimonial[] = [
  {
    quote:
      'Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support',
    name: 'Rayhan Curran',
    role: '',
    image: userOne,
  },
  {
    quote:
      'As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website',
    name: 'Kayley Frame',
    role: '',
    image: userTwo,
  },
  {
    quote:
      'The most important part of the Startup Framework is the samples',
    name: 'Gene Whitfield',
    role: '',
    image: userThree,
  },
  {
    quote: 'I’ve built my website with Startup just in one day, and it was ready-to-go.',
    name: 'Allan Kim',
    role: '',
    image: userFour,
  },
];
