const url ="https://jsonplaceholder.typicode.com/users"
const user = [];
const userList = document.getElementById("user-list");


const getUsers = async () => {
    const response = await fetch(url);
    
    if(!response.ok) {
        console.log(response.status)
        return;
    }

    const data = await response.json();
    data.forEach(user => {
        console.log(user)
        const li = document.createElement("li");
        li.innerHTML = `
        <h2>${user.name}</h2>
        <p>${user.username}</p>
        <p>${user.email}</p>
        `;
        userList.appendChild(li);
    });            
};

// const updatedUser = {
//     name: "Gong",
//     username: "Gong123",
//     email: "gong@gmail.com"
// };

const updateUser = async (id) => {
    const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            name: 'Gong',
            username: 'Gong123',
            email: 'gong@gmail.com'
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    
    if(!response.ok) {
        console.log(response.status)
        return;
    }

    const data = await response.json();
    console.log(data);    

    const li = document.createElement("li");
    li.id = data.id;
    li.innerHTML = `
    <h2>${data.name}</h2> 
    <p>${data.username}</p> 
    <p>${data.email}</p>`;
    userList.appendChild(li);

    getUsers();
};

updateUser(1);

