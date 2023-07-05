<script>
    export let file, name, description;
</script>

<article class="xl:w-1/4 w-full border-[3px] rounded-md text-center p-8">
    <img src="/{file}.png" alt="{file}">
    <h4 id="title" class="pt-4 font-medium text-[18px]">{name}</h4>
    <p class="mb-4">{description}</p>
    <a href="#" class="border-[3.5px] leading-none py-2 px-4 font-medium rounded-full border-[#3820CA] hover:bg-[#3820CA] hover:text-white transition-all duration-250 ease-in-out">Project details</a>
</article>