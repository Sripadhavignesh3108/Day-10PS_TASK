function array2(array,indice1,indice2)
{
    let a=array.slice(indice1,indice2)
    return(a)
}
console.log("a sliced array from original array : ",array2([1,2,3,4,5,6,7,8],1,4))