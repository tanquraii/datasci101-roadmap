import datasciImage from "../images/datasci.jpg";

export function Head() {
  return (
    <div className="flex items-center space-x-4">

      <div className="p-1 rounded-2xl border border-[#8E52FF]/30 bg-[#251E38]/50 shadow-[0_0_15px_rgba(142,82,255,0.15)] flex items-center justify-center">
        <img src={datasciImage} alt="datasci logo" className="w-10 h-10 rounded-xl object-cover"/>
      </div>

      <h1 className="text-3xl font-extrabold text-white tracking-tight">
        DataSci
      </h1>
    </div>
  );
}