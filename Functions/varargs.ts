var product = function(...nums){
    var result =1;
    for(var i=0;i<nums.length;i++){
        result*=nums[i];
    }
    return result;
}
console.log(product(2,3,4,5));


var add = function(x:number,...nums:number[]){
    var result =0;
    for(var i=0;i<nums.length;i++){
        result+=nums[i];
    }
    return result+x;
}
console.log(add(2,3,4,5));