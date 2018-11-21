(function scope() {
    const E360 = new Function();
    window.E360 = E360;

    const nav_node = document.getElementById('nav');
    const nav_icon = document.getElementById('nav_icon');
    // const nav_items = document.querySelectorAll('nav > a.nav-item');

    nav_icon.onclick = function click() {
        nav_node.classList.toggle('collapsed')
        nav_icon.classList.toggle('open')
        // for (let i = nav_items.length - 1; i >=0; i--) {
        //     nav_items[i].classList.toggle('')
        // }
    }

    const service_card_links = document.querySelectorAll('.services-card a.learn-more');
    for (let i = 0; i < service_card_links.length; i++) {
        service_card_links[i].onclick = handle_service_card_click;
    }
    function handle_service_card_click(e) {
        const card_node = this.parentNode;
        const excerpt = card_node.querySelector('p');
        const content_node = card_node.querySelectorAll('div.hidden');
        E360.launch_modal(content_node[0].innerHTML);
    }
}());
