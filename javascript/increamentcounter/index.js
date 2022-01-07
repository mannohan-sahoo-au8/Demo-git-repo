const counters = document.querySelectorAll(".counter")

counters.forEach((counter) => {
  counter.innerHTML = 0


  const updateCounter = () => {
    const targetCount = +counter.getAttribute("data-target") // + using for convert string into number

    const startCount = +counter.innerHTML

    const increamentCounter = targetCount / 100
    
    if(startCount < targetCount ) {
      counter.innerHTML = `${Math.round(increamentCounter + startCount)}`
     setTimeout(updateCounter,10)
    }else {
      counter.innerHTML = targetCount
    }
  }
  updateCounter()
})