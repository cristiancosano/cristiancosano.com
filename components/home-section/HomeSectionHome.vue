<template>
    <section>
        <h1>Say Hi from <span class="text-primary">Cristian</span>, Full Stack Engineer</h1>
        <p> I'm a passionate full-stack engineer who thrives on creating elegant and streamlined solutions. With a love for simplicity, I bring a unique perspective to every project. Let's build something remarkable together!</p>

        <div class="stats">
            <p>
                <span class="text-primary">5+</span>
                Years of experience
            </p>
            <p>
                <span class="text-primary">2+</span>
                Working for renowned companies.
            </p>
        </div>
    </section>
</template>

<style scoped lang="scss">

.stats{
    margin-top: 16rem;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 3rem;
    text-transform: uppercase;
    .text-primary{
        color: var(--primary-color);
        display: block;
        font-size: 3rem;
        margin-bottom: 2rem;
    }
}
</style>
