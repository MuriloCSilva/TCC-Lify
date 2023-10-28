<script setup>
const route = useRoute()
const idReceita = route.params.id;
const supabase = useSupabaseClient()
const nomeReceita = ref('');
const imagemReceita = ref('');
const ingredientesReceita = ref('');
const modoDePreparoReceita = ref('');
const pesoReceita = ref('');
const kcalReceita = ref('');

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
        .eq('id', idReceita)
        .single()
    if (data) {
        nomeReceita.value = data.nome,
        imagemReceita.value = data.url_imagem,
        ingredientesReceita.value = data.ingredientesReceita,
        modoDePreparoReceita.value = data.modoDePreparoReceita,
        nozes.value = data.nozes,
        proteina.value = data.proteina,
        vegetariano.value = data.vegetariano,
        lowCarb.value = data.lowCarb,
        lactose.value = data.lactose,
        gluten.value = data.gluten,
        conservante.value = data.conservante,
        pesoReceita.value = data.peso,
        kcalReceita.value = data.kcal
    }

</script>
<template>
        <Navbar class="navbar" />
        <NavbarMobile class="navbar-mobile" />
        <main class="main-receita">
                <div class="receita-content">
                        <div class="top-receita">
                                <img :src="imagemReceita" alt="" class="imagem-receita">
                                <div class="valores-receitas">
                                        <h1>{{ nomeReceita }}</h1>
                                        <div class="cards-receita">
                                                <div class="card-valores-receita">
                                                        <span class="pesoReceita">peso</span>
                                                        <p>{{ pesoReceita }}g</p>
                                                        
                                                </div>
                                                <div class="card-valores-receita">
                                                        <span class="kcalReceitas">kcal</span>
                                                        <p>{{ kcalReceita }}</p>
                                                </div>
                                        </div>
                                        <div class="tags-receita">
                                                <div v-if="conservante == true" class="tag-receita">
                                                        <img src="@/assets/images/tags-receitas/conservantes.png" alt="">
                                                        <p>Sem conservante</p>
                                                </div>
                                                <div v-if="nozes == true" class="tag-receita">
                                                        <img src="@/assets/images/tags-receitas/sem-nozes.png" alt="">
                                                        <p>Sem nozes</p>
                                                </div>
                                                <div v-if="gluten == true" class="tag-receita">
                                                        <img src="@/assets/images/tags-receitas/sem-gluten.png" alt="">
                                                        <p>Sem glúten</p>
                                                </div>
                                                <div v-if="lactose == true" class="tag-receita">
                                                        <img src="@/assets/images/tags-receitas/laticinios.png" alt="">
                                                        <p>Sem laticinios</p>
                                                </div>
                                                <div v-if="lowCarb == true" class="tag-receita">
                                                        <img src="@/assets/images/tags-receitas/lowCarb.png" alt="">
                                                        <p>Baixa Caloria</p>
                                                </div>
                                                <div v-if="proteina == true" class="tag-receita">
                                                        <img src="@/assets/images/tags-receitas/proteina.png" alt="">
                                                        <p>Rico em Proteína</p>
                                                </div>
                                                <div v-if="vegetariano == true" class="tag-receita">
                                                        <img src="@/assets/images/tags-receitas/vegetariano.png" alt="">
                                                        <p>Vegetariano</p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div class="descricao-receita">
                                <h3>Ingredientes</h3>
                                <p>{{ ingredientesReceita }}</p>
                                <h3>Modo de preparo</h3>
                                <p>{{ modoDePreparoReceita }}</p>
                        </div>

                </div>
        </main>
</template>
<style lang="scss">

.main-receita {
        display: flex;
        justify-content: center;
        width: 90%;
}

.main-receita .receita-content {
        width: 800px;
}

.main-receita .top-receita {
        display: flex;
        gap: 0 2rem;
}

.main-receita .top-receita img {
        width: 500px;
        border-radius: $border-radius2;
}

.main-receita .cards-receita {
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
}

.card-valores-receita {
        display: flex;
        align-items: center;
}

.card-valores-receita span {
        background-color: $main-color-hover;
        padding: .4rem;
        border-radius: .3rem;
        height: fit-content;
}

.card-valores-receita p {
        margin-left: .7rem;
}

.descricao-receita {
        margin-top: 2rem;
}

.descricao-receita h3 {
        font-size: 1.4rem;
}

.descricao-receita p {
        color: $subtext-color;
}

.tags-receita {
        display: flex;
        justify-content: space-evenly;
        margin-top: 3rem;
        gap: 0 1rem;
}

.tag-receita {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80px;
}

.tag-receita img {
        max-width: 60px;
}

.tag-receita p {
        color: $subtext-color;
        text-align: center;
}

//----------------------------------------------------------------------------------------------------------------------------------------
//  Responsividade para tablets pequenos e smartphones
//----------------------------------------------------------------------------------------------------------------------------------------

@media screen and  (max-width: 1200px) {
        .receita-content {
                padding: 0 4rem;
        }

        .main-receita .top-receita img {
                width: 400px;
        }
}

@media screen and  (max-width: 768px) {
        .navbar {
            display: none;
        }
        .navbar-mobile {
            display: block;
        }

        .top-receita {
                flex-direction: column;
                align-items: center;
        }

        .main-receita .top-receita img {
                width: 200px;
                border-radius: $border-radius2;
        }

        .descricao-receita {
                padding: 0 2rem;
        }

        
}

</style>