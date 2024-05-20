//за допомогою метода async/await у нас вся виконуеться як синхронна
//const list = document.querySelector(".list");
//Якщо ми пишемо функцію і результат обробляємо луше всередині функції тоді ми вукорістовуєм конструкцію try/catch і в такому випадку .than/.catch не потрібні 
// const swapi = async () => {
//   try { //створюємо запит і обробляємо його. якщо щось не так то автоматично потрапляємо в блок catch
//     const response = await fetch('https://swapi.dev/api/people/1/');
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     const data = await response.json();
//     list.innerHTML = `<li><h2>${data.name}</h2></li>`;
//     console.log(data);
//   } catch (err) { //якщо щось не так то автоматично потрапляємо в блок
//     console.log(err);
//   }
// };
// swapi();

//якщо наш запит потрібно буде використувати в іншому місці, наприклад пагінація, то ми використовуємо структуру .then / .catch
// const swapi = async () => {
//       const response = await fetch('https://swapi.dev/api/people/1/');
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//     //   const data = await response.json();
//     //   return data; //якщо не вказано return повертає underfine

//       // або
//       return await response.json();

//   };
//   swapi()
//   .then(resp => console.log(resp))
//   .catch(err => console.log(err));

//послідовні запити - але це не є зручно, тому ми використовуємо паралельні запити
// const foo = async () => {
//   const resp1 = await fetch('https://swapi.dev/api/people/1/');
//   const resp2 = await fetch('https://swapi.dev/api/people/2/');
//   const resp3 = await fetch('https://swapi.dev/api/people/3/');
//   const resp4 = await fetch('https://swapi.dev/api/people/4/');
//   if (!resp1.ok) {
//     throw new Error(resp1.statusText);
//   }
//   if (!resp2.ok) {
//     throw new Error(resp2.statusText);
//   }
//   if (!resp3.ok) {
//     throw new Error(resp3.statusText);
//   }
//   if (!resp4.ok) {
//     throw new Error(resp4.statusText);
//   }
//   const data1 = await resp1.json();
//   const data2 = await resp2.json();
//   const data3 = await resp3.json();
//   const data4 = await resp4.json();
//   console.log(resp1, resp2, resp3, resp4);
// };
// foo();
 
//паралельні запити
// const boo = async () => {
//   const arr = [1, 2, 3, 4, 'sfdfd']; //дані які нам треба отримати ми створюємо їх в масиві
//   const responses = arr.map(async id => {
//     const response = await fetch(`https://swapi.dev/api/people/${id}/`);
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return await response.json();
//   });
//   console.log(responses);
//   //const data = await Promise.all(responses); //якщо якісь проміс буде опрацьовано з помилкою то весь response не буде відпрацюваній
//   //const data = await Promise.race(responses);  // повертає той проміс який найшвидше відпрацював
//   const data = await Promise.allSettled(responses); // data  - це весь масив запитів і успішних і ні
//   console.log(data);

//   //   const resp = data.filter(item => {  //робимо фільтр тільки успішних запитів, тобто ті які мають статус fulfilled
//   //     if(item.status === 'fulfilled'){
//   //         return item.value;
//   //     }
//   //   })
//   //   return resp // повертаємо оновленій масив з позітівнімі відповідями
//   //   //console.log(resp)

//   // або скорочені варіант перед філтрем ставимо return
//   const succesfullData = data.filter(item => item.status === 'fulfilled').map(item => item.value);
//   list.innerHTML = succesfullData.map(person =>`<li><h2>${person.name}</h2></li>`).join('');
//   return succesfullData;
// };
// boo()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//використання бібліотеки axios
import axios from 'axios';

const swapi = async () => {
      try { 
        const response = await axios.get('https://swapi.dev/api/people/1/');
        console.log(response.data);
      } catch (err) { 
        console.log(err);
      }
    };
    swapi();