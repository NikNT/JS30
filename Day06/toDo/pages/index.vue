<template>
  <div>
    <Create />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Create from '~/components/Create.vue'
@Component({
  components: {
    Create,
  },
})
export default class Index extends Vue {}
</script>
