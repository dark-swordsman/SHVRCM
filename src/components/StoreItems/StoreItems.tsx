import prisma from "../../helper/db";
import ItemCard from "./ItemCard";
import StoreItemGrid from "./StoreItemGrid";
import { Product } from "@prisma/client";

export default async function StoreItems() {
  // const items = [
  //   { name: "TurboFlex 3000" },
  //   { name: "AeroLight Pro" },
  //   { name: "Quantum Shield" },
  //   { name: "VitaBoost X1" },
  //   { name: "ZenWave Ultra" },
  //   { name: "PulseGrip" },
  //   { name: "EcoSphere Elite" },
  //   { name: "NeuraSync 2.0" },
  //   { name: "HydroLift Max" }
  // ]

  const products: Product[] = await prisma.product.findMany();

  return (
    <div className="my-8">
      <h1 className="text-4xl font-semibold mb-6">Products</h1>
      <hr className="mb-6"/>
      <StoreItemGrid>
        {products.map((product: Product, i) => <ItemCard key={product.id} product={product} />)}
      </StoreItemGrid>
    </div>
  );
}