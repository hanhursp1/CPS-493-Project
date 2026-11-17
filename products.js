class Product {
	constructor(object) {
		this.name = object.name
		this.price = object.price
		this.image = object.image
		this.type = object.type
	}
}

const products_url = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"

function get_products() {
	return fetch(products_url)
		.then(response => response.json())
		.then(products => products.map(p => new Product(p)))
}