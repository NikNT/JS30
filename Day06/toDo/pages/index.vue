<template>
  <div>
    <Create />
    <Read />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Create from '~/components/Create.vue'
import Read from '~/components/Read.vue'
@Component({
  components: {
    Create,
    Read,
  },
})
export default class Index extends Vue {}
</script>
