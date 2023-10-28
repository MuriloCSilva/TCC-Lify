<script>


</script>
<template>
    <div class="container">
        <aside>
            <div class="sidebar-top">
                <span class="sidebar-close-button"><Icon name="mdi:close-thick"/></span>
                <img src="@/assets/images/Lify_wide_png.png" alt="">
            </div>
            <div class="sidebar">
                <NuxtLink class="sidebar-link" to="./">
                    <span><Icon name="mdi:view-dashboard" class="sub_menu_icon"/></span>
                    <h3>Dashboard</h3>
                </NuxtLink>
                <NuxtLink class="sidebar-link" to="./receitas">
                    <span><Icon name="mdi:receipt-text" class="sub_menu_icon"/></span>
                    <h3>Receitas</h3>
                </NuxtLink>
                <NuxtLink class="sidebar-link active" to="./anuncios">
                    <span><Icon name="mdi:basket" class="sub_menu_icon"/></span>
                    <h3>Anúncios</h3>
                </NuxtLink>
                <NuxtLink class="sidebar-link" to="/">
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
            <h1>Dashboard</h1>
            <p class="data">data</p>

            <div class="insights">
                <AdminPanelCardReceitas />
                <AdminPanelCardAnuncios />
                <AdminPanelCardUsers />
            </div>
        </main>
    </div>
</template>
<style lang="scss">
    
</style>