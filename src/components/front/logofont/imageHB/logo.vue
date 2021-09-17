<template>
    <div class="cont">
        <header>
            <img class="image" src="../../../../assets/dounia-logo.png" alt="saaaaa">
        </header>
    </div>

</template>
<script>
    export default {

    }
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    @media screen and (min-width:1281px) {

        header {
            width: 100%;
            height: 20%;
            display: flex;
            justify-content: center;
        }

        .image {

            width: 28%;
        }

    }

    @media screen and (min-width:1025px) and (max-width:1280px) {

        header {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .image {

            width: 31%;
        }

    }

    @media screen and (min-width:769px) and (max-width:1024px) {

        header {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .image {

            width: 21%;
            margin-top: 3%;
        }

    }

    @media screen and (min-width:320px) and (max-width:768px) {

        header {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .image {

            width: 11%;
            margin-top: 16%;
        }

    }
</style>∏