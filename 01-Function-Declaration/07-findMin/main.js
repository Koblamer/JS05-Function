function max(n1,n2,n3,n4){
    let maxNum = 0
    
    if (n1 > maxNum ) {
        maxNum = n1
    } 
    
    if (n2 > maxNum) {
        maxNum = n2
    } 
    
    if (n3 > maxNum) {
        maxNum = n3
    } 
    
    if (n4 > maxNum) {
        maxNum = n4
    } 
    
    if (!n1 && !n2 && !n3 && !n4) {
        maxNum = undefined
    }
    

    console.log('max = '+ maxNum)

}


max()
max(2)
max(3,1)
max(7,3,9,2)