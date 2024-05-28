function encode(message,alpha,key){
    let result = "";
    for (let i = 0; i < message.length; i++){
        let index = alpha.indexOf(message[i]);
        result += key[index];
    }
    return result;
}

function decode(message,alpha,key){
    let result = "";
    for (let i = 0; i < message.length; i++){
        let index = key.indexOf(message[i]);
        result += alpha[index];
    }
    return result;
}
