<template>
    <div>
        <h1>Autenticação</h1>
        <form @submit.prevent="login">
            <input v-model="username" placeholder="Usuário" />
            <input v-model="password" type="password" placeholder="Senha" />
            <button type="submit">Entrar</button>
        </form>
    </div>
</template>
  
<script>
import { useUserStore } from "@/stores/userStore";
  
export default {
    name: "Auth",
    setup() {
        const userStore = useUserStore();
        const username = ref("");
        const password = ref("");
  
        const login = () => {
            userStore.login({ username: username.value }, "mockToken");
        };
  
        return { username, password, login };
    },
};
</script>