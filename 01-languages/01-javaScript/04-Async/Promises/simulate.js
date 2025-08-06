function delaySuccess(){
    return new Promise((resolve) => {
        setTimeout(() => resolve("Delay was Successfuly"), 2000);
    });
}

delaySuccess()
    .then(result => console.log(result));


function delayFailure(){
    return new Promise((_,reject) => {
        setTimeout(() => reject("Delay was Successfuly"), 1000);
    });
}

delayFailure()
    .catch(error => console.error("Error message: ", error))