

function doIt(){
    console.log('hi');
};

function showCost(){
    let costArr = document.querySelectorAll('.carCost');
    for(let i = 0; i < costArr.length; i++){
        costArr[i].classList.remove('hidden');
    }
};


function evtListeners(){
    document.querySelector('.submitInfo').addEventListener('click', ()=> doIt());
    document.querySelector('.carCostButton').addEventListener('click', ()=> showCost());
}


(function initApp(){
    evtListeners();
})()