document.getElementById('historyBtn').addEventListener('click',function(){

    const mainId = document.getElementById('mainId');
    const hisId = document.getElementById('historyBar');
    
    mainId.classList.add('hidden')
    hisId.classList.remove('hidden')

    //toggle function in histroy Button
    const donBtn = document.getElementById('donationBtn');

    this.classList.add('bg-[#B4F461]')
    donBtn.classList.remove('bg-[#B4F461]')
    donBtn.classList.add('border-2')


})
document.getElementById('donationBtn').addEventListener('click',function(){

    const mainId = document.getElementById('mainId');
    const hisId = document.getElementById('historyBar');

    mainId.classList.remove('hidden')
    hisId.classList.add('hidden')


    //toggle function in donation Button

    

    const hisBtn = document.getElementById('historyBtn');

  
    this.classList.add('bg-[#B4F461]')
    hisBtn.classList.remove('bg-[#B4F461]')
    hisBtn.classList.add('border-2')

})

