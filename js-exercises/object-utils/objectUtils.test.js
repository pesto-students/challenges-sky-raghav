import { map, filter, invert, merge, all, some } from './objectUtils';

describe('Object Utils', () => {
  it('map : returns a transformed object', () => {
    const obj = {a:1, b:2, c:3, d:4};
    const cb = (key, val) => [key.toUpperCase(), val * 10];
    expect(map(obj, cb)).toEqual({A:10, B:20, C:30, D:40});
  });
  it('filter : returns a filtered object', () => {
    const obj = {a:1, b:2, C:3, d:4, e: 35, f: 66, g: 56, H: 97};
    const cb = (key, val) => val % 2 === 0;
    const cb2 = (key, val) => val % 2 !== 0 && key === key.toUpperCase();
    expect(filter(obj, cb)).toEqual({b:2, d:4, f:66, g:56});
    expect(filter(obj, cb2)).toEqual({C:3, H:97});
  });
  it('invert : inverts key-value pairs', () => {
    const obj = {a:'k', b:'l', c:'m', d:'n'};
    expect(invert(obj)).toEqual({k:'a', l:'b', m:'c', n:'d'});
  });
  it('merge : merges n number of objects into a single object', () => {
    const objArray = [{a:1, b:2}, {c:3, d:4}, {e:5, f:6}, {g:7, h:8}];
    expect(merge(objArray)).toEqual({a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8});
  });
  it('all : check the callback condition for every key-value pair in an object', () => {
    const obj = {a:1, b:2, C:3, d:4};
    const obj2 = {a:2, b:4, c:6, d:8};
    const cb = (key, val) => val % 2 === 0 && key === key.toUpperCase();
    const cb2 = (key, val) => val % 2 === 0 && key === key.toLowerCase();
    expect(all(obj, cb)).toEqual(false);
    expect(all(obj2, cb2)).toEqual(true);
  });
  it('some : check the callback condition upto a single truthy value in an object', () => {
    const obj = {a:1, b:2, C:3, D:4};
    const obj2 = {a:2, b:4, c:6, d:8};
    const cb = (key, val) => val % 2 === 0 && key === key.toUpperCase();
    const cb2 = (key, val) => val % 2 === 0 && key === key.toUpperCase();
    expect(some(obj, cb)).toEqual(true);
    expect(some(obj2, cb2)).toEqual(false);
  });
});
