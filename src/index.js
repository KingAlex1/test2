/* ДЗ 2 - работа с исключениями и отладчиком */

/*
 Задача 1:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
function isAllTrue(array, fn) {
    if (array.constructor!==Array || array.length===0){
        throw new Error("empty array");
    }
    else if (typeof (fn) !== "function"){
        throw new Error("fn is not a function");
    }
    for(var i=0; i<array.length;i++){
        if (fn(array[i]) === false){
            return false;
        }
    }
    return true
}




/*
 Задача 2:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
function isSomeTrue(array, fn) {
    {
        if (array.constructor!== Array||array.length===0){
            throw new Error("empty array");
        }
        else if (typeof (fn) !== "function"){
            throw new Error("fn is not a function");
        }
        for(var i=0; i<array.length;i++){
            if (fn(array[i]) === true){
                return true;
            }
        }
        return false
    }
}

/*
 Задача 3:
 Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запусти fn для каждого переданного аргумента (кроме самой fn)
 Функция должна вернуть массив аргументов, для которых fn выбросила исключение
 Необходимо выбрасывать исключение в случаях:
 - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn) {
    var badarray = [];
    var goodarray =[];
    if (typeof (fn) !== "function") {
        throw new Error("fn is not a function");
    }
    for(var i = 1; i < arguments.length; i++) {
        try {
            goodarray = fn(arguments[i]);
            if (typeof(fn) !== "function"){
                throw new Error ();
            }
        }
        catch (e){
            badarray.push(arguments[i]);
        }
    }
    return badarray
}
/*
 Задача 4:
 Функция имеет параметр number (по умолчанию - 0)
 Функция должна вернуть объект, у которого должно быть несколько методов:
 - sum - складывает number с переданными аргументами
 - dif - вычитает из number переданные аргументы
 - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
 - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно
 Необходимо выбрасывать исключение в случаях:
 - number не является числом (с текстом "number is not a number")
 - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */
function calculator() {

}

export {
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    calculator
};

