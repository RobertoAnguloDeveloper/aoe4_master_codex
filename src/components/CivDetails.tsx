import React from 'react';
import { Shield, Target, Zap, BookOpen, Network, ChevronDown } from 'lucide-react';

interface Age {
  num: number;
  name: string;
  focus: string;
  unit: string;
  action: string;
}

interface Hierarchy {
  tier: string;
  color: string;
  role: string;
  units: string;
  desc: string;
}

interface Civ {
  id: string;
  name: string;
  theme: string;
  accent: string;
  ultimateUnit: string;
  difficulty: string;
  masterTip: string;
  hierarchy: Hierarchy[];
  ages: Age[];
  isVariant?: boolean;
}

export default function CivDetails({ selectedCiv }: { selectedCiv: Civ }) {
  return (
    <div key={selectedCiv.id} className="bg-slate-900/50 border border-slate-800 rounded-3xl p-5 md:p-8 animate-in fade-in slide-in-from-right-4 duration-500 shadow-2xl relative overflow-hidden group/details">
      
      {/* Variant Badge */}
      {selectedCiv.isVariant && (
        <div className="absolute top-6 right-6 px-3 py-1 bg-amber-600/30 border border-amber-500/50 rounded-full text-[10px] font-black text-amber-300 uppercase tracking-widest z-10 animate-pulse">
           Civilización Variante
        </div>
      )}

      {/* Header Title */}
      <div className="mb-6 relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-10 h-10 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${selectedCiv.theme} flex items-center justify-center shadow-lg border border-white/10 group-hover/details:scale-110 transition-transform`}>
            <Shield className="w-5 h-5 md:w-8 md:h-8 text-white drop-shadow-md" />
          </div>
          <h2 className="text-2xl md:text-5xl font-black text-white group-hover/details:text-amber-500 transition-colors uppercase tracking-tight">{selectedCiv.name}</h2>
        </div>
        
        <div className="mt-4 p-3 md:p-5 rounded-2xl border border-amber-900/50 bg-amber-950/20 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center gap-2 sm:justify-between transition-all hover:bg-amber-950/30">
          <div>
            <span className="text-[10px] md:text-xs text-amber-500/80 font-bold uppercase tracking-widest block mb-1">Unidad Definitiva (Meta)</span>
            <span className="text-base md:text-2xl font-black text-amber-400 flex items-center gap-2">
              <Zap className="w-4 h-4 md:w-6 md:h-6 fill-amber-500/20" />
              {selectedCiv.ultimateUnit}
            </span>
          </div>
        </div>
      </div>

      {/* Master Tip Box */}
      <div className="mb-10 relative z-10">
        <div className="absolute -left-3 -top-3 w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 z-10 shadow-lg">
          <BookOpen className="w-4 h-4 text-emerald-400" />
        </div>
        <div className="p-4 md:p-6 bg-slate-800/40 border border-slate-700/50 rounded-2xl rounded-tl-sm text-slate-300 italic text-sm md:text-lg leading-relaxed shadow-sm">
          "{selectedCiv.masterTip}"
        </div>
      </div>

      {/* HIERARCHY TREE SECTION */}
      <div className="mb-12 relative z-10">
        <h3 className="text-lg md:text-2xl font-black text-white mb-6 flex items-center gap-3">
          <Network className="w-5 h-5 md:w-7 md:h-7 text-purple-400" />
          Jerarquía de Impacto
        </h3>
        
        <div className="flex flex-col gap-0 items-center w-full">
          {selectedCiv.hierarchy.map((tier, index) => (
            <React.Fragment key={index}>
              <div className={`w-full relative bg-slate-900/80 backdrop-blur-md border-2 ${tier.color} rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row gap-4 md:gap-6 items-start sm:items-center shadow-xl transition-all hover:scale-[1.02] hover:-translate-y-1`}>
                <div className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-slate-950 flex items-center justify-center text-xl md:text-3xl font-black border ${tier.color} shadow-lg`}>
                  {tier.tier}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2 gap-1">
                    <h4 className="font-black text-lg md:text-xl text-white uppercase tracking-tight">{tier.units}</h4>
                    <span className={`text-[10px] md:text-xs font-black uppercase tracking-widest px-2 py-1 bg-slate-950/50 rounded-lg border border-white/5 ${tier.color.split(' ')[2]}`}>
                      {tier.role}
                    </span>
                  </div>
                  <p className="text-xs md:text-base text-slate-400 leading-relaxed font-medium">
                    {tier.desc}
                  </p>
                </div>
              </div>

              {index < selectedCiv.hierarchy.length - 1 && (
                <div className="h-6 md:h-8 w-px bg-slate-700 flex items-center justify-center my-0.5 md:my-1 relative">
                  <ChevronDown className="w-3 h-3 md:w-5 md:h-5 text-slate-500 absolute bg-slate-950 rounded-full border border-slate-700" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-lg md:text-2xl font-black text-white mb-6 flex items-center gap-3">
          <Target className="w-5 h-5 md:w-7 md:h-7 text-slate-400" />
          La Ruta de las 4 Edades
        </h3>

        {/* Timeline layout */}
        <div className="relative border-l-4 border-slate-800 ml-4 md:ml-8 space-y-8 md:space-y-12 pb-6">
          {selectedCiv.ages.map((age, index) => (
            <div key={index} className="relative pl-6 md:pl-10">
              <div className={`absolute -left-[14px] md:-left-[18px] top-1 w-6 h-6 md:w-8 md:h-8 rounded-full border-[3px] md:border-4 border-slate-950 flex items-center justify-center font-black text-xs md:text-sm shadow-xl
                ${index === 3 ? 'bg-amber-500 text-slate-900 border-amber-400' : 'bg-slate-700 text-white'}`}>
                {age.num}
              </div>

              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800/80 hover:border-slate-600 transition-all rounded-2xl md:rounded-3xl p-4 md:p-7 shadow-lg group/age hover:-translate-x-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 md:mb-5 gap-3">
                  <h4 className="text-lg md:text-2xl font-black text-white leading-tight uppercase tracking-tight group-hover/age:text-amber-500 transition-colors">
                    {age.name}
                  </h4>
                  <span className="inline-flex items-center px-3 py-1 md:px-4 md:py-1.5 rounded-xl text-[10px] md:text-xs font-black bg-slate-800 text-slate-300 border border-slate-700 whitespace-nowrap w-fit uppercase tracking-widest shadow-inner">
                    Prioridad: {age.focus}
                  </span>
                </div>
                
                <div className="mb-4 md:mb-6 flex items-center gap-3">
                  <div className="h-px bg-slate-800 flex-1"></div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-1">Unidad Clave</span>
                    <span className={`font-black text-sm md:text-lg ${selectedCiv.accent} bg-slate-950/80 px-4 py-1.5 md:py-2 rounded-xl inline-block border border-white/5 shadow-xl`}>
                      {age.unit}
                    </span>
                  </div>
                  <div className="h-px bg-slate-800 flex-1"></div>
                </div>

                <p className="text-xs md:text-lg text-slate-400 leading-relaxed font-medium italic">
                  {age.action}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
