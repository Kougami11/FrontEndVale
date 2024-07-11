<template>
  <div class="tab-pane fade" id="step2" role="tabpanel" aria-labelledby="profile-tab">
    <form class="form-horizontal p-3">
      <div class="mb-3">
        <label for="amount" class="form-label">Monto:</label>
        <input
          type="text"
          class="form-control"
          id="amount"
          placeholder="Ingrese el monto a descontar"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Documento PDF: </label>
        <input class="form-control" type="file" id="formFile" />
      </div>
    </form>
  </div>
</template>
