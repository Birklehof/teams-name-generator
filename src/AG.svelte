<script>
  import { onMount } from "svelte";

  export let teacherOptions = []

	let title = 'Name'
	let teacher = ''
	let year = '22/23'

  export let name = ''

  function updateName() {
    name = 'AG ' + title + ' ' + teacher + ' ' + year
  }

  onMount(async () => {
		updateName()
	});
</script>

<input type="text" class="input input-bordered w-full max-w-xs" bind:value={title} on:input={updateName}/>

<select class="select select-bordered w-full max-w-xs" bind:value={teacher} on:change={updateName}>
  <option value="">Kein Lehrer</option>
  {#each teacherOptions as option}
    <option value={option}>{option}</option>
  {/each}
</select>