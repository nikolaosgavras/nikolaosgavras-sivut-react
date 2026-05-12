import { Link } from "react-router"
import { PanelTop, Smartphone, Layers, Paintbrush, Braces, FileCode, Terminal, Server, Database, Brain, Hash, TabletSmartphone, Briefcase, Trophy, Users, Container } from "lucide-react"

export const AboutPage = () => {
  return (
    <>
      <section id="title" data-aos="fade-down" data-aos-delay="300">
        <div className="p-6 md:p-10 mt-5">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 md:mb-5 text-center md:pb-5">Tietoa minusta</h1>
        </div>
      </section>

      <section id="introduction" className="grid grid-cols-1 md:grid-cols-2 max-w-11/12 xl:max-w-7xl mx-auto mt-5 mb-10">
        <div data-aos="fade-right" data-aos-delay="500">
          <h1 className="text-slate-100 text-4xl sm:text-5xl mb-5">Hei, olen Nikolaos - kolmannen vuoden tieto- ja viestintätekniikan opiskelija Savon ammattiopistossa.</h1>
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

      <section data-aos="fade-right" data-aos-delay="500" id="skillscards" className="mb-5 grid grid-cols-1 md:grid-cols-3 max-w-11/12 xl:max-w-7xl mx-auto gap-5">
        <div className="card border-2 border-gray-600 max-w-fit mx-auto p-5 rounded-xl backdrop-blur-xl bg-slate-800/20 shadow-[0px_0px_5px_1px] shadow-slate-700/70">
          <div className="inline-flex text-sky-500 gap-2"><Paintbrush/> </div>
          <h1 className="text-white text-xl font-bold mb-3">UI/UX</h1>
          <span className="text-gray-300">Kehitän verkkosovelluksia jossa on moderni käyttöliittymä ja jotka toimivat sujuvasti kaikilla laitteilla ja näytöillä.</span>
        </div>
        <div className="card border-2 border-gray-600 max-w-fit mx-auto p-5 rounded-xl backdrop-blur-xl bg-slate-800/20 shadow-[0px_0px_5px_1px] shadow-slate-700/70">
          <div className="inline-flex text-sky-500 gap-2"><Layers/> </div>
          <h1 className="text-white text-xl font-bold mb-3">Full Stack</h1>
          <span className="text-gray-300">Hallitsen frontend- ja backend-kehityksen sekä tietokannan suunnittelun. Osaan käyttää useita ohjelmointikieliä ja kehitysalueita.</span>
        </div>
        <div className="card border-2 border-gray-600 max-w-fit mx-auto p-5 rounded-xl backdrop-blur-xl bg-slate-800/20 shadow-[0px_0px_5px_1px] shadow-slate-700/70">
          <div className="inline-flex text-sky-500 gap-2"><PanelTop /> <Smartphone /> </div>
          <h1 className="text-white text-xl font-bold mb-3">Web & Mobile Development</h1>
          <span className="text-gray-300">Käytän web-kehitykseen Reactia ja mobiilisovellusten kehitykseen Flutteria. Haluan oppia myös React Nativen käyttöä.</span>
        </div>
      </section>

      <section data-aos="fade-up" id="work-experience" className="max-w-11/12 xl:max-w-7xl mx-auto mt-20 mb-10">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">Työkokemus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg md:col-span-2">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-sky-500/20 rounded-lg text-sky-400">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Mobiilisovelluskehittäjä</h3>
                <h4 className="text-lg text-gray-300">BC Bertenex Oy · Työssäoppiminen</h4>
                <p className="text-sm text-sky-400 font-medium mt-1">Marraskuu 2025 - Maaliskuu 2026</p>
              </div>
            </div>
            <div className="ml-16">
              <p className="text-gray-300 mb-3">Kehitin mobiilisovelluksen Flutterilla, joka käyttää sekokuva-mobile-423k -kuvaluokittelumallia. Koulutin mallin PyTorchilla transfer learningillä.</p>
              <p className="text-gray-300">Sovellus käyttää Firebase Authenticationia tunnistautumiseen ja Cloud Firestorea tietojen tallentamiseen.</p>
            </div>
          </div>

          <div className="flex flex-col p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-sky-500/20 rounded-lg text-sky-400">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Web-kehittäjä</h3>
                <h4 className="text-lg text-gray-300">Gourmet Street Food Oy · Työssäoppiminen</h4>
                <p className="text-sm text-sky-400 font-medium mt-1">Tammikuu 2025 - Maaliskuu 2025</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg justify-center">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-500/20 rounded-lg text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                <Trophy size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Taitaja2026-kilpailu Web-kehitys finalisti</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" id="languages" className="max-w-11/12 xl:max-w-7xl mx-auto mt-20 mb-10">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">Ohjelmointikielet ja teknologiat</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-center p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <TabletSmartphone className="text-cyan-400 w-12 h-12 mb-3" />
            <span className="text-white font-semibold">Flutter / Dart</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <Braces className="text-blue-400 w-12 h-12 mb-3" />
            <span className="text-white font-semibold">React & JS/TS</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <FileCode className="text-orange-400 w-12 h-12 mb-3" />
            <span className="text-white font-semibold">HTML & CSS</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <Server className="text-green-500 w-12 h-12 mb-3" />
            <span className="text-white font-semibold">Node.js/Express.js ja PHP</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <Database className="text-sky-300 w-12 h-12 mb-3" />
            <span className="text-white font-semibold">Tietokannat</span>
            <span className="text-gray-400 text-xs mt-1">MySQL, NoSQL (Firestore), PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <Container className="text-blue-500 w-12 h-12 mb-3" />
            <span className="text-white font-semibold">Docker</span>
            <span className="text-gray-400 text-xs mt-1">Docker, Docker Compose</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg text-center">
            <Brain className="text-pink-500 w-12 h-12 mb-3" />
            <span className="text-white font-semibold">PyTorch</span>
            <span className="text-gray-400 text-xs mt-1">Kuvaluokitusmallien treenaus</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <Terminal className="text-yellow-400 w-12 h-12 mb-3" />
            <span className="text-white font-semibold">Python</span>
            <span className="text-gray-400 text-xs mt-1">Firebase Cloud Functions, APIs</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <Hash className="text-purple-500 w-12 h-12 mb-3" />
            <span className="text-white font-semibold">C#</span>
            <span className="text-gray-400 text-xs mt-1">Windows Forms, Unity Scripts</span>
          </div>
          
        </div>
      </section>      

      <section data-aos="fade-up" id="references" className="max-w-11/12 xl:max-w-7xl mx-auto mt-20 mb-20">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">Suosittelijat</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Ville Matti Hakanpää</h3>
                <h4 className="text-lg text-gray-300">BC Bertenex Oy</h4>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Minna Punkki</h3>
                <h4 className="text-lg text-gray-400">Savon ammattiopisto</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}