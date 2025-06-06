import React, { useState, useRef } from "react";
import ProblemPanel from "../components/ProblemPanel";
import CodeEditorPanel from "../components/CodeEditorPanel";
import SideNav from "../components/SideNav";
import HeaderBar from "../components/HeaderBar";

const MIN_LEFT = 20; // percent
const MAX_LEFT = 80; // percent

const TestPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const totalQuestions = 3;
  const [leftWidth, setLeftWidth] = useState(50); // percent
  const dragging = useRef(false);

  // Mouse event handlers for resizing
  const onMouseDown = (e) => {
    e.preventDefault();
    dragging.current = true;
    document.body.style.cursor = "col-resize";
  };
  const onMouseMove = (e) => {
    if (!dragging.current) return;
    const container = document.getElementById("split-container");
    const rect = container.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let percent = (x / rect.width) * 100;
    if (percent < MIN_LEFT) percent = MIN_LEFT;
    if (percent > MAX_LEFT) percent = MAX_LEFT;
    setLeftWidth(percent);
  };
  const onMouseUp = () => {
    dragging.current = false;
    document.body.style.cursor = "";
  };

  // Attach/detach listeners
  React.useEffect(() => {
    if (dragging.current) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    } else {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  });

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      <HeaderBar
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
      <div className="flex flex-1 min-h-0">
        <SideNav
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          totalQuestions={totalQuestions}
        />
        <div id="split-container" className="flex flex-1 min-h-0">
          {/* Left Panel */}
          <div
            className="flex-1 min-w-0 min-h-0 overflow-auto border-r border-gray-300 bg-white"
            style={{ width: `calc(${leftWidth}% - 4px)` }}
          >
            <ProblemPanel questionIndex={currentQuestionIndex} />
          </div>
          {/* Draggable Divider */}
          <div
            className="w-2 cursor-col-resize bg-gray-200 hover:bg-gray-300 transition-colors duration-100 z-10"
            onMouseDown={onMouseDown}
            style={{ userSelect: "none" }}
            aria-label="Resize panels"
          />
          {/* Right Panel */}
          <div
            className="flex-1 min-w-0 min-h-0 overflow-auto bg-white"
            style={{ width: `calc(${100 - leftWidth}% - 4px)` }}
          >
            <CodeEditorPanel questionIndex={currentQuestionIndex} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
