<script setup lang="ts">
import {$fetch} from "ofetch";

const loading = ref(false)
const user = reactive({
  email: '',
  password: '',
})

const onClickLogin = async () => {
  try {
    loading.value = true
    await $fetch('/api/auth/login', {
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
    Accedi
    <input v-model="user.email"/>
    <input v-model="user.password"/>

    <br />

    <button @click.stop="onClickLogin">Accedi</button>
    <span v-if="loading">
      Loading...
    </span>
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
