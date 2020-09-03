var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function estamp(logo) {
    return function (target) {
        target.prototype.estamption = function () {
            console.log('camiseta estampada con el logo de ' + logo);
        };
    };
}
var Shirt = /** @class */ (function () {
    function Shirt(color, model, enterprise, size, price) {
        this.color = color;
        this.model = model;
        this.enterprise = enterprise;
        this.size = size;
        this.price = price;
    }
    Shirt.prototype.setColor = function (color) {
        this.color = color;
    };
    Shirt.prototype.getColor = function () {
        return this.color;
    };
    Shirt.prototype.setModel = function (model) {
        this.model = model;
    };
    Shirt.prototype.getModel = function () {
        return this.model;
    };
    Shirt.prototype.setEnterprise = function (enterprise) {
        this.enterprise = enterprise;
    };
    Shirt.prototype.getEnterprise = function () {
        return this.enterprise;
    };
    Shirt.prototype.setSize = function (size) {
        this.size = size;
    };
    Shirt.prototype.getSize = function () {
        return this.size;
    };
    Shirt.prototype.setPrice = function (price) {
        this.price = price;
    };
    Shirt.prototype.getPrice = function () {
        return this.price;
    };
    Shirt = __decorate([
        estamp('Lion Lannister')
    ], Shirt);
    return Shirt;
}());
var Sweatshirt = /** @class */ (function (_super) {
    __extends(Sweatshirt, _super);
    function Sweatshirt(color, model, enterprise, size, price, hood) {
        var _this = _super.call(this, color, model, enterprise, size, price) || this;
        _this.hood = hood;
        return _this;
    }
    Sweatshirt.prototype.setHood = function (hood) {
        this.hood = hood;
    };
    Sweatshirt.prototype.getHood = function () {
        return this.hood;
    };
    return Sweatshirt;
}(Shirt));
var shritList = new Array();
shritList.push(new Shirt('red', 'manga corta', 'totto', 1000000, 23));
shritList.push(new Shirt('black', 'manga larga', 'totto', 1000000, 23));
shritList.push(new Shirt('orange', 'manga corta', 'totto', 1000000, 23));
shritList.push(new Shirt('purple', 'manga larga', 'totto', 1000000, 23));
shritList.push(new Shirt('brown', 'manga corta', 'totto', 1000000, 23));
var shirtNew = new Shirt('brown', 'manga corta', 'totto', 1000000, 23);
shirtNew.estamption();
shritList.forEach(function (shirt) {
    console.log(shirt);
});
console.log(new Sweatshirt('green', 'completa', 'nike', 100000, 23, true));
