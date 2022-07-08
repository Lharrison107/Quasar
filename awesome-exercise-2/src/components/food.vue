<template>
    <div class="card shadow-1">
        <img :src="item.imgURL" width="198" height="180">
        <div class="card-content">
            <h1 class="text-primary">{{ item.title }}</h1>
            <p>{{ item.description }} </p>
            <p>
                <small>
                    <b>Delicousness:</b>
                </small>
                <b class="text-primary">
                    {{ item.delicousness }}/5
                </b>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: [ 'item', 'index' ]
    }
</script>

<style>
</style>