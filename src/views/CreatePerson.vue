<template>
    <HeaderAccions title="Crear Persona" to="CasosActivos" />
    <!-- <Form :create="persons.createPerson" :form="form" button-text="Crear">
        <FormGroup label="Tipo de persona" :error="persons.errors ? persons.errors.per_type_person_id : []">
            <select class="select" id="per_type_person_id" v-model="form.per_type_person_id">
                <option value="">Seleccione</option>
                <option v-for="typePerson in typePersons.typePersonsAll" :key="typePerson.id" :value="typePerson.id">{{
                    typePerson.type_person_name }}</option>
            </select>
        </FormGroup>
        <FormGroup label="Nombre" :error="persons.errors ? persons.errors.per_name : []">
            <input class="input" type="text" id="per_name" v-model="form.per_name">
        </FormGroup>
        <FormGroup label="Apellido" :error="persons.errors ? persons.errors.per_lastname : []">
            <input class="input" type="text" id="per_lastname" v-model="form.per_lastname">
        </FormGroup>
        <FormGroup label="Correo" :error="persons.errors ? persons.errors.per_email : []">
            <input class="email" type="text" id="per_email" v-model="form.per_email">
        </FormGroup>
        <FormGroup label="Telefono" :error="persons.errors ? persons.errors.per_phone : []">
            <input class="input" type="text" id="per_phone" v-model="form.per_phone">
        </FormGroup>
        <FormGroup label="Direccion" :error="persons.errors ? persons.errors.per_address : []">
            <input class="input" type="text" id="per_address" v-model="form.per_address">
        </FormGroup>
        <FormGroup label="Nit" :error="persons.errors ? persons.errors.per_nit : []">
            <input class="input" type="text" id="per_nit" v-model="form.per_nit">
        </FormGroup>
        <FormGroup label="Fecha de expedicion" :error="persons.errors ? persons.errors.per_issue_nit : []">
            <input class="date" type="date" id="per_issue_nit" v-model="form.per_issue_nit">
        </FormGroup>
        <FormGroup label="Numero de ministerio" :error="persons.errors ? persons.errors.per_num_ministry : []">
            <input class="number" type="text" id="per_num_ministry" v-model="form.per_num_ministry">
        </FormGroup>
        <FormGroup label="Numero de despacho" :error="persons.errors ? persons.errors.per_num_dispaych : []">
            <input class="number" type="text" id="per_num_dispaych" v-model="form.per_num_dispaych">
        </FormGroup>
        <FormGroup label="Radicado" :error="persons.errors ? persons.errors.per_radicated : []">
            <input class="input" type="text" id="per_radicated" v-model="form.per_radicated">
        </FormGroup>
        <FormGroup label="Autoridad" :error="persons.errors ? persons.errors.per_authority : []">
            <input class="input" type="text" id="per_authority" v-model="form.per_authority">
        </FormGroup>
        <FormGroup label="Numero" :error="persons.errors ? persons.errors.per_number : []">
            <input class="number" type="text" id="per_number" v-model="form.per_number">
        </FormGroup>
    </Form> -->
    <form class="form info" @submit.prevent=" persons.createPerson(form)">
        <div class="infocase">
            <label for="per_type_person_id">Tipo de persona</label>
            <select class="select" id="per_type_person_id" v-model="form.per_type_person_id">
                <option value="">Seleccione</option>
                <option v-for="typePerson in typePersons.typePersonsAll" :key="typePerson.id" :value="typePerson.id">{{
                    typePerson.type_person_name }}</option>
            </select>
            <span v-if="errors && errors.per_type_person_id" class="help is-danger">{{ errors.per_type_person_id[0] }}</span>
        </div>
        <div class="infocase">
            <label for="per_name">Nombre</label>
            <input class="input" type="text" id="per_name" v-model="form.per_name">
            <span v-if="errors && errors.per_name" class="help is-danger">{{ errors.per_name[0] }}</span>
        </div>
        <div class="infocase">
            <label for="per_lastname">Apellido</label>
            <input class="input" type="text" id="per_lastname" v-model="form.per_lastname">
            <span v-if="errors && errors.per_lastname" class="help is-danger">{{ errors.per_lastname[0] }}</span>
        </div>
        <div class="infocase">
            <label for="per_email">Correo</label>
            <input class="email" type="text" id="per_email" v-model="form.per_email">
            <span v-if="errors && errors.per_email" class="help is-danger">{{ errors.per_email[0] }}</span>
        </div>
        <div class="infocase">
            <label for="per_phone">Telefono</label>
            <input class="input" type="text" id="per_phone" v-model="form.per_phone">
            <span v-if="errors && errors.per_phone" class="help is-danger">{{ errors.per_phone[0] }}</span>
        </div>
        <div class="infocase">
            <label for="per_address">Direccion</label>
            <input class="input" type="text" id="per_address" v-model="form.per_address">
            <span v-if="errors && errors.per_address" class="help is-danger">{{ errors.per_address[0] }}</span>
        </div>
        <div class="infocase">
            <label for="per_nit">Nit</label>
            <input class="input" type="text" id="per_nit" v-model="form.per_nit">
            <span v-if="errors && errors.per_nit" class="help is-danger">{{ errors.per_nit[0] }}</span>
        </div>
        <div class="infocase">
            <label for="per_issue_nit">Fecha de expedicion</label>
            <input class="date" type="date" id="per_issue_nit" v-model="form.per_issue_nit">
            <span v-if="errors && errors.per_issue_nit" class="help is-danger">{{ errors.per_issue_nit[0] }}</span>
        </div>
        <div class="infocase">
            <label for="per_num_ministry">Numero de ministerio</label>
            <input class="number" type="text" id="per_num_ministry" v-model="form.per_num_ministry">
            <span v-if="errors && errors.per_num_ministry" class="help is-danger">{{ errors.per_num_ministry[0] }}</span>
        </div>
        <div class="infocase">
            <label for="per_num_dispaych">Numero de despacho</label>
            <input class="number" type="text" id="per_num_dispaych" v-model="form.per_num_dispaych">
            <span v-if="errors && errors.per_num_dispaych" class="help is-danger">{{ errors.per_num_dispaych[0] }}</span>
        </div>
        <div class="infocase">
            <label for="per_radicated">Radicado</label>
            <input class="input" type="text" id="per_radicated" v-model="form.per_radicated">
            <span v-if="errors && errors.per_radicated" class="help is-danger">{{ errors.per_radicated[0] }}</span>
        </div>
        <div class="infocase">
            <label for="per_authority">Autoridad</label>
            <input class="input" type="text" id="per_authority" v-model="form.per_authority">
            <span v-if="errors && errors.per_authority" class="help is-danger">{{ errors.per_authority[0] }}</span>
        </div>
        <div class="infocase">
            <label for="per_number">Numero</label>
            <input class="number" type="text" id="per_number" v-model="form.per_number">
            <span v-if="errors && errors.per_number" class="help is-danger">{{ errors.per_number[0] }}</span>
        </div>
    </form>
    <div class="info">
        <button class="button" @click="save">Guardar</button>
    </div>

</template>
  
<script setup>
import { onMounted, ref } from 'vue';
import HeaderAccions from '@/components/headers/HeaderAccions.vue';
import Form from '@/components/forms/Form.vue';
import FormGroup from '@/components/forms/FormGroup.vue';
import { usePersonStore } from '@/stores/personStore';
import { useTypePersonStore } from '@/stores/typePersonStore';


const persons = usePersonStore();
const typePersons = useTypePersonStore();

const form = ref({
    per_name: '',
    per_lastname: '',
    per_email: '',
    per_phone: '',
    per_address: '',
    per_nit: '',
    per_issue_nit: '',
    per_num_ministry: '',
    per_num_dispaych: '',
    per_radicated: '',
    per_authority: '',
    per_number: '',
    per_type_person_id: '',
});

onMounted(() => {
    typePersons.getTypePersonsAll();
});

</script>
  
<style>
   form{
    text-align: center;
}


.info{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
}

input{
    height: 40px;
    width: 100%;
    padding-left: 10px;
    border: 1px solid rgba(0, 0, 0, 0.334);
    background-color: #e8e8e8;
    border-radius: 7px;
}

select{
    height: 40px;
    width: 100%;
    padding-left: 10px;
    border: 1px solid rgba(0, 0, 0, 0.334);
    background-color: #e8e8e8;
    border-radius: 7px;
}

button{
    height: 40px;
    width: 200px;
    margin-top: 20px;
    background-color: dimgray;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    color: white;
    margin: 20px auto;
}
.infocase{
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: start;
} 
</style>