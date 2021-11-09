class product {
	constructor(name, amount, price) {
		this.name = name.toUpperCase();
		this.amount = parseInt(amount);
		this.price = parseFloat(price);
	}
	totalPrice() {
		return this.amount * this.price;
	}
}
function dataEntry() {
	let exit1 = true;
	while (exit1 == true) {
		quit = prompt(
			"Please enter your products in the next popup. If you want to exit, enter Q"
		).toUpperCase();
		if (quit == "Q" || quit == null) {
			exit1 = false;
		} else {
			products.push(
				new product(
					prompt("Product Name: "),
					prompt("Product Amount: "),
					prompt("Product Price: ")
				)
			);
		}
	}
}
const products = [];
var sum = 0;
dataEntry();
for (let product of products) {
	sum += product.totalPrice();
}
console.log(products);
alert("The total value of all your products is: " + sum);
alert("Thank you for using our services. Have a nice day");
