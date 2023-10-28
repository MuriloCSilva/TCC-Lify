<template>
    <div>
        <div class="navbar-container" data-aos="fade-up">
            <NuxtLink to="/"><img src="@/assets/images/Lify_wide_png.png" alt=""></NuxtLink>
            <div class="links-navbar">
                
                <NuxtLink to="/sobre"><a>Sobre nós</a></NuxtLink>
                <NuxtLink to="/membros"><a>Membros</a></NuxtLink>
                <NuxtLink to="/faq"><a>FAQ</a></NuxtLink>
            </div>
            <NuxtLink to="/"><button>Login</button></NuxtLink>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'cardMurilo'
    }
</script>

<style lang="scss" scoped>

    .navbar-container {
        padding: 1rem;
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
        }
        .links-navbar a:hover {
            color: $subtext-color;
        }
        button {
            width: 100px;
            padding: 15px 20px;
            background-color: transparent !important;
            color: white;
            border: 2px solid white;
            border-radius: 10px;
            font-weight: bold;
            transition: .3s;
        }
        button:hover {
            background-color: white !important;
            color: #1b1b1bf2;
            cursor: pointer;
            transition: .2s;
        }
    }
</style>