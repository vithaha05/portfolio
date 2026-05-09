"use client";

import { useEffect, useState } from "react";

const terminalText = `$ python3 vithahaselvi.py
>>> Loading profile...
>>> name = "Vithahaselvi Haribalajhee"
>>> college = "PSG College of Technology"
>>> cgpa = 7.47
>>> skills = ["LangChain", "XGBoost", "PyTorch", "NetworkX"]
>>> status = "Seeking internship · May-Dec 2026"
>>> print(profile.summary())
"MSc TCS student building ML pipelines, RAG systems, and data engineering solutions."`;

export function TerminalWidget() {
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setText(terminalText.slice(0, index));

      if (index >= terminalText.length) {
        window.clearInterval(interval);
      }
    }, 30);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden border border-border bg-[#0d1117] shadow-[0_24px_90px_rgba(0,0,0,0.38)]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-code text-xs text-muted">vithahaselvi.py</span>
      </div>
      <pre className="min-h-[420px] whitespace-pre-wrap break-words p-5 font-code text-[12px] leading-6 text-text sm:p-6 sm:text-sm">
        <code>
          {text.split("\n").map((line, index) => (
            <span
              key={`${line}-${index}`}
              className={line.startsWith("$") || line.startsWith(">>>") ? "text-accent2" : ""}
            >
              {line}
              {index < text.split("\n").length - 1 ? "\n" : ""}
            </span>
          ))}
          <span className="terminal-cursor ml-1 inline-block h-4 w-2 translate-y-0.5 bg-accent2" />
        </code>
      </pre>
    </div>
  );
}
