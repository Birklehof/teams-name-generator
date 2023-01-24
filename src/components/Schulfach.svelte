<script>
  import { onMount } from "svelte";
  import { gradeLevelsWritable, teacherAbbreviationsWritable, subjectsWritable } from "../lib/useRemoteConfig";

  let gradeLevels = [];
  gradeLevelsWritable.subscribe((value) => {
    gradeLevels = value;
  });

  let teacherAbbreviations = [];
  teacherAbbreviationsWritable.subscribe((value) => {
    teacherAbbreviations = value;
  });

  let subjects = [];
  subjectsWritable.subscribe((value) => {
    subjects = value;
  });

	let grade_level = 'Klasse'
	let subject = 'Fach'
	let level = 'bf'
	let teacher = 'Lehrer'
	let year = 'Schuljahr'

  export let name = ''

  function updateName() {
    name = grade_level + ' ' + ((level == 'lf' && (grade_level == 'Q1' ||  grade_level == 'Q2')) ? subject.toUpperCase() : subject) + ' ' + ((grade_level == 'Q1' ||  grade_level == 'Q2') ? level.toUpperCase() + ' ' : '') + teacher + ' ' + year
  }

  function schoolYear() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    if (month < 8) {
      return (year - 1).toString().substr(2, 2) + '/' + year.toString().substr(2, 2)
    } else {
      return year.toString().substr(2, 2) + '/' + (year + 1).toString().substr(2, 2)
    }
  }

  onMount(async () => {
    year = schoolYear()
    updateName()
	});
</script>

<select class="select select-bordered w-full max-w-xs" bind:value={grade_level} on:change={updateName}>
  <option value="Klasse">Klasse</option>
  {#each gradeLevels as option}
    <option value={option}>{option}</option>
  {/each}
</select>

<select class="select select-bordered w-full max-w-xs" bind:value={subject} on:change={updateName}>
  <option value="Fach">Fach</option>
  {#each subjects as option}
    <option value={option.abbreviation}>{option.name}</option>
  {/each}
</select>

<select class="select select-bordered w-full max-w-xs" bind:value={level} on:change={updateName} disabled={grade_level != 'Q1' &&  grade_level != 'Q2'}>
	<option value="bf">Basisfach</option>
	<option value="lf">Leistungsfach</option>
</select>

<select class="select select-bordered w-full max-w-xs" bind:value={teacher} on:change={updateName}>
  <option value="Lehrer">Lehrer</option>
  {#each teacherAbbreviations as option}
    <option value={option}>{option}</option>
  {/each}
</select>