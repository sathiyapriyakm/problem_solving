let arr = [12,3,1,2,-6,5,-8,6];
let targetSum=100;
let result=[];
function arrange(number1,number2,number3){
    // code to arrange three numbers in ascending order 
    if(number1<number2 && number1<number3 && number2<number3) result.push([number1,number2,number3])
    else if(number1<number2 && number1<number3) result.push([number1,number3,number2])
    else if(number2<number3 && number1<number3) result.push([number2,number1,number3])
    else if(number2<number3) result.push([number2,number3,number1])
    else if(number1<number2) result.push([number3,number1,number2])
    else  result.push([number3,number2,number1])
}


for(let index=0;index<arr.length-1;index++){
    let set=new Set();
    for(let index2=index+1;index2<arr.length;index2++){
        // calculating of missing number to form triplet
        let remainingNum=targetSum-arr[index]-arr[index2]
        if(set.has(remainingNum))  arrange(arr[index],arr[index2],remainingNum)
        else    set.add(arr[index2])
    }
}
console.log(result);

// Time complexity: O(n^2) (order of n square)
// Space complexity : O(n)