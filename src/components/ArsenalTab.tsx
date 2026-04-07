import React, { useState } from 'react';
import { Search, Sword, Shield, Target, Zap, Filter, Coins, Wheat, TreeDeciduous, Users } from 'lucide-react';
import { counterData } from '../data/units';
import { civData } from '../data/civs';

export default function ArsenalTab({ selectedCiv, onSelectCiv }: { selectedCiv: any, onSelectCiv: (civ: any) => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [civSearch, setCivSearch] = useState('');

  const filteredUnits = counterData.filter(unit => {
    const matchesSearch = unit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          unit.civ.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          unit.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || unit.type.includes(filterType);
    
    // Improved Civ Filter
    const isGeneric = unit.civ.includes('Genérica');
    const matchesSelectedCiv = unit.civ.toLowerCase().includes(selectedCiv.name.toLowerCase()) || 
                               (selectedCiv.id === 'macedonia' && unit.civ.includes('Macedonia')) ||
                               (selectedCiv.id === 'house-of-lancaster' && unit.civ.includes('Lancaster')) ||
                               (selectedCiv.id === 'golden-horde' && unit.civ.includes('Horda de Oro')) ||
                               (selectedCiv.id === 'tughlaq' && unit.civ.includes('Tughlaq')) ||
                               (selectedCiv.id === 'templars' && unit.civ.includes('Templarios'));

    return matchesSearch && matchesType && (matchesSelectedCiv || isGeneric);
  });

  const civsToDisplay = civData.filter(civ => 
    civ.name.toLowerCase().includes(civSearch.toLowerCase())
  );

  const categories = ['All', 'Infantería', 'Caballería', 'Asedio', 'Pólvora', 'Arquero'];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <header className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-white mb-2">Arsenal Maestro</h2>
          <p className="text-slate-400">Matriz de contrarrestos y especializaciones militares con desglose de costos.</p>
        </div>

        {/* Civ Filter with Search */}
        <div className="flex flex-col gap-3 md:items-end">
           <div className="relative group w-full md:w-64">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-amber-500 transition-colors" />
             <input 
               type="text" 
               placeholder="Buscar facción..." 
               className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-amber-500/50 transition-all font-medium placeholder:text-slate-600"
               value={civSearch}
               onChange={(e) => setCivSearch(e.target.value)}
             />
           </div>
           
           <div className="flex items-center gap-2 overflow-x-auto pb-2 self-start md:self-end max-w-full md:max-w-2xl no-scrollbar">
              {civsToDisplay.map(civ => (
                <button
                  key={civ.id}
                  onClick={() => onSelectCiv(civ)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border whitespace-nowrap ${selectedCiv.id === civ.id ? 'bg-amber-500 border-amber-400 text-slate-950' : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-600'}`}
                >
                  {civ.name}
                </button>
              ))}
           </div>
        </div>
      </header>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-amber-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Búsqueda Avanzada: Ej. 'Infantería pesada', 'Gold > 100', 'Caballería'..." 
            className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500/50 transition-all font-medium placeholder:text-slate-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilterType(cat)}
              className={`px-4 py-2 rounded-xl border text-sm font-bold whitespace-nowrap transition-all
                ${filterType === cat 
                  ? 'bg-slate-800 border-amber-500/50 text-amber-500 shadow-lg shadow-amber-500/5' 
                  : 'bg-slate-900/50 border-slate-800 text-slate-500 hover:border-slate-600'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Units Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUnits.length > 0 ? (
          filteredUnits.map((unit, idx) => (
            <div key={idx} className="bg-slate-950/50 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-600 transition-all group hover:scale-[1.02] flex flex-col shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                 <Sword className="w-16 h-16 text-white" />
              </div>

              <div className="flex items-start justify-between mb-4 relative z-10">
                <div>
                  <h4 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors uppercase tracking-tight">{unit.name}</h4>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{unit.civ}</span>
                </div>
                <div className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded-md text-[9px] font-black text-slate-400 uppercase tracking-tighter">
                  {unit.type.split(' ')[0]}
                </div>
              </div>

              {/* Costs Breakdown */}
              <div className="grid grid-cols-4 gap-2 mb-4 bg-slate-950/80 rounded-xl p-3 border border-white/5 relative z-10">
                 <div className="flex flex-col items-center">
                    <Wheat className="w-3.5 h-3.5 text-orange-400 mb-1" />
                    <span className="text-xs font-bold text-white leading-none">{unit.food ?? 0}</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <TreeDeciduous className="w-3.5 h-3.5 text-emerald-400 mb-1" />
                    <span className="text-xs font-bold text-white leading-none">{unit.wood ?? 0}</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <Coins className="w-3.5 h-3.5 text-amber-400 mb-1" />
                    <span className="text-xs font-bold text-white leading-none">{unit.gold ?? 0}</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <Users className="w-3.5 h-3.5 text-blue-400 mb-1" />
                    <span className="text-xs font-bold text-white leading-none">{unit.pop ?? 1}</span>
                 </div>
              </div>

              <div className="space-y-3 flex-1 relative z-10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-emerald-400 font-black text-[9px] uppercase tracking-widest">
                    <Shield className="w-3 h-3" /> Fuerte contra
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug font-medium">{unit.strong}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-rose-400 font-black text-[9px] uppercase tracking-widest">
                    <Sword className="w-3 h-3" /> Débil contra
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug font-medium">{unit.weak}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-slate-600">
            <Filter className="w-12 h-12 mx-auto mb-4 opacity-10" />
            <p className="text-lg font-bold">No se encontraron unidades con estos criterios.</p>
          </div>
        )}
      </div>
    </div>
  );
}
