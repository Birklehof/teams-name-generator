<script>
  import { copy } from "svelte-copy";
  import Schulfach from "./components/Schulfach.svelte";
  import AG from "./components/AG.svelte";
  import IG from "./components/IG.svelte";
  import { onMount } from "svelte/internal";
  import { app } from "./lib/firebase";
  import {
    getRemoteConfig,
    getString,
    fetchAndActivate,
  } from "firebase/remote-config";
  import {
    classesWritable,
    teacherAbbreviationsWritable,
    subjectsWritable,
  } from "./lib/useRemoteConfig";

  let possibleTypes = ["Schulfach", "AG", "IG"];

  let copied = false;

  let type = "schulfach";
  let schulfach_name = "";
  let ag_name = "";
  let ig_name = "";

  $: type, (copied = false);
  $: schulfach_name, (copied = false);
  $: ag_name, (copied = false);
  $: ig_name, (copied = false);

  onMount(async () => {
    const remoteConfig = getRemoteConfig(app);
    copied = false;

    if (typeof window !== "undefined") {
      remoteConfig.settings.minimumFetchIntervalMillis = 600000;

      fetchAndActivate(remoteConfig)
        .then(() => {
          const classesData = getString(remoteConfig, "classes");
          const teacherAbbreviationsData = getString(
            remoteConfig,
            "teacherAbbreviations",
          );
          const subjectsData = getString(remoteConfig, "subjects");

          if (classesData) {
            classesWritable.set(JSON.parse(classesData));
          }
          if (teacherAbbreviationsData) {
            teacherAbbreviationsWritable.set(
              JSON.parse(teacherAbbreviationsData),
            );
          }
          if (subjectsData) {
            subjectsWritable.set(JSON.parse(subjectsData));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content w-full">
    <div class="text-center w-2/3 hidden md:block">
      <h1 class="text-5xl font-bold min-w-sm">
        {type == "schulfach"
          ? schulfach_name
          : type == "ag"
            ? ag_name
            : type == "ig"
              ? ig_name
              : "Bitte einen Typen auswählen"}
      </h1>
    </div>
    <div class="w-full max-w-sm md:w-1/3">
      <div class="tabs tabs-boxed mb-5">
        {#each possibleTypes as possibleType}
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a
            href="#"
            class={type == possibleType.toLocaleLowerCase()
              ? "tab tab-active"
              : "tab"}
            on:click={() => {
              type = possibleType.toLocaleLowerCase();
            }}><b>{possibleType}</b></a
          >
        {/each}
      </div>
      <div class="min-h-[336px]">
        <div class="card max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            {#if type == "schulfach"}
              <Schulfach bind:name={schulfach_name} />
            {:else if type == "ag"}
              <AG bind:name={ag_name} />
            {:else if type == "ig"}
              <IG bind:name={ig_name} />
            {/if}
            <button
              class="btn + {!copied ? 'btn-primary' : 'btn-success'}"
              use:copy={type == "schulfach"
                ? schulfach_name
                : type == "ag"
                  ? ag_name
                  : type == "ig"
                    ? ig_name
                    : ""}
              on:svelte-copy={() => {
                copied = true;
              }}
            >
              {!copied ? "Kopieren" : "Kopiert"}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
