import { Link } from "react-router"

export const AboutPage = () => {
  return (
    <>
      <section id="title" data-aos="fade-down" data-aos-delay="300">
        <div className="p-6 md:p-10 mt-5">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 md:mb-5 text-center md:pb-10">Tietoa minusta</h1>
        </div>
      </section>

      <section id="introduction" className="grid grid-cols-1 md:grid-cols-2 max-w-11/12 md:max-w-7xl mx-auto mt-5 mb-10">
        <div data-aos="fade-right" data-aos-delay="500">
          <h1 className="text-slate-100 text-5xl mb-5">Hei, olen Nikolaos - tieto- ja viestintätekniikan opiskelija Savon ammattiopistossa.</h1>
          <p className="text-gray-300 text-lg mb-3">Olen intohimoinen teknologian maailmasta ja ohjelmoinnista, laitteiden korjaamisesta sekä kasaamisesta ja älykkäiden järjestelmien kehittämisestä.</p>
          <p className="text-gray-300 text-lg mb-5"> Vapaa-ajallani nyrkkeilen, käyn kuntosalilla ja kokeilen uusia ohjelmointiprojekteja sekä kehitän taitojani verkko- ja mobiilisovellusten parissa.</p>
          <div className="space-x-3">
            <Link to="/portfolio" className="button inline-block px-4 py-2 rounded-full border border-white text-black font-bold text-xl bg-sky-300">Portfolio</Link>
            <Link to="/contact" className="button inline-block px-4 py-2 rounded-full border border-white text-black font-bold text-xl bg-sky-300">Ota yhteyttä</Link>
          </div>
        </div>
        <div>
          <h1 className="text-white text-center"></h1>
        </div>
      </section>

      <section id="cards" className="grid grid-cols-1 md:grid-cols-3 max-w-11/12 md:max-w-7xl mx-auto gap-5">
        <div data-aos="fade-right" data-aos-delay="800" className="border-2 border-gray-600 max-w-fit mx-auto p-5 rounded-xl backdrop-blur-xl bg-slate-800/20 shadow-[0px_0px_5px_1px] shadow-slate-700/70">
          <h1 className="text-white text-xl font-bold mb-3">UI/UX</h1>
          <span className="text-gray-300">Rakennan sivustoja, jotka toimivat sujuvasti kaikilla laitteilla ja näytöillä.</span>
        </div>
        <div data-aos="fade-right" data-aos-delay="1000" className="border-2 border-gray-600 max-w-fit mx-auto p-5 rounded-xl backdrop-blur-xl bg-slate-800/20 shadow-[0px_0px_5px_1px] shadow-slate-700/70">
          <h1 className="text-white text-xl font-bold mb-3">Full Stack</h1>
          <span className="text-gray-300">Rakennan sivustoja, jotka toimivat sujuvasti kaikilla laitteilla ja näytöillä.</span>
        </div>
        <div data-aos="fade-right" data-aos-delay="1200" className="border-2 border-gray-600 max-w-fit mx-auto p-5 rounded-xl backdrop-blur-xl bg-slate-800/20 shadow-[0px_0px_5px_1px] shadow-slate-700/70">
          <h1 className="text-white text-xl font-bold mb-3"></h1>
          <span className="text-gray-300">Rakennan sivustoja, jotka toimivat sujuvasti kaikilla laitteilla ja näytöillä.</span>
        </div>
      </section>
    </>
  )
}