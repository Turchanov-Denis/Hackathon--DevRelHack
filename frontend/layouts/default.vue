<template>
  <div>
    <slot></slot>
  </div>
</template>


<script>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "default",
});
</script>