import axios from "axios";

// async function getUsers(number){
//     const {data} = await axios(`https://jsonplaceholder.typicode.com/users/${number}`)  

//     console.log(data);
// }

async function getUser(number){
        const {data} = await axios(`https://jsonplaceholder.typicode.com/users/${number}`)

        const {data: post} = await axios( "https://jsonplaceholder.typicode.com/post/" + number)

        try {
         console.log(data, post)
        } catch (error) {
        console.log(error)
        }
        
}

    
export default getUser;