<template>
    <ul>
        <li v-for="section of sections">
            <NuxtLink :to="`/#${section.id}`" :class="{ 'anchor-active': active === section.id }">
                <span class="material-icons-outlined">{{ section.icon }}</span>
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup>
defineProps({
    sections: Array,
    active: String,
})
</script>

<style scoped lang="scss">
ul{
    
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    li{
        a{
            color: #999;
            transition: color .2s ease-in-out;

            &.anchor-active{
                color: var(--primary-color);
            }
        }
        
        font-size: 1.5rem;
        font-weight: 600;
        cursor: pointer;
        &:hover{
            color: var(--primary-color);
        }
        padding: 0 1rem;
    }
}
</style>