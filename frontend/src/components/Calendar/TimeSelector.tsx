export function TimeSelector() {
  return (
    <section>
      <div className="mt-3 border-b border-neutral-600 border-opacity-30" />
      <div className="flex justify-between items-center mt-2.5">
        <label className="text-lg text-black">Ends</label>
        <button className="px-3 py-1.5 text-lg text-black rounded-md bg-zinc-500 bg-opacity-10">
          8:00 AM
        </button>
      </div>
      <div className="mt-2.5 border-b border-neutral-600 border-opacity-30" />
    </section>
  );
}
