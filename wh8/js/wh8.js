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

let obj = {
    copy: function () {
        
    },
    clear: function () {
        
    },
    doFunction: function () {
        
    }
};
