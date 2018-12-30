<template>
  <div>
    <v-card flat max-width="215">
      <v-img
        :src="issue.img"
        max-height="320"
        max-width="215"
        lazy-src="../assets/notavailable.png"
      ></v-img>
      <v-card-title class="primary title">{{issue.title}}</v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name:'Comic',
  props: {
    issue: {
      type: Object,
      required: true
    }
  }
}
</script>