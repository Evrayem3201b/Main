let btn = document.querySelector('#bars');
let nav = document.querySelector('.nav-container');
let body = document.querySelector('#all-body');
let myName = document.querySelector('.my-name');
let navMain = document.querySelector('#navMain');
let activeBtn = document.querySelector('#bars .active');
let listHeader = document.querySelector('.list-header');
let chevron = document.querySelector('#chevron');
let detailsHeader = document.querySelector('.details-header');
let underChevron = document.querySelector('.under-the-chevron');
let modesSwitch = document.querySelector('.button-desktop');
let modesSwitchDesk = document.querySelector('#check-desk');
let modesSwitchMob = document.querySelector('#check');
let modesSwitchMobButton = document.querySelector('.button');



btn.onclick = function () {
    btn.classList.toggle('active');
    nav.classList.toggle('active');
    navMain.classList.toggle('active');
    listHeader.classList.toggle('active');
    myName.classList.toggle('text');
    body.classList.toggle('active-body');
};

(chevron, detailsHeader).onclick = function chevronFunc() {
    chevron.classList.toggle('rotate');
    underChevron.classList.toggle('appearing');
};

modesSwitchDesk.onclick = function (){
    body.classList.toggle('light');
};

modesSwitchMob.onclick = function (){
    body.classList.toggle('light');
};







/*
function closeNav(){
    document.getElementById('navList').style.width = '52px';
    document.getElementById('navContainer').style.display = 'none';
};

function openNav(){
    document.getElementById('navList').style.width = 'auto';
    document.getElementById('navContainer').style.display = 'block';
};*/


/*
bars.addEventListener("click", function open(){
    document.getElementById('navList').style.width = 'auto';
    document.getElementById('navContainer').style.display = 'block';
});

bars.addEventListener("click", function close(){
    document.getElementById('navList').style.width = '52px';
    document.getElementById('navContainer').style.display = 'none';
});*/