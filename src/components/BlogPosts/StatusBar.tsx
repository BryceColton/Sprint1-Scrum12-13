import React from "react";

export const StatusBar: React.FC = () => {
  return (
    <header className="pt-5 w-full bg-white min-h-[50px]">
      <div className="flex justify-between items-center w-full">
        <time className="flex-1 shrink gap-2.5 self-stretch pr-1.5 pl-4 my-auto text-lg leading-none text-center text-black whitespace-nowrap basis-0 font-[590]">
          9:41
        </time>
        <div className="flex shrink-0 self-stretch my-auto h-2.5 w-[124px]" />
        <div className="flex flex-1 shrink gap-2 justify-center items-center self-stretch pr-4 pl-1.5 my-auto basis-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2daff01164d1f56f28b0d1cd21000ea5c0857de85b1f08ac1c20b2912a0e0d43?placeholderIfAbsent=true&apiKey=a80b8b3dbf43404a939a1d1ce97ee8d3"
            alt="Signal strength"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.58] w-[19px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d31bae4bf4ff46ccfafffa13bf606a831715bfe78ce5f06bcdc93ec85bd033b?placeholderIfAbsent=true&apiKey=a80b8b3dbf43404a939a1d1ce97ee8d3"
            alt="Battery level"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.42] w-[17px]"
          />
        </div>
      </div>
    </header>
  );
};
