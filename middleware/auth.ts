export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser()
  
    if (!user.value && to.path === '/account') {
      return navigateTo('/login')
    } else if (user.value && to.path === '/login') {
      return navigateTo('/account')
    }
  })