<script setup>
import DashboardTemplate from '@/shared/Template.vue'
import StepOne from './Step1.vue'
import StepTwo from './Step2.vue'



const places = (data) => {
  console.log(data)
}

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
          <div>
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
              <StepOne @handlePlaces="places"></StepOne>
              <StepTwo></StepTwo>
            </div>
          </div>
        </div>
      </div>
      <!-- end Tab with dropdown -->
    </div>
  </DashboardTemplate>
</template>
