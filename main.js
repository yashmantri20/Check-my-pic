let countnum;

const countFunc = (id) => {
    if(localStorage.getItem(id))
    {
        countnum = parseInt(localStorage.getItem(id));
        countnum += 1
        localStorage.setItem(id,countnum)
    }
    else{
        countnum = 1
        localStorage.setItem(id,countnum)
    }
}

function SortLocalStorage(){
    if(localStorage.length > 0){
       var localStorageArray = [];
       for (i=0;i<localStorage.length;i++){
           localStorageArray[i] = parseInt(localStorage.getItem(localStorage.key(i)));
       }
    }
    let len = localStorageArray.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (localStorageArray[j] < localStorageArray[j + 1]) {
                let tmp = localStorageArray[j];
                localStorageArray[j] = localStorageArray[j + 1];
                localStorageArray[j + 1] = tmp;
            }
        }
    }
    return localStorageArray;
 }

const loadingFunc = async () => {
    let sortedArr = SortLocalStorage();
    keys = Object.keys(localStorage)

    const images = await fetch("./data.json")
    const ans = await images.json()

    var html;
    for(i in sortedArr)
    {
        for(var j = 0;j<ans.images.length;j+=1)
        {
            if(parseInt(localStorage.getItem(keys[j])) === sortedArr[i])
            {
                for(var k = 0;k<ans.images.length;k+=1)
                {
                    if(keys[j] === ans.images[k].name)
                    {
                        console.log(keys[j],ans.images[k].name)
                        html += `
                                <div class="column">
                                <img src=${ans.images[k].img1} id="${ans.images[k].name}" style="width:100%" onclick="myFunction(this);">
                                </div>
                                `
                    }
                }
            }
        }
    }
    $('#row').append(html)
}
window.onload = loadingFunc
    