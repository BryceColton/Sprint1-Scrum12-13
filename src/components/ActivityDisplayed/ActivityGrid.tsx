import { ActivityCard } from "./ActivityCard";
import { DropdownIcon } from "./Icons";

export const ActivityGrid = () => {
  return (
    <section className="flex flex-col items-center px-8 mt-8">
      <button className="flex justify-center items-center mb-10 bg-cyan-600 border border-black shadow-sm h-[43px] w-[254px]">
        <span className="text-lg leading-6 text-center text-black">
          Physical
        </span>
        <div className="flex justify-center items-center w-14 h-12">
          <DropdownIcon />
        </div>
      </button>

      <div className="grid grid-cols-2 gap-10">
        <ActivityCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/f2aebd9b903b54407cc2c26ae7a282057725d5cb"
          title="Soccer"
        />
        <ActivityCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/60fcbe910dd3c06118425cfd5388515378d98c65"
          title="Board Games"
        />
      </div>

      <div className="grid grid-cols-2 gap-10 mt-10">
        <ActivityCard title="Description" />
        <ActivityCard title="Description" />
      </div>

      <div className="grid grid-cols-2 gap-10 mt-10">
        <ActivityCard title="Description" />
        <ActivityCard title="Description" />
      </div>

      <div className="grid grid-cols-2 gap-10 mt-10">
        <ActivityCard title="Description" />
        <ActivityCard title="Description" />
      </div>

      <div className="grid grid-cols-2 gap-10 mt-10">
        <ActivityCard title="Description" />
        <ActivityCard title="Description" />
      </div>

      <div className="grid grid-cols-2 gap-10 mt-10">
        <ActivityCard title="Description" />
        <ActivityCard title="Description" />
      </div>
    </section>
  );
};
