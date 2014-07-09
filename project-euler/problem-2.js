var x = 1;
var y = 2;
var z = 0;
var sum = 0;

if (x % 2 === 0){
    sum = x;
} else {
    sum = y;
};

while (z<4000000){
    z = x + y;
    if (z % 2 === 0){
        sum+=z;
    };
    x = y;
    y = z;
}
console.log(sum);

