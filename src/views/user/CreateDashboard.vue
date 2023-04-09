<template>
    <HeaderAccions title="Crear Usuario" to="UserDashboard" />
    <!-- <Form :create="users.createUser" :form="form" button-text="Crear">
        <FormGroup label="Nombre" :error="users.errors ? users.errors.name : []">
            <input class="input" type="text" id="name" v-model="form.name">
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
        <FormGroup label="Contraseña" :error="users.errors ? users.errors.password : []">
            <input type="password" id="password" v-model="form.password">
        </FormGroup>
        <FormGroup label="Confirmacion de contraseña" :error="users.errors ? users.errors.password_confirmation : []">
            <input type="password" id="password_confirmation" v-model="form.password_confirmation">
        </FormGroup>
    </Form> -->
    <form @submit.prevent="users.createUser(form)" class="form">
        <div class="form__group">
            <label for="name">Nombre</label>
            <input class="input" type="text" id="name" v-model="form.name">
            <span v-if="users.errors && users.errors.name" class="form__error">{{ users.errors.name[0] }}</span>
        </div>
        <div class="form__group">
            <label for="lastname">Apellidos</label>
            <input type="text" id="lastname" v-model="form.lastname">
            <span v-if="users.errors && users.errors.lastname" class="form__error">{{ users.errors.lastname[0] }}</span>
        </div>
        <div class="form__group">
            <label for="email">Correo</label>
            <input type="email" id="email" v-model="form.email">
            <span v-if="users.errors && users.errors.email" class="form__error">{{ users.errors.email[0] }}</span>
        </div>
        <div class="form__group">
            <label for="phone">Teléfono</label>
            <input type="text" id="phone" v-model="form.phone">
            <span v-if="users.errors && users.errors.phone" class="form__error">{{ users.errors.phone[0] }}</span>
        </div>
        <div class="form__group">
            <label for="address">Dirección</label>
            <input type="text" id="address" v-model="form.address">
            <span v-if="users.errors && users.errors.address" class="form__error">{{ users.errors.address[0] }}</span>
        </div>
        <div class="form__group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" v-model="form.password">
            <span v-if="users.errors && users.errors.password" class="form__error">{{ users.errors.password[0] }}</span>
        </div>
        <div class="form__group">
            <label for="password_confirmation">Confirmacion de contraseña</label>
            <input type="password" id="password_confirmation" v-model="form.password_confirmation">
            <span v-if="users.errors && users.errors.password_confirmation" class="form__error">{{ users.errors.password_confirmation[0] }}</span>
        </div>
        <button type="submit">Crear</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import HeaderAccions from '../../components/headers/HeaderAccions.vue';
import Form from '../../components/forms/Form.vue';
import FormGroup from '../../components/forms/FormGroup.vue';
import { useUserStore } from '../../stores/userStore';

const users = useUserStore();

const form = ref({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    password_confirmation: ''
});

</script>

<style>

</style>