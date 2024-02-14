gsap.registerPlugin(ScrollTrigger)

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


const image = document.getElementsByClassName('image')[0]
const text = document.getElementById('text1')
const staggerText = document.getElementById('text2')

staggerText.innerHTML = `<p><span>${staggerText.innerHTML.split("").join("</span><span>")}</span></p`

const texts = gsap.timeline()

let proxy = {rotation: 0}
let rotSetter = gsap.quickSetter(".rotating-div", "rotation", "deg")
let clamp = gsap.utils.clamp(-40, 40);

ScrollTrigger.create({
  onUpdate: (self) => {
    let rotation = Math.round(clamp(self.getVelocity() / -200));

    if (Math.abs(rotation) > Math.abs(proxy.rotation)) {
      proxy.rotation = Math.floor(rotation);
      gsap.to(proxy, {
        rotation: -(rotation / 3), 
        duration: 1, 
        ease: "power2.out", 
        overwrite: true,
        onUpdate: () => {
          rotSetter(proxy.rotation)
      },
      onComplete: () => {
        gsap.to(proxy, {
        rotation: -(-(rotation / 8)), 
        duration: 0.8, 
        ease: "power1.inOut", 
        overwrite: true,
        onUpdate: () => {
          rotSetter(proxy.rotation)
        },
        onComplete: () => {
          gsap.to(proxy, {
          rotation: 0, 
          duration: 1.1, 
          ease: "back.out", 
          overwrite: true,
          onUpdate: () => {
            rotSetter(proxy.rotation)
        }   
        })
      }})
    }});
    }
  }
});


texts.from("#text1", {
  scrollTrigger: {
    trigger: "#text1",
    start: "100 90%",
    end: "+=150 90%",
    scrub: 1,
    toggleActions: "play reverse play none"
  }, 
  x: - text.offsetWidth,
  duration: 2,
  autoAlpha: 0
}).from("#text1", {
  scrollTrigger: {
    trigger: "#text1",
    start: "10 10%",
    end: "+=150 10%",
    scrub: 1,
    toggleActions: "play none reverse none"
  }, 
  x: 0,
  duration: 2,
  autoAlpha: 1
}).from("#text1", {scrollTrigger: ".trigger", autoAlpha: 0})

.from("#text2 span", {
  autoAlpha: 0,
  stagger: 0.1,
  y: 10,
  scrollTrigger: {
    trigger: "#text2",
    start: "100 85%",
    end: "+=150 85%",
    scrub: 1,
    toggleActions: "play reverse play none"
  }
})
.from("#text2 span", {
  autoAlpha: 1,
  stagger: {
    each: 0.1,
    from: "end"
  },
  scrollTrigger: {
    trigger: "#text2",
    start: "-50 20%",
    end: "+=150 20%",
    scrub: 1,
    toggleActions: "play reverse reverse none"
  }
})
.from("#text2 span", {scrollTrigger: ".trigger", autoAlpha: 0})


async function wait(ms){
  return await new Promise(res => {
    setTimeout(res, ms)
  })
}

const slider = document.getElementById("slider");
const [pointer1, pointer2] = document.getElementsByClassName("pointer")
let last = 1
let value
let onIter = false
let onReverseIter = false
slider.addEventListener("input", async function() {
  gsap.to(pointer2, {
    opacity: 0,
    duration: 0.5
  })
  value = slider.value;
  if(value > last){ //Pasar noteits, avanzar
    if(onIter) return;
    for(;last<value; last++){
      if(onReverseIter) break;
      onIter = true
      gsap.to(`.noteit${last}`, {
        x: "-100%",
        duration: 0.3
      })
      await wait(50)
    }
    onIter = false
  }else if(value < last){ //retroceder
    if(onReverseIter) return;
    for(;last>value;){
      if(onIter) break;
      onReverseIter = true
      gsap.to(`.noteit${--last}`, {
        x: 0,
        duration: 0.3
      })
      await wait(100)
    }
    onReverseIter = false    
  }

});


const button = document.getElementById("letter-button");
const letter = document.getElementsByClassName("expandible-letter")[0]
button.addEventListener("click", () => {
  gsap.to(pointer1, {
    opacity: 0,
    duration: 0.5
  })
    if(letter.offsetHeight == 0){
      gsap.to('.expandible-letter', {
      height: "95%",
      duration: 2,
      overwrite: true
    })

    gsap.to('.expandible-button-div', {
      top: "90%",
      duration: 2,
      overwrite: true
    })

}else{
      gsap.to('.expandible-letter', {
      height: 0,
      duration: 1,
      overwrite: true
    })

    gsap.to('.expandible-button-div', {
      top: "-5%",
      duration: 1,
      overwrite: true
    })
  }
})