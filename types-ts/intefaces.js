var oldCivic = {
    name: 'civic',
    year: 2010,
    broken: true,
    sumary: function () {
        return "Name: ".concat(this.name);
    }
};
var oldFusca = {
    name: 'fusca',
    year: 1900,
    broken: false,
    sumary: function () {
        return "Name: ".concat(this.name);
    }
};
// exemplo descontruido
var printVehicle = function (_a) {
    var name = _a.name, year = _a.year, broken = _a.broken, sumary = _a.sumary;
    console.log(name, year, broken);
    console.log(sumary());
};
printVehicle(oldCivic);
// exemplo não descontruido
var printVehicle2 = function (oldCar) {
    // console.log(oldCar.name, oldCar.year, oldCar.broken);
};
printVehicle2(oldCivic);
printVehicle2(oldFusca);
