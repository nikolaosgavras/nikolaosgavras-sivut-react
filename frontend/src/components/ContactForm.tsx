import { useState } from 'react';
import type { SubmitEvent } from 'react';
import { useTranslation } from 'react-i18next';

export const ContactForm = () => {
  const { t } = useTranslation();
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "30fd48d3-b8fd-4654-a750-b660e988c9f5");

    setIsSubmitting(true);
    setResult("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult(t('contact.form.success'));
        form.reset();
      } else {
        setResult(t('contact.form.error'));
      }
    } catch {
      setResult(t('contact.form.networkError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-slate-900 dark:text-white">
      <form
        onSubmit={onSubmit}
        className="mx-auto flex w-full max-w-11/12 md:max-w-2xl flex-col gap-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 dark:backdrop-blur shadow-[0px_0px_5px_1px] shadow-slate-200/80 dark:shadow-slate-700/70"
      >
        <label className="flex flex-col gap-2 text-sm font-medium">
          {t('contact.form.name')}
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-lg border border-slate-300 dark:border-white/15 bg-slate-50 dark:bg-white/10 px-4 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/50 outline-none transition focus:border-sky-400 dark:focus:border-white/40 focus:bg-white dark:focus:bg-white/15"
            placeholder={t('contact.form.namePlaceholder')}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium">
          Email
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-lg border border-slate-300 dark:border-white/15 bg-slate-50 dark:bg-white/10 px-4 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/50 outline-none transition focus:border-sky-400 dark:focus:border-white/40 focus:bg-white dark:focus:bg-white/15"
            placeholder={t('contact.form.emailPlaceholder')}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium">
          {t('contact.form.message')}
          <textarea
            name="message"
            required
            rows={5}
            className="w-full resize-none rounded-lg border border-slate-300 dark:border-white/15 bg-slate-50 dark:bg-white/10 px-4 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/50 outline-none transition focus:border-sky-400 dark:focus:border-white/40 focus:bg-white dark:focus:bg-white/15"
            placeholder={t('contact.form.messagePlaceholder')}
          />
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 inline-flex items-center justify-center rounded-lg bg-slate-900 dark:bg-white px-5 py-2.5 text-sm font-semibold text-white dark:text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 dark:hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
        </button>
        <p className="text-sm text-slate-600 dark:text-white/70" aria-live="polite">
          {result}
        </p>
      </form>
    </div>
  );
}
