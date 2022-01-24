let lastIndex = 0;
let imagens = document.querySelectorAll('.slider img');

setInterval(()=>{
    lastIndex++
    if(imagens[lastIndex] !== undefined ){
        imagens[lastIndex].style.display = 'block'
        imagens[lastIndex].style.transition = '1s'
        imagens[lastIndex-1].style.display = 'none'
        console.log(imagens[lastIndex])
    }else if(imagens[lastIndex] == undefined){
        imagens[lastIndex-1].style.display = 'none'
        imagens[0].style.display = 'block'
        lastIndex = 0
    }
},3000)

document.querySelector('.proxima-img').addEventListener('click',()=>{
    lastIndex++
    if(imagens[lastIndex] !== undefined ){
        imagens[lastIndex].style.display = 'block'
        imagens[lastIndex].style.transition = '1s'
        imagens[lastIndex-1].style.display = 'none'
        console.log(imagens[lastIndex])

    }else if(imagens[lastIndex] == undefined){
        imagens[lastIndex-1].style.display = 'none'
        imagens[0].style.display = 'block'
        lastIndex = 0
    }
});

