<template>
  <div>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.task }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'
interface Task {
  id: number
  task: string
}
@Component
export default class Read extends Vue {
  tasks: Task[] = []
  async getTasks() {
    try {
      const response = await axios.get('http://localhost:8000/task/')
      this.tasks = response.data
    } catch (err) {
      console.error(err)
    }
  }
  mounted() {
    this.getTasks()
  }
}
</script>
