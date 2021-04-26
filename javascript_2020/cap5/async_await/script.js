/* const getName = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Felix")
        }, 1000);
    });
}



const sayHello = async () => {
    const name = await getName();
    return `Hello ${name}`;
}

sayHello().then(res => console.log(res)); */

const users = [
    {
        id: 1,
        name: "Felix"
    },
    {
        id: 2,
        name: "Felipe"
    },
    {
        id: 3,
        name: "Andres"
    }
];

const emails = [
    {
        id: 1,
        email: "felix@gmail.com"
    },
    {
        id: 2,
        email: "felipe@gmail.com"
    },
];

const getUser = async (id) => {
    const user = users.find(user => user.id == id);

    if (!user) throw new Error(`Doesn't Exist a user with id ${id}`);
    else return new Promise((resolve, reject) => {
        resolve(user)
    });

};

const getEmail = async (user) => {
    const email = emails.find(email => email.id == user.id);

    if (!email) throw new Error(`user ${user.name} hasn't email`);
    else return ({
        id: user.id,
        name: user.name,
        email: email.email
    });

}

const infoTest = async (id) => {
    let user = await getUser(id);
    console.log(`${user.name} dentro de infoTest`);
}
infoTest(1);

const getInfo = async (id) => {
    try {
        const user = await getUser(id);
        const email = await getEmail(user);
        return `${user.name} email is ${email.email}`;
    } catch (err) {
        console.log(err);
    }
}

getInfo(2).then(res => console.log(res));

const infoTest2 = async (id) => {
    let user = await getUser(id);
    console.log("user dentro de infoTest2 ; ", user);
    return user;
}

infoTest2(2).then(user => console.log(user));