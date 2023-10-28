<script setup>
const supabase = useSupabaseClient();
const numeroAnuncios = ref('');

//----------------------------------------------------------------------------------------------------------------------------------------
//  Buscando número de usuários, anúncios e receitas
//----------------------------------------------------------------------------------------------------------------------------------------
let { data } = await supabase
  .from('anuncios')
  .select()
if (data) {
  numeroAnuncios.value = data.length;
}

</script>
<template>
    <div class="card-anuncios">
        <span><Icon name="mdi:analytics" class="insights-icon"/></span>
        <div class="middle">
            <div class="left">
                <h3>Anúncios</h3>
                <h1>{{ numeroAnuncios }}</h1>
            </div>
            <div class="progress">
                <svg class="insights-progress">
                    <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div class="number">
                    <p>100%</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>