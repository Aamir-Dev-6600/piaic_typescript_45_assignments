/**
 * Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
 * • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
 * • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
 */

const users : {name : string, isAdmin : boolean}[] = [
    {
        name : 'Aamir', 
        isAdmin : true
    }, 
    {
        name : 'Kashif', 
        isAdmin : false
    }, 
    {
        name : 'Salman', 
        isAdmin : false
    }, 
    {
        name : 'Omar', 
        isAdmin : false
    }, 
    {
        name : 'Babar', 
        isAdmin : true
    }
]; 

users.forEach(user => {
    if (user.isAdmin) {
        console.log(`Hey ${user.name}! Would you like to look at the status reports?`);
    }
    else {
        console.log(`Hey ${user.name}! Thanks for sign in. `);
    }
});

export {}; 