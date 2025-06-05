import { useState, useEffect } from "react";
import ProblemPanel from "../components/ProblemPanel";
import CodeEditorPanel from "../components/CodeEditorPanel";
import SideNav from "../components/SideNav";
import HeaderBar from "../components/HeaderBar";

const TestPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const totalQuestions = 3;
  const [secondsLeft, setSecondsLeft] = useState(60 * 15); // 15 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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

  const formatTime = (secs) => {
    const h = String(Math.floor(secs / 3600)).padStart(2, "0");
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${h}H : ${m}M : ${s}S`;
  };

  return (
    <div className="h-screen w-full flex flex-col bg-white">
      {/* HeaderBar with timer and sticky positioning */}
      <div className="sticky top-0 z-20 bg-gray-100 border-b border-gray-300 flex items-center justify-between h-14 px-6">
        <button
          className="text-gray-700 font-semibold text-lg flex items-center gap-1"
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
        >
          <span className="text-xl">&#8592;</span> Prev
        </button>
        <div className="flex items-center gap-6">
          <span className="font-mono text-gray-700 text-base">
            {formatTime(secondsLeft)}
          </span>
        </div>
        <button
          className="text-gray-700 font-semibold text-lg flex items-center gap-1"
          onClick={handleNext}
          disabled={currentQuestionIndex === totalQuestions - 1}
        >
          Next <span className="text-xl">&#8594;</span>
        </button>
      </div>
      <div className="flex flex-grow min-h-0">
        <SideNav
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          totalQuestions={totalQuestions}
        />
        <div className="flex flex-grow min-h-0">
          <div className="w-[48%] border-r border-gray-300 overflow-y-auto flex flex-col justify-between">
            <div className="flex-grow overflow-y-auto">
              <ProblemPanel questionIndex={currentQuestionIndex} />
            </div>
            <div className="bg-white border-t border-gray-200 p-4 flex justify-start sticky bottom-0 z-10">
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded text-base font-semibold">
                Submit
              </button>
            </div>
          </div>
          <div className="w-[52%] overflow-y-auto flex flex-col justify-between">
            <div className="flex-grow overflow-y-auto">
              <CodeEditorPanel questionIndex={currentQuestionIndex} />
            </div>
            <div className="bg-white border-t border-gray-200 p-4 flex justify-end sticky bottom-0 z-10">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded text-base font-semibold">
                Mark for Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
