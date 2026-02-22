
document.getElementById('main-inter-btn').addEventListener('click', function(){
    showOnly('interview');
    btnColorMain('main-inter-btn');
})


document.getElementById('interview').addEventListener('click', function(event){
      if(event.target.classList.contains('dlt-btn')){
        const parent = event.target.parentNode.parentNode.parentNode.parentNode;
        parent.classList.add('hidden');
        console.log(parent);

        const intTitleCount = document.getElementById('int-title-count');
        let intTitleCountNum = Number(intTitleCount.innerText);
        intTitleCountNum--;
        intTitleCount.innerText = intTitleCountNum;

        const interMainCount = document.getElementById('inter-count');
        let interMainCountNum = Number(interMainCount.innerText);
        interMainCountNum--;
        interMainCount.innerText = interMainCountNum;
      }
      else if(event.target.classList.contains('rej-btn')){
        const parent2 = event.target.parentNode.parentNode.parentNode;
        parent2.classList.add('hidden');
        console.log(parent2);

        const intTitleCount = document.getElementById('int-title-count');
        let intTitleCountNum = Number(intTitleCount.innerText);
        intTitleCountNum--;
        intTitleCount.innerText = intTitleCountNum;

        const interMainCount = document.getElementById('inter-count');
        let interMainCountNum = Number(interMainCount.innerText);
        interMainCountNum--;
        interMainCount.innerText = interMainCountNum;
      }
})