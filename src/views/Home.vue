<template>
  <div class="home">
    <h1 class="ma-4 title font-weight-light">Comic Lineup for the week of INSERT DATE HERE</h1>
    <ul>
      <publisher v-for="pub in publishers" :issues="pub.issues" :publisher="pub.publisher"></publisher>
    </ul>
  </div>
</template>

<script>
  import publisher from '../components/Publisher'
  import db from '../firebase/fb'

  export default {
    name:'Page-Content',
    components: { publisher },
    data() {
      return {
        publishers: []
      }
    },
    created() {
      // need a temp variable because you can not refer to self inside of the forEach I guess
      let tempPublishers = []
      db.collection("publishers").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            tempPublishers.push({publisher:doc.id, issues:doc.data().issues});
        });
      });
      this.publishers = tempPublishers;
    }
  }
  
</script>
