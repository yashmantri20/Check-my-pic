let countnum;
let values = ['count1','count']
const countFunc = (id,show) => {
    if(localStorage.getItem(id))
    {
        countnum = parseInt(localStorage.getItem(id));
        console.log(countnum)
        countnum += 1
        localStorage.setItem(id,countnum)
    }
    else{
        countnum = 1
        localStorage.setItem(id,countnum)
    }
    
    const count = document.getElementById(show)
    count.innerText = `Total Count ${countnum}`
}

document.getElementById('listen').addEventListener('click', function(){
    countFunc('counter','count')
})

document.getElementById('listen1').addEventListener('click', function(){
    countFunc('counter1','count1')
})

window.onload = 
    () => {
        keys = Object.keys(localStorage),
        i = keys.length;

        while ( i-- ) 
        {
            countnum = parseInt(localStorage.getItem(keys[i]));
            const count = document.getElementById(values[i])
            count.innerText = `Total Count ${countnum}`
        }
    }