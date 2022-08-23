class Maybe {
    value;

    constructor(value) {
        this.value = value;
    }

    bind = function (func) {
        this.value = func(this.value);

        if (this.value == null) this.value = 'Operação não realizada';
        return new Maybe(this.value);
    }
}

function subtract_one_until_negative(number) {
    if (number > 0) return (number - 1);
    return null;
}

function verify_if_is_int(number) {
    if (Number.isInteger(number)) return number;
    return null;
}

function verify_if_is_lesser_than_ten(number) {
    if (number < 10) return number;
    return null;
}

function verify_if_is_divisible_by_tree(number) {
    if (number % 3 == 0) return number;
    return null;
}

const test_value = new Maybe(5)
    .bind(subtract_one_until_negative)
    .bind(subtract_one_until_negative)
    .bind(subtract_one_until_negative)
    .bind(subtract_one_until_negative)
    .value;

const testing_functions = new Maybe(9)
    .bind(verify_if_is_int)
    .bind(verify_if_is_lesser_than_ten)
    .bind(verify_if_is_divisible_by_tree)
    .value;

console.log(testing_functions);
