import React, { useState, useMemo, useCallback } from 'react';
import { Unit } from '../types';
import { UNIT_DATA, UNITS_BY_CATEGORY } from '../lib/UnitRatios';
import { convertUnits } from '../lib/ConversionLogic';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { ArrowPathIcon } from './icons/ArrowPathIcon';

const UnitSelector: React.FC<{
  value: Unit;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  label: string;
}> = ({ value, onChange, id, label }) => {
  return (
    <div className="flex flex-col gap-2 w-full group">
        <label htmlFor={id} className="text-xs font-bold uppercase text-gray-400 tracking-wider group-focus-within:text-sky-400 transition-colors">{label}</label>
        <div className="relative">
            <select
                id={id}
                value={value}
                onChange={onChange}
                className="w-full appearance-none bg-black/20 border border-white/10 rounded-xl py-4 pl-5 pr-12 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all cursor-pointer hover:bg-black/30 font-medium"
            >
                {Object.entries(UNITS_BY_CATEGORY).map(([category, units]) => (
                <optgroup key={category} label={category} className="bg-gray-900 text-gray-300">
                    {units.map((unitKey) => (
                    <option key={unitKey} value={unitKey}>
                        {UNIT_DATA[unitKey].name}
                    </option>
                    ))}
                </optgroup>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                <ChevronDownIcon />
            </div>
        </div>
    </div>
  );
};


const UnitConverterTool: React.FC = () => {
    const [amount, setAmount] = useState<string>('1');
    const [fromUnit, setFromUnit] = useState<Unit>('cup_us');
    const [toUnit, setToUnit] = useState<Unit>('milliliter');
    
    const conversionResult = useMemo(() => {
        const numericAmount = parseFloat(amount);
        if (isNaN(numericAmount) || numericAmount < 0) return null;
        return convertUnits(numericAmount, fromUnit, toUnit);
    }, [amount, fromUnit, toUnit]);

    const handleFromUnitChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        const newFromUnit = e.target.value as Unit;
        setFromUnit(newFromUnit);
        
        const fromCategory = UNIT_DATA[newFromUnit].category;
        const toCategory = UNIT_DATA[toUnit].category;
        
        if (fromCategory !== toCategory) {
            const defaultTarget = UNITS_BY_CATEGORY[fromCategory].find(u => u !== newFromUnit) || UNITS_BY_CATEGORY[fromCategory][0];
            setToUnit(defaultTarget);
        }
    }, [toUnit]);

    const handleToUnitChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        const newToUnit = e.target.value as Unit;
        const fromCategory = UNIT_DATA[fromUnit].category;
        const toCategory = UNIT_DATA[newToUnit].category;

        if (fromCategory !== toCategory) {
             const defaultSource = UNITS_BY_CATEGORY[toCategory].find(u => u !== newToUnit) || UNITS_BY_CATEGORY[toCategory][0];
             setFromUnit(defaultSource);
        }
        setToUnit(newToUnit);
    }, [fromUnit]);

    const handleSwapUnits = useCallback(() => {
        const fromCategory = UNIT_DATA[fromUnit].category;
        const toCategory = UNIT_DATA[toUnit].category;
        if(fromCategory === toCategory) {
            setFromUnit(toUnit);
            setToUnit(fromUnit);
        }
    }, [fromUnit, toUnit]);
    
    return (
        <div className="w-full max-w-3xl p-8 md:p-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl shadow-black/50">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2 group">
                    <label htmlFor="amount" className="text-xs font-bold uppercase text-gray-400 tracking-wider group-focus-within:text-sky-400 transition-colors">Amount</label>
                    <input
                        id="amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="e.g., 1.5"
                        min="0"
                        step="any"
                        className="w-full bg-black/20 border border-white/10 rounded-xl py-4 px-5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all text-2xl font-light"
                    />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
                    <UnitSelector id="from-unit" label="From Unit" value={fromUnit} onChange={handleFromUnitChange} />
                    
                    <div className="flex justify-center pt-6">
                        <button 
                            onClick={handleSwapUnits} 
                            className="p-3 rounded-full bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 hover:text-sky-300 transition-all duration-200 border border-sky-500/20 hover:scale-110 active:scale-95" 
                            aria-label="Swap units"
                        >
                            <ArrowPathIcon />
                        </button>
                    </div>
                    
                    <UnitSelector id="to-unit" label="To Unit" value={toUnit} onChange={handleToUnitChange} />
                </div>
            </div>

            <div className="mt-10 pt-10 border-t border-white/5">
                {conversionResult ? (
                    <div className="flex flex-col items-center justify-center space-y-2 animate-fade-in">
                        <span className="text-gray-400 text-lg font-medium">
                           {amount || 0} {UNIT_DATA[fromUnit].name} equals
                        </span>
                        <div className="relative">
                            <span className="text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-xl">
                                {conversionResult.value.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                            </span>
                            <div className="absolute -inset-4 bg-sky-500/20 blur-2xl -z-10 rounded-full"></div>
                        </div>
                        <span className="text-sky-200 text-xl font-medium">
                            {UNIT_DATA[toUnit].name}
                        </span>
                        <div className="mt-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
                            1 {UNIT_DATA[fromUnit].name.split(' ')[0]} ≈ {conversionResult.ratio.toPrecision(4)} {UNIT_DATA[toUnit].name.replace(/s\)$/,')').replace(/\(s\)/,'') + 's'}
                        </div>
                    </div>
                ) : (
                    <div className="text-center p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                        <p className="font-bold text-yellow-200 mb-1">Conversion Not Possible</p>
                        <p className="text-sm text-yellow-200/70">Please select units of the same category (e.g., Mass to Mass).</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UnitConverterTool;