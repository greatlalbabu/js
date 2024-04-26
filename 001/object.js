// const user = {} // empty bject

// const name = {firstname: "Lalbabu"}

const profile = {
    name : "Lalbabu Prasad",
    age : 24,
    dob: 1999,
    profession: "student",
    city: "Jaipur",
    state: "Rajasthan"
}

const profile2 = {
    name : "Lalbabu Prasad",
    age : 24,
    dob: 1999,
    profession: "student",
    city: "Jaipur",
    'state-jk': "Rajasthan"
}

console.log(profile.name);
console.log(profile2["state-jk"]);

profile.age=56;
profile['is-student']= true;

// objects inside object
const profile3 = {
    name : "Lalbabu Prasad",
    age : 24,
    dob: 1999,
    profession: "student",
    city: "Jaipur",
    state: "Rajasthan",
    address: {
        hno: 40,

    }
}
