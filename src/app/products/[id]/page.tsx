import { Product } from "@prisma/client";
import prisma from "../../../helper/db";
import Image from "next/image";
import priceFormat from "../../../helper/priceFormat";
import ImageCarousel, { ImageElement } from "../../../components/ImageCarousel/ImageCarousel";

export default async function Product({ params }: { params: { id: string } }) {
	const product: Product = await prisma.product.findUnique({
		where: { id: parseInt(params.id) }
	})

	const images: ImageElement[] = [
		{ url: "/img/meta-quest-3-1.png" },
		{ url: "/img/meta-quest-3-1.png" },
		{ url: "/img/meta-quest-3-1.png" },
		{ url: "/img/meta-quest-3-1.png" },
	]
	
	return (
		<div className="">
			{/* {params.id}
			{product.name}
			{product.price} */}

			<div className="grid grid-cols-2 my-12 gap-6 xl:gap-12">
				<div>
					<ImageCarousel images={images} />
				</div>
				<div>
					<div className="flex flex-col bg-zinc-600 p-6 rounded-2xl">
						<span className="text-4xl">{product.name}</span>
						<span className="text-3xl text-sky-400 mt-3">{priceFormat(product.price)}</span>
						<div className="text-xl mt-6">
							This product is like totally legit and awesome and stuff. It has a lot of features and is really cool.
						</div>
						<div className="flex justify-end mt-12">
							<div className="bg-emerald-600 hover:bg-emerald-500 text-xl px-8 py-3 rounded-2xl cursor-pointer">Buy</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}