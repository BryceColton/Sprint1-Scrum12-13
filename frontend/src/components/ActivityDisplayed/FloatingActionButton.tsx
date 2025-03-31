import { PlusIcon } from "./Icons";

interface FloatingActionButtonProps {
  onClick: () => void;
}

export const FloatingActionButton = ({
  onClick,
}: FloatingActionButtonProps) => {
  return (
    <div className="fixed right-5 bottom-24 z-[100]">
      {" "}
      {/* Changed from bottom-[60px] to bottom-24 */}
      <button
        onClick={onClick}
        aria-label="Add new activity"
        className="flex justify-center items-center p-3 w-12 h-12 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <PlusIcon className="text-white" /> {/* Added text-white class */}
      </button>
    </div>
  );
};
