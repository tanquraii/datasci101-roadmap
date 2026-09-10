import type { Topictype } from "../types";
import { useState } from "react";

export function Topic({title, description, urls} : Topictype){

    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <div className="border border-[#251E38] rounded-lg overflow-hidden bg-[#181622] shadow-sm mb-4 transition-all">
            <button onClick={()=>setOpen(!isOpen)} className="w-full text-left p-4 bg-[#181622] hover:bg-[#251E38]/50 flex items-center justify-between transition-colors focus:outline-none">
                <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#8E52FF]">
                        {title}
                    </span>
                </div>
                <svg 
                    className={`w-5 h-5 text-[#8C8A99] transform transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="p-4 border-t border-[#251E38] bg-[#181622]">
                    <p className="text-sm text-[#8C8A99] mb-4">{description}</p>
                    <h4 className="text-xs font-bold text-[#8C8A99] uppercase tracking-wider mb-2">Resources</h4>
                    <ul className="space-y-2">
                        {urls.map((url, index)=>(
                            <li key={index} className="flex items-center text-sm text-white bg-[#251E38]/40 p-2 rounded border border-[#251E38]">
                                <span className="w-2 h-2 rounded-full bg-[#8E52FF] mr-2.5"></span>
                                <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-[#8E52FF] hover:underline truncate">
                                  {url}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}