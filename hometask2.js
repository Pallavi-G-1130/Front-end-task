const args = process.argv;
console.log(args[2]);
let res=args[3];

for(let i=4;i<args.length;i++)
{
    if(args[2]=="add")
    {
     res+=parseInt(args[i])  ;
    }
    if(args[2]=="sub")
    {
     res-=parseInt(args[i])  ;
    }
    if(args[2]=="mul")
    {
     res*=parseInt(args[i])  ;
    }
    if(args[2]=="div")
    {
     res/=parseInt(args[i])  ;
    }

}
console.log(res);
