const args: string[] = process.argv;
if (args.length !== 5) {
    console.log("Ожидается 3 аргумента: a b c");
    process.exit(1);
}

const a: number = parseFloat(args[2]);
const b: number = parseFloat(args[3]);
const c: number = parseFloat(args[4]);

if ([a, b, c].some(x => isNaN(x))) {
    console.log("Аргументы должны быть числами.");
    process.exit(1);
}

if (a === 0) {
    if (b === 0) {
        if (c === 0) {
            console.log("Бесконечно много решений.");
        } else {
            console.log("Решений нет.");
        }
    } else {
        const x = -c / b;
        console.log(`Линейное уравнение: x = ${x}`);
    }
    process.exit(0);
}

const discriminant = b * b - 4 * a * c;

if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`Корни квадратного уравнения: ${root1} и ${root2}`);
} else if (discriminant === 0) {
    const root = -b / (2 * a);
    console.log(`Один корень: ${root}`);
} else {
    const realPart = (-b / (2 * a)).toFixed(2);
    const imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    console.log(`Комплексные корни: ${realPart} + ${imagPart}i и ${realPart} - ${imagPart}i`);
}



