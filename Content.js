const generateHTML = (pageName) => {
    return ` <div class="Wrapper">
                <div class="memeWrapper">
                    <img src="https://i.imgflip.com/3rm5rv.png?a469488" alt="PakiMeme">
                </div>
                <div class="textWrapper">
                    <h1 class="headingUno">Why are you here?</h1>
                    <p class="contentUno">Do something more productive than fooling around on ${pageName}</p>
                </div>
                <div class="contentDos">
                    <h1 class="contentforDos">You should be PUNISHED for being here. Here's a <strike class="strikeB">(B)</strike>DAD Joke for you:</h1>
                    <p class="jokeP"></p>
                </div>
            </div> `;
};

const generateCSS = () => {
    return ` <style>
    body {
        background-color: #000014;
        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-align: center;
    }

    .Wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .memeWrapper {
        margin-top: 3.2rem;
        width: 35%;
        height: 35%;
        border-radius: 2.1rem;
        border: 0.1rem white solid;
        overflow: hidden;
    }

    .memeWrapper img {
        scale: 1.1;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .textWrapper {
        margin-top: 0.7rem;
    }

    .headingUno {
        font-size: 1.8rem;
    }

    .contentUno {
        margin-top: -1.1rem;
        font-size: 1.4rem;
    }

    .contentDos {
        margin-top: 1rem;
        font-size: 1.5rem;
    }

    .contentforDos {
        font-size: 1.5rem;
        font-weight: 500;
    }

    .jokeP {
        color: beige;
        margin-top: -0.4rem;
        font-size: 1.4rem;
        font-weight: 600;
        font-style: italic;
    }

    </style> `;
};


fetch ('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        jokeText = jokeData.attachments[0].text;
        document.querySelector('.jokeP').innerHTML = jokeText;
    });


switch (window.location.hostname) {
    case 'www.facebook.com':
        document.body.innerHTML = generateHTML('Facebook');
        document.head.innerHTML = generateCSS();
        break;
    
    case 'www.instagram.com':
        document.body.innerHTML = generateHTML('Instagram');
        document.head.innerHTML = generateCSS();
        break;

    case 'www.twitter.com':
        document.body.innerHTML = generateHTML('Twitter');
        document.head.innerHTML = generateCSS();
        break;
};