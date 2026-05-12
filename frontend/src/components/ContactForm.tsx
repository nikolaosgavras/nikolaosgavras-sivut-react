import { useState } from 'react';
import type { SubmitEvent } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "30fd48d3-b8fd-4654-a750-b660e988c9f5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <div className="text-white">
      <form
        onSubmit={onSubmit}
        className="mx-auto flex w-full max-w-11/12 md:max-w-2xl flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur  shadow-[0px_0px_5px_1px] shadow-slate-700/70"
      >
        <label className="flex flex-col gap-2 text-sm font-medium">
          Nimi
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-white placeholder-white/50 outline-none transition focus:border-white/40 focus:bg-white/15"
            placeholder="Sinun nimi"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium">
          Email
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-white placeholder-white/50 outline-none transition focus:border-white/40 focus:bg-white/15"
            placeholder="sinä@esimerkki.fi"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium">
          Viesti
          <textarea
            name="message"
            required
            rows={5}
            className="w-full resize-none rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-white placeholder-white/50 outline-none transition focus:border-white/40 focus:bg-white/15"
            placeholder="Kerro esimerkiksi projektistasi, tavoitteistasi ja siitä, millaista osaamista etsit."
          />
        </label>
        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Lähetä
        </button>
        <p className="text-sm text-white/70" aria-live="polite">
          {result}
        </p>
      </form>
    </div>
  );
}