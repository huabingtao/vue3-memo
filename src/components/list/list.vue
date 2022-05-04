<template>
  <div>
    <ul>
      <li :key="index" v-for="(item, index) in list">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: Array,
  },
  created() {
    console.log(this.list);
  },
};
</script>

<style></style>
