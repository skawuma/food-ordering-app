import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          For generations, our doors would not have stayed open if it were not for your love and support. From the multi-tiered cake to the one cookie we bake, we put in an equal amount of energy and joy. It brings us pleasure that we can share our passion through our crafts and sweets.
           </p>
          <p>We as a community have faced a lot of up and downs, and we know those downs can be really hard, but know that we take every situation you bring to us seriously and thrive to only put out products of quality and tradition.</p>
          <p>For many years and the future to come, we will continue to share our love and invite all who would like to join us for drinks and sweets.We look forward to seeing you!Modern Pastry Family</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            +46 738 123 123
          </a>
        </div>
      </section>
    </>
  )
}