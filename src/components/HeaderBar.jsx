const HeaderBar = ({ currentQuestionIndex, totalQuestions, handlePrev, handleNext }) => {
  return (
    <div className="h-14 px-6 flex items-center justify-between bg-[#e2e2e2] border-b border-gray-300 sticky top-0 z-20">
      <button
        className="text-gray-700 font-semibold text-lg flex items-center gap-1 p-2 rounded-full hover:bg-gray-300 transition-all duration-150"
        onClick={handlePrev}
        disabled={currentQuestionIndex === 0}
        aria-label="Previous"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="text-base text-gray-700 font-medium select-none">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </div>
      <button
        className="text-gray-700 font-semibold text-lg flex items-center gap-1 p-2 rounded-full hover:bg-gray-300 transition-all duration-150"
        onClick={handleNext}
        disabled={currentQuestionIndex === totalQuestions - 1}
        aria-label="Next"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default HeaderBar;
