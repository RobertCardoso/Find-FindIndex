const find = function (arr, callback) {
    for(let i=0; i<arr.length; i++){
        let X = arr[i]
        let pass = callback(X)
        if(pass){
            return X
        }
    }
    return undefined
};


const findIndex = function(arr, callback){
    for(let i=0; i<arr.length; i++){
        let X = arr[i]
        let pass = callback(X)
        if(pass){
           return i
        }
    }
    return undefined
};


let cars = ['lamborguini', 'fusca' , 'corsinha' , 'uno de escada'];


let bestCar = findIndex(cars, function(el){
    if(el==='corsinha'){
        
        return el;
      
        
    }
})

console.log(`the best car is in position: ${bestCar}`)

let maisCaro = find(cars, function(el){
    if(el.length===8){
        return el
    }
})

console.log(`the best car is: ${maisCaro}`)