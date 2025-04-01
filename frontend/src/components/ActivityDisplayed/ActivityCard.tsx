// ActivityCard.tsx
interface ActivityCardProps {
  imageUrl?: string;
  title: string;
  onClick: () => void; // Changed to required prop
}

export const ActivityCard = ({
  imageUrl,
  title,
  onClick,
}: ActivityCardProps) => {
  return (
    <button
      className="flex flex-col items-center cursor-pointer active:scale-95 transition-transform"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="w-[150px] h-[150px] border border-black shadow-[0px_4px_4px_3px_rgba(0,_0,_0,_0.25)] object-cover"
        />
      ) : (
        <div className="border border-black shadow-sm h-[150px] w-[150px] bg-gray-100" />
      )}
      <h3 className="mt-3.5 text-lg leading-6 text-center text-black font-bold">
        {title}
      </h3>
    </button>
  );
};
