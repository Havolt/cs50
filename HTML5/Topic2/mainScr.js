

function doIt(){
    let resultMake = document.querySelector('.make').value;
    let resultModel = document.querySelector('.model').value;

    sessionStorage.make = resultMake;
    sessionStorage.model = resultModel;
};

function showIt(){
    console.log(sessionStorage.make);

    document.querySelector('.makeOutp').innerHTML = sessionStorage.make;
    document.querySelector('.modelOutp').innerHTML = sessionStorage.model;

}

function showCost(){
    let costArr = document.querySelectorAll('.carCost');
    for(let i = 0; i < costArr.length; i++){
        costArr[i].classList.remove('hidden');
    }
};


function evtListeners(){
    document.querySelector('.submitInfo').addEventListener('click', ()=> doIt());
    document.querySelector('.carCostButton').addEventListener('click', ()=> showCost());
    document.querySelector('.confirmInfo').addEventListener('click', ()=> showIt());
}


(function initApp(){
    evtListeners();
})()