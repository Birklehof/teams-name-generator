<script>
  import { onMount } from "svelte";
  import { teacherAbbreviationsWritable } from "../lib/useRemoteConfig";

  let teacherAbbreviations = [];
  teacherAbbreviationsWritable.subscribe((value) => {
    // sort value ignore case
    teacherAbbreviations =  value.sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
  });

	let title = 'Name'
	let teacher = 'Lehrer'

  export let name = ''

  function updateName() {
    name = 'AG ' + title.trim() + ' ' + teacher
  }

  onMount(async () => {
		updateName()
	});
</script>

<input type="text" class="input input-bordered w-full max-w-xs" bind:value={title} on:input={updateName}/>

<select class="select select-bordered w-full max-w-xs" bind:value={teacher} on:change={updateName}>
  <option value="Lehrer">Lehrer</option>
  <option value="">Kein Lehrer</option>
  {#each teacherAbbreviations as option}
    <option value={option}>{option}</option>
  {/each}
</select>