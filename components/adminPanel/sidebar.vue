<script setup>

</script>
<template>
    <aside class="mobile-sidebar">
        <span @click="toogleSidebar" class="sidebar-close-button"><Icon name="mdi:close-thick"/></span>
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
                <NuxtLink class="sidebar-link" to="./anuncios">
                    <span><Icon name="mdi:basket" class="sub_menu_icon"/></span>
                    <h3>Anúncios</h3>
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
</template>
<style lang="scss">
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

    @media screen and  (max-width: 768px) {
        aside {
            position: fixed;
            top: 0;
            left: 0;
            box-shadow:  -20px 20px 60px #272727,
                        20px -20px 60px #2b2b2b;
            width: fit-content;
        }

        .sidebar .sidebar-link {
            width: 100%;
        }

        aside .sidebar h3 {
            display: inline;
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

       .sidebar-close-button {
            display: block;
            position: fixed;
            left: 9rem;
            top: 1rem;
            font-size: 1.4rem;
       }

       .sidebar-close-button:focus {
        color: $subtext-color;
       }
    }
</style>