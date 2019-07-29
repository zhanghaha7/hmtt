<template>
    <div class="container">
        Child
        <p>{{count}}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['count'])
  }
}
</script>

<style>

</style>
