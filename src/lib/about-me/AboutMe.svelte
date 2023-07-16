<script>
    import Titles from "./Titles.svelte";
    import GetToKnowMe from "./GetToKnowMe.svelte";
    import Skills from "./Skills.svelte";
</script>

<section id="about-me" class="flex w-10/12 mx-auto flex-col">
    <Titles />
    <div id="sections" class="flex w-full flex-col items-center lg:items-start lg:flex-row justify-center gap-4">
        <GetToKnowMe />
        <Skills />
    </div>
  </section>