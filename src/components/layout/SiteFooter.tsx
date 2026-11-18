import logo from '../../assets/Logo.svg';

const SiteFooter = () => (
  <footer className="bg-white px-5 pb-10 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-275 border-t border-[#eeeeee] pt-8">
      <div className="flex flex-col items-center gap-6 text-sm text-[#19106c] lg:flex-row lg:justify-between">
        <img src={logo} alt="Pixelab" className="h-7 w-auto object-contain" />
        <span>© 2020 Epixelab. All rights reserved.</span>
        <nav className="flex flex-wrap justify-center gap-6">
          <a href="#work" className="hover:text-[#ff650d]">Portfolio</a>
          <a href="#services" className="hover:text-[#ff650d]">How it Works</a>
          <a href="#services" className="hover:text-[#ff650d]">Pricing</a>
          <a href="#team" className="hover:text-[#ff650d]">About</a>
          <a href="#newsletter" className="hover:text-[#ff650d]">Login</a>
        </nav>
      </div>
      <p className="mt-8 border-t border-[#eeeeee] pt-8 text-sm text-[#a0a1b3]">
        Startup Framework contains components and complex blocks which can easily be integrated into almost any design.
      </p>
    </div>
  </footer>
);

export default SiteFooter;
