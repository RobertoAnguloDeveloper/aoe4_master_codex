import React, { useState } from 'react';
import { Shield, Sword, AlertTriangle, BookOpen, Target, ArrowRight, Zap, Network, ChevronDown, GraduationCap, Map as MapIcon, Crosshair } from 'lucide-react';
import { civData } from './data/civs';
import CivDetails from './components/CivDetails';
import AcademyTab from './components/AcademyTab';
import ArsenalTab from './components/ArsenalTab';
import TopographyTab from './components/TopographyTab';

type TabType = 'civs' | 'academy' | 'arsenal' | 'topography';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('civs');
  const [selectedCiv, setSelectedCiv] = useState(civData[0]);

  const tabs = [
    { id: 'civs', label: 'Códice Civs', icon: Shield },
    { id: 'academy', label: 'La Academia', icon: GraduationCap },
    { id: 'arsenal', label: 'Arsenal Maestro', icon: Crosshair },
    { id: 'topography', label: 'Topografía', icon: MapIcon },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans p-0 md:p-6 pb-24 md:pb-12 overflow-x-hidden selection:bg-amber-500/30">
      
      {/* Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-screen pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.15),transparent_70%)] z-0"></div>

      <header className="max-w-6xl mx-auto pt-8 px-6 mb-10 text-center md:text-left relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img src="/logo.png" alt="AoE4 Master Codex Logo" className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl shadow-2xl border border-white/10" />
             </div>
             <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase">
                  AoE4: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 drop-shadow-sm">Master Codex</span>
                </h1>
                <p className="mt-2 text-slate-400 text-sm md:text-lg font-medium max-w-2xl">
                  Análisis Exhaustivo: La Doctrina Estratégica Definitiva de la Franquicia.
                </p>
             </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-2 bg-slate-900/50 border border-slate-800 rounded-2xl px-5 py-3 backdrop-blur-sm shadow-xl">
             <div className="flex flex-col items-end">
                <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Estado del Sistema</span>
                <span className="text-xs font-bold text-slate-300">V. 2.0 - Análisis Sistémico</span>
             </div>
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-2 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
          </div>
        </div>

        {/* Desktop Tabs */}
        <nav className="mt-12 flex items-center justify-center md:justify-start gap-1 p-1 bg-slate-900/80 border border-slate-800 rounded-2xl md:w-fit backdrop-blur-xl shadow-2xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-black transition-all uppercase tracking-tight
                ${activeTab === tab.id 
                  ? 'bg-slate-800 text-amber-500 shadow-lg border border-white/5' 
                  : 'text-slate-500 hover:text-slate-300 hover:bg-slate-850'
                }`}
            >
              <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-amber-500' : 'text-slate-600'}`} />
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 px-6 relative z-10 transition-all">
        
        {activeTab === 'civs' && (
          <>
            {/* Civ Selector */}
            <aside className="lg:w-[320px] flex-shrink-0 animate-in fade-in slide-in-from-left-4 duration-500">
              <div className="sticky top-6">
                <h2 className="hidden lg:flex text-sm font-black text-slate-500 items-center gap-2 mb-4 uppercase tracking-[0.2em] px-2">
                  <Sword className="w-4 h-4 text-amber-500" />
                  Estandartes (12+ Variantes)
                </h2>
                
                <div className="flex lg:flex-col overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-3 lg:gap-2 pb-4 lg:pb-0 w-full lg:max-h-[70vh] lg:overflow-y-auto custom-scrollbar pr-2">
                  {civData.map((civ) => (
                    <button
                      key={civ.id}
                      onClick={() => setSelectedCiv(civ)}
                      className={`relative flex-shrink-0 w-[240px] lg:w-full text-left p-4 rounded-2xl border transition-all duration-300 snap-center overflow-hidden group/btn shadow-md
                        ${selectedCiv.id === civ.id 
                          ? 'border-amber-500/50 bg-slate-800 shadow-[0_10px_25px_-5px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/20' 
                          : 'border-slate-800 bg-slate-900/60 hover:border-slate-600 opacity-70 hover:opacity-100 hover:-translate-x-1'
                        }
                        ${civ.isVariant ? 'border-dashed' : ''}
                        `}
                    >
                      {selectedCiv.id === civ.id && (
                        <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${civ.theme} shadow-[2px_0_10px_rgba(255,255,255,0.1)]`}></div>
                      )}
                      <div className="flex justify-between items-center z-10 relative">
                        <div className="flex flex-col gap-1">
                          <h3 className={`font-black text-lg ${selectedCiv.id === civ.id ? 'text-white' : 'text-slate-400'} uppercase tracking-tight`}>
                            {civ.name}
                          </h3>
                          <div className="flex items-center gap-2">
                             <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest px-1.5 py-0.5 bg-slate-950/50 rounded-md border border-white/5">
                               {civ.difficulty.split(' ')[0]}
                             </span>
                             {civ.isVariant && (
                                <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest">Variante</span>
                             )}
                          </div>
                        </div>
                        <ArrowRight className={`w-5 h-5 transition-transform duration-500 ${selectedCiv.id === civ.id ? 'text-amber-500 translate-x-2' : 'text-slate-700 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1'}`} />
                      </div>
                    </button>
                  ))}
                </div>

                <div className="hidden lg:block mt-6 p-5 bg-amber-950/20 border border-amber-900/30 rounded-2xl backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  <h3 className="text-amber-500 font-black flex items-center gap-2 mb-2 text-xs uppercase tracking-widest relative z-10">
                    <AlertTriangle className="w-4 h-4" />
                    Doctrina Unificada
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium leading-relaxed relative z-10">
                    El Códice ha sido expandido para incluir Variantes y Civilizaciones Avanzadas (Horda de Oro, Tughlaq, Sengoku). El rigor matemático ahora es obligatorio.
                  </p>
                </div>
              </div>
            </aside>

            {/* Content Area */}
            <section className="lg:w-2/3">
              <CivDetails selectedCiv={selectedCiv} />
            </section>
          </>
        )}

        {activeTab === 'academy' && (
          <section className="w-full">
            <AcademyTab selectedCiv={selectedCiv} onSelectCiv={setSelectedCiv} />
          </section>
        )}

        {activeTab === 'arsenal' && (
          <section className="w-full">
            <ArsenalTab selectedCiv={selectedCiv} onSelectCiv={setSelectedCiv} />
          </section>
        )}

        {activeTab === 'topography' && (
          <section className="w-full">
            <TopographyTab selectedCiv={selectedCiv} onSelectCiv={setSelectedCiv} />
          </section>
        )}
      </main>

      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 p-2 z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
         <div className="flex justify-around items-center max-w-md mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex flex-col items-center gap-1.5 px-4 py-2 rounded-xl transition-all
                  ${activeTab === tab.id ? 'text-amber-500 bg-amber-500/5' : 'text-slate-500'}`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="text-[9px] font-black uppercase tracking-widest">{tab.label.split(' ')[0]}</span>
              </button>
            ))}
         </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(51, 65, 85, 0.8);
          border-radius: 10px;
          border: 2px solid rgba(15, 23, 42, 0);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(245, 158, 11, 0.5);
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-bottom {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-in-top {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-in-right {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-left {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .animate-in {
          animation-duration: 600ms;
          animation-fill-mode: both;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade-in { animation-name: fade-in; }
        .slide-in-from-bottom-4 { animation-name: slide-in-bottom; }
        .slide-in-from-top-4 { animation-name: slide-in-top; }
        .slide-in-from-right-4 { animation-name: slide-in-right; }
        .slide-in-from-left-4 { animation-name: slide-in-left; }
      `}} />
    </div>
  );
}