

function reverser(str) {
    const splitStr = str.split('')
    const reverseSplitStr = splitStr.reverse()
    const result = reverseSplitStr.join('')

    document.getElementById('output').value = result;
}
//************************Using recursion******************************* */
// function reverser(str = '') {
//     const [head = '', ...tail] = str;
  
//     if (tail.length) {
//       result= reverser(tail) + head;
//     }
//     document.getElementById('output').value = result;

//   } 
//*************************Using for loop**************************** */ function reverseString(str) {
    // function reverser(str) {
    //     let result = '';
    //     for (let i = str.length - 1; i >= 0; i--) {
    //       result += str[i];
    //     }
    //     document.getElementById('output').value = result;
    //   }