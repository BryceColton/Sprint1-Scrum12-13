export function WardCalendarDropdown() {
  return (
    <button className="relative bg-cyan-600 border border-black shadow-sm h-[43px] w-[254px]">
      <span className="absolute top-3 text-lg leading-6 text-center text-black left-[43px]">
        Ward Calendar
      </span>
      <div className="flex absolute top-0 right-0 justify-center items-end w-14 h-12">
        <div className="px-0 py-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 15L7 10H17L12 15Z" fill="#49454F" />
          </svg>
        </div>
      </div>
    </button>
  );
}
