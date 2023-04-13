for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        if (i % 5 !== 0){
            console.log('Fizz');
        } else if (i % 3 === 0) {
            console.log('FizzBuzz');
        } else {
            console.log('Buzz');
        }
    } else {
        console.log(i);
    }
}
var list = ['milk', 'beer', 'beer', 'milk', 'milk']
var blacklist = ['beer', "beer","beer"]
for (var i = 0; i < list.length; i++ ){
    if (blacklist.includes(list[i])){
        console.warn(`${blacklist[i]} bad`)
        continue
    }
    console.log(`good ${list[i]}`)
}


