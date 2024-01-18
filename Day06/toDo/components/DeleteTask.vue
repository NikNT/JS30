<template>
  <button @click="deleteTask">Delete Task</button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class DeleteTask extends Vue {
  @Prop() readonly task!: string
  deleteTask() {
    const myTasks = JSON.parse(localStorage.getItem('myTasks') || '[]')
    const updatedTasks = myTasks.filter((t: string) => t != this.task)
    localStorage.setItem('myTasks', JSON.stringify(updatedTasks))
  }
}
</script>
