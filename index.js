const boton1 = document.getElementById('botonsi')
const boton2 = document.getElementById('botonno')
const divno = document.getElementById('div-no')

boton2.addEventListener('click', () => {
    let {x: btnXPos, y: btnYPos} = boton2.getBoundingClientRect()
    const yMargin = 65
    const xMargin = 15
    const minYPos = -300
    const maxYPos = window.innerHeight - 300
    const minXPos = - window.innerWidth + yMargin
    const maxXPos = window.innerWidth - yMargin
    const randomXPos = Math.floor(Math.random() * (maxXPos - minXPos)) + minXPos 
    let randomYPos = Math.floor(Math.random() * (maxYPos - minYPos)) + minYPos  
    console.log("RANDOMS", randomXPos, randomYPos)
    console.log("BEFORE", btnXPos, btnYPos)


    divno.style.marginLeft = randomXPos + 'px'
    divno.style.marginTop = randomYPos + 'px';
    btnXPos = boton2.getBoundingClientRect().x
    btnYPos = boton2.getBoundingClientRect().y
    console.log("AFTER", btnXPos, btnYPos)

    while (btnYPos > window.innerHeight){
        randomYPos = Math.floor(Math.random() * (maxYPos - minYPos)) + minYPos
        divno.style.marginTop = randomYPos + 'px'
        console.log("UPD BEFORE", btnYPos);
        btnYPos = boton2.getBoundingClientRect().y
        console.log("UPDATED: ", btnYPos)
    }  
});