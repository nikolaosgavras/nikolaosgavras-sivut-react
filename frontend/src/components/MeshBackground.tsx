export const MeshBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-950">
      {/* Syaani pallo ylävasemmalla */}
      <div className="absolute top-[-10%] left-[-10%] w-160 h-160 bg-sky-500/25 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
      
      {/* Purppura pallo oikealla */}
      <div className="absolute top-[20%] right-[-10%] w-140 h-140 bg-purple-500/25 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
      
      {/* Sininen pallo alhaalla */}
      <div className="absolute bottom-[-20%] left-[20%] w-180 h-180 bg-blue-700/25 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>
    </div>
  );
};
