<script setup lang="ts">

import {$fetch} from "ofetch";

const loading = ref(false)
const user = reactive({
  email: undefined,
  name: undefined,
  surname: undefined,
  password: undefined,
  confirmPassword: undefined,
})

const onClickRegister = async () => {
  console.log('onClickRegister', user)
  try {
    loading.value = true
    await $fetch('/api/auth/register', {
      body: JSON.stringify(user),
      method: 'POST',
    })
    loading.value = false
  } catch (e) {
    console.error({e})
    loading.value = false
  }
}

</script>
<template>
  <div class="register-page">
    Registrati
    <input v-model="user.name" />
    <input v-model="user.surname"/>
    <input v-model="user.email"/>
    <input v-model="user.password"/>
    <input v-model="user.confirmPassword"/>

    <br />

    <button @click.stop="onClickRegister">Registrati</button>
  </div>
</template>

<style scoped>
  .register-page {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
</style>
