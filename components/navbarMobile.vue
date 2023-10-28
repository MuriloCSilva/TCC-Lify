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
    let navbarMobileToogle = ref(false)
    let navbarMobileHoldersToogle = ref(true)
    
    function toogleMobileNavbar() {
        navbarMobileToogle.value = !navbarMobileToogle.value
        navbarMobileHoldersToogle.value = !navbarMobileHoldersToogle.value
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
</script>
<template>
    <div class="navbar-mobile-wrapper">
        <div v-if="navbarMobileHoldersToogle" class="navbar-mobile-holders">
            <img :src="userImageUrl" alt="">
            <button @click="toogleMobileNavbar" class="burguer-menu">
                <Icon name="mdi:menu" class="burguer-menu-icon"/>
            </button>
        </div>
        <div v-if="navbarMobileToogle" class="navbar-mobile-menu">
            <div class="navbar-mobile-top">
                <div>
                    <img :src="userImageUrl" alt="">
                    <h2>{{ username }}</h2>
                </div>
                <span @click="toogleMobileNavbar" class="close-navbar-button"><Icon name="mdi:close" class="insights-icon"/></span>
            </div>
            <div class="navbar-mobile-links-holder">
                <NuxtLink to="/" class="navbar-mobile-links">
                    <Icon name="mdi:home" class="mobile-links-icons"/>
                    <p>Home</p>
                    <span>></span>
                </NuxtLink>
                <NuxtLink to="/account" class="navbar-mobile-links">
                    <Icon name="mdi:account-settings-variant" class="mobile-links-icons"/>
                    <p>Editar Perfil</p>
                    <span>></span>
                </NuxtLink>
                <NuxtLink to="/receitas/" class="navbar-mobile-links">
                    <Icon name="mdi:receipt-text-edit" class="mobile-links-icons"/>
                    <p>Receitas</p>
                    <span>></span>
                </NuxtLink>
                <NuxtLink to="/faq" class="navbar-mobile-links">
                    <Icon name="mdi:book" class="mobile-links-icons"/>
                    <p>FAQ</p>
                    <span>></span>
                </NuxtLink>
                <NuxtLink to="/adminPanel/" class="navbar-mobile-links">
                    <Icon name="mdi:view-dashboard" class="mobile-links-icons"/>
                    <p>Admin Panel</p>
                    <span>></span>
                </NuxtLink>
                <button class="logout-button-mobile">Logout</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .navbar-mobile-wrapper {
        margin: 0;
        padding: 0;
        width: 100%;
    }

    .navbar-mobile-wrapper .navbar-mobile-holders {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 2rem;
        width: 90%;
    }

    .navbar-mobile-wrapper .navbar-mobile-holders img {
        border-radius: 50%;
        width: 80px;
    }

    .navbar-mobile-wrapper .navbar-mobile-holders button {
        background-color: transparent;
        border: none;
        outline: none;
    }

    .navbar-mobile-wrapper .navbar-mobile-holders .burguer-menu-icon {
        font-size: 40px;
        color: $text-color;
    }

    .navbar-mobile-wrapper .navbar-mobile-holders .burguer-menu-icon:hover {
        color: $subtext-color;
        cursor: pointer;
    }

//----------------------------------------------------------------------------------------------------------------------------------------
//  Navbar-toogle
//----------------------------------------------------------------------------------------------------------------------------------------

    .navbar-mobile-menu {
        position: fixed;
        top: 0;
        left: 0;
        background-color: $card-color;
        position: relative;
        top: 0;
        padding: 2rem;
        height: 90vh;
    }

    .navbar-mobile-menu .navbar-mobile-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navbar-mobile-menu .navbar-mobile-top div {
        display: flex;
        align-items: center;
        gap: 0 1rem;
    }

    .navbar-mobile-menu .navbar-mobile-top img {
        width: 5rem;
        border-radius: 50%;
    }

    .navbar-mobile-menu .navbar-mobile-top .close-navbar-button {
        font-size: 2rem;
        color: $text-color;
    }

    .navbar-mobile-menu .navbar-mobile-top .close-navbar-button:hover {
        color: $subtext-color;
        cursor: pointer;
    }

    .navbar-mobile-menu .navbar-mobile-liks-holder {
        display: flex;
        flex-direction: column;
        margin-top: 5rem;
    }

    .navbar-mobile-menu .navbar-mobile-links {
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

    .mobile-links-icons {
        width: 40px;
        border-radius: 50%;
        padding: 8px;
        margin-right: 15px;
        color: $text-color;
    }

    .mobile-links-icons span {
        font-size: 22px;
        transition: .5s;
        color: $text-color;
        
    }

    .mobile-links-icons:hover {
        cursor: pointer;
    }

    .mobile-links-icons:hover span {
        transform: translateX(5px);
    }

    .mobile-links-icons:hover p {
        font-weight: 600;
    }

    .logout-button-mobile {
        position: absolute;
        bottom: 2rem;
        background-color: transparent;
        border: 2px solid $text-color;
        color: $text-color;
        padding: 0.6rem 1rem;
        border-radius: $border-radius1;
        font-weight: bold;
        transition: .3s ease;
    }

</style>