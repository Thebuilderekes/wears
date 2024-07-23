//let productData;
//const fallbackData = [
//  { id: 1, title: "Fallback Product 1", price: 10.99 },
//  { id: 2, title: "Fallback Product 2", price: 12.99 },
//  // Add more fallback products as needed
//];
//
//try {
//  const response = await fetch("https://fakestoreapi.com/products");
//  if (!response.ok) {
//    throw new Error("Network response was not ok");
//  }
//  productData = await response.json();
//} catch (error) {
//  console.error("Fetch failed; using fallback data", error);
//  productData = fallbackData;
//}
//
//console.log(productData);
