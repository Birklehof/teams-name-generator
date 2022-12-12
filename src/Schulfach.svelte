<script>
  import { onMount } from "svelte";

  export let teacherOptions = []
  export let subjectOptions = []

	let grade_level = 'Klasse'
	let subject = 'Fach'
	let level = 'bf'
	let teacher = 'Lehrer'
	let year = '22/23'

  export let name = ''

  function updateName() {
    name = grade_level + ' ' + ((level == 'lf' && (grade_level == 'Q1' ||  grade_level == 'Q2')) ? subject.toUpperCase() : subject)  + ' ' + ((grade_level == 'Q1' ||  grade_level == 'Q2') ? level.toUpperCase() : '') + ' ' + teacher + ' ' + year
  }

  onMount(async () => {
		updateName()
	});
</script>

<select class="select select-bordered w-full max-w-xs" bind:value={grade_level} on:change={updateName}>
  <option value="Klasse">Klasse</option>
	<option value="5">5</option>
	<option value="6">6</option>
	<option value="7">7</option>
	<option value="8">8</option>
	<option value="9">9</option>
	<option value="10">10</option>
	<option value="Q1">Q1</option>
	<option value="Q2">Q2</option></select
	>

<select class="select select-bordered w-full max-w-xs" bind:value={subject} on:change={updateName}>
  <option value="Fach">Fach</option>
  {#each subjectOptions as option}
    <option value={option.abbreviation}>{option.name}</option>
  {/each}
</select>

<select class="select select-bordered w-full max-w-xs" bind:value={level} on:change={updateName} disabled={grade_level != 'Q1' &&  grade_level != 'Q2'}>
	<option value="bf">Basisfach</option>
	<option value="lf">Leistungsfach</option>
</select>

<select class="select select-bordered w-full max-w-xs" bind:value={teacher} on:change={updateName}>
  <option value="Lehrer">Lehrer</option>
  {#each teacherOptions as option}
    <option value={option}>{option}</option>
  {/each}
</select>