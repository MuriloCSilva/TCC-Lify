<script setup>
const supabase = useSupabaseClient();
const numeroUsuarios = ref('');

//----------------------------------------------------------------------------------------------------------------------------------------
//  Buscando número de usuários, anúncios e receitas
//----------------------------------------------------------------------------------------------------------------------------------------
let { data } = await supabase
  .from('user')
  .select()
if (data) {
  numeroUsuarios.value = data.length;
}

</script>
<template>
    <div class="card-users">
        <span><Icon name="mdi:analytics" class="insights-icon"/></span>
        <div class="middle">
            <div class="left">
                <h3>Usuários</h3>
                <h1>{{ numeroUsuarios }}</h1>
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