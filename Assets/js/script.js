document.getElementById('blogLink').addEventListener('click', function(event) {
    event.preventDefault(); 
    var blogList = document.getElementById('blogList');
    blogList.classList.toggle('show'); 
});
// =====scroll btn===

let scrollbtn=document.getElementById("back-top");
window.addEventListener('scroll',function(){
    if(window.scrollY > 600){
        scrollbtn.style.display="block";
        document.getElementById('header-id').style.backgroundColor='#263B5C';
    }
    else{
        scrollbtn.style.display="none";
        document.getElementById('header-id').style.backgroundColor="transparent";


    }
    window.addEventListener('click',function(){
        window.scrollTo({
            top : 0 ,
            left :0 ,
            behavior :"smooth",
        })
    })
})
