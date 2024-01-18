<template>
  <v-card>
    <v-text-field
      label="Add Task"
      placeholder="Placeholder"
      outlined
      v-model="val"
    ></v-text-field>
    <v-btn @click="saveTask(val)">Save</v-btn>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class AddTask extends Vue {
  val: string | null = null
  saveTask(value: string | null) {
    const existingTasks = JSON.parse(localStorage.getItem('myTasks') || '[]')
    existingTasks.push(value)
    localStorage.setItem('myTasks', JSON.stringify(existingTasks))
  }
}
</script>
