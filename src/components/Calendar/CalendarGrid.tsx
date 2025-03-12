export function CalendarGrid() {
  return (
    <section>
      <header className="flex justify-between items-center mb-2.5">
        <div className="flex gap-1 items-center">
          <h2 className="text-lg text-black font-[590]">June 2024</h2>
          <span className="text-lg text-blue-600">􀆊</span>
        </div>
        <div className="flex gap-7">
          <button aria-label="Previous month" className="text-xl text-blue-600">
            􀆉
          </button>
          <button aria-label="Next month" className="text-xl text-blue-600">
            􀆊
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 gap-4 mb-1 text-sm text-center uppercase font-[590] text-zinc-700 text-opacity-30">
        {["sun", "mon", "tue", "wed", "thu", "fri", "sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 text-xl text-black">
        {[
          2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        ].map((day) => (
          <div
            key={day}
            className={`h-11 ${day === 10 ? "text-blue-600" : ""} ${
              day === 26
                ? "text-blue-600 rounded-full bg-blue-600 bg-opacity-10"
                : ""
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </section>
  );
}
