function mydonatFunction(DonateBtn1,DonateAmout1,TotalDonate,UsesBalance){
    document.getElementById(DonateBtn1).addEventListener('click',function(){
        const amout = document.getElementById(DonateAmout1);
        const totalDonate = document.getElementById(TotalDonate);
        const totalDonAmount = parseFloat(amout.value);
        let useBalance = document.getElementById(UsesBalance);
       
        
        
          
        totalDonate.textContent = totalDonAmount + parseFloat(totalDonate.innerText);
        useBalance.textContent = parseFloat(useBalance.innerText) - totalDonAmount;

      
    
        amout.value =''
    
    
     })
}



    mydonatFunction('donateBtn1','donateAmout1','totalDonate1','usesBalance')
    mydonatFunction('donateBtn2','donateAmout2','totalDonate2' ,'usesBalance')
    mydonatFunction('donateBtn3','donateAmout3','totalDonate3','usesBalance')
    mydonatFunction('donateBtn4','donateAmout4','totalDonate4','usesBalance')





 