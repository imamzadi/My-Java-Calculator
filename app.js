function press(e){
   document.write(e)
}
function press(e){
      document.getElementById('inp').value += e
}
function eq(){
      let a = document.getElementById('inp')
      a.value = eval(a.value)
}
function clr(){
      document.getElementById('inp').value = " "
}
function AC(){
   let a=  document.getElementById('inp')
   a.value = a.value.slice(0,-1)
}

   