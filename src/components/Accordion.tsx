import type { Accordiontype } from "../types";
import { useState } from "react";

export function Accordion({ level, description, topics }: Accordiontype) {
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        /* Expanded width to max-w-4xl, added larger padding and typography */
        <div className="w-full max-w-4xl mx-auto border border-[#251E38] rounded-xl overflow-hidden bg-[#181622] shadow-md mb-5 transition-all">
            <button 
                onClick={() => setOpen(!isOpen)} 
                className="w-full text-left p-6 bg-[#181622] hover:bg-[#251E38]/50 flex items-center justify-between transition-colors focus:outline-none"
            >
                <div>
                    {/* Increased text size to text-lg and font weight */}
                    <span className="text-lg font-bold uppercase tracking-wider text-[#8E52FF]">
                        {level}
                    </span>
                </div>
                <svg 
                    className={`w-6 h-6 text-[#8C8A99] transform transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="p-6 border-t border-[#251E38] bg-[#181622]">
                    <p className="text-base text-[#8C8A99] mb-6 leading-relaxed">{description}</p>
                    <h4 className="text-xs font-bold text-[#8C8A99] uppercase tracking-wider mb-4">Topics Covered</h4>
                    <div className="space-y-3">
                        {topics.map((topic, index) => (
                            <div key={index} className="text-sm text-gray-200 bg-[#251E38]/30 p-3 rounded-lg border border-[#251E38]/50">
                                {topic}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}