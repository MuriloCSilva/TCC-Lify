<script>
    const user = useSupabaseUser();
    const userId = user.value.id;
    const supabase = useSupabaseClient();
    const userImageUrl = ref('');
    const username = ref('');
    const userNameProfile = ref('');
    const loading = ref(true);
    const userName = ref('');
    const imagem = ref('');

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
</script>
<template>

</template>