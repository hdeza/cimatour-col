import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary-blue px-6 py-4 space-y-6 lg:px-10 lg:py-8">
      <section className="flex justify-between space-x-20">
        <article>
          <p className="font-playfair font-bold text-white text-2xl md:text-4xl">
            Clima<span className="text-primary-orange">Tour</span>
          </p>
          <p className="font-light font-roboto text-white text-xs lg:text-base">
            Your Ultimate Weather-Based Adventure Planner!
          </p>
        </article>
        <article className="text-white text-sm space-y-1 lg:text-2xl">
          <p>Quick Links</p>
          <ul className="text-xs list-disc font-light space-y-1 lg:text-lg">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <a href="">Destinations</a>
            </li>
            <li>
              <Link to={"/forescast"}>Wheater Destinations</Link>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
          </ul>
        </article>
      </section>
      <section className="border-t flex  pt-2 justify-between">
        <p className="text-white text-xs font-light lg:text-base">
          © 2024 ClimaTour. All rights reserved.
        </p>
        <p className="font-playfair font-semibold text-white text-sm text-right lg:text-lg">
          Powered By <span className="text-primary-orange">Dolphine</span>
        </p>
      </section>
    </footer>
  );
}
