let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    menu.classList.remove('active');
}

// class MyHeader extends HTMLElement
// {
//     connectedCallback()
//     {
//         this.innerHTML = `
//         <a href="index.html" >Home</a>
//         <a href="portfolio.html">Portfolio</a>        
//         <a href="contactus.html">Contact us</a>
//         `
//     }
// }
// customElements.define('my-header',MyHeader)

// class MyFooter extends HTMLElement
// {
//     connectedCallback()
//     {
//         this.innerHTML = `
//         <p style="color:gray">copyright@pranvicomputech.com</p>
//         <p>Address Yeola</p>        
//         `
//     }
// }
// customElements.define('my-footer',MyFooter)