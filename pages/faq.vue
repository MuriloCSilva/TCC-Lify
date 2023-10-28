<script setup>

</script>
<template>
    <Navbar class="navbar" />
    <NavbarMobile class="navbar-mobile" />
    <main>
        <h1 class="titulo-faq">Perguntas Frenquentes</h1>
        <div class="faq-wrapper">
            <div class="faq-card">
                <h3>O que eu encontro aqui?</h3>
                <p>Aqui você encontrará receitas para emagrecimento e para manter uma vida saúdavel, até mesmo para quem possuí alergias alimenticias.</p>
            </div>
            <div class="faq-card">
                <h3>Como eu posso modificar meu peril?</h3>
                <p>Você pode modificar seu perfil acessando a pagina de modificação a partir do sub-menu que é aberto ao clicar na sua imagem de perfil.</p>
            </div>
            <div class="faq-card">
                <h3>Quais são as categorias de alimentos que posso encontrar?</h3>
                <p>Em nossa pagina de receitas você vai encontrar receitas de todos os tipos, desde receitas sem glúten, até receitas vegetarianas.</p>
            </div>
            <div class="faq-card">
                <h3>Como posso entrar em contato?</h3>
                <p>Entre em contato conosco em nosso email <a href="#"><code>lify.contato@gmail.com</code></a></p>
            </div>
        </div>
    </main>
</template>
<style lang="scss">
    .titulo-faq {
        text-align: center;
    }

    .faq-wrapper {   
        margin-top: 4rem;
        padding: 0 15rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        margin-bottom: 3rem;
    }

    .faq-card {
        background-color: $card-color;
        padding: $card-padding;
        transition: .3s ease;
    }

    .faq-card:hover {
        transform: translateY(-10px);
    }

    .faq-card h3 {
        font-size: 1.5rem;
        color: $text-color;
        font-weight: 500;
    }

    .faq-card p {
        color: $subtext-color;
    }

    .faq-card code {
        color: $main-color;
    }

    @media screen and  (max-width: 768px) {
        .navbar {
            display: none;
        }
        .navbar-mobile {
            display: block;
        }

        .faq-wrapper {
            padding: 0 4rem;
        }
    }
</style>