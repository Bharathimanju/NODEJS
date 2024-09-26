let count=0
const intervalid=setInterval(()=>{
    if(count==5)
    {
        clearInterval(intervalid)
        console.log('timeup')
    }
    else{
        const now= new Date ();
        const hour=now.getHours();
        const min=now.getMinutes();
        const sec=now.getSeconds();
        const time=hour+":"+min+":"+sec;
        console.log(time)
        count++;

    }
},3000)