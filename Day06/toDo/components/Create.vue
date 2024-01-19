<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field label="Task" required v-model="val"></v-text-field>
          <v-btn @click="saveTask(val)">Add</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'
@Component
export default class Create extends Vue {
  val: string = ''
  async saveTask(val: string) {
    try {
      const response = await axios.post('http://localhost:8000/task/', {
        task: this.val,
      })
      console.log('Saved', response.data)
    } catch (err) {
      console.error(err)
    }
  }
}
</script>
