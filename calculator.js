const MATH = {
    sum: '+',
    substract: '-',
    multiply: '*',
    divison: '/'
};

function calculate({ a, b, operation }) {
    let result = null;

    switch (operation) {
        case MATH.sum:
        result = sum(a,  b);
            break;
        case MATH.substract:
        result = substract(a, b);
            break;

        case MATH.multiply:
        result = multiply(a, b);
            break;

        case MATH.divison:
        result = divison(a, b);
            break;

        default:
            break;
    }

    return result;
}