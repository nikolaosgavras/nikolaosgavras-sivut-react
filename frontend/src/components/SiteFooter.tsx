export const SiteFooter = () => {
  return (
    <footer
      id="footer"
      className="mt-10 border-t border-white/10 bg-slate-800/30 text-white/80 shadow-lg shadow-gray-700/10 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-6xl gap-3 px-4 py-6">
        <p className="type-caption text-center">
          &copy; {new Date().getFullYear()} Nikolaos Gavras
        </p>
      </div>
    </footer>
  );
}