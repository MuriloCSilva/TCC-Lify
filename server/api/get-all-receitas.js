import { supabase } from "~/assets/supabase";

export default defineEventHandler(async (event) => {
    let receitas = await supabase
    .from('receias')
    .select('id, nome, texto, url_imagem')
    return receitas;
})