function getData() {
    console.log('Text Box written in!')
}

function debounce(callback, delay) {
    let timer
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            let heading = document.getElementById('txt');
            heading.textContent = "Hello, User!";
            callback();
        }, delay)
    }
}

const betterFunction = debounce(getData, 1000)