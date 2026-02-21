
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