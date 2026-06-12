export const MeshBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-50 dark:bg-slate-950">
      <div className="absolute top-[-10%] left-[-10%] w-160 h-160 bg-sky-400/30 dark:bg-sky-500/25 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-40 dark:opacity-30 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-140 h-140 bg-violet-400/25 dark:bg-purple-500/25 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-40 dark:opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-180 h-180 bg-blue-400/20 dark:bg-blue-700/25 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-40 dark:opacity-30 animate-blob animation-delay-4000"></div>
    </div>
  );
};
