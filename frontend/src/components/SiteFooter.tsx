export const SiteFooter = () => {
  return (
    <footer
      id="footer"
      className="mt-10 border-t border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-slate-800/30 text-slate-600 dark:text-white/80 shadow-lg shadow-slate-200/50 dark:shadow-gray-700/10 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-6xl gap-3 px-4 py-6">
        <p className="type-caption text-center">
          &copy; {new Date().getFullYear()} Nikolaos Gavras
        </p>
      </div>
    </footer>
  );
}
