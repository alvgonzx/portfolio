<script>
    import { onMount } from "svelte";

    let code = "";
    let codeStatus = false;
    let codeLoading = false;

    const handleSubmit1 = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        try {
            codeLoading = true;
            const response = await fetch('http://localhost:5000/api/jQueryToJS', {
                method: 'POST',
                body: formData,
            }).then(res => res.json());
            code = response.response;
            codeStatus = true;
            codeLoading = false;
        } catch (error) {
            console.error(error);
        }
    }

    let description = "";
    let descriptionStatus = false;
    let descriptionLoading = false;

    const handleSubmit2 = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        try {
            descriptionLoading = true;
            const response = await fetch('http://localhost:5000/api/productDescription', {
                method: 'POST',
                body: formData,
            }).then(res => res.json());
            description = response.response;
            descriptionStatus = true;
            descriptionLoading = false;
        } catch (error) {
            console.error(error);
        }
    }

    let reviewAnswer = "";
    let reviewAnswerStatus = false;
    let reviewAnswerLoading = false;

    const handleSubmit3 = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        try {
            reviewAnswerLoading = true;
            const response = await fetch('http://localhost:5000/api/reviewAnswer', {
                method: 'POST',
                body: formData,
            }).then(res => res.json());
            reviewAnswer = response.response;
            reviewAnswerStatus = true;
            reviewAnswerLoading = false;
        } catch (error) {
            console.error(error);
        }
    }
</script>

<main class="flex flex-col min-h-screen">
    <h1 class="text-center text-3xl font-bold my-4">alvgonzx's AI Playground</h1>

    <div class="flex-grow flex flex-col justify-center items-center lg:items-stretch lg:flex-row mb-4">
       
        <section class="lg:w-1/3 w-10/12 m-4 lg:my-0 bg-red-400">
            <form id="jQueryToJS" class="flex flex-col" on:submit={handleSubmit1}>
                <h2 class="text-xl font-semibold text-center p-2 pb-0">jQuery to JS</h2>
                <p class="text-md font-regular text-center p-2 pt-0">Convierte código de jQuery a Vanilla JS usando IA</p>
                <textarea name="jQueryToJS" id="jQueryToJS" cols="30" rows="10" class="mx-4 p-2 rounded-md resize-none" placeholder="código jQuery aquí"></textarea>
                <button type="submit" class="m-4 rounded-md p-2 bg-red-600 text-white font-medium hover:bg-red-700 flex flex-row justify-center items-center">
                    Convertir
                    <div role="status" class="ml-2 {codeLoading ? '' : 'hidden'}">
                        <svg aria-hidden="true" class="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span class="sr-only">Cargando...</span>
                    </div>
                </button>
                <pre id="code-playground" class="{codeStatus ? '' : 'hidden'} bg-white whitespace-pre-wrap mx-4 mb-4 rounded-md p-2 text-sm font-light">{code}</pre>
            </form>
        </section>
        <section class="lg:w-1/3 w-10/12 bg-green-400">
            <form id="productDescription" class="flex flex-col" on:submit={handleSubmit2}>
                <h2 class="text-xl font-semibold text-center p-2 pb-0">Descripción de producto</h2>
                <p class="text-md font-regular text-center p-2 pt-0">Haz la descripción de un producto fácilmente usando IA</p>
                <input type="text" name="product" class="mx-4 rounded-md p-2" placeholder="nombre del producto aquí">
                <button type="submit" class="m-4 rounded-md p-2 bg-green-600 text-white font-medium hover:bg-green-700 flex flex-row justify-center items-center">
                    Descripción
                    <div role="status" class="ml-2 {descriptionLoading ? '' : 'hidden'}">
                        <svg aria-hidden="true" class="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </button>
                <textarea readonly name="jQueryToJS" id="jQueryToJS" cols="30" rows="10" class="mx-4 p-2 rounded-md resize-none {descriptionStatus ? '' : 'hidden'}">{description}</textarea>
            </form>
        </section>
        <section class="lg:w-1/3 w-10/12 m-4 lg:my-0 bg-blue-400">
            <form id="reviewAwnser" class="flex flex-col" on:submit={handleSubmit3}>
                <h2 class="text-xl font-semibold text-center p-2 pb-0">Contestador de reseñas</h2>
                <p class="text-md font-regular text-center p-2 pt-0">Contesta una reseña teniendo en cuenta si es positiva o negativa</p>
                <input type="text" name="review" class="mx-4 rounded-md p-2" placeholder="tu reseña aquí">
                <button type="submit" class="m-4 rounded-md p-2 bg-blue-600 text-white font-medium hover:bg-blue-700 flex flex-row justify-center items-center">
                    Contestación
                    <div role="status" class="ml-2 {reviewAnswerLoading ? '' : 'hidden'}">
                        <svg aria-hidden="true" class="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </button>
                <textarea readonly name="reviewAwnser" id="reviewAnswer" cols="30" rows="10" class="mx-4 p-2 rounded-md resize-none {reviewAnswerStatus ? '' : 'hidden'}">{reviewAnswer}</textarea>
            </form>
        </section>
    </div>
</main>
