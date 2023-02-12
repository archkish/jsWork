
// mergingSort

    const merging = (left, right) => {

        const result = []
    
        while(left.length && right.length) {
            if(left[0] < right[0]) {
                result.push(left.shift())
            } else {
                result.push(right.shift())
            }
        }
    
        while(left.length) {
            result.push(left.shift())
        }
    
        while(right.length) {
            result.push(right.shift())
        }
    
        return result
    }
    
    
    
    const dividing = (arr) => {
        if(arr.length < 2 ) {
            return arr
        }
    
        const midle = Math.floor(arr.length / 2)
        const left = arr.slice(0, midle)
        const right = arr.slice(midle, arr.length)
        return merging(dividing(left), dividing(right))
    }


    let someArr = [6, 1, 8, 5, 2, 4, 7, 3]
    dividing(someArr)

    // find max value

    let arr = [2, 1, 4, 8, 3]

    function findMaxValue (arr) {

        if(!Array.isArray(arr)) {
            return "this is not array"
        }

        if(!arr.length) {
            return "array is empty"
        }

        let temp = arr[0]
        for (let i = 1; i < arr.length; i++ ) {
            if (arr[i] > temp) {
                temp = arr[i]
            }
        }

        return temp
    }

    findMaxValue (arr);

    // selection sort

    // let arr2 = [2, 1, 4, 8, 3]
    // function findMax (arr, start) {
    //     let maxValue = arr[start];
    //     let maxIndex = start;
    //     for(let i = start + 1; i < arr.length; i++) {
    //         if(arr[i] > maxValue) {
    //             maxValue = arr[i];
    //             maxIndex = i;
    //         }
           
    //     }

    //     return maxIndex
    // }

    // selectionSort(arr2)

    // function selectionSort (arr) {
        

    //         for(let i = 0; i < arr.length; i++) {
    //             let index = findMax(arr, i);
    //             let tmp = arr[arr.length - 1];
    //             arr[arr.length - 1] = arr[index];
    //             arr[index] = tmp
    //         }
       
    //     return arr
    // }

    // selectionSort(arr2)




    let array = [5, 7, 3, 9, 2, 1]

    function selectionSort (array) {
       for(let j = 0; j < array.length; j++) {
        let max = -Infinity;
        let index = null
        for(let i = 0; i < array.length - j; i++) {
            if(array[i] > max) {
                max = array[i]
                index = i
            }
        }
        
        let buff = array[array.length - 1 - j]
        array[array.length - 1 - j] = max
        array[index] = buff
       }
        
       return array
    }

    selectionSort(array)



//  task 5


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





