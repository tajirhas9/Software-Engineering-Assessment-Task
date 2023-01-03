<template>
    <div>
        <dl v-for="patient in patients" :key="patient.id">
				<dt>{{ patient.name }}</dt>
				<dd>{{ patient.email }}</dd>
                <dd>{{ patient.phone }}</dd>
			</dl>
    </div>
</template>

<script lang="ts">
     import { computed } from 'vue'
     import { useStore } from 'vuex'
    


    const store = useStore()

	let patients = computed(() => store.getters.patients)

   
</script>

<style>

</style>