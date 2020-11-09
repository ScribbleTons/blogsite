<template>
<div>
    <!-- The header -->
    <header>
        <slot name="header"></slot>
    </header>

    <!-- the page content -->
    <main>
        <slot></slot>
    </main>

    <!-- the footer -->
    <footer>
        <slot name="footer"></slot>

    </footer>
</div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    data() {

    }
}
</script>

<style lang="css">
</style>
