<script lang="ts">
  import MakeButton from "../../src/comp/Button/MakeButton.svelte";
  import ProcessText from "../comp/ProcessText/ProcessText.svelte";
  import UrlInput from "../comp/UrlInput/UrlInput.svelte";
</script>

<h1>Do SS-Url now!</h1>
<div>
  <UrlInput />
  <MakeButton>Make URL!</MakeButton>
  <ProcessText />
</div>