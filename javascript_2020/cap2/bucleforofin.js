let names = ['Paco', 'Jose', 'Paula', 'Maria'];

for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Paula') {
        //break;
        continue;
    }
    console.log(names[i]);
}

console.log("-----------");

for (let name of names) {
    if (name === 'Paula') {
        continue;
    }
    console.log(name);
}

console.log("-----------");

for (let name in names) {
    console.log(name);
}