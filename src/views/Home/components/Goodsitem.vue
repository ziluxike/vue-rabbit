<script setup>
defineProps({
  goods: {
    type: Object,
    default: () => {}
  }
})
</script>
<template>
      <RouterLink to="/" class="goods-item">
        <img :src="goods.picture" alt="" />
        <p class="name ellipsis">{{ goods.name }}</p>
        <p class="desc ellipsis">{{ goods.desc }}</p>
        <p class="price">&yen;{{ goods.price }}</p>
      </RouterLink>
</template>