<script setup>
//----------------------------------------------------------------------------------------------------------------------------------------
//  Váriáveis básicas para a pagina
//----------------------------------------------------------------------------------------------------------------------------------------
const user = useSupabaseUser();
const userId = user.value.id;
const supabase = useSupabaseClient();
const userImageUrl = ref('');
const username = ref('');
const userNameProfile = ref('');
const loading = ref(true);
const userName = ref('');
const imagem = ref('');
const sidebarToogle = ref(false);


//----------------------------------------------------------------------------------------------------------------------------------------
//  Verificando se o usuário está atenticado
//----------------------------------------------------------------------------------------------------------------------------------------
onMounted(() => {
  watchEffect(() => {
    if (!user.value) {
      navigateTo('/login')
    }
  })
})

//----------------------------------------------------------------------------------------------------------------------------------------
//  Buscando data na database
//----------------------------------------------------------------------------------------------------------------------------------------
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
}

//----------------------------------------------------------------------------------------------------------------------------------------
//  Buscando data atual
//----------------------------------------------------------------------------------------------------------------------------------------
    let dataAtual = new Date();
    const AnoAtual = dataAtual.getFullYear()
    const diaAtual = dataAtual.getDay();
    const mesAtual = dataAtual.getMonth();
    dataAtual = dataAtual.toLocaleDateString('pt-br')

    function toogleSidebar() {
        sidebarToogle.value = !sidebarToogle.value;
    }

</script>
<template>
    <div class="container">
        <AdminPanelSidebar v-if="sidebarToogle" >
            <Icon name="mdi:view-dashboard" class="close-sidebar-button"/>
        </AdminPanelSidebar>
        
        <aside class="main-aside">
            <div class="sidebar-top">
                <img src="@/assets/images/Lify_wide_png.png" alt="">
            </div>
            <div class="sidebar">
                    <NuxtLink class="sidebar-link active" to="./">
                        <span><Icon name="mdi:view-dashboard" class="sub_menu_icon"/></span>
                        <h3>Dashboard</h3>
                    </NuxtLink>
                    <NuxtLink class="sidebar-link" to="./receitas">
                        <span><Icon name="mdi:receipt-text" class="sub_menu_icon"/></span>
                        <h3>Receitas</h3>
                    </NuxtLink>
                    <NuxtLink class="sidebar-link" to="../">
                        <span><Icon name="mdi:keyboard-backspace" class="sub_menu_icon"/></span>
                        <h3>Voltar</h3>
                    </NuxtLink>
                    <NuxtLink class="sidebar-link">
                        <span><Icon name="mdi:logout" class="sub_menu_icon"/></span>
                        <h3>Logout</h3>
                    </NuxtLink>
                    
            </div>
        </aside>
        <main>
            
            <div class="top-adminpanel">
                <span @click="toogleSidebar" class="open-sidebar-button"><Icon name="mdi:menu"/></span>
                <div class="left-side-top">
                    <h1>Dashboard</h1>
                    <p class="data">{{ dataAtual }}</p>
                </div>
                <div class="admin-info">
                    <h3>{{ username }}</h3>
                    <img :src="userImageUrl" alt="">
                </div>
            </div>
            
            

            <div class="insights">
                <AdminPanelCardReceitas />
                <AdminPanelCardAnuncios />
                <AdminPanelCardUsers />
            </div>
        </main>
    </div>
</template>
<style lang="scss">
    
    .container {
        display: flex;
    }

    aside {
        display: flex;
        flex-direction: column;
        background-color: $card-color;
        width: fit-content;
        height: 100vh;
        padding: 0 1rem;
    }

    .sidebar-top {
        border-bottom: 1px solid $main-color;
        margin-top: .4rem;
        padding: 1rem;
    }
    .sidebar-top span {
        display: none;
        position: absolute;
        left: 12rem;
    }
    .sidebar-top h2 {
        font-weight: 600;
        padding-bottom: .7rem;
    }
    .sidebar-top img {
        width: 7rem;
        height: 4rem;
    }

    .sidebar {
        display: flex;
        flex-direction: column;
        height: 70vh;
        position: relative;
        top: 3rem;
    }

    .sidebar h3 {
        font-weight: 500;
    }

    .sidebar-link {
        display: flex;
        margin-left: 2rem;
        gap: 1rem;
        align-items: center;
        position: relative;
        height: 3.7rem;
        transition: all 300ms ease;
    }

    .sidebar-link span {
        font-size: 1.6rem;
        transition: all 300ms ease;
        cursor: pointer;
    }

    .sidebar .sidebar-link:last-child {
        position: absolute;
        bottom: 2rem;
        width: 100%;
    }

    .sidebar .sidebar-link.active {
        color: $main-color;
        margin-left: 0;
        background-color: $card-color3;
    }

    .sidebar .sidebar-link.active::before {
        content: '';
        width: 6px;
        height: 100%;
        background-color: $main-color;
    }

    .sidebar .sidebar-link.active {
        margin-left: calc(1rem - 3px);
    }

    .sidebar .sidebar-link:hover span {
        margin-left: 1rem;
    }

    .open-sidebar-button {
        display: none;
    }

    .close-sidebar-button {
        display: none;
    }

//----------------------------------------------------------------------------------------------------------------------------------------
//  Main
//----------------------------------------------------------------------------------------------------------------------------------------

    main {
        padding: 2rem;
    }

    main .top-adminpanel {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    main .top-adminpanel .admin-info {
        display: flex;
        gap: 0 1rem;
    }

    main .top-adminpanel .admin-info img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }

    main .top-adminpanel .admin-info h3 {
        font-weight: 300;
    }

    .data {
        display: inline-block;
        background-color: $card-color;
        border-radius: $border-radius1;
        margin-top: 1rem;
        padding: .5rem 1.6rem;
    }

    main .insights {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.6rem;
    }

    main .insights > div {
        background-color: $card-color;
        padding: $card-padding;
        border-radius: $border-radius3;
        margin-top: 1rem;
        height: fit-content;    
        transition: .300s ease;
    }

    main .insights > div:hover {
        box-shadow: none
    }

    main .insights > div .insights-icon {
        background-color: #46ef7e;
        padding: .5rem;
        border-radius: 50%;
        color: $text-color;
        font-size: 2rem;
    }

    main .insights > div.card-anuncios .insights-icon {
        background-color: #6b46ef;
    }

    main .insights > div.card-users .insights-icon {
        background-color: #ef5746;
    }

    main .insights > div .middle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0 2rem;
    }

    main .insights h3 {
        margin: 1rem 0 0.6rem;
        font-size: 1rem;
    }

    main .insights .progress {
        position: relative;
        width: 92px;
        height: 92px;
        border-radius: 50%;
    }

    main .insights .insights-progress {
        width: 7rem;
        height: 7rem;
    }

    main .insights .insights-progress circle {
        fill: none;
        stroke: #46ef7e;
        stroke-width: 14;
        stroke-linecap: round;
        transform: translate(5px, 5px);
        stroke-dasharray: 110;
        stroke-dashoffset: 92;
    }

    main .insights .card-anuncios .insights-progress circle {
        stroke: #6b46ef;
        stroke-dashoffset: 35;
        stroke-dasharray: 110;
    }

    main .insights .card-users .insights-progress circle {
        stroke: #ef5a46;
        stroke-dashoffset: 20;
        stroke-dasharray: 80;
    }

    main .insights .progress .number {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    main .insights small {
        margin: 1.6rem;
        display: block;
        color: $subtext-color;
    }
    
    @media screen and  (max-width: 1200px) {

        .sidebar h3 {
            display: none;
        }

        .sidebar .sidebar-link {
            width: 5rem;
        }

        .sidebar .sidebar-link:last-child {
            margin-left: 2rem;
        }

        main .insights {
            grid-template-columns: 1fr;
            gap: 0;
        }
    }

    @media screen and  (max-width: 768px) {

        main.top-adminpanel {
            display: none;
        }
        
        .open-sidebar-button {
            display: block;
        }

        .close-sidebar-button {
            display: block;
            position: absolute;
            left: 8rem;
        }
        
       .main-aside {
        display: none;
       }

       main {
        padding: 0;
       }

       .insights {
            padding: 2rem;
       }

       .top-adminpanel {
            background-color: $card-color2;
            padding: 1rem;
       }

       .top-adminpanel span {
        font-size: 1.5rem;
       }

       .left-side-top {
        display: none;
       }
    }

</style>