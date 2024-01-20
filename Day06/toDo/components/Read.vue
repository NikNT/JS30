<template>
  <div>
    <h1>All Tasks</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.task }}
        <Delete :id="task.id" />
        <Update :task="task" />
        <hr />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'
import Delete from './Delete.vue'
import Update from './Update.vue'
interface Task {
  id: number
  task: string
}
@Component({
  components: {
    Delete,
    Update,
  },
})
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
