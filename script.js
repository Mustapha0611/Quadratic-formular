let submit = document.getElementById('submit')
submit.addEventListener('click', ()=>{
//declaring variables
let root1, root2;
let a = document.getElementById('a').value
let b = document.getElementById('b').value
let c = document.getElementById('c').value
let result = document.getElementById('result')

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
   result.innerHTML = "The Roots of the equation is " + root1 +" and " + root2
}

// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    result.innerHTML = "The Roots of the equation is " + root1 +" and " + root2
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    result.innerHTML = "The Roots of the equation is " + realPart +" + "+ imagPart +"i" +" and " + realPart +" - "+ imagPart +"i"
}
})
