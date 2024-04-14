"use strict";
/**
 * No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
 * • If the list is empty, print the message We need to find some users!
 * • Remove all of the usernames from your array, and make sure the correct message is printed.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var users = [];
if (users.length == 0) {
    console.log('we need to find some users');
}
else {
    users.forEach(function (user) {
        if (user.isAdmin) {
            console.log("Hey ".concat(user.name, "! Would you like to look at the status reports?"));
        }
        else {
            console.log("Hey ".concat(user.name, "! Thanks for sign in. "));
        }
    });
}