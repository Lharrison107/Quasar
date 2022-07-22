<template>
    <form>
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
        },
        components: {
        }
    }
</script>

<style>

</style>
