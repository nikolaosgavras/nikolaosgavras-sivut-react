import { Link } from "react-router"
import { PanelTop, Smartphone, Layers, Paintbrush, Braces, FileCode, Terminal, Server, Database, Brain, Hash, TabletSmartphone, Briefcase, Trophy, Users, Container } from "lucide-react"
import { useResponsiveAOS } from "../hooks/useResponsiveAOS"

export const HomePage = () => {
  const introAnimation = useResponsiveAOS({ mobileEffect: 'fade-up', desktopEffect: 'fade-right' });
  const skillsAnimation = useResponsiveAOS({ mobileEffect: 'fade-up', desktopEffect: 'fade-right' });

  return (
    <>
      
      <section id="title" data-aos="fade-down" data-aos-delay="150">
        <div className="p-6 md:p-10 mt-5">
          <h1 className="type-hero text-white font-bold mb-3 text-center md:pb-2">Nikolaos Gavras</h1>
          <p className="type-lead text-slate-100 font-semibold text-center">Rakennan nopeita, tyylikkäitä ja luotettavia web- ja mobiiliratkaisuja.</p>
        </div>
      </section>

        <section id="introduction" className="grid grid-cols-1 md:grid-cols-2 max-w-11/12 xl:max-w-7xl mx-auto mb-10">
        <div data-aos={introAnimation} data-aos-anchor-placement="top-bottom" data-aos-delay="150">
          <h2 className="type-lead text-slate-100 font-semibold mb-4">Hei, olen Nikolaos - kolmannen vuoden tieto- ja viestintätekniikan opiskelija Savon ammattiopistossa.</h2>
          <p className="type-body text-gray-300 mb-3">Olen intohimoinen teknologian maailmasta ja ohjelmoinnista, laitteiden korjaamisesta sekä kasaamisesta ja älykkäiden järjestelmien kehittämisestä.</p>
          <p className="type-body text-gray-300 mb-5">Vapaa-ajallani nyrkkeilen, käyn kuntosalilla ja kokeilen uusia ohjelmointiprojekteja sekä kehitän taitojani verkko- ja mobiilisovellusten parissa.</p>
          <div className="space-x-3">
            <Link to="/portfolio" className="button inline-block px-4 py-2 rounded-full border border-white text-black font-bold text-xl bg-sky-300">Portfolio</Link>
            <Link to="/contact" className="button inline-block px-4 py-2 rounded-full border border-white text-black font-bold text-xl bg-sky-300">Ota yhteyttä</Link>
            <div className="flex mt-5 gap-5 text-white">
              <a href="https://www.linkedin.com/in/nikolaosgavras/" aria-label="My LinkedIn page" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 hover:text-gray-300">LinkedIn
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>
              </a>

              <a href="https://github.com/nikolaosgavras" aria-label="My GitHub page" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 hover:text-gray-300">GitHub
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
              </a>
            </div>
          </div>
          
        </div>
        <div></div>
      </section>

      <section data-aos={skillsAnimation} data-aos-anchor-placement="top-bottom" data-aos-delay="150" id="skillscards" className="mb-5 grid grid-cols-1 md:grid-cols-3 max-w-11/12 xl:max-w-7xl mx-auto gap-5">
        <div className="card border-2 border-gray-600 max-w-fit mx-auto p-5 rounded-xl backdrop-blur-xl bg-slate-800/20 shadow-[0px_0px_5px_1px] shadow-slate-700/70">
          <div className="inline-flex text-sky-500 gap-2"><Paintbrush/> </div>
          <h3 className="type-lead text-white font-bold mb-2">UI/UX</h3>
          <p className="type-body text-gray-300">Kehitän verkkosovelluksia jossa on moderni käyttöliittymä ja jotka toimivat sujuvasti kaikilla laitteilla ja näytöillä.</p>
        </div>
        <div className="card border-2 border-gray-600 max-w-fit mx-auto p-5 rounded-xl backdrop-blur-xl bg-slate-800/20 shadow-[0px_0px_5px_1px] shadow-slate-700/70">
          <div className="inline-flex text-sky-500 gap-2"><Layers/> </div>
          <h3 className="type-lead text-white font-bold mb-2">Full Stack</h3>
          <p className="type-body text-gray-300">Hallitsen frontend- ja backend-kehityksen sekä tietokannan suunnittelun. Osaan käyttää useita ohjelmointikieliä ja kehitysalueita.</p>
        </div>
        <div className="card border-2 border-gray-600 max-w-fit mx-auto p-5 rounded-xl backdrop-blur-xl bg-slate-800/20 shadow-[0px_0px_5px_1px] shadow-slate-700/70">
          <div className="inline-flex text-sky-500 gap-2"><PanelTop /> <Smartphone /> </div>
          <h3 className="type-lead text-white font-bold mb-2">Web & Mobile Development</h3>
          <p className="type-body text-gray-300">Käytän web-kehitykseen Reactia ja mobiilisovellusten kehitykseen Flutteria. Haluan oppia myös React Nativen käyttöä.</p>
        </div>
      </section>

      <section data-aos="fade-up" id="work-experience" className="max-w-11/12 xl:max-w-7xl mx-auto mt-20 mb-10">
        <h2 className="type-section text-white font-bold mb-8 text-center">Työkokemus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg md:col-span-2">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-sky-500/20 rounded-lg text-sky-400">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="type-lead text-white font-bold">Mobiilisovelluskehittäjä</h3>
                <h4 className="type-body text-gray-300">BC Bertenex Oy · Työssäoppiminen</h4>
                <p className="type-caption text-sky-400 font-medium mt-1">Marraskuu 2025 - Maaliskuu 2026</p>
              </div>
            </div>
              <div className="ml-16">
                <p className="type-body text-gray-300 mb-3">Kehitin mobiilisovelluksen Flutterilla, joka käyttää sekokuva-mobile-423k -kuvaluokittelumallia. Koulutin mallin PyTorchilla transfer learningillä.</p>
                <p className="type-body text-gray-300">Sovellus käyttää Firebase Authenticationia tunnistautumiseen ja Cloud Firestorea tietojen tallentamiseen.</p>
            </div>
          </div>

          <div className="flex flex-col p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-sky-500/20 rounded-lg text-sky-400">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="type-lead text-white font-bold">Web-kehittäjä</h3>
                <h4 className="type-body text-gray-300">Gourmet Street Food Oy · Työssäoppiminen</h4>
                <p className="type-caption text-sky-400 font-medium mt-1">Tammikuu 2025 - Maaliskuu 2025</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg justify-center">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-500/20 rounded-lg text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                <Trophy size={28} />
              </div>
              <div>
                <h3 className="type-lead text-white font-bold">Taitaja2026-kilpailu Web-kehitys finalisti</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" id="languages" className="max-w-11/12 xl:max-w-7xl mx-auto mt-20 mb-10 text-center">
        <h2 className="type-section text-white font-bold mb-8 text-center">Ohjelmointikielet ja teknologiat</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-center p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <TabletSmartphone className="text-cyan-400 w-12 h-12 mb-3" />
            <span className="type-body text-white font-semibold">Flutter / Dart</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <Braces className="text-blue-400 w-12 h-12 mb-3" />
            <span className="type-body text-white font-semibold">React & JS/TS</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <FileCode className="text-orange-400 w-12 h-12 mb-3" />
            <span className="type-body text-white font-semibold">HTML & CSS</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <Server className="text-green-500 w-12 h-12 mb-3" />
            <span className="type-body text-white font-semibold">Node.js/Express.js ja PHP</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <Database className="text-sky-300 w-12 h-12 mb-3" />
            <span className="type-body text-white font-semibold">Tietokannat</span>
            <span className="type-caption text-gray-400 mt-1">MySQL, NoSQL (Firestore), PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <Container className="text-blue-500 w-12 h-12 mb-3" />
            <span className="type-body text-white font-semibold">Docker</span>
            <span className="type-caption text-gray-400 mt-1">Docker, Docker Compose</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg text-center">
            <Brain className="text-pink-500 w-12 h-12 mb-3" />
            <span className="type-body text-white font-semibold">PyTorch</span>
            <span className="type-caption text-gray-400 mt-1">Kuvaluokitusmallien treenaus</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <Terminal className="text-yellow-400 w-12 h-12 mb-3" />
            <span className="type-body text-white font-semibold">Python</span>
            <span className="type-caption text-gray-400 mt-1">Firebase Cloud Functions, APIs</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <Hash className="text-purple-500 w-12 h-12 mb-3" />
            <span className="type-body text-white font-semibold">C#</span>
            <span className="type-caption text-gray-400 mt-1">Windows Forms, Unity Scripts</span>
          </div>
          
        </div>
      </section>      

      <section data-aos="fade-up" id="references" className="max-w-11/12 xl:max-w-7xl mx-auto mt-20 mb-20">
        <h2 className="type-section text-white font-bold mb-8 text-center">Suosittelijat</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400">
                <Users size={24} />
              </div>
              <div>
                <h3 className="type-lead text-white font-bold">Ville Matti Hakanpää</h3>
                <h4 className="type-body text-gray-300">BC Bertenex Oy</h4>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-6 bg-slate-800/30 border border-gray-600 rounded-xl hover:bg-slate-700/50 transition-colors shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400">
                <Users size={24} />
              </div>
              <div>
                <h3 className="type-lead text-white font-bold">Minna Punkki</h3>
                <h4 className="type-body text-gray-300">Savon ammattiopisto</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}