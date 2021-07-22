function findUserByUsername(arr,key) {
    return arr.find(function (val) {
        return  val.username ===key;
    })
}

function removeUser(arr,key) {
    const indx = arr.findIndex(function (val,index) {
        return val.username ===key
    });
    const value = arr[indx];
    delete arr[indx];
    return  value;  
   
}
