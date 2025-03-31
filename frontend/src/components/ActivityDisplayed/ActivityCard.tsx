interface ActivityCardProps {
  imageUrl?: string;
  title: string;
  // Add category if you want to display it on the card
  // category?: string;
}
export const ActivityCard = ({ imageUrl, title }: ActivityCardProps) => {
  return (
    <article className="flex flex-col items-center">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="w-[150px] h-[150px] border border-black shadow-[0px_4px_4px_3px_rgba(0,_0,_0,_0.25)]"
        />
      ) : (
        <div className="border border-black shadow-sm h-[150px] w-[150px]" />
      )}
      <h3 className="mt-3.5 text-lg leading-6 text-center text-black font-bold">
        {title}
      </h3>
    </article>
  );
};
