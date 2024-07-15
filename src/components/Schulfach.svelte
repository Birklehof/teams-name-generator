<script>
  import { onMount } from "svelte";
  import {
    classesWritable,
    teacherAbbreviationsWritable,
    subjectsWritable,
  } from "../lib/useRemoteConfig";

  let classes = [];
  classesWritable.subscribe((value) => {
    classes = value;
  });

  let teacherAbbreviations = [];
  teacherAbbreviationsWritable.subscribe((value) => {
    teacherAbbreviations = value.sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
  });

  let subjects = [];
  subjectsWritable.subscribe((value) => {
    subjects = value;
  });

  let _class = "Klasse";
  let subject = "Fach";
  let level = "bf";
  let teacher = "";
  let year = "Schuljahr";

  export let name = "";

  function updateName() {
    name =
      _class +
      " " +
      (level == "lf" && (_class == "Q1" || _class == "Q2")
        ? subject.toUpperCase()
        : subject) +
      " " +
      (_class == "Q1" || _class == "Q2" ? level.toUpperCase() + " " : "") +
      teacher +
      " " +
      year;
  }

  function schoolYear() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    if (month < 8) {
      return (
        (year - 1).toString().substr(2, 2) + "/" + year.toString().substr(2, 2)
      );
    } else {
      return (
        year.toString().substr(2, 2) + "/" + (year + 1).toString().substr(2, 2)
      );
    }
  }

  onMount(async () => {
    year = schoolYear();
    updateName();
  });
</script>

<select
  class="select select-bordered w-full max-w-xs"
  bind:value={_class}
  on:change={updateName}
>
  <option value="Klasse">Klasse</option>
  {#each classes as option}
    <option value={option}>{option}</option>
  {/each}
</select>

<select
  class="select select-bordered w-full max-w-xs"
  bind:value={subject}
  on:change={updateName}
>
  <option value="Fach">Fach</option>
  {#each subjects as option}
    <option value={option.abbreviation}>{option.name}</option>
  {/each}
</select>

<select
  class="select select-bordered w-full max-w-xs"
  bind:value={level}
  on:change={updateName}
  disabled={_class != "Q1" && _class != "Q2"}
>
  <option value="bf">Basisfach</option>
  <option value="lf">Leistungsfach</option>
</select>

<input
  type="text"
  placeholder="Lehrerkürzel"
  class="input input-bordered w-full max-w-xs"
  bind:value={teacher}
  on:input={updateName}
  list="teachers"
/>
<datalist id="teachers">
  {#each teacherAbbreviations as option}
    <option value={option}>
  {/each}
</datalist>
