<template>
  <div>
    <ul>
      <li v-for="(item, index) in myTasks" :key="index">
        {{ item }}
        <DeleteTask :task="item" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import DeleteTask from './DeleteTask.vue'
@Component({
  components: {
    DeleteTask,
  },
})
export default class DisplayTask extends Vue {
  myTasks: string[] = []

  getMyTasks() {
    const storedTasks = localStorage.getItem('myTasks')
    if (storedTasks) {
      this.myTasks = JSON.parse(storedTasks)
    } else {
      this.myTasks = []
    }
  }

  mounted() {
    this.getMyTasks()
  }
}
</script>
