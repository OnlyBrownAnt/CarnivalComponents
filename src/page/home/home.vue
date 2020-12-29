<template>
  <div>
    <positiondemo></positiondemo>
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
import positiondemo from '../../components/picture-demo/positiondemo';

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
    messageboard,
    positiondemo
  }
};
</script>

<style scoped>
</style>
