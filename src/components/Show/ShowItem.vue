<script setup>
const props = defineProps({
  id: Number,
  name: String,
  imageSrc: String
})
</script>

<template>
  <RouterLink :to="`/shows/${props.id}`" class="show-item" data-test="show-item">
    <img data-test="image" :src="props.imageSrc" :alt="`${props.name} cover`" />
  </RouterLink>
</template>

<style scoped>
.show-item {
  min-width: 140px;
  max-width: 140px;
  height: 197px;
  margin-right: var(--spacing);
  position: relative;
}

.show-item img {
  /* Absolute for the popout effect on hover */
  position: absolute;
  width: 100%;
  height: 100%;

  border-radius: 8px;
  transition: transform 0.2s;
}

.show-item:hover {
  cursor: pointer;
  z-index: 100;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.show-item:hover img {
  transform: scale(1.1);
}

@media screen and (min-width: 900px) {
  .show-item {
    min-width: 200px;
    max-width: 200px;
    height: 280px;
  }
}
</style>
