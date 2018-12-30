<template>
  <div>
    
    <v-container grid-list-xl>
      <h1 class="display-3 font-weight-thin text-capitalize" v-if="!empty">{{ publisher }} comics</h1>
      <!-- <v-layout row wrap justify-start>
        <v-flex v-for="issue in issues"><Comic :issue="issue"></Comic></v-flex>  
      </v-layout> -->
      <v-layout row wrap justify-start>
        <v-flex xs12 sm12 md2 lg2 xl2 v-for="issue in issues">
          <Comic :issue="issue"></Comic>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Comic from './Comic'

export default {
  props: {
    issues: {
      type: Array,
      required: true
    },
    publisher: {
      type: String,
      required: true
    }
  },
  components: { Comic },
  computed: {
    empty() {
      if (this.issues.length > 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}
</script>
