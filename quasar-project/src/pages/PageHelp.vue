<template>
    <q-page padding >
        <q-btn flat color="pink" icon="chevron_left" label="Back" to="/settings"/>
        <h5>
            <b class="text-pink">How To Use Awesome Todo</b>
        </h5>
        <p class="text-info">
            <b class="text-pink">Awesome ToDo (awesome-todo)</b>
            <br/>
            an awesome todo list application
            <br/>
            <b class="text-pink">1. Install the dependencies</b>
            <br/>
            ```bash
            yarn
            <br/>
            or
            <br/>
            npm install
            ```
            <br/>
            <b class="text-pink">2. Start the app in development mode (hot-code reloading, error reporting, etc.)</b>
            <br/>

            ```bash
            quasar dev
            ```
            <br/>

            <b class="text-pink">3. Build the app for production</b>
            <br/>
            ```bash
            quasar build
            ```
            <br/>

            <b class="text-pink">4. Customize the configuration</b>
            <br/>
            See [Configuring quasar.conf.js]
            <br/>
            <i>https://v1.quasar.dev/quasar-cli/quasar-conf-js</i>
        </p>
    </q-page>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
        },
        components: {
        }
    }
</script>

<style>
</style>