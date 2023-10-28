<script setup>
    const props = defineProps([`receita`])
    const { receita } = toRefs(props)
    const supabase = useSupabaseClient()


    //Tags receitas
    const nozes = ref('');
    const proteina = ref('');
    const vegetariano = ref('');
    const lowCarb = ref('');
    const lactose = ref('');
    const gluten = ref('');
    const conservante = ref('');

    let { data } = await supabase
        .from('receitas')
        .select(`*`)
        .eq('id', receita.id)
        .single()
    if (data) {
        nozes.value = data.nozes,
        proteina.value = data.proteina,
        vegetariano.value = data.vegetariano,
        lowCarb.value = data.lowCarb,
        lactose.value = data.lactose,
        gluten.value = data.gluten,
        conservante.value = data.conservante
    }

</script>
<template>
    <div class="cardReceita" :id="`ReceitasComponent${receita.id}`" >

        <NuxtLink :to="`../receitas/${receita.id}`">
            <img :src="receita.url_imagem" alt="">
        </NuxtLink>
        <div class="ReceitaDetails" id="ReceitaDetails">
            <h2>{{ receita.nome }}</h2>
            <div class="tags-receita">
                <span v-if="conservante == true">Sem conservantes</span>
                <span v-if="lactose == true">Sem laticinios</span>
                <span v-if="lowCarb == true">Pouco Carboidrato</span>
                <span v-if="proteina == true">Rico em proteínas</span>
                <span v-if="gluten == true">Sem glúten</span>
                <span v-if="nozes == true">Sem nozes</span>
                <span v-if="vegetariano == true">Vegetariano</span>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .cardReceita {
        background-color: $card-color;
        width: 300px;
        height: 400px;
    }

    .cardReceita img {
        width: 100%;
    }

    .ReceitaDetails {
        padding: 1rem;
    }

    .ReceitaDetails h2 {
        font-size: 1.5rem;
        font-weight: 500;
    }

    .tags-receita span {
        background-color: $card-color2;
        padding: .2rem;
    }
</style>