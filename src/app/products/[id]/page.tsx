import { Product } from "@prisma/client";
import prisma from "../../../helper/db";

export default async function Product({ params }: { params: { id: string } }) {
	const product: Product = await prisma.product.findUnique({
		where: { id: parseInt(params.id) }
	})
	
	return (
		<div>
			{params.id}
			{product.name}
			{product.price}
		</div>
	);
}