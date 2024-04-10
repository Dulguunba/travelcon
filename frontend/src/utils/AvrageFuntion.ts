type start = {
    star:number
}
export const FindToAverage = (array:start[])=>{
    let sumAdd:number = 0;
    for(let number of array){
        sumAdd = sumAdd + number.star;
    }
    let Average =  Math.floor(sumAdd/ array.length)
    return Average
}