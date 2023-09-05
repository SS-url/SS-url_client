<script lang="ts">
  import MakeButton from "../../src/comp/Button/MakeButton.svelte";
  import { layout, layoutContainer } from "../comp/Extra/style.css";
  import ProcessText from "../comp/ProcessText/ProcessText.svelte";
  import UrlInput from "../comp/UrlInput/UrlInput.svelte";
</script>

<div class={layout}>
  <h1>SS-url it, now!</h1>
  <div class={layoutContainer}>
    <ProcessText />
    <UrlInput />
    <MakeButton>SS-Url</MakeButton>
  </div>
</div>
