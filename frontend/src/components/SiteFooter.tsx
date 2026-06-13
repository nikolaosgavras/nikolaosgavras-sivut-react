import { useTranslation } from "react-i18next";


export const SiteFooter = () => {
  const { t } = useTranslation();
  return (
    <footer
      id="footer"
      className="mt-10 border-t border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-slate-800/30 text-slate-600 dark:text-white/80 shadow-lg shadow-slate-200/50 dark:shadow-gray-700/10 backdrop-blur-xl"
    >
      <div className="block justify-center gap-3 py-6">
        <div>
          <p className="type-caption text-center pb-2">
            <a href="https://github.com/nikolaosgavras/nikolaosgavras-sivut-react" target="_blank">
            {t('footer.info')}
            </a>
          </p>
        </div>
        <div>
          <p className="type-caption text-center">
            &copy; {new Date().getFullYear()} {t('home.name')}
          </p>
        </div>
      </div>
    </footer>
  );
}
