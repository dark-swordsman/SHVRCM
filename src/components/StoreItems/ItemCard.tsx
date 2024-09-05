export default function ItemCard({ item }: { item: object }) {
  return (
    <div className="bg-gray-600 rounded-2xl h-80 background-image relative overflow-clip">
      <div className="h-[75%] bg-cover bg-center bg-[url('/img/meta-quest-3-1.png')]" />
      <div className="w-100 h-[25%] bg-gray-700 px-4 py-2">
        <span className="text-xl">Cool Product!</span>
      </div>
    </div>
  );
}