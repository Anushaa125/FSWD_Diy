export const add=(...args)=>{
    let sum=0;
    args.map((ele)=>{
        sum=sum+ele;
    });
    return sum;
}
