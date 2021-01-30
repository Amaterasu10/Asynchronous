// const getList = (source) =>{

//     return new Promise((resolve, reject) =>{
//         const request = new XMLHttpRequest();
//         request.addEventListener("readystatechange", ()=>{
            
//             if(request.readyState === 4 && request.status == 200){
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             }else if(request.readyState === 4){
//                 reject("error, failed to retreive the data");
//             }
            
//         })
//         request.open("GET",source);
//         request.send();
//     })
    
// } 
//"https://jsonplaceholder.typicode.com/todos"

// getList("https://jsonplaceholder.typicode.com/todos").then(data =>{
//     console.log(data);
//     return getList("list.json");
// }).then(data =>{
//     console.log(data);
// }).catch(err =>{
//     console.log(err);
// })

const getlist= async () =>{
    const response = await fetch("list.json");

    if(response.status !== 200){
        throw new Error("failed to fetch the data");
    }
    const data = await response.json();
    return data;
};

getlist()
    .then(data => console.log("resolved", data))
    .catch(err => console.log("rejected", err.message));



// fetch("https://jsonplaceholder.typicode.com/todos").then(response =>{
//     return response.json();
// }).then(data =>{
//     console.log("json file 1 fetched:",data);
//     return fetch("list.json")
// }).then(response =>{
//     return response.json();
// }).then(data =>{
//     console.log("json file 2 fetched:", data);
// }).catch(err =>{
//     console.log(err);
// })




// getList("https://jsonplaceholder.typicode.com/todos" ,(err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log( "fetched data ",data);
//     }
// });


// const getSomething = () => {
//     return new Promise((resolve, reject) =>{
//         resolve("fetched data");
//         reject("failed to recieve the data");
//     })
// };

// getSomething().then(data => {
//     console.log(data);
// }, err => {
//     console.log(err);
// });