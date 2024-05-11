import { Notify } from 'notiflix/build/notiflix-notify-aio';

//Basic operations for interaction with the backend Create, Read, Update and Delete

//-----------------------    READ - GET

// const getAPI = () => {
// return fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => {
//     if(!response.ok) {
//         throw new Error(response.statusText);
// }
//     return response.json()
// });
// };
// getAPI().then(data => console.log(data)); // викликаєм данну функцію




//-----------------------  CREATE - POST
// Алгоритм: 1. створюємо функцію createAPI(), прописуємо options, наступні 3 пункти є обов’язковими:
            // - method;
            // - ключ body, він відповідае за інфо що ми передаємо з FrontEnd до BackEnd, обовязково маємо перетворити в JSON (JSON.stringify(object));
            // - обов'язково прописуємо headers: {
            //                                     'Content-type': 'application/json; charset=utf-8', ('application/json - яким чином ми передаем інфо; charset=utf-8') - тип  кодування прописан в HTML
            //                                   }

//для прикладу 1. створюємо реальні пост, для цього створюємо в <form> в HTML
const form = document.querySelector('.form');
const list = document.querySelector('.list-posts');
const errorMessage = document.querySelector('.error');

const onSubmit = (evt) => {
evt.preventDefault();
// const {title, body} = evt.currentTarget.elements; //для извлечения значений свойств title и body из объекта elements формы

// const object = {
//     title: title.value,
//     body: body.value
// };
// або ми можемо зробити глибоке руйнування об'єкта:
const {
        title: {
               value: title
              },
        body: {
              value: body
            }
        } = evt.currentTarget.elements;

const object = {title, body};
createAPI(object).then(data => createPost(data), //5. після отриманої відповіді малюємо нашу розмітку createPost
                               Notify.success('our post was successful added! 😊') // обробка успішного запиту за допомогою бібліотеки Notify
                              //console.log(data), // 3. викликаєм  нашу функцію                
).catch(err => errorMessage.textContent = "Ooops, I am sorry :( ! 😒") // обробка помилки  за допомогою простого повідомлення
}

form.addEventListener('submit', onSubmit);
//2. дані з нашої форми треба передати на HTTP запит, для цього в нашу функцію createAPI() ми передаем якис data 

// const object = {
//   title: 'hello world',
//   body: 'looreilly',
// };

const createAPI = (data) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    }
  };

  return fetch('https://jsonplaceholder.typicode.com/posts', options).then(
    response => {
      console.log(response); //для запиту POST є окремий статус "201"
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }
  );
};
//createAPI().then(data => console.log(data));

// // 4. функція для створення постів
// const createPost = ({id, title, body}) => { // функція приймає якісь объект (obj), в даному випадку ми отримаємо obj = {id, title, body};
// list.insertAdjacentHTML('beforeend', `
//     <li data-postID="${id}">
//         <h3>${title}</h3>
//         <p>${body}</p>
//     </li>
// `);
// };



//-----------------------UPDATE - PUT/PATCH
const obj = {
    id: "1",
    title: "Hello world!"
};

// const updateAPI = (data) => {
//     const options = {
//             method: 'PATCH',
//             body: JSON.stringify(data),
//             headers: {
//               'Content-type': 'application/json; charset=utf-8',
//             }
//           };
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, options) // data.id - це id того елемента в масиві який ми будемо оновлювати 
//     .then(res => {
//         if(!res.ok) {
//             throw new Error(res.statusText);
//         }
//         return res.json();
//     })
// };

// updateAPI(obj).then(data => console.log(data));

// const updateAPI = (data) => {
//     const options = {
//             method: 'PUT',
//             body: JSON.stringify(data),
//             headers: {
//               'Content-type': 'application/json; charset=utf-8',
//             }
//           };
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, options) // data.id - це id того елемента в масиві який ми будемо оновлювати 
//     .then(res => {
//         if(!res.ok) {
//             throw new Error(res.statusText);
//         }
//         return res.json();
//     })
// };

// updateAPI(obj).then(data => console.log(data));
// //при використанні методу PUT все старе буде видалено, крім ідентифікаторів, і перезаписано



//----------------------- DELETE - DELETE

// const deleteAPI = (id) => {
//         const options = {
//                 method: 'DELETE',
//               };

//         return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, options) // data.id - це id того елемента в масиві який ми будемо оновлювати 
//         .then(res => {
//             if(!res.ok) {
//                 throw new Error(res.statusText);
//             }
//             return res.json();
//         })
//         .catch(err => console.log(err));
//     };
    
//     deleteAPI(1) // в результаті запиту delete, нам повертається пусти об'єкт, тому .then(data => console.log(data)); перевіку ми робимо безпосереднжо в функції