const obj = { id: 3, value: 8 };
//const-изменять нельзя
//obj- изменять можно

let tims = {
  'Иван': 100,
  'Вася': 100,
  'Коля': 100,
  'Гена': 90
};
let sum = 0;

for (let k in tims) {
  sum += tims[k];
}
console.log(sum);
