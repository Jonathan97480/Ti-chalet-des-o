const humberger=document.getElementById("humber");
const menuMobile=document.getElementById('mobile-menu')

humberger.addEventListener('click', () => {

    menuMobile.className==="menu-item"? menuMobile.className="menu-item menu-active":menuMobile.className="menu-item"

})

/**
 * 
 * @param {HTMLLinkElement} element 
 */
function viewPic(element) {


    let view=document.getElementById('view-id');

    console.log(element)
    view.setAttribute('style', `background-image: url("${element.getAttribute('data-url')}");`)

}
