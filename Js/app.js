// const person = [{     name: 'jhon',     job: 'dev', }]; const items = {
// 'featured-items': ['item1','item2'] } console.log(items['featured-items']);
// console.log(person['name']); let appState = 'loading'; appState = 'error'
// const keyName = 'computer'; const app = {     [appState]:true }; app[keyName]
// = 'apple'; console.log(app); const devs =
// person.filter((banana)=>banana.job==='dev');     console.log(devs)     const
// staff = [         { name: 'bob', age: 20, position: 'developer', salary:
// 100},         { name: 'peter', age: 25, position: 'designer', salary: 300}, {
// name: 'susy', age: 30, position: 'the boss', salary: 400},         { name:
// 'anna', age: 35, position: 'intern', salary: 10},     ];     const dailyTotal
// = staff.reduce((total,person)=>{     console.log(total);
// console.log(person.salary);     total += person.salary         return total
// },0)     console.log(dailyTotal);

//

// const items = Array.from({     length: 120 }, (_, index) => {     return
// index }) console.log(items) const fruits = ['apple', 'orange', 'lemon',
// 'banana']; const a = [...fruits]; console.log(a);

// const btn = document.querySelector('.btn')

// btn.addEventListener('click', () => {
//     addColor(1000, '.first', 'red')
//         .then()
//         .catch((err) => console.log(err))
//     })
// function addColor(time, selector, color) {
//     const element = document.querySelector(selector)
//     return new Promise((resolve, reject) => {
//         if (element) {
//             setTimeout(() => {
//                 element.style.color = color
//                 resolve()
//             }, time)
//         } else {
//             reject(`There is no such element : "${selector}"`)
//         }
//     })
// }

function calculator(command, a,b) {
  if(command === "add"){
    return a+b;
  }else if(command=== "substract"){
    return a-b;
  }else if(command=== "divide"){
    return a/b ;
  }else {
    console.log("Error");
  }
}
console.log(calculator("ssd",6,4));