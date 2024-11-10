const fabars = document.querySelector('i')  as HTMLElement
    const navlink = document.querySelector('.nav-link') as HTMLUListElement
    fabars.addEventListener("click",()=>{
      if(navlink.style.display === 'none'){
        navlink.style.display = 'flex'       
      }else{
        navlink.style.display = 'none'              
      }
    })

   const nav1 = document.getElementById("nav1") as HTMLAnchorElement;
   const nav2 = document.getElementById("nav2") as HTMLAnchorElement;
   const nav3 = document.getElementById("nav3") as HTMLAnchorElement;
   const nav4 = document.getElementById("nav4") as HTMLAnchorElement;

   nav1.addEventListener("click", ()=>{
    navlink.style.display = 'none' 
   })
   nav2.addEventListener("click", ()=>{
    navlink.style.display = 'none' 
   })
   nav3.addEventListener("click", ()=>{
    navlink.style.display = 'none' 
   })
   nav4.addEventListener("click", ()=>{
    navlink.style.display = 'none' 
   })
