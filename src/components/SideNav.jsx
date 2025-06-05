const SideNav = ({ totalQuestions, currentQuestionIndex, setCurrentQuestionIndex }) => {
  return (
    <div className="w-35 bg-[#2f2f2f] border-r border-[#23272F] py-4 flex flex-col items-center gap-2 relative h-full">
      <div className="flex flex-col items-center gap-2 flex-grow">
        {[...Array(totalQuestions)].map((_, index) => (
          <button
            key={index}
            className={`w-10 h-10 rounded-lg text-base font-semibold transition-all duration-150 flex items-center justify-center mb-1 shadow-sm
              ${
                currentQuestionIndex === index
                  ? "bg-[#393c41] text-white border border-[#393c41]"
                  : "text-white hover:bg-[#393c41] border border-transparent"
              }`}
            onClick={() => setCurrentQuestionIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#393c41] flex items-center justify-center text-white text-2xl shadow hover:bg-[#555] transition-all duration-150 border-none"
        tabIndex={-1}
        aria-label="Expand"
      >
        <svg
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 6l6 6-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default SideNav;
