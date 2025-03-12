
let projet=document.querySelectorAll('.projet');
let iframe=document.querySelector('iframe');
let intro=document.querySelector('.intro');

projet.forEach(lien=>{
    lien.addEventListener('click', ()=>{
        document.querySelector('iframe').src=lien.getAttribute('data-url');
        iframe.style.display="flex";
        intro.style.display="none"
    })
})

