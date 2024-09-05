export default function ItemCard({ item }: { item: object }) {
  return (
    <div className="bg-zinc-600 group cursor-pointer duration-75 hover:border-sky-400 border-2 border-sky-700 rounded-2xl h-80 relative overflow-clip">
      <div className="z-10 blur-xl group-hover:blur-0 absolute top-0 left-0 w-full h-full invisible group-hover:visible bg-opacity-10 bg-black/60 duration-100 px-8 py-4 flex flex-col gap-4">
        <span className="text-3xl font-semibold">Cool Product!</span>
        <span className="font-sans">This product is like totally legit and awesome and stuff. It has a lot of features and is really cool.</span>
      </div>
      <div className="absolute h-full w-full bg-cover bg-center group-hover:blur-md duration-75 bg-[url('/img/meta-quest-3-1.png')]" />
    </div>
  );
}