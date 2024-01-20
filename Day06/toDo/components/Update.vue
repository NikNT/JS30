<template>
  <div>
    <v-btn @click="openEditModal">Edit</v-btn>
    <div v-if="dialog">
      <v-text-field v-model="updatedTask"></v-text-field>
      <v-btn @click="updateTask">Save</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import axios from 'axios'
interface Task {
  id: number
  task: string
}
@Component
export default class Update extends Vue {
  @Prop() readonly task!: Task
  dialog: boolean = false
  updatedTask: string = this.task.task
  openEditModal() {
    this.dialog = !this.dialog
  }
  async updateTask() {
    try {
      const response = await axios.put(
        `http://localhost:8000/task/${this.task.id}`,
        { task: this.updatedTask }
      )
    } catch (err) {
      console.error(err)
    }
  }
}
</script>
