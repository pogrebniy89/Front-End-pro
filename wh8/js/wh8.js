// Есть обьект obj = { } Внутри него описываем методы copy, clear, doFunction.
//     Организовать создание методов так, что бы можно было вызывать любые комбинации:
//
// -------------------------------------------------------------------------------------------------
//
//     obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear()
//
// -------------------------------------------------------------------------------------------------
//
// doFunction(func, x, y); получает параметрами 2 числа и функцию, которую нужно применить к x и y.
//     Результат операции сохранять в obj.result
//
// -------------------------------------------------------------------------------------------------
//
// clear() очищает значение obj.result в 0
//
// -------------------------------------------------------------------------------------------------
//
// copy(buffer) получает параметром название ключа buffer (string) и
// добавляет его к obj Далее в любом порядке можно вызывать комбинации функций
//
// -------------------------------------------------------------------------------------------------
//
// Создать метод target(property)- дальнейшие действия функций doFunction() и clear()
// будут изменять значение не result, а переданной property
//
// -------------------------------------------------------------------------------------------------
//
// Пример: obj .doFunction(sum, 2, 4) .copy('some_name') .target('another_some_name') .doFunction(mul, 6, 3)
//
// -------------------------------------------------------------------------------------------------

const obj = {
    destinationKey: 'result',

    doFunction (func, value, secondValue){
        this[this.destinationKey] = func(value, secondValue);
        return this
    },

    clear (){
        this[this.destinationKey] = 0;
        return this
    },

    copy (buffer){
        this[buffer] = this[this.destinationKey];
        return this
    },

    target (property){
        this[property] = this[this.destinationKey];
        this.clear();
        this.destinationKey = property;
        return this
    },
};

function sum(val1, val2){
    return val1 + val2
}

function mul(val1, val2){
    return val1 * val2
}

function def(val1, val2){
    return val1 - val2
}

function div(val1, val2){
    return val1 / val2
}

function printOutput(value, result){
    console.log(value+" : "+result)
}

let test = obj;

test.doFunction(mul, 10, 5).doFunction(sum, 2, 3);
printOutput("sum 2, 3", obj.result);
test.clear();
printOutput("after clear", obj.result);

test.doFunction(def, 10, 5).doFunction(div, 100, 4);
printOutput("div 100, 4", obj.result);
test.clear();
printOutput("after clear", obj.result);

test.doFunction(sum, 1, 2).copy("test");
printOutput("use test", obj.test);

test.doFunction(sum, 1, 3).target('TT');

printOutput("use target, TT", obj.TT);
printOutput("use target, result", obj.result);