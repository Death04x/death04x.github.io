const button = document.getElementById("letter-button");
const letter = document.getElementsByClassName("expandible-letter")[0]
const buttonHeight = getComputedStyle(document.documentElement).getPropertyValue('--button-height')

window.onload = () => {


    gsap.to('.expandible-button', {
    keyframes: [
      {scale: 1.2, duration: 0.2},
      {scale: 1, duration: 0.2, ease: "power4.out"},
      {scale: 1.2, duration: 0.2},
      {scale: 1, duration: 0.2, ease: "power4.out"},
      {scale: 1, duration: 0.5}
    ],
    repeat: -1
  });
}

button.addEventListener("click", () => {
    if(letter.offsetHeight == 0){
      gsap.to('.expandible-letter', {
      top: "0%",
      height: "100%",
      duration: 4,
      ease: "power1"
    })

    gsap.to('.expandible-button-div', {
      top: "97%",
      duration: 4,
      ease: "power1"
    })

}else{
      gsap.to('.expandible-letter', {
      top: "35%",
      height: 0,
      duration: 2,
      overwrite: true
    })

    gsap.to('.expandible-button-div', {
      top: "32%", 
      duration: 2,
      overwrite: true
    })
  }
})