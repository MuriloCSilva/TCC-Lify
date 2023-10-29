<script setup>
//----------------------------------------------------------------------------------------------------------------------------------------
//  Váriáveis básicas para a pagina
//----------------------------------------------------------------------------------------------------------------------------------------
const user = useSupabaseUser();
const supabase = useSupabaseClient();
let receitas = ref([])
let criarReceitaMenuSwitch = ref(false)
const nomeReceita = ref('');
const urlImagemReceita = ref('');
const ingredientesReceita = ref('');
const modoDePreparoReceita = ref('');
const pesoReceita = ref('');
const kcalReceita = ref('')

//Tags receitas
const nozes = ref(false);
const proteina = ref(false);
const vegetariano = ref(false);
const lowCarb = ref(false);
const lactose = ref(false);
const gluten = ref(false);
const conservante = ref(false);

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
  .from('receitas')
  .select()
if (data) {
    receitas.value = data
}

//----------------------------------------------------------------------------------------------------------------------------------------
//  Função switch menu criar receita
//----------------------------------------------------------------------------------------------------------------------------------------
function switchMenuCriarReceita() {
    criarReceitaMenuSwitch.value = !criarReceitaMenuSwitch.value
}

//----------------------------------------------------------------------------------------------------------------------------------------
//  Função criar receita
//----------------------------------------------------------------------------------------------------------------------------------------
async function criarReceita() {

    const valoresParaSeremInseridos = {
        nome: nomeReceita.value,
        url_imagem: urlImagemReceita.value,
        ingredientesReceita: ingredientesReceita.value,
        modoDePreparoReceita: modoDePreparoReceita.value,
        conservante: conservante.value,
        gluten: gluten.value,
        lactose: lactose.value,
        lowCarb: lowCarb.value,
        proteina: proteina.value,
        nozes: nozes.value,
        vegetariano: vegetariano.value,
        peso: pesoReceita.value,
        kcal: kcalReceita.value
    };

    let { error } = await supabase
        .from('receitas')
        .insert(valoresParaSeremInseridos)
    if (error) {
        throw error
    };

}

</script>
<template>
    <div class="container">
        <div v-if="criarReceitaMenuSwitch" class="form-criar-receita">
            <form action="">
                <span @click="switchMenuCriarReceita" class="criar-receitas-close-button"><Icon name="mdi:close-thick"/></span>
                <h2>Criar Receita</h2>
                <input v-model="nomeReceita" type="text" required placeholder="Insira o nome da receita">
                <input v-model="urlImagemReceita" type="text" required placeholder="Insira a URL da imagem da receita">
                <textarea v-model="ingredientesReceita" required rows="7" placeholder="Insira os ingredientes da receita aqui" maxlength="500"></textarea>
                <textarea v-model="modoDePreparoReceita" required rows="7" placeholder="Insira o modo de preparo da receita aqui" maxlength="500"></textarea>
                <div class="kcal-peso-receita">
                    <input v-model="pesoReceita" type="number" name="" id="" placeholder="Peso da receita">
                    <input v-model="kcalReceita" type="number" name="" id="" placeholder="Calorias da receita">
                </div>
                <div class="tags-wrapper">
                    <div class="tags-receita-inputs">
                        <div class="tag-receita">
                            <label class="container-checkbox">
                                <input v-model="nozes" checked="checked" type="checkbox">
                                <div class="checkmark"></div>
                            </label>
                            <p>Sem Nozes</p>
                        </div>
                        <div class="tag-receita">
                            <label class="container-checkbox">
                                <input v-model="proteina" checked="checked" type="checkbox">
                                <div class="checkmark"></div>
                            </label>
                            <p>Rico em Proteina</p>
                        </div>
                        <div class="tag-receita">
                            <label class="container-checkbox">
                                <input v-model="vegetariano" checked="checked" type="checkbox">
                                <div class="checkmark"></div>
                            </label>
                            <p>Vegetariano</p>
                        </div>
                        <div class="tag-receita">
                            <label class="container-checkbox">
                                <input v-model="lowCarb" checked="checked" type="checkbox">
                                <div class="checkmark"></div>
                            </label>
                            <p>LowCarb</p>
                        </div>
                        
                    </div>
                    <div class="tags-receita-inputs">
                        <div class="tag-receita">
                            <label class="container-checkbox">
                                <input v-model="lactose" checked="checked" type="checkbox">
                                <div class="checkmark"></div>
                            </label>
                            <p>Sem Lactose</p>
                        </div>
                        <div class="tag-receita">
                            <label class="container-checkbox">
                                <input v-model="gluten" checked="checked" type="checkbox">
                                <div class="checkmark"></div>
                            </label>
                            <p>Sem Glúten</p>
                        </div>
                        <div class="tag-receita">
                            <label class="container-checkbox">
                                <input v-model="conservante" checked="checked" type="checkbox">
                                <div class="checkmark"></div>
                            </label>
                            <p>Sem Conservantes</p>
                        </div>
                    </div>
                </div>
                
                <button @click="criarReceita" >Salvar</button>
            </form>
            
        </div>
        <aside>
            <div class="sidebar-top">
                <span class="sidebar-close-button"><Icon name="mdi:close-thick"/></span>
                <img src="@/assets/images/Lify_wide_png.png" alt="">
            </div>
            <div class="sidebar">
                <NuxtLink class="sidebar-link" to="./">
                        <span><Icon name="mdi:view-dashboard" class="sub_menu_icon"/></span>
                        <h3>Dashboard</h3>
                    </NuxtLink>
                    <NuxtLink class="sidebar-link active" to="./receitas">
                        <span><Icon name="mdi:receipt-text" class="sub_menu_icon"/></span>
                        <h3>Receitas</h3>
                    </NuxtLink>
                    <NuxtLink class="sidebar-link" to="../">
                        <span><Icon name="mdi:keyboard-backspace" class="sub_menu_icon"/></span>
                        <h3>Voltar</h3>
                    </NuxtLink>
                    <NuxtLink class="sidebar-link">
                        <span><Icon name="mdi:logout" class="sub_menu_icon"/></span>
                        <h3>Logout</h3>
                    </NuxtLink>
                    
            </div>
        </aside>
        <main>
            <div class="top-receitas">
                <input type="text" placeholder="Pesquisar receita..." class="receitas-search-bar">
                <button @click="switchMenuCriarReceita">+ Criar Receita</button>
            </div>
            <div class="grid_layout_receitas section">
                <div v-if="receitas" v-for="receita in receitas" key="receita">
                    <ReceitasComponentAdmin :receita="receitas" />
                </div>
            </div>
        </main>
    </div>
</template>
<style lang="scss">

    .form-criar-receita {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center
    }

    .form-criar-receita form {
        background-color: $card-color;
        border-radius: $border-radius3;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem 0;
        width: 400px;
    }

    .form-criar-receita form h2 {
        text-align: center;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }

    .form-criar-receita form span {
        display: block;
        position: absolute;
        font-size: 1.2rem;
        left: 58rem;
    }

    .form-criar-receita form span:hover {
        cursor: pointer;
        color: rgb(195, 195, 195);
    }

    .form-criar-receita form input[type=text] {
        background-color: $card-color2;
        border-radius: $border-radius2;
        border: none;
        outline: none;
        padding: .6rem 1rem;
        color: $text-color;
    }
    
    .form-criar-receita form textarea {
        background-color: $card-color2;
        border-radius: $border-radius2;
        padding: .6rem 1rem;
        outline: none;
        border: none;
        color: $text-color;
        resize: none;
    }

    .form-criar-receita form button {
        background-color: transparent;
        border: 2px solid $main-color;
        border-radius: $border-radius2;
        padding: .6rem 1rem;
        color: $main-color;
        font-weight: bold;
        transition: .3s ease;
    }

    .form-criar-receita form button:hover {
        background-color: $main-color;
        color: white;
        cursor: pointer;
    }

    .kcal-peso-receita {
        display: flex;
        justify-content: space-between;
    }

    .kcal-peso-receita input {
        background-color: $card-color2;
        border-radius: $border-radius2;
        padding: .6rem 1rem;
        outline: none;
        border: none;
        color: $text-color;
    }

    .tags-wrapper {
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
    }

    .tags-receita-inputs {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        gap: 0;
    }


    /* Hide the default checkbox */
.container-checkbox input {
  display: none;
}

.container-checkbox {
    display: flex;
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 20px;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}

/* Create a custom checkbox */
.checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 1em;
  width: 1em;
  background-color: #2196F300;
  border-radius: 0.25em;
  transition: all 0.25s;
}

/* When the checkbox is checked, add a blue background */
.container-checkbox input:checked ~ .checkmark {
  background-color: $main-color;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  transform: rotate(0deg);
  border: 0.1em solid $text-color;
  left: 0;
  top: 0;
  width: 1.05em;
  height: 1.05em;
  border-radius: 0.25em;
  transition: all 0.25s, border-width 0.1s;
}

/* Show the checkmark when checked */
.container-checkbox input:checked ~ .checkmark:after {
  left: 0.35em;
  top: 0.15em;
  width: 0.25em;
  height: 0.5em;
  border-color: $text-color white white $text-color;
  border-width: 0 0.15em 0.15em 0;
  border-radius: 0em;
  transform: rotate(45deg);
}

//----------------------------------------------------------------------------------------------------------------------------------------
//  Main receitas
//----------------------------------------------------------------------------------------------------------------------------------------

    main {
        width: 100%;
    }

    .top-receitas {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .top-receitas input {
        padding: .5rem 1.2rem;
        border-radius: 5rem;
        width: 70%;
        border: none;
    }

    .top-receitas button {
        background-color: $main-color;
        padding: .5rem 1rem;
        border-radius: $border-radius1;
        border: none;
        outline: none;
    }

    .top-receitas button:hover {
        background-color: $main-color-hover;
        cursor: pointer;
    }

    .grid_layout_receitas {   
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 15px;
        margin-top: 3rem;
    }
</style>