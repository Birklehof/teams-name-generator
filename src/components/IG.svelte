<script>
  import { onMount } from "svelte";

  let title = "Name";

  export let name = "";

  function updateName() {
    name = "IG " + title.trim();
  }

  onMount(async () => {
    updateName();
  });
</script>

<input
  type="text"
  class="input input-bordered w-full max-w-xs"
  bind:value={title}
  on:input={updateName}
/>
