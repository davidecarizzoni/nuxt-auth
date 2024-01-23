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
  <div class="login-page min-h-screen bg-white dark:bg-black">
    <div class="login-card flex-col flex justify-center items-center">
      <div class="title">
        Create account
      </div>
      <div class="flex flex-col w-full space-y-4 mt-8">
        <UIInput v-model="user.name" placeholder="Name"/>
        <UIInput v-model="user.surname" placeholder="Surname"/>
        <UIInput v-model="user.email" placeholder="Email"/>
        <UIInput v-model="user.password" placeholder="Password" type="password"/>
        <UIInput v-model="user.confirmPassword" placeholder="Confirm Password" type="password"/>
      </div>

      <br />
      <br />

      <button
        class="bg-blue-400 px-4 py-2 rounded-2xl w-[10rem]"
        @click.stop="onClickRegister"
      >
        Confirm
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-card {
  width: 500px;
  @apply bg-slate-600/10;
  @apply p-10;
  @apply rounded-3xl
}
.login-page {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
}
</style>
