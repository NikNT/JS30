<template>
  <div>
    <AddTask />
    <DisplayTask />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import AddTask from '~/components/AddTask.vue'
import DisplayTask from '~/components/DisplayTask.vue'

@Component({
  components: {
    AddTask,
    DisplayTask,
  },
})
export default class App extends Vue {}
</script>
