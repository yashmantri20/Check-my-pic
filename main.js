let cnt = 0
document.getElementById('listen').addEventListener('click',() => {
    if(localStorage.getItem('counter'))
    {
        val = parseInt(localStorage.getItem('counter'));
        val += 1
        localStorage.setItem('counter',val)
    }
    else{
        val = 1
        localStorage.setItem('counter',val)
    }
    
    const count = document.getElementById('count')
    count.innerHTML = val
})

window.onload = 
    () => {
        val = parseInt(localStorage.getItem('counter'));
        const count = document.getElementById('count')
        count.innerHTML = val
    }