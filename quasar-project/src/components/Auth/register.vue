<template>
    <form @submit.prevent="submitForm">
        <div class="row q-mb-md">
            <q-banner class="bg-cyan-1 text-center col">
                <template v-slot:avatar>
                    <q-icon name="how_to_reg" color="info" />
                </template>
                <b class="text-info">Create An Account</b>
            </q-banner>
        </div>

        <div class="row q-mb-md">
            <q-input
              class="col"
              outlined
              v-model="formData.email"
              label="Email"
              stack-label
              :rules="[ val => isValidEmailAddress(val) || 'Please enter valid email address']"
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
            />
        </div>

        <div class="row q-mb-md">
            <q-space />
            <q-btn
                color="info"
                label="Create"
                type="submit"
            />
        </div>


    </form>
</template>

<script>
    export default {
        data() {
            return {
                formData: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            submitForm() {
                console.log('submit form')
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
