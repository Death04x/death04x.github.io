// const boton1 = document.getElementById('botonsi')
// const boton2 = document.getElementById('botonno')
// const divno = document.getElementById('div-no')

// boton2.addEventListener('click', () => {
//     let {x: btnXPos, y: btnYPos} = boton2.getBoundingClientRect()
//     const yMargin = 65
//     const xMargin = 15
//     const minYPos = -300
//     const maxYPos = window.innerHeight - 320
//     const minXPos = - window.innerWidth + yMargin
//     const maxXPos = window.innerWidth - yMargin
//     const randomXPos = Math.floor(Math.random() * (maxXPos - minXPos)) + minXPos 
//     let randomYPos = Math.floor(Math.random() * (maxYPos - minYPos)) + minYPos  

//     divno.style.marginLeft = randomXPos + 'px'
//     divno.style.marginTop = randomYPos + 'px';
//     btnXPos = boton2.getBoundingClientRect().x
//     //btnYPos = boton2.getBoundingClientRect().y
//     btnYPos = Math.floor(boton2.getBoundingClientRect().bottom) + 10

//     while (btnYPos > window.innerHeight){
//         randomYPos = Math.floor(Math.random() * (maxYPos - minYPos)) + minYPos
//         divno.style.marginTop = randomYPos + 'px'
//         btnYPos = boton2.getBoundingClientRect().y
//     }

    // const exponential = 10
    // const style = window.getComputedStyle(boton1)
    // const [siHeight, siWidth] = style.padding.replace(/px/g, '').trim().split(/ +/).map(x => Number(x))

    // boton1.style.padding = `${siHeight + exponential}px ${siWidth + exponential}px`

//});