import { Link } from "react-router"

export const AboutPage = () => {
  return (
    <>
      <section id="title" data-aos="fade-down" data-aos-delay="150">
        <div className="p-6 md:p-10 mt-5">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 md:mb-5 text-center md:pb-15">Tietoa minusta</h1>
        </div>
      </section>

      <section id="introduction" className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto mt-5">
        <div>
          <h1 className="text-slate-100 text-5xl mb-5">Hei, olen Nikolaos - tieto- ja viestintätekniikan opiskelija Savon ammattiopistossa.</h1>
          <p className="text-gray-300 text-lg mb-3">Olen intohimoinen teknologian maailmasta ja ohjelmoinnista, laitteiden korjaamisesta sekä kasaamisesta ja älykkäiden järjestelmien kehittämisestä.</p>
          <p className="text-gray-300 text-lg mb-5"> Vapaa-ajallani tykkään kokeilla uusia ohjelmointiprojekteja ja kehittää taitojani verkko- ja mobiilisovellusten parissa.</p>
          <div className="space-x-3">
            <Link to="/portfolio" className="button inline-block px-4 py-2 rounded-full border border-white text-black font-bold text-xl bg-sky-300">Portfolio</Link>
            <Link to="/contact" className="button inline-block px-4 py-2 rounded-full border border-white text-black font-bold text-xl bg-sky-300">Ota yhteyttä</Link>
          </div>
        </div>
        <div>
          <h1 className="text-white text-center"></h1>
        </div>
      </section>
    </>
  )
}