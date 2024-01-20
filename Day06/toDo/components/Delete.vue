<template>
  <v-btn @click="deleteTask()">Delete</v-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import axios from 'axios'
@Component
export default class Delete extends Vue {
  @Prop() readonly id!: number
  async deleteTask() {
    try {
      const response = await axios.delete(
        `http://localhost:8000/task/${this.id}`
      )
    } catch (err) {}
  }
}
</script>
