import type { Topictype } from "../types";
import { useState } from "react";

export function Topic({ title, description, author, urls }: Topictype) {
  const [isOpen, setOpen] = useState<boolean>(false);

  const formatUrlDisplay = (rawUrl: string, index: number) => {
    try {
      const parsed = new URL(rawUrl);
      const domain = parsed.hostname.replace("www.", "");
      const path = parsed.pathname !== "/" ? parsed.pathname : "";
      const fullPath = domain + path;

      return fullPath.length > 35 ? `${fullPath.slice(0, 32)}...` : fullPath;
    } catch {
      return `Link ${index + 1}`;
    }
  };

  return (
    <div className="border border-[#251E38] rounded-lg overflow-hidden bg-[#181622] shadow-sm mb-3 sm:mb-4 transition-all w-full max-w-full">
      {/* Header Button */}
      <button
        type="button"
        onClick={() => setOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full text-left p-3.5 sm:p-4 bg-[#181622] hover:bg-[#251E38]/50 active:bg-[#251E38]/70 flex items-center justify-between gap-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8E52FF]"
      >
        <div className="min-w-0 flex-1">
          <span className="text-sm sm:text-base font-semibold text-[#8E52FF] leading-snug block break-words">
            {title}
          </span>
        </div>

        <svg
          className={`w-5 h-5 text-[#8C8A99] shrink-0 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
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
        <div className="p-3.5 sm:p-4 border-t border-[#251E38] bg-[#181622]/95 space-y-4 w-full min-w-0">
          <p className="text-xs sm:text-sm text-[#8C8A99] leading-relaxed break-words">
            {description}
          </p>

          <div className="min-w-0 w-full">
            <h4 className="text-[11px] sm:text-xs font-bold text-[#8C8A99] uppercase tracking-wider mb-2">
              Resources
            </h4>

            <ul className="space-y-2 w-full min-w-0">
              {urls.map((url, index) => {
                const currentAuthor = author?.[index];

                return (
                  <li
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm text-white bg-[#251E38]/40 p-2.5 sm:p-2 rounded border border-[#251E38] gap-1.5 sm:gap-2.5 w-full min-w-0 overflow-hidden"
                  >
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[#8E52FF] shrink-0"></span>

                      {currentAuthor && (
                        <span className="text-[#8E52FF] font-semibold">
                          {currentAuthor}:
                        </span>
                      )}
                    </div>

                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={url}
                      className="text-gray-300 hover:text-[#8E52FF] active:text-[#8E52FF] hover:underline transition-colors block w-full min-w-0 break-all sm:truncate pl-4 sm:pl-0"
                    >
                      {formatUrlDisplay(url, index)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}