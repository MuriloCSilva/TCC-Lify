<script setup>
//----------------------------------------------------------------------------------------------------------------------------------------
//  Váriáveis básicas para a pagina
//----------------------------------------------------------------------------------------------------------------------------------------
    const supabase = useSupabaseClient()
    const user = useSupabaseUser();
    const loading = ref(true)
    const userRole = ref('');
    const userImageUrl = ref('')
    const username = ref('')
    const userNameProfile = ref('');
    let subMenuToogle = ref(false)

//----------------------------------------------------------------------------------------------------------------------------------------
//  Função para o usuário realizar logout
//----------------------------------------------------------------------------------------------------------------------------------------
    async function signOut() {
        try {
            loading.value = true
            let { error } = await supabase.auth.signOut()
            if (error) throw error
            user.value = null
        } catch (error) {
            alert(error.message)
        } finally {
            loading.value = false
        }
    }

//----------------------------------------------------------------------------------------------------------------------------------------
//  Buscando data na database
//----------------------------------------------------------------------------------------------------------------------------------------
    let { data } = await supabase
    .from('user')
    .select(`*`)
    .eq('id', user.value.id)
    .single()
    if (data) {
    userRole.value = data.role;
    userImageUrl.value = data.user_image_url;
    username.value = data.username;
    userNameProfile.value = data.usernameProfile;
    }

    function toogleSubMenu() {
        subMenuToogle.value = !subMenuToogle.value
    }

</script>
<script>
//----------------------------------------------------------------------------------------------------------------------------------------
//  Exportando componente
//----------------------------------------------------------------------------------------------------------------------------------------
    export default {
        name: 'navbar'
    }

</script>
<template>
    <div class="navbar_wrap">
        <nav class="navbar-container" data-aos="fade-up">
            <NuxtLink to="/"><img src="@/assets/images/Lify_wide_png.png" alt=""></NuxtLink>
            <div class="links-navbar">
                
                <a><NuxtLink to="/receitas/">Receitas</NuxtLink></a>
                <a><NuxtLink to="/faq">FAQ</NuxtLink></a>
                <a><NuxtLink to="/account">Perfil</NuxtLink></a>
            </div>
            <NuxtLink to="/login" v-if="!user"><button>Login</button></NuxtLink>
            <img v-else
                class="user_image_navbar"
                :src="userImageUrl"
                @click="toogleSubMenu"
            >
            <div class="user_image_submenu_wrap" ref="subMenu" v-if="subMenuToogle == true">
                <div class="user_image_submenu">
                    <div class="user_info">
                        <img :src="userImageUrl" alt="user image">
                        <div class="user_info_names">
                            <h2>{{ username }}</h2>
                            <p>@{{ userNameProfile }}</p>
                        </div>
                    </div>
                    <hr>
                    <a>
                        <NuxtLink to="/account" class="sub_menu_link">
                            <Icon name="mdi:account-cog" class="sub_menu_icon"/>
                            <p>Editar Perfil</p>
                            <span>></span>
                        </NuxtLink>
                    </a>
                    <a v-if="userRole === 'admin'">
                        <NuxtLink to="/adminPanel/" class="sub_menu_link">
                            <Icon name="mdi:view-dashboard" class="sub_menu_icon"/>
                            <p>Admin Panel</p>
                            <span>></span>
                        </NuxtLink>
                    </a>
                    <button @click="signOut" class="logout-button">Logout</button>
                    
                </div>
            </div>
        </nav>
    </div>
</template>
<style lang="scss" scoped>
    .navbar_wrap {
        width: 100%;
    }

    .navbar-container {
        padding: 2rem 7rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.2rem;
        img {
            width: 140px;
        }

        

        .links-navbar {
            display: flex;
            gap: 0 40px;
            color: $text-color;
        }
        .links-navbar a:hover {
            color: $subtext-color;
        }
    }

    .logout-button {
        background-color: transparent;
        border: 2px solid $text-color;
        color: $text-color;
        padding: 0.6rem 1rem;
        border-radius: $border-radius1;
        font-weight: bold;
        transition: .3s ease;
    }

    .logout-button:hover {
        cursor: pointer;
        background-color: $text-color;
        color: $text-color2;
    }

    .user_image_navbar {
        max-width: 50px;
        max-height: 50px;
        border-radius: 50%;
    }
    .user_image_navbar:hover {
        opacity: 80%;
        cursor: pointer;
    }

    .user_image_submenu_wrap {
        position: absolute;
        top: 85%;
        right: 5%;
        width: 320px;
        z-index: 100000;
        height: fit-content;
        overflow: hidden;
    }

    .user_image_submenu {
        background-color: $card-color;
        padding: 20px;
        margin: 10px;
        border-radius: 1.2rem;
    }

    .user_image_submenu::before {
        content: "";
        position: absolute;
        top: 2px;
        right: 50px;
        width: 16px;
        height: 16px;
        background-color: $card-color;
        transform: rotate(45deg);
        border-top-left-radius: 3px;
    }

    .user_info {
        display: flex;
        align-items: center;
        h2 {
            font-weight: bold;
            font-size: 1.2rem;
        }
        img {
            max-width: 60px;
            max-height: 60px;
            border-radius: 50%;
            margin-right: 15px;
        }
    }

    .user_info_names {
        p {
            font-size: 1rem;
            color: $text-color;
        }
    }
    
    .user_image_submenu hr {
        border: 0;
        height: 1px;
        width: 100%;
        background-color: white;
        margin: 15px 0 10px;
    }

    .sub_menu_link {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: white;
        margin: 12px 0;
        p {
            width: 100%;
            color: $text-color;
        }
    }

    .sub_menu_icon {
        width: 40px;
        border-radius: 50%;
        padding: 8px;
        margin-right: 15px;
        color: $text-color;
    }

    .sub_menu_link span {
        font-size: 22px;
        transition: .5s;
        color: $text-color;
    }

    .sub_menu_link:hover {
        cursor: pointer;
    }

    .sub_menu_link:hover span {
        transform: translateX(5px);
    }

    .sub_menu_link:hover p {
        font-weight: 600;
    }
</style>