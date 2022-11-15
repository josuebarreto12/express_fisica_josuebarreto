const calcMasa = (masa, g) => {
  if(g == "tierra") {
    return masa * 9.8
  }
  else if(g == "marte") {
    return masa * 3.721
  }
  else {
    return masa * 1.62
  }
}
tierra = document.querySelector("#tierraImg")
marte = document.querySelector("#marteImg")
luna = document.querySelector("#lunaImg")
const showPic = (g) => {
  if(g == "tierra") { 
    tierra.className = "d-inline"
    marte.className = "d-none"
    luna.className = "d-none"
  }
  else if(g == "marte") {
    tierra.className = "d-none"
    marte.className = "d-inline"
    luna.className = "d-none"
  }
  else {
    tierra.className = "d-none"
    marte.className = "d-none"
    luna.className = "d-inline"
  }
}

const masa = document.querySelector("#masa")
const g = document.querySelector("#g")
const btnCalcMasa = document.querySelector("#btnCalcMasa")
btnCalcMasa.addEventListener("click", () => {
  const reg = /[0-9]/
  if(reg.test(masa.value)) {
    document.getElementById("resultado").innerHTML = calcMasa(masa.value, g.value)
    showPic(g.value)
  }
  else {
    alert("la masa es incorrect")
  }
})