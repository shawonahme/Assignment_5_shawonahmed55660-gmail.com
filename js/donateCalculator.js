function mydonatFunction(DonateBtn1,DonateAmout1,TotalDonate,UsesBalance,Places){
    document.getElementById(DonateBtn1).addEventListener('click',function(){
        const amout = document.getElementById(DonateAmout1);
        const totalDonate = document.getElementById(TotalDonate);
        const totalDonAmount =Number(amout.value);
        let useBalance = document.getElementById(UsesBalance);
       
        
        if(totalDonAmount <= 0){
              return  alert("please donate valid amount");
        }
        else if( Number.isNaN(totalDonAmount) ){

            return alert("enter a number amout")
        }
          else{
          

            if(parseFloat(useBalance.innerText) < totalDonAmount){
                    
                return alert("balance is not avable");
                
            }
            useBalance.textContent = parseFloat(useBalance.innerText) - totalDonAmount;
            totalDonate.textContent = parseFloat(totalDonAmount) + parseFloat(totalDonate.innerText);
          
        
            amout.value =''
            showmodal.showModal()

            const histtoryBar = document.getElementById('historyBar');
           const historyBarCon = document.createElement('div');
           historyBarCon.classList.add('my-8','border-[1px]', 'p-4','rounded-lg')
           histtoryBar.appendChild(historyBarCon);
            
          const place = document.getElementById(Places);

          const item1 = document.createElement('p');
          const item2 = document.createElement('p');

          item1.innerHTML =`
          <p class="font-bold py-2">${totalDonAmount} Taka is Donated for ${place.innerText} </p>
          `;
          item2.innerHTML = `${new Date()}`
          historyBarCon.appendChild(item1);
          historyBarCon.appendChild(item2);

        
          }
          

       
    
     })
}



    mydonatFunction('donateBtn1','donateAmout1','totalDonate1','usesBalance','place1')
    mydonatFunction('donateBtn2','donateAmout2','totalDonate2' ,'usesBalance','place2')
    mydonatFunction('donateBtn3','donateAmout3','totalDonate3','usesBalance','place3')
    mydonatFunction('donateBtn4','donateAmout4','totalDonate4','usesBalance','place4')





 