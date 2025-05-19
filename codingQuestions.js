// question 1:
// Collect All occurrences of a digit in order of there appearances
// input: [3,2,4,4,2,3,2,1,2,2,3,4,1]
// output:[3,3,3,2,2,2,2,2,4,4,4,1,1]

// Approach - >
// create result array
// Track first appearance store in array -> to check first appearance run loop and check that number already exist in first appearance array or not if not then its first appeared we store in it 
// we got first appearnces from array now check with main array, like compare elements and if true store in result array


const Arr = [3,2,4,4,2,3,2,1,2,2,3,4,1];
const FirstAppear = [];
const resultArr = [];

for (let i = 0 ; i < Arr.length; i++ ){
    const num = Arr[i];

    if(!FirstAppear.includes(num)){
        FirstAppear.push(num); // this condition true then only inner loop works 

        for (let j = 0; j < Arr.length; j++) {
            if (Arr[j] == num) { 
              resultArr.push(Arr[j]);

            }
        }
    }

}

console.log("Question 1 answer - All occurrences ");
console.log(resultArr);



// ----------------------------------------------

// question 2:
// arrange in specific order
// input: [3,2,4,4,2,3,2,1,2,2,3,4,1]
// output:[1,4,1,4,2,4,2,3,2,3,2,3,2]


/*Approach 
 pattern find->
 index - 0 
 I/P - 3
 O/P - 1

index - 1 
 I/P - 2
 O/P - 4

 index - 2 
 I/P - 4
 O/P - 1

 index - 3 
 I/P - 4
 O/P - 4

 index - 4 
 I/P - 2
 O/P - 2
 .....

 
*/

