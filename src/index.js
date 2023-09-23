//
//  index.ts
//  Calcusim
//
//  Created by CL Wang on 9/22/23.
//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    return Human;
}());
var Male = /** @class */ (function (_super) {
    __extends(Male, _super);
    function Male(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    Male.prototype.greet = function (to, addtions) {
        console.log(this.name + " said: Hello " + to.name + ", " + addtions);
    };
    return Male;
}(Human));
var clWang = new Male("ChenLin Wang", 22);
var jason = new Male("Jason", 19);
clWang.greet(jason, "this is my first TypeScript program. now I see it's easy to use too!");
