<script setup lang="ts">
import {$fetch} from "ofetch";

const dark = useState('dark', () => true)

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
  <div class="login-page min-h-screen bg-white dark:bg-black">
    <div class="login-card flex-col flex justify-center items-center">
      <div class="title">
        Inserisci le credenziali
      </div>
      <div class="flex flex-col w-full space-y-4 mt-8">
        <UIInput v-model="user.email" placeholder="Email"/>
        <UIInput v-model="user.password" placeholder="Password" type="password"/>
      </div>

      <br />
      <br />

        <button
          class="bg-blue-400 px-4 py-2 rounded-2xl w-[10rem]"
          @click.stop="onClickLogin"
        >
          Accedi
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
