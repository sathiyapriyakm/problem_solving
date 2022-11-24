let arr= [-3,-4,-5,-6,0,5,1];
let set = new Set();
for(let index=0;index<arr.length;index++){
    if(arr[index]>0){
 // add only positive integers to set
        set.add(arr[index]);
    }
}
if(set.size==0) 
 // if no positive numbers in given array then , cosole next positive integer as 1
    console.log(1);
else{
    for(let index=1;index<= set.size+1;index++){ // 
        // check in loop for missing positive number
        if(!set.has(index)){
            console.log(index);
            // if missing number is found exit loop
            break;
        }
        
    }
}
// Time complexity: O(n)
// Space complexity : O(n)