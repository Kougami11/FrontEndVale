<template>
  <aside class="left-sidebar with-vertical">
    <div>
      <!-- ---------------------------------- -->
      <!-- Start Vertical Layout Sidebar -->
      <!-- ---------------------------------- -->
      <div class="brand-logo d-flex align-items-center justify-content-between">
        <a href="../dark/index.html" class="text-nowrap logo-img">
          <img
            src="/src/assets/images/logo.png"
            class="dark-logo"
            alt="Logo-Dark"
            style="display: none"
          />
          <img
            src="/src/assets/images/logo.png"
            class="light-logo"
            alt="Logo-light"
            style="display: flex"
          />
        </a>
        <a
          href="javascript:void(0)"
          class="sidebartoggler ms-auto text-decoration-none fs-5 d-block d-xl-none"
        >
          <i class="ti ti-x"></i>
        </a>
      </div>

      <nav class="sidebar-nav scroll-sidebar" data-simplebar="init">
        <div class="simplebar-wrapper" style="margin: -10px">
          <div class="simplebar-height-auto-observer-wrapper">
            <div class="simplebar-height-auto-observer"></div>
          </div>
          <div class="simplebar-mask">
            <div class="simplebar-offset" style="right: 0px; bottom: 0px">
              <div
                class="simplebar-content-wrapper"
                tabindex="0"
                role="region"
                aria-label="scrollable content"
                style="height: auto; overflow: hidden"
              >
                <div class="simplebar-content" style="padding: 10px">
                  <ul id="sidebarnav">
                    <!-- ---------------------------------- -->
                    <!-- Home -->
                    <!-- ---------------------------------- -->
                    <li class="nav-small-cap">
                      <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                      <span class="hide-menu">VALES</span>
                    </li>
                    <!-- ---------------------------------- -->
                    <!-- Dashboard -->
                    <!-- ---------------------------------- -->
                    <li class="sidebar-item">
                      <a class="sidebar-link" href="./" id="get-url" aria-expanded="false">
                        <span>
                          <i class="ti ti-aperture"></i>
                        </span>
                        <span class="hide-menu">Listado</span>
                      </a>
                    </li>
                    <li class="sidebar-item">
                      <a
                        class="sidebar-link active"
                        href="../dark/index2.html"
                        aria-expanded="false"
                      >
                        <span>
                          <i class="ti ti-shopping-cart"></i>
                        </span>
                        <span class="hide-menu">Registrar</span>
                      </a>
                    </li>
                    <li class="sidebar-item">
                      <a class="sidebar-link" href="../dark/index3.html" aria-expanded="false">
                        <span>
                          <i class="ti ti-currency-dollar"></i>
                        </span>
                        <span class="hide-menu">Historico</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="simplebar-placeholder" style="width: 0px; height: 0px"></div>
        </div>
        <div class="simplebar-track simplebar-horizontal" style="visibility: hidden">
          <div class="simplebar-scrollbar" style="width: 0px; display: none"></div>
        </div>
        <div class="simplebar-track simplebar-vertical" style="visibility: hidden">
          <div
            class="simplebar-scrollbar"
            style="height: 0px; transform: translate3d(0px, 0px, 0px); display: none"
          ></div>
        </div>
      </nav>

      <div class="fixed-profile p-3 mx-4 mb-2 bg-secondary-subtle rounded mt-3">
        <div class="hstack gap-3">
          <div class="john-img">
            <img
              src="/user-1.jpg"
              class="rounded-circle"
              width="40"
              height="40"
              alt="modernize-img"
            />
          </div>
          <div class="john-title">
            <h6 class="mb-0 fs-4 fw-semibold">[User Name]</h6>
            <span class="fs-2">[User Role - Group]</span>
          </div>
          <button
            class="border-0 bg-transparent text-primary ms-auto"
            tabindex="0"
            type="button"
            aria-label="logout"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="logout"
          >
            <i class="ti ti-power fs-6"></i>
          </button>
        </div>
      </div>

      <!-- ---------------------------------- -->
      <!-- Start Vertical Layout Sidebar -->
      <!-- ---------------------------------- -->
    </div>
  </aside>
</template>
