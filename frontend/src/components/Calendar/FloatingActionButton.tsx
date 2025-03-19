import { PlusIcon } from "../HomePage/Icons";

export const FloatingActionButton = () => {
  return (
    <div className="fixed right-5 bottom-[60px]">
      <button
        aria-label="Add new activity"
        className="flex gap-2 justify-center items-center p-3 w-11 h-11 bg-sky-700 rounded-md border border-sky-700"
      >
        <PlusIcon />
      </button>
    </div>
  );
};
