import { db } from "./FirebaseService";

export const getProducts = async () => {
	const products = [];
	await db
		.collection("products")
		.get()
		.then((querySnapshot) => {
			querySnapshot.docs.forEach((doc) => {
				products.push(doc.data());
			});
		});
	return products;
};
