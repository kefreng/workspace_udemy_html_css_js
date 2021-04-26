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

const getUser = (id) => {
    const user = users.find(user => user.id == id);

    const promise = new Promise((resolve, reject) => {
        if (!user) reject(`Doesn't Exist a user with id ${id}`);
        else resolve(user);
    });

    return promise;

};

const getEmail = (user) => {
    const email = emails.find(email => email.id == user.id);

    const promise = new Promise((resolve, reject) => {
        if (!email) reject(`user ${user.name} hasn't email`);
        else resolve({
            id: user.id,
            name: user.name,
            email: email.email
        });
    });

    return promise;

}

/* getUser(2)
    .then(user => {
        return getEmail(user);
    })
    .then(res => console.log(res))
    .catch(err => console.log(err)); */


getUser(2).then(user => getEmail(user))
    .then(res => console.log(res))
    .catch(err => console.log(err));

getUser(2).then(getEmail)
    .then(console.log)
    .catch(console.log);



//console.log(getUser(1));

/*  if (err) console.log(err);
    else {
        getEmail(user, (err, res) => {
            if (err) console.log(err);
            getEmail(user, (err, res) => {
                if (err) console.log(err);
                else console.log(res);
            })
        })
    }; */

//promesa, un obejto que por dentro tiene 2 callbacks

