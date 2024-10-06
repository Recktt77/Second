// function emailcheck(email) {
//     const emailacc = 'admin@gmail.com';
//     return emailacc === email;
// }

// function passcheck(password) {
//     const passwordch = 'admin';
//     return passwordch === password;
// }

// function clearForm() {
//     document.querySelector('.email').value = '';
//     document.querySelector('.password').value = '';
// }

// document.querySelector('.sign').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const email = document.querySelector('.email').value; 
//     const password = document.querySelector('.password').value; 
//     const errorel = document.getElementById('error'); 

//     if (emailcheck(email) && passcheck(password)) {
//         console.log('Login successful');
//         errorel.textContent = 'Login successful!';
//         errorel.style.color = 'green';
//     } else {
//         console.log('Invalid credentials');
//         errorel.textContent = 'Invalid email or password.';
//         errorel.style.color = 'red';
//     }

//     clearForm();
// });

// const email = document.querySelector('#email')
// const password = document.querySelector('#password')
// const submit = document.querySelector('#submit')

// submit.addEventListener(('click'), () => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (email.value === 'admin' && password.value === 'admin') {
//                 resolve()
//             } else {
//                 reject()
//             }

//         }, 1000)
//     })
//     promise.then(() => {
//         alert('great')
//     })
//     promise.catch(() => {
//         alert('oooooh catch')
//     })
//     promise.finally(() => {
//         password.value = ''
//     })
// })


//get request
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => {
//         return response.json();
//       })
//       .then(json => console.log(json))

//post
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method:'POST',
//     body:JSON.stringify({
//         title: 'daniyal',
//         body: 'daniyal',
//         userId: 101,
//     })
// }).then(response => {
//     return response.json();
//   })
//   .then(json => console.log(json))

//put
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method:'PUT',
//     body:JSON.stringify({
//         title: 'daniyal1',
//         body: 'daniyal1',
//         userId: 101,
//     })
// }).then(response => {
//     return response.json();
//   })
//   .then(json => console.log(json))

//delete
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE'
// })
//       .then(response => {
//         return response.json();
//       })
//       .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => {
//         return response.json();
//       })
//       .then(json => console.log(json))


//get in html
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => {
//         return response.json();
//       })
//       .then(json =>{ 
//         displayPost(json),
//         console.log(json)
//     })

// function displayPost(post) {
//     const container = document.getElementById('get-container'); 
//     const postDiv = document.createElement('div'); 
//     postDiv.innerHTML = `<h2>User ID: ${post.userId}</h2><p>Title: ${post.title}</p><p>Body: ${post.body}</p>`;
//     container.appendChild(postDiv); 
// }

// //post button
// const submit = document.querySelector('#submit');
// submit.addEventListener('click', () => {
//     const title = prompt('Please enter TITLE');
//     const body = prompt('Please enter BODY');
    
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//           },
//         body: JSON.stringify({
//             title: title,
//             body: body,
//             userId: 101,
//         }),
//     })
//     .then(response => response.json())
//     .then(json => {
//         displayPost(json);
//         console.log(json);
//     })
// });

// //put button
// const submit1 = document.querySelector('#putting');
// submit1.addEventListener('click', () => {
//     const title = prompt('Please enter TITLE');
//     const body = prompt('Please enter BODY');
    
//     fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PUT',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//           },
//         body: JSON.stringify({
//             title: title,
//             body: body,
//             userId: 101,
//         }),
//     })
//     .then(response => response.json())
//     .then(json => {
//         displayPost(json);
//         console.log(json);
//     })
// })

// //delete button
// const submit2 = document.querySelector('#delete');
// submit2.addEventListener('click', () => {
//     fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'DELETE'
//     })
//           .then(response => {
//             return response.json();
//           })
//           .then(json => console.log(json))
// })





// const changeLevel = document.querySelector('#dish');
// const changeFriLevel = document.querySelector('#forfri');

// function displayPost() {
//     const container = document.getElementById('get-container');
//     container.innerHTML = '';
//     const postDiv = document.createElement('div');
//     postDiv.innerHTML = `<p>spice levels: light/medium/hot</p>`;
//     container.appendChild(postDiv);
// }

// function getMenu(dishes) {
//     const container = document.getElementById('menu');
//     container.innerHTML = '';
//     dishes.forEach((dish) => {
//         const postDiv = document.createElement('div');
//         postDiv.innerHTML = `<h2>Name: ${dish.name}</h2><p>Price: ${dish.price}</p><p>Spice Level: ${dish.spicelevel}</p><p>Fri Level: ${dish.frilevel}</p>`;
//         container.appendChild(postDiv);
//     });
// }

// class Dish {
//     constructor(name, price, spicelevel, frilevel = 'default') {
//         this.name = name;
//         this.price = price;
//         this.spicelevel = spicelevel;
//         this.frilevel = frilevel;
//     }

//     ToGetMenu() {
//         getMenu(this);
//     }

//     ToChangeSpiceLevel() {
//         displayPost();
//         const newSpiceLevel = changeLevel.value;
//         if (newSpiceLevel==='light' || newSpiceLevel==='medium' || newSpiceLevel==='hot'){
//             this.spicelevel = newSpiceLevel;
//         }else{
//             alert('eror, write light/medium/hot')
//         }
//     }
// }
// class Stake extends Dish{
//     constructor(name, price, spicelevel, frilevel = 'default'){
//         super(name, price, spicelevel, frilevel);
//     }
//     ToChangefriLevel() {
//         const newFriLevel = changeFriLevel.value;
//         if(newFriLevel==='low' || newFriLevel==='medium' || newFriLevel==='done'){
//             this.frilevel = newFriLevel;
//         }else{
//             alert('error there are only low, medium, done')
//         }
//     }
// }

// const dish1 = new Dish('Button', 110, 'light');
// const dish2 = new Dish('Button1', 120, 'medium');
// const dish3 = new Dish('Button2', 130, 'hot');
// const dish4 = new Dish('Button3', 140, 'light');
// const stake1=new Stake('Button', 110, 'light', 'medium');
// const stake2=new Stake('Button', 120, 'light', 'medium');
// const stake3=new Stake('Button', 130, 'light', 'medium');
// const stake4=new Stake('Button', 140, 'light', 'medium');

// dishes=[dish1,dish2,dish3,dish4,stake1,stake2,stake3,stake4];

// const submit = document.querySelector('#getMenu');
// submit.addEventListener('click', () => {
//     getMenu(dishes);
// });

// const submit2 = document.querySelector('#changelevel');
// submit2.addEventListener('click', () => {
//     dish1.ToChangeSpiceLevel();
//     getMenu(dishes);
// });

// const submit3 = document.querySelector('#changeFriLevel');
// submit3.addEventListener('click', () => {
//     stake1.ToChangefriLevel();
//     getMenu(dishes);
// });



// function loadTech() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 {   
//                     name: 'asus',
//                     model: 'rog',
//                     price: 1000
//                 },
//                 {   
//                     name: 'lenovo',
//                     model: 'legion',
//                     price: 1100
//                 },
//                 {   
//                     name: 'asus',
//                     model: 'zenbook',
//                     price: 700
//                 },
//                 {   
//                     name: 'lenovo',
//                     model: 'ideapad',
//                     price: 680
//                 }
//             ]);
//         }, 1000);
//     });
//     return promise;
// }

// loadTech().then((techItems) => {
//     const container = document.getElementById('tech'); // Reference the main container
//     techItems.forEach((techItem) => {
//         const techDiv = document.createElement('div'); // Create a div for each tech item
//         techDiv.classList.add('tech-item'); // Optional: Add a class for styling

//         // Set the innerHTML for each div
//         techDiv.innerHTML = `
//             <h2>Name: ${techItem.name}</h2>
//             <p>Model: ${techItem.model}</p>
//             <p>Price: $${techItem.price}</p>
//         `;

//         // Append each tech item div to the main container
//         container.appendChild(techDiv);
//     });
// });

// async function loadProduct() {
//     try {
//         const productResponse = await fetch('https://api.example.com/products/1');
        
//         if (!productResponse.ok) {
//             throw new Error('Ошибка при получении данных товара');
//         }

//         const productData = await productResponse.json();

//         const container = document.getElementById('tech');
//         const productDiv = document.createElement('div');
//         productDiv.innerHTML = `
//             <h2>Name: ${productData.name}</h2>
//             <p>Model: ${productData.model}</p>
//             <p>Price: $${productData.price}</p>
//         `;
//         container.appendChild(productDiv);

//         await loadReviews(productData.id);
        
//     } catch (error) {
//         console.error('Ошибка:', error.message);
//     }
// }

// async function loadReviews(productId) {
//     try {
//         const reviewsResponse = await fetch(`https://api.example.com/products/${productId}/reviews`);
        
//         if (!reviewsResponse.ok) {
//             throw new Error('Ошибка при получении отзывов');
//         }

//         const reviewsData = await reviewsResponse.json();

//         console.log('Отзывы по товару:', reviewsData);
        
//     } catch (error) {
//         console.error('Ошибка при получении отзывов:', error.message);
//     }
// }

// loadProduct();

// const text=document.querySelector('#finder');
// const submit = document.querySelector('#submit');

// submit.addEventListener('click', () => {
//     axios.get('http://localhost:3000/posts')
//     .then(response => {
//         console.log(response.data);
//         const titles = response.data;
//         const container = document.getElementById('list');

//         container.innerHTML = ``;

//         titles.forEach(ti => {
//             if (ti.title.toLowerCase().includes(text.value.toLowerCase())){
//                 const productDiv = document.createElement('div');
//                 productDiv.innerHTML = `
//                 <p>Name: ${ti.title}</p>
//                 `;
//                 container.appendChild(productDiv);
//             }
//         });
//     })
//     .catch(error => {
//         console.error('There was an error fetching the posts!', error);
//     });
// });


// const color=document.querySelector('#color');
// const button=document.querySelector('#stock');
// const bg=document.querySelector('.colorchange');

// bg.addEventListener('input', () =>{
//     document.body.style.backgroundColor=color.value;
// })

// button.addEventListener('click', (event) =>{
//     document.body.style.backgroundColor='';
//     color.value='';
// })






// axios.post('https://jsonplaceholder.typicode.com/posts', {
//     body:'daniya',
//     title:'rec'
// })

const activity = document.querySelector('#activity');
const button = document.querySelector('#submit');
const radio = document.getElementsByName('radio');


function fetchPosts() {
    axios.get('http://localhost:3000/posts')
        .then(response => {
            const titles = response.data;

            titles.forEach(ti => {
                const containerId = `${ti.status}1`;
                const container = document.getElementById(containerId);

                if (container) {
                    const techDiv = document.createElement('div');
                    techDiv.classList.add('input-text');

                    techDiv.innerHTML = `
                        <input type="text" class="title" value="${ti.title}" readonly>
                        <button class="delete-btn"></button>
                    `;
                    container.appendChild(techDiv);

                    const input = techDiv.querySelector('.title');
                    const deleteButton = techDiv.querySelector('.delete-btn');

                    input.addEventListener('dblclick', () => {
                        input.removeAttribute('readonly');
                        input.focus();

                        const onBlur = () => {
                            input.setAttribute('readonly', true);
                        };

                        input.addEventListener('blur', onBlur);

                        input.addEventListener('keydown', (e) => {
                            if (e.key === 'Enter') {
                                const newTitle = input.value;
                                input.setAttribute('readonly', true);
                                axios.put(`http://localhost:3000/posts/${ti.id}`, { id: ti.id, title: newTitle, status: ti.status })
                                    .then(() => {
                                        console.log('Post updated successfully');
                                    })
                                    .catch(error => {
                                        console.error('Error updating post:', error);
                                    });
                            }
                        });
                    });

                    deleteButton.addEventListener('click', () => {
                        axios.delete(`http://localhost:3000/posts/${ti.id}`)
                            .then(() => {
                                techDiv.remove();
                                console.log('Post deleted successfully');
                            })
                            .catch(error => {
                                console.error('Error deleting post:', error);
                            });
                    });
                } else {
                    console.error(`Container with ID ${containerId} not found`);
                }
            });
        })
        .catch(error => {
            console.error('There was an error fetching the posts!', error);
        });
}



button.addEventListener('click', () => {
    let selectedRadioValue = '';
    for (const option of radio) {
        if (option.checked) {
            selectedRadioValue = option.value;
            break;
        }
    }

    let index = 0;

    axios.get('http://localhost:3000/posts')
    .then(response => {
        const titles = response.data;

        titles.forEach(ti => {
            if (parseInt(ti.id) > index) {
                index = parseInt(ti.id);
            }
        });
        index = index + 1; 

        return axios.post('http://localhost:3000/posts', {
            id: `${index}`,
            title: activity.value,
            status: selectedRadioValue
        });
    })
    .then(postResponse => {
        console.log(postResponse.data); 
    })
    .catch(error => {
        console.error('There was an error!', error);
    });
});

fetchPosts();
