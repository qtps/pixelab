import dribbbleIcon from '../../assets/dribbble.svg';
import facebookIcon from '../../assets/facebook.svg';
import twitterIcon from '../../assets/twitter.svg';
import maskThree from '../../assets/Mask-3.png';
import userTwo from '../../assets/userpic-2.png';
import userThree from '../../assets/userpic-3.png';

const team = [
  { name: 'Vanessa Laird', role: 'UI Designer', image: userThree },
  { name: 'Mason Campbell', role: 'UI Designer', image: maskThree },
  { name: 'Irea Evans', role: 'Client Manager', image: userTwo },
];

const TeamSection = () => (
  <section className="bg-white px-5 pb-24 pt-20 text-[#19106c] sm:px-8 lg:px-10 lg:pb-32 lg:pt-28" id="team">
    <div className="mx-auto max-w-275">
      <div className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.48em] text-[#949494]">
          Our Team
        </p>
        <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
          Meet The Team
        </h2>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3 lg:mt-16 lg:gap-9">
        {team.map((member) => (
          <article className="overflow-hidden rounded-xl border-2 border-[#e7e7ec] text-center" key={member.name}>
            <div className="flex min-h-87 flex-col items-center justify-center px-6 py-10">
              <img src={member.image} alt="" className="h-34 w-34 rounded-full object-cover" />
              <h3 className="mt-9 text-2xl font-medium">{member.name}</h3>
              <p className="mt-5 text-base font-semibold uppercase tracking-[0.2em] text-[#a3a3b4]">
                {member.role}
              </p>
            </div>
            <div className="grid grid-cols-3 border-t-2 border-[#e7e7ec]">
              {[twitterIcon, facebookIcon, dribbbleIcon].map((icon, index) => (
                <a
                  href="#newsletter"
                  aria-label={`${member.name} social profile ${index + 1}`}
                  className="flex h-17 items-center justify-center border-r-2 border-[#e7e7ec] last:border-r-0 transition hover:bg-[#f7f7fa]"
                  key={icon}
                >
                  <img src={icon} alt="" />
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
