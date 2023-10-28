<script setup>
    const props = defineProps([`receita`])
    const { receita } = toRefs(props)

</script>
<template>
    <div class="cardReceita" :id="`ReceitasComponent${receita.id}`" >

        <NuxtLink :to="`../receitas/${receita.id}`">
            <img :src="receita.url_imagem" alt="">
        </NuxtLink>
        <div class="ReceitaDetails" id="ReceitaDetails">
            <h2>{{ receita.nome }}</h2>
            <button class="edit-button"><Icon name="mdi:pencil"/></button>
        </div>
    </div>
</template>
<style lang="scss">
    .cardReceita {
        background-color: $card-color;
        width: 300px;
        height: 250px;
        border-radius: $border-radius1;
        overflow: hidden;
        img {
            width: 100%;
            height: 70%;
        }
        .ReceitaDetails {
            height: 50px;
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            
        }
    }

    .edit-button {
        padding: .5rem;
        background-color: $main-color;
        color: white;
        outline: none;
        border: none;
        border-radius: .4rem;
        font-size: 1.4rem;
    }
    .edit-button:hover {
        background-color: $main-color-hover;
        cursor: pointer;
    }
</style>