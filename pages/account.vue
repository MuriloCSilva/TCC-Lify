<script setup>
//----------------------------------------------------------------------------------------------------------------------------------------
//  Definindo middleware da pagina
//----------------------------------------------------------------------------------------------------------------------------------------
definePageMeta({
  middleware: ['auth']
})

//----------------------------------------------------------------------------------------------------------------------------------------
//  Váriáveis básicas para a pagina
//----------------------------------------------------------------------------------------------------------------------------------------
const user = useSupabaseUser();
const userId = user.value.id;
const supabase = useSupabaseClient();
const userImageUrl = ref('');
const username = ref('');
const userNameProfile = ref('');
const loading = ref(true);
const userName = ref('');
const imagem = ref('');

//----------------------------------------------------------------------------------------------------------------------------------------
//  Verificando se o usuário está atenticado
//----------------------------------------------------------------------------------------------------------------------------------------
onMounted(() => {
  watchEffect(() => {
    if (!user.value) {
      navigateTo('/login')
    }
  })
})

//----------------------------------------------------------------------------------------------------------------------------------------
//  Buscando data na database
//----------------------------------------------------------------------------------------------------------------------------------------
let { data } = await supabase
  .from('user')
  .select(`*`)
  .eq('id', user.value.id)
  .single()
if (data) {
  loading.value = false;
  userImageUrl.value = data.user_image_url;
  username.value = data.username;
  userNameProfile.value = data.usernameProfile;
}

//----------------------------------------------------------------------------------------------------------------------------------------
//  Função para dar update nas informações do usuário
//----------------------------------------------------------------------------------------------------------------------------------------
async function updateProfile() {
  try {
    loading.value = true

    console.log(imagem.value)

    if(userName.value != "") {
      let { error } = await supabase
        .from('user')
        .update({username: userName.value})
        .eq('id', userId)
      if (error) throw error;      
    }
    if(imagem.value != "") {
      let { error } = await supabase
        .from('user')
        .update({user_image_url: imagem.value})
        .eq('id', userId)
      if (error) throw error;
    }
    if(userNameProfile.value != "") {
      let { error } = await supabase
        .from('user')
        .update({usernameProfile: userNameProfile.value})
        .eq('id', userId)
      if (error) throw error;
    }
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

</script>
<template>
    <Navbar class="navbar"/>
    <NavbarMobile class="navbar-mobile" />
    <div class="main_layout_user">
        <div class="user_infos">
            <div class="user_photo_edit">
                <img 
                  v-if="userImageUrl"
                  :src="userImageUrl" alt="">
            </div>
            <h2 v-if="username">{{ username }}</h2>
            <h2 v-else>{{ user.email }}</h2>
        </div>
        <div >
            <form action="" class="user_configs_container">
                <div class="user-input-holder">
                    <label for="Nome">Nome</label>
                    <input v-model="userName" type="text" class="username-input user-form" id="username" placeholder="Username">
                </div>
                <div class="user-input-holder">
                    <label for="nomeDeUsuario">Nome de Usuário</label>
                    <input v-model="userNameProfile" type="text" class="username-input user-form" id="username" placeholder="Nome de usuário">
                </div>
                <div class="user-input-holder">
                    <label for="email">Imagem</label>
                    <input v-model="imagem" type="text" class="email-input user-form" id="email" placeholder="Inserir URL da imagem">
                </div>
                <button class="save-changes-button" @click="updateProfile">Salvar</button>
            </form>
            
        </div>
    </div>
</template>
<style lang="scss">
    .main_layout_user {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px 0;
    }
    .user_infos {
        display: flex;
        align-items: center;
        width: 400px;
        justify-content: space-between;
    }
    .user_photo_edit {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        img {
            width: 5rem;
            border-radius: 50%;
        }
    }

    .user_configs_container {
        display: flex;
        flex-direction: column;
        width: 400px;
        gap: 1rem 0;
    }


    .user-input-holder {
        display: flex;
        flex-direction: column;
        gap: 7px;
    }

    .user-form {
        background-color: transparent;
        outline: none;
        border: 2px solid white;
        border-radius: $border-radius2;
        padding: 20px 30px;
        color: $text-color;
    }

    .save-changes-button {
        width: 100%;
        background-color: $main-color;
        border: none;
        color: $text-color;
        font-weight: bold;
        border-radius: $border-radius1;
        padding: 20px;
        transition: .3s;
    }

    .save-changes-button:hover {
        background-color: $main-color-hover;
        cursor: pointer;
        transition: .3s;
    }

    .signout-button {
      width: 100%;
        background-color: transparent;
        border: 2px solid white;
        color: $text-color;
        font-weight: bold;
        border-radius: $border-radius1;
        padding: 20px;
        transition: .3s;
        :hover {
          background-color: white;
          color: black;
          cursor: pointer;
        }
    }
    
//----------------------------------------------------------------------------------------------------------------------------------------
//  Responsividade para tablets pequenos e smartphones
//----------------------------------------------------------------------------------------------------------------------------------------

@media screen and  (max-width: 768px) {

    .navbar {
        display: none;
    }
    .navbar-mobile {
        display: block;
        margin-bottom: 2rem;
    }

    .user_infos {
      width: 300px;
    }

    .user_configs_container {
      width: 300px;
    }

}


</style>