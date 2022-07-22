<template>
    <q-page padding>
        <q-card class="auth-tabs">
            <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                active-color="info"
                indicator-color="info"
                align="justify"
                narrow-indicator
            >
            <q-tab name="login" label="Login" />
            <q-tab name="register" label="Register" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="login">
                    <div class="text-h6">Login</div>
                    User Name:
                    Password:
                </q-tab-panel>

                <q-tab-panel name="register">
                    <Register />         
                </q-tab-panel>
            </q-tab-panels>
      </q-card>
    </q-page>
</template>

<script>
import Register from 'src/components/Auth/register.vue'
import { ref } from 'vue'

    export default {
        setup () {
            return {
            tab: ref('register')
            }
        },
        data() {
            return {
        }
        },
        methods: {
        },
        components: {
    Register
}
    }
</script>

<style>
    .auth-tabs {
        max-width: 650px;
        margin: 0 auto;
    }
</style>






