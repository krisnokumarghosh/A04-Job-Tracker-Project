
function showOnly (id){
    const allSection = document.getElementById('all');
    const interSection = document.getElementById('interview');
    const rejecSection = document.getElementById('rejected');


    allSection.classList.add('hidden');
    interSection.classList.add('hidden');
    rejecSection.classList.add('hidden');


    const selected = document.getElementById(id);
    selected.classList.remove('hidden')
}

function availableJobs(id){
    const allDiv = document.getElementById('all-jb-li');
    const intDiv = document.getElementById('int-jb-li');
    const rejDiv = document.getElementById('rej-jb-li');

    allDiv.classList.add('hidden');
    intDiv.classList.add('hidden');
    rejDiv.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}

function btnColorMain (id){
    const allBtn = document.getElementById('all-btn');
    const mainInterBtn = document.getElementById('main-inter-btn');
    const mainRejecBtn = document.getElementById('main-rejec-btn');


    allBtn.classList.remove('bg-[#3B82F6]' , 'text-white');
    mainInterBtn.classList.remove('bg-[#3B82F6]' , 'text-white');
    mainRejecBtn.classList.remove('bg-[#3B82F6]' , 'text-white');

    const onlyAdd = document.getElementById(id);
    onlyAdd.classList.add('bg-[#3B82F6]' , 'text-white');
    
}


function interBtn (id){
    const getBtn = document.getElementById(id);
    const getParent = getBtn.parentNode.parentNode.parentNode;
    const change = getParent.querySelector('.statuss');
    change.innerText = 'INTERVIEW'
     change.classList.remove('text-[#002C5C]');
     change.classList.remove('text-red-500');
    change.classList.add('text-green-500');
    getParent.classList.remove('border-l-3' , 'border-red-500' ,'rounded-lg');
    getParent.classList.add('border-l-3' , 'border-green-500' ,'rounded-lg');
    const parentInner = getParent.innerHTML;
    
    const interContainer = document.getElementById('interview');

    const newDiv = document.createElement('div');
    newDiv.innerHTML = `${parentInner}`
    

    interContainer.appendChild(newDiv);

    const interCount = document.getElementById('inter-count');
    let interCountNum = Number(interCount.innerText);
    interCountNum++;
    interCount.innerText = interCountNum;

    const intTitle = document.getElementById('int-title-count');
    let intTitleNum = Number(intTitle.innerText);
    intTitleNum++;
    intTitle.innerText = intTitleNum;

   const intNoJob = document.getElementById('int-no-job');
   intNoJob.classList.add('hidden');
  
}


function rejectBtn(id){
    const getBtn = document.getElementById(id);
    const getParent = getBtn.parentNode.parentNode.parentNode;
    const change = getParent.querySelector('.statuss2');
    change.innerText = 'REJECTED'
    change.classList.remove('text-[#002C5C]');
    change.classList.add('text-red-500');
    getParent.classList.add('border-l-3' , 'border-red-500' ,'rounded-lg');
    const parentInner = getParent.innerHTML;
 
    const rejectContainer = document.getElementById('rejected');

    const newDiv = document.createElement('div');
    newDiv.innerHTML = `${parentInner}`
       

    rejectContainer.appendChild(newDiv);

    const rejectCount = document.getElementById('reject-count');
    let rejectCountNum = Number(rejectCount.innerText);
    rejectCountNum++;
    rejectCount.innerText = rejectCountNum;


    const rejTitle = document.getElementById('rej-title-count');
    let rejTitleNum = Number(rejTitle.innerText);
    rejTitleNum++;
    rejTitle.innerText = rejTitleNum;


    const rejNoJob = document.getElementById('rej-no-job');
   rejNoJob.classList.add('hidden');
}


document.getElementById('all').addEventListener('click' , function(event){
    if(event.target.classList.contains('dlt-btn')){
        const parent = event.target.parentNode.parentNode.parentNode.parentNode;
        parent.classList.add('hidden');
        console.log(parent);

        const allCount = document.getElementById('all-count');
        let allCountNum = Number(allCount.innerText);
        allCountNum--;
        allCount.innerText = allCountNum;

        const allTitleCount = document.getElementById('all-title-count');
        let allTitleCountNum = Number(allTitleCount.innerText);
        allTitleCountNum--;
        allTitleCount.innerText = allTitleCountNum;
    }
})


