<script setup>
import Multiselect from 'vue-multiselect'
import { ref, watch } from 'vue'
import axios from 'axios'
import authHeader from '@/services/auth.header'
import endPoints from '@/shared/constants/endpoints'

let places = ref([{codigo_localidad:'CT',localidad:'CT'},{codigo_localidad:'AT',localidad:'AT'}])
let selectedPlace = ref([])
let departments = ref([])
let selectedDepartments = ref([])
let persons = ref([])
let selectedPersons = ref([])

const emit = defineEmits(["handlePlaces"]);

watch(
  () => selectedPlace.value,
  (newValue) => {
    selectedDepartments.value = ''
    selectedPersons.value = ''
    getDepartmentsByPlaces(newValue)
  }
)
watch(
  () => selectedDepartments.value,
  (newValue) => {
    getPersons(newValue)
  }
)

const getAllPlaces = async () => {
  const response = await axios.get('spi/localidades-all', { headers: authHeader() })
  if (response.data) {
    places.value = response.data
  }
}
const getDepartmentsByPlaces = async (places) => {
  await axios
    .get(endPoints.spiDepartamentosLocalidad + places, {
      headers: authHeader()
    })
    .then((response) => {
      departments.value = response.data
    })
    .catch(() => {
      departments.value = []
    })
}
const getPersons = async (department) => {
  if (department.length > 0) {
    await axios
      .post(
        endPoints.spiEmpleadosLocalidad + selectedPlace.value,
        { codigos_departamentos: Array.from(department) },
        {
          headers: authHeader()
        }
      )
      .then((response) => {
        persons.value = response.data
      })
      .catch(() => {
        persons.value = []
      })
  } else {
    persons.value = []
  }
}
const customLabelForPerson = (data) => {
  return `${data.nombre} ${data.apellido} — ${data.cedula}`
}
getAllPlaces()

const changePlaces = () => {
    emit("handlePlaces", selectedPlace.value);
}

</script>

<template>
  <div role="tabpanel" class="tab-pane fade show active" id="step1" aria-labelledby="home-tab">
    <form class="form-horizontal p-3">
      <div class="mb-3">
        <label class="form-label">Localidad: </label>
        <multiselect
          v-model="selectedPlace"
          :id="places.codigo_localidad"
          :options="places.map((i) => i.codigo_localidad)"
          :searchable="true"
          label="localidad"
          :close-on-select="true"
          :show-labels="false"
          :custom-label="(opt) => places.find((e) => e.codigo_localidad === opt).localidad"
          placeholder="Seleccione sucursal"
          @select="changePlaces"
        ></multiselect>
      </div>
      <div class="mb-3">
        <label class="form-label" for="example-email">Departamento </label>
        <multiselect
          @remove="removeDepartment()"
          v-model="selectedDepartments"
          :id="departments.codigo_departamento"
          :options="departments.map((i) => i.codigo_departamento)"
          :searchable="true"
          label="departamento"
          :close-on-select="true"
          :show-labels="false"
          :custom-label="
            (opt) => departments.find((e) => e.codigo_departamento === opt).departamento
          "
          :multiple="true"
          placeholder="Seleccione departamento"
        ></multiselect>
      </div>
      <div class="mb-3">
        <label class="form-label">Personas</label>
        <multiselect
          v-model="selectedPersons"
          :id="persons.ficha"
          :options="persons"
          :searchable="true"
          :close-on-select="true"
          :show-labels="false"
          :multiple="true"
          track-by="ficha"
          label="cedula"
          placeholder="Seleccione persona"
          :custom-label="customLabelForPerson"
        >
        </multiselect>
      </div>
    </form>
  </div>
</template>
