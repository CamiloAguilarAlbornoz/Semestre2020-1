interface ShirtBase {
	setColor(color : string);
	setSize(size : number);
}

function estamp(logo: string) {
	return function(target: Function) {
		target.prototype.estamption = function() : void {
			console.log('camiseta estampada con el logo de ' + logo);
		}
	}
}

@estamp('Lion Lannister')
class Shirt implements ShirtBase {

	private color : string;
	private model : string;
	private enterprise : string;
	private size : number;
	private price : number;

	constructor(color : string, model : string, enterprise : string, size : number, 
		price : number) {
		this.color = color;
		this.model = model;
		this.enterprise = enterprise;
		this.size = size;
		this.price = price;
	}

	public setColor(color: string) {
		this.color = color;
	}

	public getColor() : string {
		return this.color;
	}

	public setModel(model: string) {
		this.model = model;
	}

	public getModel() : string {
		return this.model;
	}

	public setEnterprise(enterprise: string) {
		this.enterprise = enterprise;
	}

	public getEnterprise() : string {
		return this.enterprise;
	}

	public setSize(size: number) {
		this.size = size;
	}

	public getSize() : number {
		return this.size;
	}

	public setPrice(price: number) {
		this.price = price;
	}

	public getPrice() : number {
		return this.price;
	}
}

class Sweatshirt extends Shirt {

	private hood : boolean;

	constructor(color : string, model : string, enterprise : string, size : number, 
		price : number, hood : boolean) {
		super(color, model, enterprise, size, price);
		this.hood = hood;
	}

	public setHood(hood : boolean) {
		this.hood = hood;
	}

	public getHood() : boolean {
		return this.hood;
	}
}

var shritList = new Array<Shirt>();
shritList.push(new Shirt('red', 'manga corta', 'totto', 1000000, 23));
shritList.push(new Shirt('black', 'manga larga', 'totto', 1000000, 23));
shritList.push(new Shirt('orange', 'manga corta', 'totto', 1000000, 23));
shritList.push(new Shirt('purple', 'manga larga', 'totto', 1000000, 23));
shritList.push(new Shirt('brown', 'manga corta', 'totto', 1000000, 23));

var shirtNew = new Shirt('brown', 'manga corta', 'totto', 1000000, 23);
shirtNew.estamption();

shritList.forEach(shirt => {
	console.log(shirt);
});

console.log(new Sweatshirt('green', 'completa', 'nike', 100000, 23, true));