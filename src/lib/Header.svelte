<script>
    import { onMount } from "svelte";
    import { initMenu } from "/public/menu";

    onMount(() => {
        document.querySelector("header").classList.remove("border-b-2")
        initMenu();
    });

</script>

<header class="flex flex-wrap items-center justify-between px-[4%] mx-auto py-2 sticky top-0 z-10 bg-white border-b-2">
    <a href="https://alvgonzx.github.io" class="text-2xl font-semibold flex items-center">alvgonzx</a>
    <input type="checkbox" id="menu-toggle" class="hidden">
    <label for="menu-toggle" class="text-2xl cursor-pointer md:hidden">&#9776;</label>
    <nav class="flex flex-col md:flex-row gap-8 items-center w-full md:w-auto" id="menu">
        <a href="#about-me">About me</a>
        <a href="#projects">Projects</a>
        <!--<a href="#blog">Blog</a>-->
    </nav>
</header>