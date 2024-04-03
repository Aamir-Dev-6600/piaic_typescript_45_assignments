"use strict";
/**
 * Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
 * • Make a list of five or more usernames called current_users.
 * • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var current_users = ['jack32', 'brandon_34', 'max_90', 'birdi45', 'wizard23'];
var new_users = ['julia61', 'cyberguy39', 'randomperosn', 'max_90', 'jack32'];
new_users.forEach(function (user) {
    if (current_users.includes(user)) {
        console.log("Username ".concat(user, " already taken"));
    }
    else {
        console.log("Username ".concat(user, " is unique"));
    }
});
