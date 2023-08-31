<template>
    <section>
        <header>
            <h1 class="name">Cristian</h1>
            <p class="job">Full Stack Engineer</p>
        </header>
        <div class="content">
            <img :src="imageUrl" draggable="false" />
            <p>hello@cristiancosano.com</p>
            <p>Base in Cordoba, Spain</p>
            <p class="copyright">&copy; Cristian Cosano. All rights reserved</p>
            <ul class="social-networks">
                <li>
                    <NuxtLink to="https://twitter.com/cristiancosanoc" aria-label="Twitter">
                        <Icon name="ri:twitter-line" size="1.25rem"/>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="https://www.linkedin.com/in/cristiancosano/" aria-label="Linkedin">
                        <Icon name="ri:linkedin-line" size="1.25rem"/>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="https://github.com/cristiancosano" aria-label="Github">
                        <Icon name="ri:github-line" size="1.25rem"/>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="https://gitlab.com/cristiancosano" aria-label="Gitlab">
                        <Icon name="ri:gitlab-line" size="1.25rem"/>
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <footer>
            <button class="btn">
                <span class="material-icons-round">mail_outline</span>
                Hire me!
            </button>
        </footer>
    </section>
</template>

<script setup>
const imageUrl = ref('/images/cristiancosano-profile-image.png');
</script>

<style scoped lang="scss">
section {
    //border: 0.063rem solid #565656;
    //border-radius: 2rem;
    height: 100%;
    width: 100%;
    display: flex;
    gap: 1.9rem;
    flex-direction: column;
    text-align: center;
}
picture, .content:deep(img)  {
    display: block;
    margin: 0 auto;
    width: min(100%, 16rem);
    aspect-ratio: 6/5;
    border-radius: 2rem;
    object-fit: cover;
    object-view-box: inset(0% 0% 5% 0%);
    filter: grayscale(33%);
}
header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .name{
        font-size: 2.5rem;
        font-weight: 700;
        margin: 0;
    }
    .job{
        color: white;
        flex: 0 0 63px;
        font-size: .875rem;
        font-weight: 300;
        margin: 0;
        text-align: right;
    }
}

.content{
    p{
        font-size: 1.3rem;
        font-weight: 200;
        color: white;
    }
    .copyright{
        color: #999;
        font-size: 14px;
    }
    .social-networks{
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        justify-content: space-evenly;
        & a{
            color: #999;
            width: 3rem;
            aspect-ratio: 1/1;
            border: 2px solid #999;
            cursor: pointer;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all .3s ease;
            margin-top: 1.25rem;
            &:hover{
                border: 2px solid var(--primary-color);
                &:deep(*)  {
                    fill: var(--primary-color)!important;
                }
            }
        }
    }
}

footer {
    .btn{
        width: 100%;
        gap: 0.5rem;
    }
}
</style>
