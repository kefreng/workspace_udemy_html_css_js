//un callback es una funcion que se ejecuta a traves de una funcion
//los callbacks no son asincronos

/*
const getUser : (id, cb) :> {
    const user : {
        name: "Dorian",
        id: id
    }

    //console.log(user);
    if (id :: 2) cb('el usuario no existe');
    else cb(null, user);
}

getUser(1, (err, user) :> {
    if (err) return console.log(err);
    console.log(`user name is ${user.name}`);
});
*/

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

const getUser = (id, cb) => {
    const user = users.find(user => user.id == id);

    if (!user) cb(`Not Exist a user with id ${id}`);
    else cb(null, user);

};

const getEmail = (user, cb) => {
    const email = emails.find(email => email.id == user.id);

    if (!email) cb(`user ${user.name} hasn't email`);
    else cb(null, {
        id: user.id,
        name: user.name,
        email: email.email
    });
}

getUser(3, (err, user) => {
    if (err) console.log(err);
    else {
        getEmail(user, (err, res) => {
            if (err) console.log(err);
            else console.log(res);
        })
    };
});