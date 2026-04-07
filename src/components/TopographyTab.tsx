import React, { useState } from 'react';
import { Map, Flag, Info, Compass } from 'lucide-react';
import { mapData } from '../data/maps';
import { civData } from '../data/civs';

export default function TopographyTab() {
  const [selectedCivId, setSelectedCivId] = useState('All');

  const filteredMaps = mapData.filter(map => {
    if (selectedCivId === 'All') return true;
    
    // Find the civ name from ID
    const civName = civData.find(c => c.id === selectedCivId)?.name || '';
    
    // Check if the map dominance string contains the civ name (loosely)
    return map.dominance.toLowerCase().includes(civName.toLowerCase()) || 
           (selectedCivId === 'golden-horde' && map.dominance.includes('Horda de Oro')) ||
           (selectedCivId === 'house-of-lancaster' && map.dominance.includes('Lancaster'));
  });

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <header className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-white mb-2">Topografía de Dominación</h2>
          <p className="text-slate-400">Sinergias entre el terreno y las doctrinas civilizatorias.</p>
        </div>

        {/* Civ Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 self-start md:self-end">
           <button
             onClick={() => setSelectedCivId('All')}
             className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border ${selectedCivId === 'All' ? 'bg-amber-500 border-amber-400 text-slate-950' : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-600'}`}
           >
             Todas
           </button>
           {civData.map(civ => (
             <button
               key={civ.id}
               onClick={() => setSelectedCivId(civ.id)}
               className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border whitespace-nowrap ${selectedCivId === civ.id ? 'bg-amber-500 border-amber-400 text-slate-950' : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-600'}`}
             >
               {civ.name}
             </button>
           ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaps.length > 0 ? (
          filteredMaps.map((map, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden group hover:border-amber-500/30 transition-all shadow-xl">
              <div className="h-20 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center border-b border-slate-800 transition-colors group-hover:from-amber-950/20 group-hover:to-slate-900 relative">
                 <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 bg-slate-950 border border-slate-700/50 rounded-lg shadow-sm">
                    <Map className="w-3 h-3 text-amber-500" />
                    <span className="text-[10px] font-bold text-slate-300 uppercase leading-none mt-0.5 whitespace-nowrap">Zona Crítica</span>
                 </div>
                 <Compass className="w-10 h-10 text-slate-700 transition-transform group-hover:scale-110 group-hover:text-amber-500/40" />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-black text-white mb-3 group-hover:text-amber-400 transition-colors">{map.name}</h3>
                
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Flag className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-tighter">Dominación Absoluta</span>
                  </div>
                  <div className="text-sm font-bold text-slate-200 bg-emerald-950/20 border border-emerald-500/20 px-3 py-2 rounded-xl">
                    {map.dominance}
                  </div>
                </div>

                <div className="space-y-2">
                   <div className="flex items-center gap-2">
                     <Info className="w-3.5 h-3.5 text-slate-500" />
                     <span className="text-[10px] font-bold text-slate-500 uppercase">Razón Estratégica</span>
                   </div>
                   <p className="text-xs text-slate-400 leading-relaxed italic">
                     "{map.reason}"
                   </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-slate-600">
            <Compass className="w-12 h-12 mx-auto mb-4 opacity-10" />
            <p className="text-lg font-bold">No se encontraron mapas para esta facción.</p>
          </div>
        )}
      </div>

      <div className="mt-8 p-6 bg-slate-900/40 border border-slate-800 rounded-3xl flex flex-col md:flex-row items-center gap-6">
         <div className="w-16 h-16 rounded-2xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
           <Compass className="w-8 h-8 text-amber-500" />
         </div>
         <div>
           <h4 className="text-lg font-bold text-white mb-1">La Topografía dicta la Logística</h4>
           <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
             En torneos de alto nivel, la elección de civilización está vinculada indisolublemente al mapa. Ignorar las ventajas pasivas que otorga el terreno (como el bonus de comida islámico en Lipany o las recompensas Rus en High View) es regalarle una ventaja irremontable al oponente.
           </p>
         </div>
      </div>
    </div>
  );
}
