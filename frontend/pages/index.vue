<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <li><NuxtLink to="/login">login</NuxtLink></li>
  </div>
</template>

<script>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "default",
  middleware: 'auth'
});
</script>