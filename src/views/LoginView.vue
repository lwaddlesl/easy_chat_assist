<script setup lang="ts">
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

const checked = ref(false);
</script>

<template>
  <div class="flex justify-content-center w-screen bg-black-alpha-10 h-screen align-items-center">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
      </div>

      <div>
        <label
          for="email1"
          class="block text-900 font-medium mb-2"
        >
          Email
        </label>
        <InputText
          id="email1"
          type="text"
          class="w-full mb-3"
        />

        <label
          for="password1"
          class="block text-900 font-medium mb-2"
        >
          Password
        </label>
        <InputText
          id="password1"
          type="password"
          class="w-full mb-3"
        />

        <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
            <Checkbox
              id="rememberme1"
              v-model="checked"
              :binary="true"
              class="mr-2"
            ></Checkbox>
            <label for="rememberme1">Remember me</label>
          </div>
          <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
            Forgot password?
          </a>
        </div>

        <Button
          label="Sign In"
          icon="pi pi-user"
          class="w-full"
        ></Button>
      </div>
    </div>
  </div>
</template>
