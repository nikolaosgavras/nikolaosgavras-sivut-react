import { useState } from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ZoomControls } from "../components/ZoomControls";
import { Link } from "react-router";


type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags?: string[];
  siteLink: string;
  repoLink?: string;
}

const projects: Project[] = [
  {
    title: "The Big Fat Greek Gyros",
    description: "Nettisivu kreikkalaiselle ravintolalle joka on Kuopiossa ja Oulussa. Sivu on staattinen HTML sivu jossa käytetty Bootstrappia, tehty TEO jaksolla.",
    image: "/img/portfolio/thebigfatgreekgyros.png",
    imageAlt: "The Big Fat Greek Gyros site",
    tags: ["Google Tag Manager", "SEO", "Responsiivisuus"],
    siteLink: "https://thebigfatgreekgyros.fi",
    repoLink: "https://github.com/nikolaosgavras/thebigfatgreekgyros",
  },
  {
    title: "The Big Fat Greek Gyros (React)",
    description: "Uudistettu sivu ravintolalle, parannettu UI/UX ja lisätty admin paneeli josta voi muokata menuja ja tekstejä sivulla. Tämä versio tehty React + Tailwind CSS, PostgreSQL (Supabase) ja deployattu Firebaseen.",
    image: "/img/portfolio/thebigfatgreekgyrosreact.png",
    imageAlt: "The Big Fat Greek Gyros site (React)",
    tags: ["Verkkokehitys", "Admin paneeli", "PostgreSQL"],
    siteLink: "https://thebigfatgreekgyros.web.app",
    repoLink: "https://github.com/nikolaosgavras/thebigfatgreekgyros-react",
  },
  {
    title: "JH Performance",
    description: "Nettisivut fitness-valmennus palveluun, moderni UI ja huomiota herättävä call to action",
    image: "/img/portfolio/jhperformance.png",
    imageAlt: "JH Performance site",
    tags: ["Verkkokehitys", "3rd party integraatioita"],
    siteLink: "https://jhperformance.vercel.app",
    repoLink: "https://github.com/nikolaosgavras/jhperformance",
  },
  {
    title: "Apple Battery Health Analyzer",
    description: "Yksinkertainen plist-tiedoston lukija Apple-laitteiden akun kunnon tarkasteluun.",
    image: "/img/portfolio/applebattery.png",
    imageAlt: "Apple Battery Health Analyzer site",
    tags: ["Verkkokehitys", "Tekoälyn hyödyntäminen"],
    siteLink: "https://apple-battery-health.vercel.app",
    repoLink: "https://github.com/nikolaosgavras/apple-battery-health",
  },
  {
    title: "Muita projekteja",
    description: "Muita projekteja löytyy minun GitHub-profiilistani. En voi näyttää kaikkia projekteja, esim. Flutteriin ja PyTorchiin liittyviä sillä minulla on salassapitosopimus.",
    image: "/img/portfolio/github-logo.webp",
    imageAlt: "Muita projekteja",
    siteLink: "https://github.com/nikolaosgavras",
  },
]

export const PortfolioPage = () => {
  
  const [activeImage, setActiveImage] = useState<string | null>(null)

  return (
    <>
      <section id="titles" data-aos="fade-down" data-aos-delay="150">
          <div className="p-6 md:p-10 mt-5">
            <h1 className="type-hero text-white font-bold mb-3 text-center">Portfolio</h1>
            <p className="type-lead text-gray-300 text-center">Tutustu minun projekteihin</p>
            <div className="flex justify-center mt-5">
              <Link to="/contact" className="button inline-block px-4 py-2 rounded-full border border-white text-black font-bold text-xl bg-sky-300">Ota yhteyttä</Link>
            </div>

          </div>
      </section>

      <section data-aos="fade-up" data-aos-delay="150" id="cards" className="mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-600 rounded-3xl text-white w-11/12 max-w-7xl mx-auto gap-4 md:gap-6 p-4 md:p-6 bg-slate-800/20 backdrop-blur-xl shadow-[0px_0px_5px_1px] shadow-slate-700/70">
        {projects.map((project) => (
          <div key={project.title} className="border-2 border-slate-700 rounded-2xl flex h-full flex-col">
            <button
              type="button"
              className="block w-full text-left"
              aria-label={`Avaa ${project.title} kuva`}
              onClick={() => {
                setActiveImage(project.image)
              }}
            >
              <img src={project.image} alt={project.imageAlt} className="h-48 md:h-54 w-full rounded-t-xl object-cover"/>
            </button>
            <div className="flex flex-1 flex-col p-3">
              <h3 className="type-lead font-bold">{project.title}</h3>
              <p className="type-body text-gray-100">{project.description}</p>
              <div className="mt-auto">
                {project.tags && project.tags.length > 0 && (
                  <div className="text-xs mt-5 mb-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-sky-600/20 rounded-full">{tag}</span>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.siteLink && (
                    <a
                      href={project.siteLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="px-3 py-2 text-sm font-semibold rounded-lg bg-slate-700/60 hover:bg-slate-700/80"
                    >
                      Sivu
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="px-3 py-2 text-sm font-semibold rounded-lg bg-slate-700/60 hover:bg-slate-700/80"
                    >
                      Lähdekoodi
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
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
