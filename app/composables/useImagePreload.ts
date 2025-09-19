export function useImagePreload(src: string) {
    const loaded = ref<boolean>(false);

    onMounted(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            loaded.value = true;
        };
    });

    return {loaded}
}