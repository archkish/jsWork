
let arr3 = [9, 8, 7, 2, 1, 6, 5]

for(let j=0; j < arr3.length; j++) {
    for(let i = 0; i< arr3.length; i++) {
    
        if(arr3[i] > arr3[i+1]) {
            let tem = arr3[i]
            arr3[i] =  arr3[i+1];
            arr3[i+1] = tem
        }
    
    }  
}

console.log(arr3)