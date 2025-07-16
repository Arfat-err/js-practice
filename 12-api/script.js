 
//  Get API
 
//  fetch('https://jsonplaceholder.typicode.com/posts')
// .then((response)=>  response.json())
// .then((data)=>console.log(data) )

// .then(res => res.json())
// .then(data => console.log(data));


// POST API

//   fetch('https://jsonplaceholder.typicode.com/posts',{
//     method : 'POSt',
//     headers : {
//         'Content-Type' : 'application/json'
//     },
//     body : JSON.stringify({
//         title : 'New Post',
//         body : 'This is a new post',
//         userId : 1
//     })
//   })

// PUT API

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     id : 1,
//     title: 'Updated Post',
//     body: 'All content replaced',
//     userId: 1
//   })
// })