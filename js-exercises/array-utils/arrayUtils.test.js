import { forEach, map, filter, reduce } from './arrayUtils';

describe('Array Utils', () => {
  it('forEach : traverse an array in ascending order', () => {
    const array = [1,2,3,4];
    const cb = (item, index, array) => { array[index] = item * 10 };
    forEach(array, cb);
    expect(array).toEqual([10,20,30,40]);
  });
  it('forEach : traverse an array in ascending order & calls the function with given scope of this', () => {
    const obj = {
      numbers : [1,2,3,4],
      multipliedNumbers : [],
      multiplicationFunction : function (){
        forEach(this.numbers, function(item, index, array){
          this.multipliedNumbers.push(item * 10);
        }, this);
      }
    };
    obj.multiplicationFunction();
    expect(obj.multipliedNumbers).toEqual([10,20,30,40]);
  });
  it('map : returns a mapped array', () => {
    const array = [1,2,3,4];
    const cb = (item, index, array) => item * 2;
    expect(map(array, cb)).toEqual([2,4,6,8]);
  });
  it('filter : returns a filtered array', () => {
    const array = [1,2,3,4,5,6,7,8,9,10];
    const cb = (item, index, array) => item % 2 === 0;
    expect(filter(array, cb)).toEqual([2,4,6,8,10]);
  });
  it('reduce : returns a reduced value', () => {
    const array = [1,2,3,4,5];
    const cb = (accum, currVal, Currindex) => accum + currVal;
    expect(reduce(array, cb)).toEqual(15);
  });
});
