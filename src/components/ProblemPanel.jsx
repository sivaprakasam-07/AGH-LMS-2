// src/components/ProblemPanel.jsx
import React from "react";

const ProblemPanel = () => {
  return (
    <div className="p-6 text-sm text-gray-800 font-normal leading-relaxed">
      <h2 className="text-xl font-semibold mb-4">Newline Output</h2>
      <p className="mb-4">
        You’re already comfortable with producing output to the console. In this task, your job is to print three specific words — <b>Aptitude</b>, <b>Guru</b>, and <b>Hem</b> — each on a new line. Sounds simple, right? But make sure each word appears on a separate line exactly in the given order
      </p>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Example 1:</h3>
        <div className="bg-gray-100 rounded p-4">
          <p className="mb-1"><b>Input :</b><br />Geeks for Geeks</p>
          <p className="mb-1"><b>Output :</b><br />Geeks <br />for <br />Geeks</p>
          <p><b>Explanation :</b><br />First word of the statment is in first line, next word is in next line, and last is in last line.</p>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Example 2:</h3>
        <div className="bg-gray-100 rounded p-4">
          <p className="mb-1"><b>Input :</b><br />Geeks for Geeks</p>
          <p className="mb-1"><b>Output :</b><br />Geeks <br />for <br />Geeks</p>
          <p><b>Explanation :</b><br />Geeks <br />for <br />Geeks</p>
        </div>
      </div>
    </div>
  );
};

export default ProblemPanel;
