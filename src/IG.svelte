<script>
  import { onMount } from 'svelte';

	let title = 'Name'
	let year = '22/23'

  export let name = 'IG ' + title + ' ' + year

  function updateName() {
    name = 'IG ' + title + ' ' + year
  }

  onMount(async () => {
		updateName()
	});
</script>

<input type="text" class="input input-bordered w-full max-w-xs" bind:value={title} on:input={updateName}/>