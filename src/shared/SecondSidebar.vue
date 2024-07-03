<template>
  <aside class="left-sidebar with-horizontal">
    <!-- Sidebar scroll-->
    <div>
      <!-- Sidebar navigation-->
      <nav id="sidebarnavh" class="sidebar-nav scroll-sidebar container-fluid">
        <ul id="sidebarnav">
          <!-- ============================= -->
          <!-- Home -->
          <!-- ============================= -->

          <!-- =================== -->
          <!-- Dashboard -->
          <!-- =================== -->
          <li class="nav-small-cap">
            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span class="hide-menu">Home</span>
          </li>
          <li class="sidebar-item">
            <a class="sidebar-link" href="javascript:void(0)" aria-expanded="false">
              <span>
                <i class="ti ti-home-2"></i>
              </span>
              <span class="hide-menu">Inicio</span>
            </a>
          </li>
          <li class="sidebar-item">
            <a class="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
              <span>
                <i class="ti ti-menu"></i>
              </span>
              <span class="hide-menu">Opciones</span>
            </a>
            <ul aria-expanded="false" class="collapse first-level">
              <li class="sidebar-item">
                <a href="../dark/index.html" class="sidebar-link">
                  <i class="ti ti-aperture"></i>
                  <span class="hide-menu">[Menu 1]</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a href="../dark/index2.html" class="sidebar-link active">
                  <i class="ti ti-shopping-cart"></i>
                  <span class="hide-menu">[Menu 2]</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-small-cap">
            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span class="hide-menu">Apps</span>
          </li>
        </ul>
      </nav>
      <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
  </aside>
</template>
