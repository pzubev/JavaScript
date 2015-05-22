/*
### Problem 1. JavaScript literals
*    Assign all the possible JavaScript literals to different variables.
*/
var string = 'My name is\n Pluvko Pluvalkov';
var int = 29;
var float = 3.416783653;
var arr = ["One", "Two", "Three"];
var obj = {academy: 'Telerik', course: 'JavaScript', part: 1};
var bool = true;


/**
 * ### Problem 2. Quoted text
 *    Create a string variable with quoted text in it.
 *    For example: `'How you doin'?', Joey said'.
 */

var text = '\'How you doin\'?\', Joey said\'';
console.log(text);

/**
 * ### Problem 3. Typeof variables
 *    Try typeof on all variables you created.
 * ### Problem 4. Typeof null
 *    Create null, undefined variables and try typeof on them.
 */
var nullLit = null;
var undt;


var vars=[string, bool, float, int, obj, nullLit, undt]

for(var variable in vars){
    console.log(typeof vars[variable]);
}


