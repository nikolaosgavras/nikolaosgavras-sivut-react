import { useState } from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ZoomControls } from "../components/ZoomControls";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags?: string[];
  siteLink?: string;
  repoLink?: string;
}

export const PortfolioPage = () => {
  const { t } = useTranslation();
  const [activeImage, setActiveImage] = useState<string | null>(null)

  const projects: Project[] = [
    {
      title: "The Big Fat Greek Gyros",
      description: t('portfolio.projects.gyros.description'),
      image: "/img/portfolio/thebigfatgreekgyros.webp",
      imageAlt: "The Big Fat Greek Gyros site",
      tags: [t('portfolio.tags.gtm'), t('portfolio.tags.seo'), t('portfolio.tags.responsive')],
      siteLink: "https://thebigfatgreekgyros.fi",
      repoLink: "https://github.com/nikolaosgavras/thebigfatgreekgyros",
    },
    {
      title: "The Big Fat Greek Gyros (React)",
      description: t('portfolio.projects.gyrosReact.description'),
      image: "/img/portfolio/thebigfatgreekgyrosreact.webp",
      imageAlt: "The Big Fat Greek Gyros site (React)",
      tags: [t('portfolio.tags.webDev'), t('portfolio.tags.adminPanel'), "PostgreSQL"],
      siteLink: "https://thebigfatgreekgyros.web.app",
      repoLink: "https://github.com/nikolaosgavras/thebigfatgreekgyros-react",
    },
    {
      title: "Kaavakanta",
      description: t('portfolio.projects.kaavakanta.description'),
      image: "/img/portfolio/kaavakanta.webp",
      imageAlt: "Kaavakanta sivusta kuva",
      tags: [t('portfolio.tags.webDev'), "MySQL", "PHP"],
      siteLink: "https://kaavakanta.nikolaosg.dev",
      repoLink: "https://github.com/nikolaosgavras/taitaja2026semifinaali",
    },
    {
      title: "JH Performance",
      description: t('portfolio.projects.jh.description'),
      image: "/img/portfolio/jhperformance.webp",
      imageAlt: "JH Performance site",
      tags: [t('portfolio.tags.webDev'), t('portfolio.tags.thirdParty')],
      siteLink: "https://jhperformance.vercel.app",
      repoLink: "https://github.com/nikolaosgavras/jhperformance",
    },
    {
      title: "Apple Battery Health Analyzer",
      description: t('portfolio.projects.battery.description'),
      image: "/img/portfolio/applebattery.webp",
      imageAlt: "Apple Battery Health Analyzer site",
      tags: [t('portfolio.tags.webDev'), t('portfolio.tags.aiUse')],
      siteLink: "https://apple-battery-health.vercel.app",
      repoLink: "https://github.com/nikolaosgavras/apple-battery-health",
    },
    {
      title: t('portfolio.projects.other.title'),
      description: t('portfolio.projects.other.description'),
      image: "/img/portfolio/github-logo.webp",
      imageAlt: t('portfolio.projects.other.title'),
      siteLink: "https://github.com/nikolaosgavras",
    },
  ]

  return (
    <>
      <section id="titles" data-aos="fade-down" data-aos-delay="150">
          <div className="p-6 md:p-10 mt-5">
            <h1 className="type-hero text-slate-900 dark:text-white font-bold mb-3 text-center">{t('portfolio.heading')}</h1>
            <p className="type-lead text-slate-600 dark:text-gray-300 text-center">{t('portfolio.subtitle')}</p>
            <div className="flex justify-center mt-5">
              <Link to="/contact" className="button inline-block px-4 py-2 rounded-full border border-sky-500 dark:border-white text-white dark:text-black font-bold text-xl bg-sky-500 dark:bg-sky-300">{t('nav.contact')}</Link>
            </div>
          </div>
      </section>

      <section data-aos="fade-up" data-aos-delay="150" id="cards" className="mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-slate-200 dark:border-gray-600 rounded-3xl text-slate-900 dark:text-white w-11/12 max-w-7xl mx-auto gap-4 md:gap-6 p-4 md:p-6 bg-white dark:bg-slate-800/20 dark:backdrop-blur-xl shadow-[0px_0px_5px_1px] shadow-slate-200/80 dark:shadow-slate-700/70">
        {projects.map((project) => (
          <div key={project.title} className="border-2 border-slate-200 dark:border-slate-700 rounded-2xl flex h-full flex-col">
            <button
              type="button"
              className="block w-full text-left"
              aria-label={t('portfolio.imageAria', { title: project.title })}
              onClick={() => setActiveImage(project.image)}
            >
              <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" className="h-48 md:h-54 w-full rounded-t-xl object-cover"/>
            </button>
            <div className="flex flex-1 flex-col p-3">
              <h3 className="type-lead font-bold">{project.title}</h3>
              <p className="type-body text-slate-600 dark:text-gray-100">{project.description}</p>
              <div className="mt-auto">
                {project.tags && project.tags.length > 0 && (
                  <div className="text-xs mt-5 mb-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-sky-100 dark:bg-sky-600/20 text-sky-700 dark:text-sky-100 rounded-full">{tag}</span>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.siteLink && (
                    <a
                      href={project.siteLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="px-3 py-2 text-sm font-semibold rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700/80"
                    >
                      {t('portfolio.site')}
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="px-3 py-2 text-sm font-semibold rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700/80"
                    >
                      {t('portfolio.repo')}
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
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative"
            onClick={(event) => event.stopPropagation()}
          >
            <TransformWrapper>
                <TransformComponent>
                  <img
                    src={activeImage}
                    alt={t('portfolio.previewAlt')}
                    className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain transition-transform duration-200"
                  />
                </TransformComponent>
                <ZoomControls />
            </TransformWrapper>
            <div className="mt-4 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="button px-3 py-2 text-sm font-semibold rounded-lg bg-sky-500/80 hover:bg-sky-500 text-white"
              >
                {t('portfolio.close')}
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  )
}
