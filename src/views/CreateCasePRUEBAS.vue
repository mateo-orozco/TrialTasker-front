<template>
    <HeaderAccions title="Crear Caso" to="CasosActivos" />
    <!-- <Form :create="cases.createCase" :form="form" button-text="Crear">
        <FormGroup label="Nombre" :error="cases.errors ? cases.errors.case_name : []">
            <input type="text" id="case_name" :modelValue="form.case_name" >
        </FormGroup>
        <FormGroup label="Radicado" :error="cases.errors ? cases.errors.case_radicate : []">
            <input type="text" id="case_radicate" v-model="form.case_radicate">
        </FormGroup>
        <FormGroup label="Persona" :error="cases.errors ? cases.errors.case_person_id : []">
            <select id="case_person_id" v-model="form.case_person_id">
                <option value="">Cliente</option>
                <option v-for="person in persons.personsAll" :value="person.id">{{ person.per_name }} {{
                    person.per_lastname }}</option>
            </select>
        </FormGroup>
        <FormGroup label="Abogado" :error="cases.errors ? cases.errors.case_user_id : []">
            <select id="case_user_id" v-model="form.case_user_id">
                <option value="">Seleccione un abogado</option>
                <option :value="auth.user.id">{{ auth.user.name }} {{ auth.user.lastname }}</option>
            </select>
        </FormGroup>
    </Form> -->
    <form @submit.prevent="cases.createCase(form)" class="form info">
        <div class="infocase">
            <label for="case_name">Nombre</label>
            <input type="text" id="case_name" v-model="form.case_name">
            <div v-if="cases.errors" class="error">
                <div v-for="error in cases.errors.case_name" :key="error">
                    {{ error }}
                </div>
            </div>
        </div>
 
        <div class="infocase">
            <label for="case_radicate">Radicado</label>
            <input type="text" id="case_radicate" v-model="form.case_radicate">
            <div v-if="cases.errors" class="error">
                <div v-for="error in cases.errors.case_radicate" :key="error">
                    {{ error }}
                </div>
            </div>
        </div>

        <div class="infocase">
            <label for="case_person_id">Persona</label>
            <select id="case_person_id" v-model="form.case_person_id">
                <option value="">Cliente</option>
                <option v-for="person in persons.personsAll" :value="person.id">{{ person.per_name }} {{
                    person.per_lastname }}</option>
            </select>
            <div v-if="cases.errors" class="error">
                <div v-for="error in cases.errors.case_person_id" :key="error">
                    {{ error }}
                </div>
            </div>
        </div>

        <div class="infocase">
            <label for="case_user_id">Abogado</label>
            <select id="case_user_id" v-model="form.case_user_id">
                <option value="">Seleccione un abogado</option>
                <option :value="auth.user.id">{{ auth.user.name }} {{ auth.user.lastname }}</option>
            </select>
            <div v-if="cases.errors" class="error">
                <div v-for="error in cases.errors.case_user_id" :key="error">
                    {{ error }}
                </div>
            </div>
        </div>
        
        <button type="submit">Crear</button>
        
    </form>
    <!-- <form @submit.prevent=" cases.createCase(form)">
    </form>  -->
</template>
<script setup>
import { onMounted, ref } from 'vue';
import HeaderAccions from '@/components/headers/HeaderAccions.vue';
import Form from '@/components/forms/Form.vue';
import FormGroup from '@/components/forms/FormGroup.vue';
import { useCaseStore } from '@/stores/caseStore';
import { usePersonStore } from '@/stores/personStore';
import { useAuthStore } from "@/stores/authStore";


    const cases = useCaseStore();
    const persons = usePersonStore();
    const auth = useAuthStore();
    console.log("--------cases--------")
    console.log(cases);
    const form = ref({
    case_name: '',
    case_radicate: '',
    case_person_id: '',
    case_user_id: auth.user.id,
    case_status: true,
});



onMounted(() => {
   
    persons.getPersonsAll();
    auth.getUser();
});

</script>


<style scoped>

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