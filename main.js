var args = process.argv;
if (args.length !== 5) {
    console.log("Ожидается 3 аргумента: a b c");
    process.exit(1);
}
var a = parseFloat(args[2]);
var b = parseFloat(args[3]);
var c = parseFloat(args[4]);
if ([a, b, c].some(function (x) { return isNaN(x); })) {
    console.log("Аргументы должны быть числами.");
    process.exit(1);
}
if (a === 0) {
    if (b === 0) {
        if (c === 0) {
            console.log("Бесконечно много решений.");
        }
        else {
            console.log("Решений нет.");
        }
    }
    else {
        var x = -c / b;
        console.log("\u041B\u0438\u043D\u0435\u0439\u043D\u043E\u0435 \u0443\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435: x = ".concat(x));
    }
    process.exit(0);
}
var discriminant = b * b - 4 * a * c;
if (discriminant > 0) {
    var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log("\u041A\u043E\u0440\u043D\u0438 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u043E\u0433\u043E \u0443\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044F: ".concat(root1, " \u0438 ").concat(root2));
}
else if (discriminant === 0) {
    var root = -b / (2 * a);
    console.log("\u041E\u0434\u0438\u043D \u043A\u043E\u0440\u0435\u043D\u044C: ".concat(root));
}
else {
    var realPart = (-b / (2 * a)).toFixed(2);
    var imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    console.log("\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u0435 \u043A\u043E\u0440\u043D\u0438: ".concat(realPart, " + ").concat(imagPart, "i \u0438 ").concat(realPart, " - ").concat(imagPart, "i"));
}
