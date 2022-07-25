<template>
    <form @submit.prevent="submitForm">
        <div class="row q-mb-md">
            <q-banner class="bg-cyan-1 text-center col">
                <template v-slot:avatar>
                    <q-icon name="how_to_reg" color="info" />
                </template>
                <slot></slot>
            </q-banner>
        </div>

        <div class="row q-mb-md">
            <q-input
              class="col"
              outlined
              v-model="formData.email"
              label="Email"
              ref="email"
              :rules="[ val => isValidEmailAddress(val) || 'Please use valid email address']"
              stack-label
            />
        </div>

        <div class="row q-mb-md">
            <q-input
                class="col"
                outlined
                v-model="formData.password"
                type="password"
                label="Password"
                stack-label
                lazy-rules
                ref="password"
                :rules="[ val => val.length >= 6 || 'Please use minimum of 6 characters', val => val.length < 25 || 'Please use maximum of 25 characters']"
            />
        </div>

        <div class="row q-mb-md">
            <q-space />
            <q-btn
                color="info"
                :label="button"
                type="submit"
            />
        </div>


    </form>
</template>

<script>
import { mapActions } from 'vuex'

    export default {
        props: ['button', 'tab'],
        data() {
            return {
                formData: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions('auth', ['registerUser', 'loginUser']),
            submitForm() {

                this.$refs.email.validate()
                this.$refs.password.validate()
                if(!this.$refs.email.hasError && !this.$refs.password.hasError){
                    if(this.tab == 'login') {
                        this.loginUser(this.formData)
                    } else {
                        this.registerUser(this.formData)
                    }
                }
            },

            isValidEmailAddress(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        },
        components: {
        }
    }
</script>

<style>

</style>
