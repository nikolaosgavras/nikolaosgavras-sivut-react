import ContactForm from "../components/ContactForm"

export const ContactPage = () => {

  return (

    <>
    <div className="xl:overflow-y-hidden xl:overflow-x-hidden">
      <section id="titles" className="text-white mt-5 mx-auto" data-aos="fade-down" data-aos-delay="150">
        <h1 className="text-center text-4xl font-bold pt-10">Ota yhteyttä</h1>
      </section>

      <section data-aos="fade-up" data-aos-delay="150" id="contact" className="grid grid-cols-1 mt-10">
        <ContactForm/>
        <div className="my-5 mx-auto flex w-full max-w-11/12 md:max-w-2xl flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-[0px_0px_5px_1px] shadow-slate-700/70">
          <h1 className="text-white text-3xl font-bold">Yhteystiedot:</h1>
          <p className="text-gray-300 text-sm sm:text-lg">
            <strong>Sähköposti:</strong> gavras.nikolaos@gmail.com
          </p>
          <p className="text-gray-300 text-sm sm:text-lg">
            <strong>Puhelinnumero:</strong> +358 40 487 4089
          </p>
        </div>

      </section>
    </div>

    </>
  )

}