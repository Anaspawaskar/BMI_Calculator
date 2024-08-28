const form = document.querySelector('form')


form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height= parseInt(document.querySelector('.height').value);
  const weight= parseInt(document.querySelector('.weight').value);
  const result= document.querySelector('.result');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `please provide a valid height ${height}`
    
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML =`please provide a valid weight ${weight}`

  }else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    const bmitotal = bmi

    if (bmitotal <= 18.6) {
      result.innerHTML = `you comes in under weight range : ${bmitotal}`
      
    }
    if (bmitotal >= 18.6 && bmitotal <= 24.9) {
      result.innerHTML = `you comes in Normal Weight Range : ${bmitotal}`
      
    }
    if (bmitotal > 24.9) {
      result.innerHTML = `you comes in Over Weight Range : ${bmitotal}`
      
    }
  }

  
  
})