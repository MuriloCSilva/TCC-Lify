<script setup>
//----------------------------------------------------------------------------------------------------------------------------------------
//  Váriáveis básicas para a pagina
//----------------------------------------------------------------------------------------------------------------------------------------
const user = useSupabaseUser();
const supabase = useSupabaseClient();
let receitas = ref([])
const nomeReceita = ref('');
const urlImagemReceita = ref('');
const ingredientesReceita = ref('');
const modoDePreparoReceita = ref('');

//----------------------------------------------------------------------------------------------------------------------------------------
//  Buscando data na database
//----------------------------------------------------------------------------------------------------------------------------------------
let { data } = await supabase
  .from('receitas')
  .select()
if (data) {
    receitas.value = data
}

</script>
<template>
    <Navbar class="navbar" />
    <NavbarMobile class="navbar-mobile" />
    <div class="grid_layout_receitas section">
        <div v-if="receitas" v-for="receitas in receitas" key="receita">
            <ReceitasComponent :receita="receitas" />
        </div>
    </div>
    
</template>
<style>
    .grid_layout_receitas {   
        padding: 0 10rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 15px;
    }

    @media screen and  (max-width: 768px) {
        .navbar {
            display: none;
        }
        .navbar-mobile {
            display: block;
        }

        .grid_layout_receitas {
            padding: 0 2rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 2rem 0;
        }
        
    }
</style>