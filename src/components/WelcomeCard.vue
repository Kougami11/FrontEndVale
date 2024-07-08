<script setup>
import store from '@/store'

</script>
<template>
  <div class="col-lg-12 d-flex align-items-stretch">
    <div class="card w-100 bg-primary-subtle overflow-hidden shadow-none">
      <div class="card-body position-relative">
        <div class="row">
          <div class="col-sm-7">
            <div class="d-flex align-items-center mb-7">
              <div class="rounded-circle overflow-hidden me-6">
                <img src="/user-1.jpg" alt="modernize-img" width="40" height="40" />
              </div>
              <h5 class="fw-semibold mb-0 fs-5">Bienvenido de vuelta {{ $store.state.auth.user.username }}!</h5>
            </div>
            <div class="d-flex align-items-center">
              <div class="border-end pe-4 border-muted border-opacity-10">
                <p class="mb-0 text-dark">
                  [Lorem ipsum dolor sit amet, consectetur adipiscing elit.]
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-5">
            <div class="welcome-bg-img mb-n1 text-end">
              <img src="/forumO3d_150x150.png" alt="modernize-img" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
