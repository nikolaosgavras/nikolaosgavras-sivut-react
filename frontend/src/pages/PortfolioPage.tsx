import { useState } from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ZoomControls } from "../components/ZoomControls";

export const PortfolioPage = () => {
  
  const [activeImage, setActiveImage] = useState<string | null>(null)

  return (
    <>
      <section id="titles" data-aos="fade-down" data-aos-delay="150">
          <div className="p-6 md:p-10 mt-5">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 md:mb-5 text-center">Portfolio</h1>
            <h2 className="text-gray-300 text-lg md:text-2xl text-center">Tutustu minun projekteihin</h2>
          </div>
      </section>

      <section data-aos="fade-up" data-aos-delay="150" id="cards" className="mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-600 rounded-3xl text-white w-11/12 max-w-7xl mx-auto gap-4 md:gap-6 p-4 md:p-6 bg-slate-800/20 backdrop-blur-xl shadow-[0px_0px_5px_1px] shadow-slate-700/70">
        <div className="border-2 border-slate-700 rounded-2xl flex h-full flex-col">
          <a href="#" 
            onClick={() => {
              setActiveImage("/img/portfolio/thebigfatgreekgyros.png")
            }}>
            <img src="/img/portfolio/thebigfatgreekgyros.png" alt="The Big Fat Greek Gyros site" className="h-48 md:h-54 w-full rounded-t-xl object-cover"/>
          </a>
          <div className="flex flex-1 flex-col p-3">
            <h1 className="text-2xl font-bold">The Big Fat Greek Gyros</h1>
            <span className="text-gray-100">Nettisivu kreikkalaiselle ravintolalle joka on Kuopiossa ja Oulussa. Sivu on staattinen HTML sivu jossa käytetty Bootstrappia, tehty TEO jaksolla.</span>
            <div className="mt-auto">
              <div id="tags" className="text-xs mt-5 mb-3 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-sky-600/20 rounded-full">Google Tag Manager</span>
                <span className="px-4 py-2 bg-sky-600/20 rounded-full">SEO</span>
                <span className="px-4 py-2 bg-sky-600/20 rounded-full">Responsiivisuus</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="https://thebigfatgreekgyros.fi"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 text-sm font-semibold rounded-lg bg-slate-700/60 hover:bg-slate-700/80"
                >
                  Sivu
                </a>
                <a
                  href="https://github.com/nikolaosgavras/thebigfatgreekgyros"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 text-sm font-semibold rounded-lg bg-slate-700/60 hover:bg-slate-700/80"
                >
                  Lähdekoodi
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-slate-700 rounded-2xl flex h-full flex-col">
          <a href="#" 
            onClick={() => {
              setActiveImage("/img/portfolio/thebigfatgreekgyrosreact.png")
            }}>
            <img src="/img/portfolio/thebigfatgreekgyrosreact.png" alt="The Big Fat Greek Gyros site (React)" className="h-48 md:h-54 w-full rounded-t-xl object-cover"/>
          </a>
          <div className="flex flex-1 flex-col p-3">
            <h1 className="text-2xl font-bold">The Big Fat Greek Gyros (React)</h1>
            <span className="text-gray-100">Uudistettu sivu ravintolalle, parannettu UI/UX ja lisätty admin paneeli josta voi muokata menuja ja tekstejä sivulla. Tämä versio tehty React + Tailwind CSS, PostgreSQL (Supabase) ja deployattu Firebaseen.</span>
            <div className="mt-auto">
              <div id="tags" className="text-xs mt-5 mb-3 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-sky-600/20 rounded-full">Verkkokehitys </span>
                <span className="px-4 py-2 bg-sky-600/20 rounded-full">Admin paneeli </span>
                <span className="px-4 py-2 bg-sky-600/20 rounded-full">PostgreSQL </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="https://thebigfatgreekgyros.web.app"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 text-sm font-semibold rounded-lg bg-slate-700/60 hover:bg-slate-700/80"
                >
                  Sivu
                </a>
                <a
                  href="https://github.com/nikolaosgavras/thebigfatgreekgyros-react"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 text-sm font-semibold rounded-lg bg-slate-700/60 hover:bg-slate-700/80"
                >
                  Lähdekoodi
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-slate-700 rounded-2xl flex h-full flex-col">
          <a href="#" 
            onClick={() => {
              setActiveImage("/img/portfolio/jhperformance.png")
            }}>
            <img src="/img/portfolio/jhperformance.png" alt="JH Performance site" className="h-48 md:h-54 w-full rounded-t-xl object-cover"/>
          </a>
          <div className="flex flex-1 flex-col p-3">
            <h1 className="text-2xl font-bold">JH Performance</h1>
            <span className="text-gray-100">Nettisivut fitness-valmennus palveluun, moderni UI ja huomiota herättävä call to action</span>
            <div className="mt-auto">
              <div id="tags" className="text-xs mt-5 mb-3 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-sky-600/20 rounded-full">Verkkokehitys </span>
                <span className="px-4 py-2 bg-sky-600/20 rounded-full">3rd party integraatioita </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="https://jhperformance.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 text-sm font-semibold rounded-lg bg-slate-700/60 hover:bg-slate-700/80"
                >
                  Sivu
                </a>
                <a
                  href="https://github.com/nikolaosgavras/jhperformance"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 text-sm font-semibold rounded-lg bg-slate-700/60 hover:bg-slate-700/80"
                >
                  Lähdekoodi
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-slate-700 rounded-2xl flex h-full flex-col">
          <a href="#" 
            onClick={() => {
              setActiveImage("/img/portfolio/applebattery.png")
            }}>
            <img src="/img/portfolio/applebattery.png" alt="Apple Battery Health Analyzer site" className="h-48 md:h-54 w-full rounded-t-xl object-cover"/>
          </a>
          <div className="flex flex-1 flex-col p-3">
            <h1 className="text-2xl font-bold">Apple Battery Health Analyzer</h1>
            <span className="text-gray-100">Yksinkertainen plist-tiedoston lukija Apple-laitteiden akun kunnon tarkasteluun.</span>
            <div className="mt-auto">
              <div id="tags" className="text-xs mt-5 mb-3 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-sky-600/20 rounded-full">Verkkokehitys </span>
                <span className="px-4 py-2 bg-sky-600/20 rounded-full">Tekoälyn hyödyntäminen </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="https://apple-battery-health.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 text-sm font-semibold rounded-lg bg-slate-700/60 hover:bg-slate-700/80"
                >
                  Sivu
                </a>
                <a
                  href="https://github.com/nikolaosgavras/apple-battery-health"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 text-sm font-semibold rounded-lg bg-slate-700/60 hover:bg-slate-700/80"
                >
                  Lähdekoodi
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-slate-700 rounded-2xl flex h-full flex-col">
          <a href="#" 
            onClick={() => {
              setActiveImage("/img/portfolio/github-logo.webp")
            }}>
            <img src="/img/portfolio/github-logo.webp" alt="Muita projekteja" className="h-48 md:h-54 w-full rounded-t-xl object-cover"/>
          </a>
          <div className="flex flex-1 flex-col p-3">
            <h1 className="text-2xl font-bold">Muita projekteja</h1>
            <span className="text-gray-100">Muita projekteja löytyy minun GitHub-profiilistani. En voi näyttää kaikkia projekteja, esim. Flutteriin ja PyTorchiin liittyviä sillä minulla on salassapitosopimus.</span>
            <div className="mt-auto">
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="https://github.com/nikolaosgavras"
                  target="_blank"
                  rel="noreferrer"
                  className="flex mx-auto px-3 py-2 text-sm font-semibold rounded-lg bg-slate-700/60 hover:bg-slate-700/80"
                >
                  GitHub-profiili
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => {
            setActiveImage(null)
          }}
        >
          <div
            className="relative"
            onClick={(event) => event.stopPropagation()}
          >
            <TransformWrapper>
                <TransformComponent>
                  <img
                    src={activeImage}
                    alt="Portfolio preview"
                    className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain transition-transform duration-200"              
                  />
                </TransformComponent>
                <ZoomControls />
            </TransformWrapper>
            
            <div className="mt-4 flex justify-center gap-3">
              
              <button
                type="button"
                onClick={() => {
                  setActiveImage(null)
                }}
                className="button px-3 py-2 text-sm font-semibold rounded-lg bg-sky-300/70 hover:bg-sky-300/80 text-white"
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      )}
      
    </>
  )

}
