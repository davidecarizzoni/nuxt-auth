<script setup lang="ts">
  defineProps({
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  })

  const model = defineModel({
    type: String,
    default: ''
  })
</script>

<template>
  <div class="text-input flex flex-row items-center relative">
    <div class="prepend left-2 h-full flex-col justify-center items-center" v-if="$slots.prepend">
      <slot name="prepend" />
    </div>
    <input
      v-model="model"
      :type="type"
      class="bg-transparent h-12 pl-2 w-full focus:outline-0"
      :placeholder="placeholder"
    />
  </div>
</template>

<style scoped lang="scss">
  .text-input {
    @apply focus:outline-0;
    @apply pl-4;
    @apply pr-2;
    @apply rounded-2xl;
    @apply bg-slate-600/30;
    @apply text-white;
  }
</style>
