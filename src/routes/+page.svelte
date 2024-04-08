<script>
    export let data
</script>

<ul>
 {#each data.myData as item}
 <li>{item.name}</li>
{/each}
</ul>