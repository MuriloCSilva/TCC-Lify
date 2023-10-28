<script setup>
//----------------------------------------------------------------------------------------------------------------------------------------------
//  Variáveis do usuário
//----------------------------------------------------------------------------------------------------------------------------------------------
    const user = useSupabaseUser();
    const supabase = useSupabaseClient();
    const numberUsers = ref('')

    const { error, dataUsers, count } = await supabase
    .from('table')
    .select('*', { count: 'exact' })
    if (dataUsers) {
        numberUsers.value = dataUsers.count
        console.log(numberUsers)
    }
</script>
<template>
    <div class="card">
        <div class="info-holder">
            <Icon name="mdi:cog-outline" class="info-icon amarelo"/>
            <div>
                <p>Usuários</p>
                <h2>{{ numberUsers }}</h2>
            </div>
        </div>
        <div class="info-holder">
            <Icon name="mdi:cog-outline" class="info-icon vermelho"/>
            <div>
                <p>Receitas</p>
                <h2>14</h2>
            </div>
        </div>
        <div class="info-holder">
            <Icon name="mdi:cog-outline" class="info-icon verde"/>
            <div>
                <p>Anúncios</p>
                <h2>18</h2>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .amarelo {
        background-color: #ebba47;
    }

    .verde {
        background-color: #74c78d;
    }

    .vermelho {
        background-color: #cb4b62;
    }

   .card {
        width: 600px;
        background-color: $card-color;
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: $border-radius2;
   }

   .info-holder {
        display: flex;
        align-items: center;
        gap: 0 1rem;
   }

   .info-holder div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem 0;
   }

   .info-icon {
    font-size: 1.6rem;
        padding: 1rem;
        border-radius: 50%;
   }
</style>