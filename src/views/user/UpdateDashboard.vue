<template>
    <HeaderAccions title="Actualizar Usuario" to="UserDashboard" />
    <!-- <Form :create="users.updateUser" :form="form" button-text="Actualizar">
        <FormGroup label="Nombre" :error="users.errors ? users.errors.name : []">
            <input type="text" id="name" v-model="form.name">
        </FormGroup>
        <FormGroup label="Apellidos" :error="users.errors ? users.errors.lastname : []">
            <input type="text" id="lastname" v-model="form.lastname">
        </FormGroup>
        <FormGroup label="Correo" :error="users.errors ? users.errors.email : []">
            <input type="email" id="email" v-model="form.email">
        </FormGroup>
        <FormGroup label="Teléfono" :error="users.errors ? users.errors.phone : []">
            <input type="text" id="phone" v-model="form.phone">
        </FormGroup>
        <FormGroup label="Dirección" :error="users.errors ? users.errors.address : []">
            <input type="text" id="address" v-model="form.address">
        </FormGroup>
        
    </Form> -->
    <form @submit.prevent="users.updateUser(form)" class="form" button-text="Actualizar">
        <div>
            <label for="name">Nombre</label>
            <input type="text" id="name" v-model="form.name">
        </div>
        <div>
            <label for="lastname">Apellidos</label>
            <input type="text" id="lastname" v-model="form.lastname">
        </div>
        <div>
            <label for="email">Correo</label>
            <input type="email" id="email" v-model="form.email">

        </div>
        <div>
            <label for="phone">Teléfono</label>
            <input type="text" id="phone" v-model="form.phone">

        </div>
        <div>
            <label for="address">Dirección</label>
            <input type="text" id="address" v-model="form.address">

        </div>
        
        <button type="submit">Actualizar</button>
    </form>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import HeaderAccions from '../../components/headers/HeaderAccions.vue';
import Form from '../../components/forms/Form.vue';
import FormGroup from '../../components/forms/FormGroup.vue';
import { useUserStore } from '../../stores/userStore';
import { useRoute } from 'vue-router';

const users = useUserStore();

const route = useRoute();

const form = ref({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    password_confirmation: ''
});

onMounted(async () => {
    await users.getUser(route.params.id);
    form.value = {
        id: users.user.id,
        name: users.user.name,
        lastname: users.user.lastname,
        email: users.user.email,
        phone: users.user.phone,
        address: users.user.address,
        password: '',
        password_confirmation: ''
    };
    
});
</script>

<style>

</style>