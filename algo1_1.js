var tab1 = [3, 1, 7, 9]
var tab2 = [2, 4, 1, 9,3]
var sum =0
for (let i=0; i < tab1.length; i++){
    sum =sum +tab1[i] //return 20 (total de tab1)
    for(let j=0; j<tab2.length; j++){
        if (tab1[i] == tab2[j]) {
            sum =sum -tab2[j] // return 20 -(3+1+9)= 7   
        }
    }
}
for (let j=0; j< tab2.length;j++){
    sum =sum +tab2[j] // return 7 (sum) + 19(total de tab2) = 26
    for(let i=0; i<tab1.length;i++){
        if (tab2[j] == tab1[i]) {
            sum =sum -tab1[i] // return 26 - (3+1+9) = 13
        }
    }
}
console.log(sum)

