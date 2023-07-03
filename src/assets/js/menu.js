export const initMenu = () => {
    const header = document.querySelector('header')
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    if (window.innerWidth < 768) {
        menu.classList.add('hidden');
    } else {
        menu.classList.add('flex');
        menu.classList.remove('hidden');
    }

    menuToggle.addEventListener('change', () => {
        // @ts-ignore
        if (menuToggle.checked) {
            menu.classList.add('flex');
            menu.classList.remove('hidden');
        } else {
            menu.classList.remove('flex');
            menu.classList.add('hidden');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            menu.classList.add('hidden');
        } else {
            menu.classList.add('flex');
            menu.classList.remove('hidden');
        }
    });

    document.addEventListener("scroll", () => {
        header.classList.add('border-b-2')

        const vscroll = document.documentElement.scrollTop;
        console.log(vscroll)
        if (vscroll == 0) {
            header.classList.remove('border-b-2')
        }
    });
}