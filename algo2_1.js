var tab1 = [12, 13, 6, 10]
var tab2 = [13, 10, 16, 15]
var sum =0
for (let i=0; i < tab1.length;i++){
    for(let j=0;j<tab2.length;j++){
        if (tab1[i] == tab2[j]) {
            sum =sum+ (2* tab2[j])
        }
    }
}
console.log(sum)
