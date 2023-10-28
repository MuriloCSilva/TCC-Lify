<template>
    <form action="" class="user_configs_container">
        <div class="user-input-holder">
            <label for="username">Username</label>
            <input v-model="usernameInput" type="text" class="username-input user-form" id="username" placeholder="Username">
        </div>
        <div class="user-input-holder">
            <label for="imagem">{{ imagemInput }}</label>
            <input v-model="imagemInput" type="text" class="email-input user-form" id="imagem" placeholder="Inserir URL da imagem" >
        </div>
        <button class="save-changes-button" @click="updateProfile">Salvar</button>
    </form>
</template>
<script>

export default {
    name: "userEditForm",
    data() {
        return {
            usernameInput: null,
            imagemInput: null
        }
    },
    methods: {
        getData() {

        }
    }
}

</script>
<style lang="scss">

</style>