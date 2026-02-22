
document.getElementById('main-rejec-btn').addEventListener('click', function(){
    showOnly('rejected');
    btnColorMain('main-rejec-btn');
})


document.getElementById('rejected').addEventListener('click' , function(event){
     if(event.target.classList.contains('dlt-btn')){
        const parent = event.target.parentNode.parentNode.parentNode.parentNode;
        parent.classList.add('hidden');
        console.log(parent);

        const rejectMainCount = document.getElementById('reject-count');
        let rejectMainCountNum = Number(rejectMainCount.innerText);
        rejectMainCountNum--;
        

        const rejectTitleCount = document.getElementById('rej-title-count');
        let rejectTitleCountNum = Number(rejectTitleCount.innerText);
        rejectTitleCountNum--;
        
        if(rejectMainCountNum < 0 && rejectMainCountNum < 0){
            return;
        }
        else{
            rejectMainCount.innerText = rejectMainCountNum , rejectTitleCount.innerText = rejectTitleCountNum
        }
     }
     else if(event.target.classList.contains('inter-btn')){
        const parent2 = event.target.parentNode.parentNode.parentNode;
        const change = parent2.querySelector('.again-stat');
        change.innerText = 'INTERVIEW'
     change.classList.remove('text-red-500');
    change.classList.add('text-green-500');
        parent2.classList.add('hidden');
        const parentTwoInner = parent2.innerHTML;

        const interContainer = document.getElementById('interview');

    const newDiv = document.createElement('div');
    newDiv.innerHTML = `${parentTwoInner}`
    

    interContainer.appendChild(newDiv);

     const interCount = document.getElementById('inter-count');
    let interCountNum = Number(interCount.innerText);
    interCountNum++;
    interCount.innerText = interCountNum;

    const intTitle = document.getElementById('int-title-count');
    let intTitleNum = Number(intTitle.innerText);
    intTitleNum++;
    intTitle.innerText = intTitleNum;
        
        console.log(parent2);

         const rejectMainCount = document.getElementById('reject-count');
        let rejectMainCountNum = Number(rejectMainCount.innerText);
        rejectMainCountNum--;
       

        const rejectTitleCount = document.getElementById('rej-title-count');
        let rejectTitleCountNum = Number(rejectTitleCount.innerText);
        rejectTitleCountNum--;
       
         if(rejectMainCountNum < 0 && rejectMainCountNum < 0){
            return;
        }
        else{
             rejectMainCount.innerText = rejectMainCountNum ,  rejectTitleCount.innerText = rejectTitleCountNum
        }
     }
})