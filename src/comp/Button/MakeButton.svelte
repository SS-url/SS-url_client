<script lang="ts">
	import { button } from "./style.css";
	export let onclick = () => console.log("clicked!");
</script>

<button on:click={onclick} class={button}>
	<slot/>
</button>
