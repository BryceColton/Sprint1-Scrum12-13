export function StatusBar() {
    return (
      <header className="flex justify-between items-center px-4 pt-5 bg-white h-[50px]">
        <time className="text-lg text-black font-[590]">9:41</time>
        <div className="w-[124px]" />
        <div>
          <svg
            width="135"
            height="14"
            viewBox="0 0 135 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[135px] h-[14px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.1152 2.03302C43.1152 1.39997 42.6376 0.886791 42.0485 0.886791H40.9818C40.3927 0.886791 39.9152 1.39997 39.9152 2.03302V11.967C39.9152 12.6 40.3927 13.1132 40.9818 13.1132H42.0485C42.6376 13.1132 43.1152 12.6 43.1152 11.967V2.03302ZM35.681 3.33207H36.7477C37.3368 3.33207 37.8144 3.85757 37.8144 4.50581V11.9395C37.8144 12.5877 37.3368 13.1132 36.7477 13.1132H35.681C35.0919 13.1132 34.6144 12.5877 34.6144 11.9395V4.50581C34.6144 3.85757 35.0919 3.33207 35.681 3.33207Z"
              fill="black"
            />
            <rect
              opacity="0.35"
              x="74.7568"
              y="1"
              width="24"
              height="12"
              rx="3.8"
              stroke="black"
            />
            <path
              opacity="0.4"
              d="M100.257 5.28113V9.3566C101.062 9.01143 101.585 8.20847 101.585 7.31886C101.585 6.42926 101.062 5.6263 100.257 5.28113Z"
              fill="black"
            />
            <rect
              x="76.2568"
              y="2.5"
              width="21"
              height="9"
              rx="2.5"
              fill="black"
            />
          </svg>
        </div>
      </header>
    );
  }
  