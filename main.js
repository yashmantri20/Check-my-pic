let countnum;
const check = parseInt(localStorage.getItem('counter'))

const countFunc = () => {
    if(check)
    {
        countnum = parseInt(localStorage.getItem('counter'));
        countnum += 1
        localStorage.setItem('counter',countnum)
    }
    else{
        countnum = 1
        localStorage.setItem('counter',countnum)
    }
    
    const count = document.getElementById('count')
    count.innerText = `Total Count ${countnum}`
}

document.getElementById('listen').addEventListener('click', countFunc)

window.onload = 
    () => {
        countnum = parseInt(localStorage.getItem('counter'));
        const count = document.getElementById('count')
        count.innerText = `Total Count ${countnum}`
    }