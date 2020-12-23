<template>
  <div>
    <span>home</span>
    <div>
      <ul>
        <li><messageboard></messageboard></li>
        <li><messageboard></messageboard></li>
        <li><messageboard></messageboard></li>
      </ul>
    </div>
  </div>
</template>

<script>
import bill from '../../components/bill/bill';
import messageboard from '../../components/messageboard/messageboard';

export default {
  data () {
    return {
    };
  },
  props: {
  },
  created () {
  },
  computed: {
  },
  methods: {
  },
  components: {
    bill,
    messageboard
  }
};
</script>

<style scoped>
</style>
