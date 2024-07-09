<script setup>
import DashboardTemplate from '@/shared/Template.vue'
import Multiselect from 'vue-multiselect'
import { ref, watch } from 'vue'
import axios from 'axios'
import authHeader from '@/services/auth.header'
import endPoints from '@/shared/constants/endpoints'

let places = ref([])
let selectedPlace = ref([])
let departments = ref([])
let selectedDepartments = ref([])

watch(
  () => selectedPlace.value,
  (newValue) => {
    selectedDepartments.value = ""
    getDepartmentsByPlaces(newValue)
  }
)

const removeDepartment = async () => {}

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
}

getAllPlaces()
</script>
<template>
  <DashboardTemplate>
    <div class="col-12">
      <!-- start Tab with dropdown -->
      <div class="card">
        <div class="card-body">
          <div class="mb-3">
            <h5 class="mb-0">Registrar Vale</h5>
          </div>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <a
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                href="#step1"
                role="tab"
                aria-controls="step1"
                aria-expanded="true"
                aria-selected="true"
              >
                <span>Seleccionar personal</span>
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                href="#step2"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                tabindex="-1"
              >
                <span>Paso 2</span>
              </a>
            </li>
          </ul>
          <div class="tab-content tabcontent-border mt-3" id="myTabContent">
            <div
              role="tabpanel"
              class="tab-pane fade show active"
              id="step1"
              aria-labelledby="home-tab"
            >
              <form class="form-horizontal">
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
                    :custom-label="
                      (opt) => places.find((e) => e.codigo_localidad === opt).localidad
                    "
                    placeholder="Seleccione sucursal"
                  ></multiselect>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="example-email">Departamento </label>
                  <multiselect
                    @remove="removeDepartment"
                    v-model="selectedDepartments"
                    :id="departments.codigo_cargo"
                    :options="departments.map((i) => i.codigo_cargo)"
                    :searchable="true"
                    label="cargo"
                    :close-on-select="true"
                    :show-labels="false"
                    :custom-label="
                      (opt) => departments.find((e) => e.codigo_cargo === opt).cargo
                    "
                    :multiple="true"
                    placeholder="Seleccione departamento"
                  ></multiselect>
                </div>
                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <input type="password" class="form-control" value="password" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Placeholder</label>
                  <input type="text" class="form-control" placeholder="placeholder" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Text area</label>
                  <textarea class="form-control" rows="5"></textarea>
                </div>
                <div class="mb-3">
                  <label class="form-label">Read only input</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Readonly input here…"
                    readonly=""
                  />
                </div>
                <div class="mb-3">
                  <fieldset disabled="">
                    <label class="form-label" for="disabledTextInput">Disabled input</label>
                    <input
                      type="text"
                      id="disabledTextInput"
                      class="form-control"
                      placeholder="Disabled input"
                    />
                  </fieldset>
                </div>
                <div class="mb-3 row pt-3">
                  <div class="col-sm-4">
                    <div class="form-check py-2">
                      <input type="checkbox" class="form-check-input" id="customCheck1" />
                      <label class="form-check-label" for="customCheck1"
                        >Check this custom checkbox</label
                      >
                    </div>
                    <div class="form-check py-2">
                      <input type="checkbox" class="form-check-input" id="customCheck2" />
                      <label class="form-check-label" for="customCheck2"
                        >Check this custom checkbox</label
                      >
                    </div>
                    <div class="form-check py-2">
                      <input type="checkbox" class="form-check-input" id="customCheck3" />
                      <label class="form-check-label" for="customCheck3"
                        >Check this custom checkbox</label
                      >
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-check py-2">
                      <input
                        type="radio"
                        id="customRadio1"
                        name="customRadio"
                        class="form-check-input"
                      />
                      <label class="form-check-label" for="customRadio1"
                        >Toggle this custom radio</label
                      >
                    </div>
                    <div class="form-check py-2">
                      <input
                        type="radio"
                        id="customRadio2"
                        name="customRadio"
                        class="form-check-input"
                      />
                      <label class="form-check-label" for="customRadio2"
                        >Toggle this custom radio</label
                      >
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-check py-2 form-switch">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                      <label class="form-check-label" for="flexSwitchCheckDefault"
                        >Default switch checkbox input</label
                      >
                    </div>
                    <div class="form-check py-2 form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDisabled"
                        disabled=""
                      />
                      <label class="form-check-label" for="flexSwitchCheckDisabled"
                        >Disabled switch checkbox input</label
                      >
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label class="form-label">Input Select</label>
                  <select class="form-select" id="inlineFormCustomSelect">
                    <option selected="">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Default file upload</label>
                  <input type="file" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Helping text</label>
                  <input type="text" class="form-control" placeholder="Helping text" />
                  <span class="help-block">
                    <small
                      >A block of help text that breaks onto a new line and may extend beyond one
                      line.</small
                    >
                  </span>
                </div>
              </form>
            </div>
            <div class="tab-pane fade" id="step2" role="tabpanel" aria-labelledby="profile-tab">
              <p>
                Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee
                squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes
                anderson artisan four loko farm-to-table craft beer twee. Qui photo booth
                letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl
                cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.
                Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan
                fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY
                ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr
                butcher vero sint qui sapiente accusamus tattooed echo park.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- end Tab with dropdown -->
    </div>
  </DashboardTemplate>
</template>
