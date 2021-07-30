<template>
  <div class="container"></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    mounted(){
      this.$router.push('/login');
    }

});
</script>
