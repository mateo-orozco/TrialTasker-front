<template>
    <HeaderAccions title="Editar Caso" to="CasosActivos" />
    <form @submit.prevent="cases.updateCase(form)" class="form">
        <div class="info">
            <div class="infocase">
                <label for="">Nombre Caso</label>
                <input type="text" v-model="form.case_name" >
            </div>
            <div class="infocase">
                <label for="">Radicado</label>
                <input type="text" v-model="form.case_radicate" >
            </div>
            <div class="infocase">
                <label for="">Abogado</label>
                <input type="text" v-model="form.username" disabled>
            </div>
            <div class="infocase">
                <label for="">Persona Relacionada</label>
                <input type="text" v-model="form.personname" disabled>
            </div>
            <div class="infocase">
                <label for="">Estatus</label>
                <select id="case_status" v-model="form.case_status">
                    <option value="1">Activo</option>
                    <option value="0">Inactivo</option>
                </select>
            </div>
            
        </div>
        <button type="submit">Actualizar</button>   
    </form>
    
    
</template>

<script setup>
import { onMounted, ref } from 'vue';
import HeaderAccions from '@/components/headers/HeaderAccions.vue';
import Form from '@/components/forms/Form.vue';
import FormGroup from '@/components/forms/FormGroup.vue';
import { useRoute } from 'vue-router';
import { useCaseStore } from '@/stores/caseStore';


const route = useRoute();
const cases = useCaseStore();

var casoid = localStorage.getItem("id");
cases.getCase(casoid);

const form = ref({
    id: '',
    case_name: '',
    case_status: '',
    case_radicate: '',
    case_user_id: '',
    case_person_id: '',
    personname: '',
    username: '',
});

var casoid = localStorage.getItem("id");
var name = localStorage.getItem("name");
var radicate = localStorage.getItem("radicate");
var user = localStorage.getItem("userid");
var person = localStorage.getItem("personid");
var username = localStorage.getItem("username");
var pername = localStorage.getItem("personname");


form.value = {
    id: casoid,
    case_status: cases.caseStore.case_status,
    case_name: name,
    case_radicate: radicate,
    case_user_id: user,
    case_person_id: person,
    personname: pername,
    username: username,
}

onMounted(async () => {

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