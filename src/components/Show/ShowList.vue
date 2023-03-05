<script setup>
import { defineProps } from 'vue'
import ShowItem from './ShowItem.vue'

const props = defineProps({ items: Array })
</script>

<template>
  <div class="shows-list">
    <slot></slot>

    <div class="items" data-test="items">
      <ShowItem
        v-for="item in props.items"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :image-src="item.image?.medium"
      />
    </div>

    <p class="scroll-hint">Scroll for more &rarr;</p>
  </div>
</template>

<style scoped>
.shows-list {
  margin-bottom: calc(var(--spacing) * 3);
}

.items {
  display: flex;
  overflow-x: auto;
  padding: calc(var(--spacing) * 3) var(--spacing);
  margin-left: -8px;
}

.items::-webkit-scrollbar {
  display: none;
}

.scroll-hint {
  text-align: right;
}
</style>
