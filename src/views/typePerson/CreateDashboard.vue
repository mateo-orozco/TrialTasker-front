<template>
    <HeaderAccions title="Crear Tipo de Persona" to="TypePersonDashboard" />
    <!-- <Form :create="typePersons.createTypePerson" :form="form" button-text="Crear">
        <FormGroup label="Nombre" :error="typePersons.errors ? typePersons.errors.type_person_name : []">
            <input type="text" id="type_person_name" v-model="form.type_person_name">
        </FormGroup>
    </Form> -->
    <form @submit.prevent="typePersons.createTypePerson(form)" class="form">
        <div>
            <label for="type_person_name">Nombre</label>
            <input type="text" id="type_person_name" v-model="form.type_person_name">
        </div>
        <button type="submit">Crear</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import HeaderAccions from '../../components/headers/HeaderAccions.vue';
import Form from '../../components/forms/Form.vue';
import FormGroup from '../../components/forms/FormGroup.vue';
import { useTypePersonStore } from '../../stores/typePersonStore';


const typePersons = useTypePersonStore();

const form = ref({
    type_person_name: ''
});
</script>

<style></style>