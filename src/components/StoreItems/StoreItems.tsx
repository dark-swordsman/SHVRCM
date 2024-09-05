import ItemCard from "./ItemCard";
import StoreItemGrid from "./StoreItemGrid";

export default function StoreItems() {
  const items = [
    { name: "Item!" },
    { name: "Item!" },
    { name: "Item!" },
    { name: "Item!" },
    { name: "Item!" },
    { name: "Item!" },
    { name: "Item!" },
    { name: "Item!" },
    { name: "Item!" },
    { name: "Item!" },
    { name: "Item!" },
    { name: "Item!" },
    { name: "Item!" },
    { name: "Item!" },
  ]

  return (
    <div className="my-8">
      <h1 className="text-4xl font-semibold mb-6">Products</h1>
      <hr className="mb-6"/>
      <StoreItemGrid>
        {items.map((item, i) => <ItemCard key={i} item={item} />)}
      </StoreItemGrid>
    </div>
  );
}