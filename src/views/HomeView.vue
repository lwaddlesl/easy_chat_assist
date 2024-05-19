<script setup lang="ts">
import Button from 'primevue/button';
</script>

<template>
  <main>
    <Button
      label="To login page"
      link
      @click="$router.push('/login')"
    />
    <Button
      label="To description page"
      link
      @click="$router.push('/description')"
    />
  </main>
</template>
