# death04x.github.io

:root {
  --first-section: 50%;
  --sec-height: 40%;
  --sec-margin: 30%;
}

body {
    background-color: #FFDDF5;
    padding: 0;
    margin: 0;
    height: 100%;
}

.wrapper{
    position: absulute;
    display: flex;
    justify-content: center;
    height: 3000px;
    width: 100%;
}

.section{
    display: flex;
    align-items: center;
    position: absolute;
    background-color: blue;
    width: 100%;
    height: var(--sec-height);
}

.content{
    position: absolute;
    background-color: black;
    height: 100%;
    width: 90%;
}

.section:nth-child(2n+1){
    flex-direction: row-reverse;
}

.image{
    position: absolute;
    background-color: white;
    height: 100%; 
    width: 50%;
}

.text{
    margin-top: 0;
    left: 0;
    position: absolute;
    color: green;
    z-index: 5;
    text-align: left;
    justify-content: center;
    font-size: calc(0.5rem + 2vw);
    font-family: "Work Sans", sans-serif;
}

#sec1 {
    top: var(--first-section); 
}

#sec2 {
    top: calc(var(--first-section) + var(--sec-height) + var(--sec-margin));
}

#sec3 {
    top: calc(var(--first-section) + (var(--sec-height) + var(--sec-margin)) * 2);
}

#sec4 {
    top: calc(var(--first-section) + (var(--sec-height) + var(--sec-margin)) * 3);
}

@media screen and (max-width: 650px) {
    :root{
        --first-section: 40%;
        --sec-height: 20%;
        --sec-margin: 30%;
    }
}