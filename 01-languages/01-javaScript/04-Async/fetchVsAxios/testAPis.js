import axios from 'axios';


async function fetchUsers(){
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response.ok);
        console.log(response.status);
        console.log(response.data);
    } catch (error) {
        console.error("Unable to fetch Data", error.message);
    }
}

fetchUsers();

async function addUsers(){
    try {
        const payload = {
            name: "Abdulhakeem Abdullahi",
            username: "Dalaktronixs",
            email: "hakeemabdullah87@gmail.com",
            address: {
                street: "vineyard streed",
                suite: "Suit 10",
                city: "Abeokuta",
                zipcode: "1110101",
            }
        }

        const response = await axios.post('https://jsonplaceholder.typicode.com/users', payload);
    }
}