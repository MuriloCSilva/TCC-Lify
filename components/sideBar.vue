<script setup>
//----------------------------------------------------------------------------------------------------------------------------------------------
//  Variáveis do usuário
//----------------------------------------------------------------------------------------------------------------------------------------------
    const user = useSupabaseUser();
    const supabase = useSupabaseClient();
    const userId = user.value.id;
    const userImageUrl = ref('');
    const username = ref('');
    const userNameProfile = ref('');
    const userRole = ref('');
    const loading = ref(true);
    

//----------------------------------------------------------------------------------------------------------------------------------------------
//  Importando data do usuário
//----------------------------------------------------------------------------------------------------------------------------------------------
    let { data } = await supabase
    .from('user')
    .select(`*`)
    .eq('id', user.value.id)
    .single()
    if (data) {
        loading.value = false;
        userImageUrl.value = data.user_image_url;
        username.value = data.username;
        userNameProfile.value = data.usernameProfile;
        userRole.value = data.role;
    }

//----------------------------------------------------------------------------------------------------------------------------------------------
//  Verificando se o usuário é um administrador
//----------------------------------------------------------------------------------------------------------------------------------------------
    

</script>
<script>
    export default {
        name: 'sideBar'
    }

</script>
<template>
    <aside>
        <div class="top">
                <img :src="userImageUrl" alt="">
                <h2>{{ username }}</h2>
        </div>
        <div class="sidebar">
            <a>
                <nuxt-link to="./" class="sidebar-link">
                    <icon name="mdi:view-dashboard" class="sidebar-link-icon"/>
                    <h3>Dashboard</h3>
                </nuxt-link>
            </a>
            <a>
                <nuxt-link to="./users" class="sidebar-link">
                    <Icon name="mdi:account-supervisor" class="sidebar-link-icon"/>
                    <h3>Usuários</h3>
                </nuxt-link>
            </a>
            <a>
                <nuxt-link to="./analises" class="sidebar-link">
                    <Icon name="mdi:chart-areaspline" class="sidebar-link-icon"/>
                    <h3>Análises</h3>
                </nuxt-link>
            </a>
            <a>
                <nuxt-link to="./receitas" class="sidebar-link">
                    <Icon name="mdi:basket" class="sidebar-link-icon"/>
                    <h3>Receitas</h3>
                </nuxt-link>
            </a>
            <a>
                <nuxt-link to="./marketplace" class="sidebar-link">
                    <Icon name="mdi:logout" class="sidebar-link-icon"/>
                    <h3>Marketplace</h3>
                </nuxt-link>
            </a>
            <a>
                <nuxt-link to="./config" class="sidebar-link">
                    <Icon name="mdi:cog-outline" class="sidebar-link-icon"/>
                    <h3>Configurações</h3>
                </nuxt-link>
            </a>
            <a>
                <nuxt-link to="/" class="sidebar-link">
                    <Icon name="mdi:keyboard-backspace" class="sidebar-link-icon"/>
                    <h3>Voltar</h3>
                </nuxt-link>
            </a>
            <button class="sidebar-link logout-buton">
                <Icon name="mdi:logout" class="sidebar-link-icon"/>
                <h3>Logout</h3>
            </button>
        </div>
    </aside>
</template>
<style lang="scss">
    
    .adminpanel-mobile {
        display: flex;
    }

    .top-adminpanel-mobile {
        background-color: $card-color2;
        padding: 1rem;
    }

    .top-adminpanel-mobile span {
        font-size: 1.5rem;
    }

    aside {
        width: fit-content;
        height: 100vh;
        background-color: $card-color;
    }

    .close {
        position: absolute;
        font-size: 1.2rem;
        top: 1rem;
        left: 12rem;
    }
    .close:hover {
        color: rgb(204, 204, 204);
        cursor: pointer;
    }

    .top {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 20vh;
        border-bottom: 1px solid $main-color;
    }

    .top img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }

    .top h2 {
        font-size: 1rem;
        font-weight: 700;
    }

    .sidebar {
        background-color: $card-color;
        padding: 3rem 1rem 3rem;
        display: flex;
        flex-direction: column;
        gap: 1.6rem 0;
    }

    .sidebar-link {
        display: flex;
        align-items: center;
        transition: all 200ms ease;
    }

    .sidebar-link:hover {
        margin-left: 1rem;
    }

    .logout-buton {
       background-color: transparent;
       outline: none;
       border: none;
       color: white;
       position: fixed;
       bottom: 2rem;
    }

    .sidebar-link h3 {
        font-weight: 300;
        font-size: 1rem;
        margin-left: 2rem;
        transition: all 300ms ease;
    }

    .sidebar-link:hover {
        color: $main-color;
        cursor: pointer;
    }

    .sidebar-link-icon {
        font-size: 1.6rem;
    }
</style>