import { StatusBarIcons } from "./Icons";
export const StatusBar = () => {
  return (
    <header className="flex pt-5 w-full bg-white h-[50px]">
      <div className="flex justify-between items-center w-full">
        <time className="gap-2.5 pr-1.5 pl-4 text-lg leading-6 text-center text-black flex-[1_0_0] font-[590]">
          9:41
        </time>
        <div className="flex justify-center items-center h-2.5 w-[124px]" />
        <div className="flex px-4 justify-center items-center gap-[7px] flex-[1_0_0]">
          <StatusBarIcons />
        </div>
      </div>
    </header>
  );
};
