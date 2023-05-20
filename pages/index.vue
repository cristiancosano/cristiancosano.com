<template>
    <div class="container">
        <aside class="left-sidebar">
            <ProfileResume  />
        </aside>
        <main>
            <Component 
                :is="section.component"
                :id="section.id"
                :key="section.id" 
                v-for="section of sections"
            />
        </main>
        <aside class="right-sidebar">
            <TheMenu :sections="sections" :active="activeAnchor"  />
        </aside>
    </div>
</template>

<script setup>
import HomeSectionHome from '@/components/home-section/HomeSectionHome.vue';
import HomeSectionAbout from '@/components/home-section/HomeSectionAbout.vue';
import HomeSectionResume from '@/components/home-section/HomeSectionResume.vue';
// import HomeSectionServices from '@/components/home-section/HomeSectionServices.vue';
// import HomeSectionSkills from '@/components/home-section/HomeSectionSkills.vue';
// import HomeSectionPortfolio from '@/components/home-section/HomeSectionPortfolio.vue';
// import HomeSectionTestimonial from '@/components/home-section/HomeSectionTestimonial.vue';
// import HomeSectionContact from '@/components/home-section/HomeSectionContact.vue';


const sections = ref([
    {
        id: 'home',
        component: HomeSectionHome,
        icon: 'home',
    },
    {
        id: 'about',
        component: HomeSectionAbout,
        icon: 'person',
    },
    {
        id: 'resume',
        component: HomeSectionResume,
        icon: 'business_center',
    },
    // {
    //     id: 'services',
    //     component: HomeSectionServices,
    //     icon: 'list',
    // },
    // {
    //     id: 'skills',
    //     component: HomeSectionSkills,
    //     icon: 'interests',
    // },
    // {
    //     id: 'portfolio',
    //     component: HomeSectionPortfolio,
    //     icon: 'grid_on',
    // },
    // {
    //     id: 'testimonial',
    //     component: HomeSectionTestimonial,
    //     icon: 'chat',
    // },
    // {
    //     id: 'contact',
    //     component: HomeSectionContact,
    //     icon: 'email',
    // }
]);

const activeAnchor = ref(undefined);

onMounted(() => {
    activeAnchor.value = window.location.hash.replace('#', '') || 'home';
    window.addEventListener('scroll', debouncedCheckActiveMenu);
});

const debouncedCheckActiveMenu = useDebounceFn(() => {
    const scrollPosition = window.scrollY + 100;
    sections.value.forEach(section => {
        const sectionHeight = document.getElementById(section.id).offsetHeight;
        const sectionTop = document.getElementById(section.id).offsetTop - 100;
        const sectionBottom = sectionTop + sectionHeight;
        if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){
            activeAnchor.value = section.id;
        }
    });
}, 50);


onUnmounted(() => {
    window.removeEventListener('scroll', () => {});
});
</script>

<style scoped lang="scss">
.container{
    //padding: 4.25rem 0;
}
.left-sidebar{    
    max-width: 485px;
    width: 100%;
    max-height: 98%;
    border-radius: 30px;
    border: 1px solid #565656;
    position: fixed;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    padding: 50px;
    display: flex;
    z-index: 10;
    @media (max-width: 2000px){
        max-width: 400px;
    }

    @media (max-width: 1555px){
        max-width: 350px;
        padding: 30px;
    }
    @media (max-width: 1220px){
        position: relative;
        max-width: 767px;
        left: 0;
        margin: auto;
        top: 0;
        transform: translateY(0);
        margin-top: 20px;
        display: none;
    }   



}

main{
    max-width: 1150px;
    padding: 0 15px;
    margin: auto;
    &:deep(> *) {
        max-width: 770px;
        width: 100%;
        margin-left: auto;
        padding: 68px 0;
        @media (max-width: 1220px){
            padding: 0;
            max-width: 80%;
            margin: 0 auto;
        }
    }
}

.right-sidebar{
    flex-direction: column;
    border: 1px solid #575757;
    border-radius: 30px;
    position: fixed;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    /* width: 55px; */
    text-align: center;
    gap: 20px;
    padding: 24px 0;
    background: #1f1f1f;
    z-index: 20;
}
</style>