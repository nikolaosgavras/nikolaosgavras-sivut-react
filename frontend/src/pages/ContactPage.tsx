import ContactForm from "../components/ContactForm"

export const ContactPage = () => {

  return (

    <>
    <div className="xl:overflow-y-hidden">
      <section id="titles" className="text-white mt-5 mx-auto" data-aos="fade-down" data-aos-delay="150">
        <h1 className="text-center text-4xl font-bold pt-10">Ota yhteyttä</h1>
      </section>

      <section id="contact" className="grid grid-cols-1 mt-10" data-aos="fade-up" data-aos-delay="150">
        <ContactForm/>

        <div className="my-3 mx-auto flex w-full max-w-xs sm:max-w-xl md:max-w-2xl xl:max-w-xl 2xl:max-w-3xl flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
          <h1 className="text-white text-3xl font-bold">Yhteystiedot:</h1>
          <p className="text-gray-300">
            <strong>Sähköposti:</strong> gavras.nikolaos@gmail.com
          </p>
          <p className="text-gray-300">
            <strong>Puhelinnumero:</strong> +358 40 487 4089
          </p>
        </div>

      </section>
    </div>

    </>
  )

}