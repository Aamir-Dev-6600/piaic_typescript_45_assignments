/**
 * Album: Write a function called make_album() that builds a Object describing a music album.
 * The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
 * Use the function to make three dictionaries representing different albums.
 * Print each return value to show that Objects are storing the album information correctly.
 * Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
 * If the calling line includes a value for the number of tracks, add that value to the album’s Object.
 * Make at least one new function call that includes the number of tracks on an album.
 */
var make_album = function (artist_name, album_title, tracks_count) {
    if (tracks_count === void 0) { tracks_count = undefined; }
    var album = {
        artist_name: artist_name, album_title: album_title
    };
    if (tracks_count)
        album.tracks_count = tracks_count;
    return album;
};
var album1 = make_album('Artist One', 'Album One Title');
var album2 = make_album('Artist Two', 'Album Two Title');
var album3 = make_album('Artist Three', 'Album Three Title');
console.log(album1);
console.log(album2);
console.log(album3);
var album4 = make_album('Album Four', 'Album Four Title', 4);
console.log(album4);
