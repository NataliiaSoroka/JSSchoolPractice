/** 
 * Реализовать такие методы работы над массивами
 */

/**
 * метод создает новый массив элементов, состоящий из элементов массива array за вычетом элементов массива itemsToExclude
 */
function difference(arr, itemsToExclude) {
  return arr.filter(el => {
    return itemsToExclude.every(elem => elem !== el);
  });
 }

difference([2, 1, 5], [2, 3]) 
// => [1, 5]

/**
 * метод принимает массив обьектов array и ключ value по которому нужно эти обьекты сгруппировать
 */
function groupBy(array, value) {
  return array.reduce((acc,el) => {
  	let key = el[value];
    acc[key] = acc[key] ? [...acc[key], el] : [el];
    return acc;
  }, {});
}

groupBy([{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}, { gender: 'female', name: 'Jane'}], 'gender'); 
/**
 * => {
 *  male: [{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}],
 *  female: [{ gender: 'female', name: 'Jane'}]
 * }
 */

/**
 *  если метод принимет многомерный массив, он должен "сплюснуть" его на одно измерение 
 */
function flatten(array) {
  return array.reduce((acc, el) => acc = el.length ? [...acc, ...el] : [...acc, el], []);
}

flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]

flatten([1, 2, 3, 4, 5]);
// => [1, 2, 3, 4, 5]

flatten([1, [2, 3], 4, 5]);
// => [1, 2, 3, 4, 5]

/**
 * метод должен убрать все повторяющиеся элементы из массива
 */
function uniq(array) {
  return array.reduce((acc, el) => {
  	acc.indexOf(el) === -1 && acc.push(el);
    return acc;
  }, [])
}

uniq([2, 1, 2]);
// => [2, 1]

/**
 * 
 * метод должен собирать элементы массива в группы с заданным размером
 */
function chunk(array, size) {
  return array.reduce((acc, el, index) => {
    let indexOfArray = Math.floor(index/size);
    let indexOfElem = index%size;
    acc[indexOfArray] = indexOfElem === 0 ? [el] : [...acc[indexOfArray], el];
    return acc;
  }, [])
}

chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]