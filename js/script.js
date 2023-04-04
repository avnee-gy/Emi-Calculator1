const loanAmount = document.getElementById("amt");
const loanTenure = document.getElementById("time");
const loanRate = document.getElementById("rate");

const out1 = document.querySelector(".val1");
const out2 = document.querySelector(".val2");


loanTenure.oninput = (()=>{
    let value = loanTenure.value;
    out2.textContent = value;
    out2.style.left = (value/2) + "%";
    out2.classList.add("show");
    });
    loanTenure.onblur = (()=>{
        out2.classList.remove("show");
    });

    loanAmount.oninput = (()=>{
    let value = loanAmount.value;
    out1.textContent = value;
    out1.style.left = (value/2) + "%";
    out1.classList.add("show");
    });
    loanAmount.onblur = (()=>{
        out1.classList.remove("show");
    });




const loanEmi = document.querySelector(".emi");
// const loanPrinciple = document.querySelector(".loan_principle");
const loanTotal = document.querySelector(".pay");
const loanInterest = document.querySelector(".inter");
console.log("Developed By Avnee Goyal :)")
    
    
    
const submitBtn = document.querySelector("#calc");
    
    submitBtn.addEventListener("click", function(){
    
        amount = loanAmount.value;
        tenure = (loanTenure.value); // 1Year = 12 months
        let time = tenure/12;
        rate = (loanRate.value); // loan rate per year / 100 = loan percentage
        total= amount*(Math.pow(1+(rate/100),time)) //compound interest formula 
        emi = amount*rate* (1+rate)/((1+rate)*tenure -1);
        // total = emi * tenure; // total amount to be paid including interest
        interest = total - amount // interest = total amount - principle amount
       
    
        loanEmi.innerHTML = Math.floor(emi);
        // loanPrinciple.innerHTML = Math.floor(amount);
        loanTotal.innerHTML = Math.floor(total);
        loanInterest.innerHTML = Math.floor(interest);
    
    
        
    
        
      
        
    
    });