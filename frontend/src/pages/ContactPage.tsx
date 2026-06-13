import { ContactForm } from "../components/ContactForm"
import { useTranslation } from "react-i18next";

export const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <>
    <div className="xl:overflow-y-hidden xl:overflow-x-hidden">
      <section id="titles" className="text-slate-900 dark:text-white mt-5 mx-auto" data-aos="fade-down" data-aos-delay="150">
        <h1 className="type-hero text-center font-bold pt-10">{t('contact.heading')}</h1>
      </section>

      <section data-aos="fade-up" data-aos-delay="150" id="contact" className="grid grid-cols-1 mt-10">
        <ContactForm/>
        <div className="my-5 mx-auto flex w-full max-w-11/12 md:max-w-2xl flex-col gap-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 dark:backdrop-blur shadow-[0px_0px_5px_1px] shadow-slate-200/80 dark:shadow-slate-700/70">
          <h2 className="type-section text-slate-900 dark:text-white font-bold">{t('contact.info.heading')}</h2>
          <p className="type-body text-slate-600 dark:text-gray-300">
            <strong>{t('contact.info.email')}</strong> gavras.nikolaos@gmail.com
          </p>
          <p className="type-body text-slate-600 dark:text-gray-300">
            <strong>{t('contact.info.phone')}</strong> +358 40 487 4089
          </p>
        </div>
      </section>
    </div>
    </>
  )
}
