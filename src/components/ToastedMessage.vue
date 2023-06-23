<template>
    <div class="container">
        <p>Welcome {{ profileName }}</p>
        <h1>Hellloooooo</h1>
    </div>
    
    
</template>

<script>
export default {
    data() {
        return{
            profileName: localStorage.getItem('profile')

        }
    }
}

</script>

<style scoped>

    .container {
            height: 30vh;
            display: flex;
            justify-content: center;
            align-items: center;

    }

</style>