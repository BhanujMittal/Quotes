const content = document.getElementById('content')
const previous = document.getElementById('previous')
const next = document.getElementById('next')
const success = document.getElementById('success')
const love = document.getElementById('love')
const sad = document.getElementById('sad')
const reset = document.getElementById('reset')
const nextSuccess = document.getElementById('nextSuccess')
const nextLove = document.getElementById('nextLove')
const nextSad = document.getElementById('nextSad')
const buttons = document.getElementsByClassName('quote-type');
Array.from(buttons).forEach((button) => {
    button.disabled = false;
})
let successArr = [];
let sadArr = [];
let loveArr = [];
const fetchApi = async (url) => {
    previous.style.display = 'block'
    try {
        fetch(url).then((value) => {
            return value.json()
        }).then((value) => {
            try {
                if (value.type === 'sad') {
                    sadArr.push(value.quote)
                    console.log(sadArr)
                    console.log(value.type)
                } else if (value.type === 'love') {
                    loveArr.push(value.quote)
                    console.log(loveArr)
                    console.log(value.type)
                } else if (value.type === 'success') {
                    successArr.push(value.quote)
                    console.log(successArr)
                    console.log(value.type)
                }
            }
            catch (error) {
                console.log(error)
            }
            finally {
                content.innerHTML = value.quote
            }
        })
    }
    catch (error) {
        console.log(error)
    }
}
success.addEventListener('click', () => {
    nextSuccess.style.display = 'block'
    nextLove.style.display = 'none'
    nextSad.style.display = 'none'
    fetchApi('https://hindi-quotes.vercel.app/random/success');
    loveArr.length = 0;
    sadArr.length = 0;
    success.style.color = 'white'
    success.style.background = 'black'
    love.style.color = 'black';
    love.style.background = 'inherit';
    sad.style.color = 'black'
    sad.style.background = 'inherit'
    success.disabled = true;
    love.disabled = false;
    sad.disabled = false;
    previous.addEventListener('click', () => {
        if (successArr.length > 1) {
            successArr.pop();
            content.innerHTML = successArr[successArr.length - 1];
        }
    })
})
love.addEventListener('click', () => {
    nextSuccess.style.display = 'none'
    nextLove.style.display = 'block'
    nextSad.style.display = 'none'
    fetchApi('https://hindi-quotes.vercel.app/random/love');
    successArr.length = 0;
    sadArr.length = 0;
    love.style.color = 'white';
    love.style.background = 'black';
    sad.style.color = 'black'
    sad.style.background = 'inherit'
    success.style.color = 'black'
    success.style.background = 'inherit'
    love.disabled = true;
    success.disabled = false;
    sad.disabled = false;
    previous.addEventListener('click', () => {
        if (loveArr.length > 1) {
            loveArr.pop();
            content.innerHTML = loveArr[loveArr.length - 1];
        }
    })
})

sad.addEventListener('click', () => {
    nextSuccess.style.display = 'none'
    nextLove.style.display = 'none'
    nextSad.style.display = 'block'
    fetchApi('https://hindi-quotes.vercel.app/random/sad');
    successArr.length = 0;
    loveArr.length = 0;
    sad.style.background = 'black';
    sad.style.color = 'white';
    success.style.color = 'black';
    success.style.background = 'inherit';
    love.style.color = 'black'
    love.style.background = 'inherit'
    sad.disabled = true;
    success.disabled = false;
    love.disabled = false;
    previous.addEventListener('click', () => {
        if (sadArr.length > 1) {
            sadArr.pop();
            content.innerHTML = sadArr[sadArr.length - 1];
        }
    })
})


reset.addEventListener('click', () => {
    content.innerHTML = '';
    love.disabled = false;
    sad.disabled = false;
    success.disabled = false;
    success.style.color = 'black'
    success.style.background = 'inherit'
    love.style.color = 'black';
    love.style.background = 'inherit';
    sad.style.color = 'black'
    sad.style.background = 'inherit';
    nextSuccess.style.display = 'none'
    nextLove.style.display = 'none'
    nextSad.style.display = 'none'
    previous.style.display = 'none'
})

nextSuccess.addEventListener('click', () => {
    fetchApi('https://hindi-quotes.vercel.app/random/success');
})

nextLove.addEventListener('click', () => {
    fetchApi('https://hindi-quotes.vercel.app/random/love');
})

nextSad.addEventListener('click', () => {
    fetchApi('https://hindi-quotes.vercel.app/random/sad');
})