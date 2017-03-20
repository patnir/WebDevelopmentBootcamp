function average(scores) {
    var avg = 0;
    for (var i = 0; i < scores.length; i++) {
        avg += scores[i];
    }
    
    var res = Math.round(avg / scores.length);
   
    return res;
}


var score = [90, 98, 85, 23, 23, 32];
var res = average(score);
console.log(res);