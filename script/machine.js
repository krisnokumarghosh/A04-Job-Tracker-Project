
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
    const parentInner = getParent.innerHTML;
    
    
    console.log(change)
    
   
    const interContainer = document.getElementById('interview');

    const newDiv = document.createElement('div');
    newDiv.innerHTML = `${parentInner}`
    

    interContainer.appendChild(newDiv);

    const interCount = document.getElementById('inter-count');
    let interCountNum = Number(interCount.innerText);
    interCountNum++;
    interCount.innerText = interCountNum;

getParent.querySelector('.statuss').classList.remove('statuss');
   

    
}