<template>
    <footer>

        <div class="logo">
            <img src="@/assets/dc.png" alt="">
        </div>

        <div class="copy">
            <span>Copyright © 2022 <a href="https://nogaradevcode.com">Nogara DevCode</a> </span>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterMain',
}
</script>



<style scoped>

footer{
    background-color: var(--bg-gray);
}

footer .logo > img{
    width: 200px;
    display: block;
    margin: auto;
}

footer .copy{
    background-color: var(--bg-dark);
    color: var(--white);
    text-align: center;
    padding: 1rem;
}

footer .copy a{
    color: var(--white);
}


</style>