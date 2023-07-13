<script lang="ts">
  import MakeButton from "src/comp/Button/MakeButton.svelte";
	let onclick = () => console.log("clicked!");
</script>

<MakeButton on:click={onclick}>Make URL!</MakeButton>