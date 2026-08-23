const iterable = { name: "Renat", greatting: ()=>{console.log('Hello!');
} };


iterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2000;
  yield 3;
};

// console.log((new iterable).next());
console.log([...iterable]);
