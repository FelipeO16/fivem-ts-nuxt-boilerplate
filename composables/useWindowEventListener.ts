export default function (event: string, listener: any) {
  onMounted(() => {
    window.addEventListener(event, listener);
    console.log("aaass");
  });
}
