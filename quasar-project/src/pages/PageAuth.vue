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
                    <LoginRegister
                        :tab="tab"
                        button="Login"
                    >
                        <b class="text-info">
                            ~ Login ~
                        </b>
                    </LoginRegister> 
                </q-tab-panel>

                <q-tab-panel name="register">
                    <LoginRegister
                        :tab="tab"
                        button="Create"
                    >
                        <b class="text-info">
                            ~ Register for An Account ~
                        </b>
                    </LoginRegister>        
                </q-tab-panel>
            </q-tab-panels>
      </q-card>
    </q-page>
</template>

<script>

import { ref } from 'vue'
import LoginRegister from 'src/components/Auth/Login-Register.vue'

    export default {
        setup () {
            return {
            tab: ref('login')
            }
        },
        data() {
            return {
        }
        },
        methods: {
        },
        components: {
            LoginRegister
        }
    }
</script>

<style>
    .auth-tabs {
        max-width: 650px;
        margin: 0 auto;
    }
</style>






