//Basic operations for interaction with the backend Create, Read, Update and Delete

//READ - GET

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

// CREATE - POST
const object = {
    title: 'hello world',
    body: 'looreilly'
};

const createAPI = () => {
    const options = {
        method: 'POST',
        body: JSON.stringify(object)
    }
    return fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then(response =>{
        console.log(response);
        if(!response.ok){
            throw new Error(response.statusText);
        }
        return response.json();
    });
    }
createAPI().then(data => console.log(data));