/**
 * Seeing the World: Think of at least five places in the world you’d like to visit.
 * • Store the locations in a array. Make sure the array is not in alphabetical order.
 * • Print your array in its original order.
 * • Print your array in alphabetical order without modifying the actual list.
 * • Show that your array is still in its original order by printing it.
 * • Print your array in reverse alphabetical order without changing the order of the original list.
 * • Show that your array is still in its original order by printing it again.
 * • Reverse the order of your list. Print the array to show that its order has changed.
 * • Reverse the order of your list again. Print the list to show it’s back to its original order.
 * • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
 * • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ['Singapore', 'Luxemburge', 'Bali Indonesia', 'Amazon Forest', 'Mountain K2', 'Everest'];
// orignal order
console.log("Places I want to visit (Orignal Order): [".concat(places.join(', '), "] \n"));
// copy is sorted in alphabatical order, places are still in orignal order
console.log("Places I want to vist (Sorted Order - Copy): [".concat(__spreadArray([], places, true).sort().join(', '), "] \n"));
console.log("Places I want to visit (Still In Orignal Order): [".concat(places.join(', '), "] \n"));
// copy is sorted in reverse alphabatical orders, places are still in orignal order 
console.log("Places I want to vist (Reversed Sorted Order - Copy): [".concat(__spreadArray([], places, true).sort().reverse().join(', '), "] \n"));
console.log("Places I want to visit (Still In Orignal Order): [".concat(places.join(', '), "] \n"));
// places is reversed inpalce, the orignal order is reversed
console.log("Places I want to vist (Reversed - Inplace): [".concat(places.reverse().join(', '), "] \n"));
console.log("Places I want to visit (Orignal Order Reversed): [".concat(places.join(', '), "] \n"));
// places is reversed inplace, the orignal orders is reverted (double reverse = same orignal order)
console.log("Places I want to vist (Reversed - Reversed - Orignal Order Rverted): [".concat(places.reverse().join(', '), "] \n"));
console.log("Places I want to visit (Back to Orignal Order): [".concat(places.join(', '), "] \n"));
// place is sorted alphabatically inplace, the orignal order affected by sorted alphabatically
console.log("Places I want to vist (Sorted Alphbatically): [".concat(places.sort().join(', '), "] \n"));
console.log("Places I want to visit (Origanl Order Affected - Is Sorted Alpha now): [".concat(places.join(', '), "] \n"));
// place is sorted reversed alphabatically inplace, the orignal order affected by sorted reversed alphabatically
console.log("Places I want to vist (Sorted Rversed Alpha): [".concat(places.sort().reverse().join(', '), "] \n"));
console.log("Places I want to visit (Origanl Order affected - Is Sorted Reversed Alpha now): [".concat(places.join(', '), "] \n"));
