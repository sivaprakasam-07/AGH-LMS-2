import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const LANGUAGES = [
  { label: "C++", value: "cpp" },
  { label: "Java", value: "java" },
  { label: "Python", value: "python" },
  { label: "JavaScript", value: "javascript" },
];

const CodeEditorPanel = () => {
  const [activeTab, setActiveTab] = useState("Test Cases");
  const [language, setLanguage] = useState(LANGUAGES[1].value); // Default to Java
  const tabs = ["Test Cases", "Compilation Result", "Custom Input"];

  // Default code for each language
  const defaultCode = {
    cpp: `#include <iostream>\nusing namespace std;\n\nvoid printNewLine() {\n\n}`,
    java: `public class Main {\n    public static void printNewLine() {\n        \n    }\n}`,
    python: "def print_new_line():\n    pass",
    javascript: "function printNewLine() {\n    \n}",
  };

  const [code, setCode] = useState(defaultCode[language]);

  // When language changes, update code to default for that language
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    setCode(defaultCode[e.target.value]);
  };

  return (
    <div className="flex flex-col h-full border-l border-gray-200 bg-[#181A1B] rounded-b-xl overflow-hidden">
      {/* Editor Header */}
      <div className="bg-[#23272F] text-white flex items-center justify-between px-6 py-2 text-base font-semibold border-b border-[#23272F] rounded-t-xl">
        <div className="flex items-center">
          <span className="mr-2">&lt;/&gt; Code</span>
        </div>
        <div className="flex items-center gap-3 pr-1">
          {/* Reset Button (icon only, smaller, square, not overlapping) */}
          <button className="bg-[#23272F] text-white w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 hover:bg-[#35393f] transition-all duration-150">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="#bdbdbd"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12A7.5 7.5 0 1 1 12 19.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h5"
              />
            </svg>
          </button>
          {/* Settings Button (icon only, smaller, square, not overlapping) */}
          <button className="bg-[#23272F] text-white w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 hover:bg-[#35393f] transition-all duration-150">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="#bdbdbd"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="3.5" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 9 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Language Selector */}
      <div className="bg-[#23272F] px-6 py-2 border-b border-[#23272F] flex items-center">
        <select
          id="language"
          value={language}
          onChange={handleLanguageChange}
          className="bg-[#23272F] border border-gray-700 text-white rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
      {/* Code Editor */}
      <div className="flex-grow min-h-0">
        <Editor
          height="320px"
          language={language}
          value={code}
          onChange={setCode}
          theme="vs-dark"
          options={{
            fontSize: 15,
            minimap: { enabled: false },
            fontFamily: "Fira Mono, monospace",
            roundedSelection: true,
            scrollbar: { vertical: "hidden", horizontal: "hidden" },
            overviewRulerLanes: 0,
            lineNumbers: "on",
          }}
        />
      </div>
      {/* Run & Submit Buttons above Tabs */}
      <div className="flex flex-col items-center bg-transparent">
        <div className="flex justify-end w-full gap-2 px-6 py-3 bg-transparent">
          {/* Run Button */}
          <button className="flex items-center gap-1 bg-[#00aa72] hover:bg-[#009e68] text-white px-4 py-1 rounded font-semibold text-sm transition-all duration-150">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 3v18l15-9-15-9z"
              />
            </svg>
            Run
          </button>
          {/* Submit Button */}
          <button className="bg-[#00aa72] hover:bg-[#009e68] text-white px-5 py-1 rounded font-semibold text-sm transition-all duration-150">
            Submit
          </button>
        </div>
        {/* Divider and Tabs mimic */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex justify-center items-center bg-[#23272F]" style={{height:'18px'}}>
            <div className="w-8 h-1 bg-[#e2e2e2] rounded-t-md mb-1" />
          </div>
          <div className="w-full flex bg-[#23272F] border-t border-gray-300">
            <button className="px-4 py-2 text-sm font-semibold border-r border-gray-300 focus:outline-none text-black bg-white">Test Cases</button>
            <button className="px-4 py-2 text-sm font-medium border-r border-gray-300 focus:outline-none text-gray-600 bg-[#f7f7f7]">Compilation Result</button>
            <button className="px-4 py-2 text-sm font-medium focus:outline-none text-gray-600 bg-[#f7f7f7]">Custom Input</button>
          </div>
        </div>
      </div>
      {/* Output Content */}
      <div className="text-sm text-gray-700 bg-[#f7f7f7] p-4 rounded-b-lg min-h-[90px] px-6">
        <p className="mb-1">
          <b>Input :</b>
          <br />
          Geeks for Geeks
        </p>
        <p>
          <b>Output :</b>
          <br />
          Geeks <br />
          for <br />
          Geeks
        </p>
      </div>
    </div>
  );
};

export default CodeEditorPanel;
