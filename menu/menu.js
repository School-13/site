document.write(`
<div class="container-fluid">
  <a class="navbar-brand" id="anchor_logo_menu_index" href="#">
      <img id="img_menu_logo" src="#">
  </a>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" style="margin-right: 1vw;">
              <a class="nav-link active" aria-current="page" id="anchor_menu_index" href="#">
                  <i class="fa fa-home fa-fw"></i>Головна сторінка</a>
          </li>
          <li class="nav-item dropdown" id="myDropdown_about">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                  Наша візитка
              </a>
              <ul class="dropdown-menu" aria-labelledby="myDropdown_about">
                  <li><a class="dropdown-item" id="anchor_menu_about_1" href="#">Кадровий склад</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_about_2" href="#">Вакансії</a></li>
              </ul>
          </li>
          <li class="nav-item dropdown" id="myDropdown_school_control">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                  Управління<br>закладом освіти
              </a>
              <ul class="dropdown-menu" aria-labelledby="myDropdown_school_control">
                  <li><a class="dropdown-item" id="anchor_menu_school_control_1" href="#">Нормативно-правова база</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_school_control_2" href="#">Схема управління навчальним закладом</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_school_control_3" href="#">До нового 2023-2024 навчального року</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_school_control_4" href="#">Документи закладу освіти</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_school_control_5" href="#">Матеріально-технічне забезпечення</a></li>
              </ul>
          </li>
          <li class="nav-item dropdown" id="myDropdown_open_info">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                  Інформаційна<br>відкритість закладу
              </a>
              <ul class="dropdown-menu" aria-labelledby="myDropdown_open_info">
                  <li><a class="dropdown-item" id="anchor_menu_open_info_1" href="#">Звіт керівника</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_open_info_2" href="#">Кошторис навчального закладу</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_open_info_3" href="#">Фінансовий звіт</a></li>
              </ul>
          </li>
          <li class="nav-item dropdown" id="myDropdown_educational_activity">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                  Освітня діяльність
              </a>
              <ul class="dropdown-menu" aria-labelledby="myDropdown_educational_activity">
                  <li><a class="dropdown-item" id="anchor_menu_educational_activity_1" href="#">Мова навчання - українська</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_educational_activity_2" href="#">Мережа класів та учнів на 2023-2024 н.р.</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_educational_activity_3" href="#">Розклад уроків</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_educational_activity_4" href="#">Шкільні підручники</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_educational_activity_5" href="#">Моніторінг якості освіти</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_educational_activity_6" href="#">Дистанційне навчання</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_educational_activity_7" href="#">Наша платформа</a></li>
              </ul>
          </li>
          <li class="nav-item dropdown" id="myDropdown_SPS">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                  Соціально-<br>психологічна служба
              </a>
              <ul class="dropdown-menu" aria-labelledby="myDropdown_SPS">
                  <li><a class="dropdown-item" id="anchor_menu_SPS_1" href="#">Поради психолога</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_SPS_2" href="#">Поради соціального педагога</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_SPS_3" href="#">Протидія булінгу</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_SPS_4" href="#">Твої права та безпека</a></li>
              </ul>
          </li>
          <li class="nav-item dropdown" id="myDropdown_VR">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                  Виховна робота
              </a>
              <ul class="dropdown-menu" aria-labelledby="myDropdown_VR">
                  <li><a class="dropdown-item" id="anchor_menu_VR_1" href="#">Закони шкільного життя</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_VR_2" href="#">Твоє здоров'я</a></li>
              </ul>
          </li>
          <li class="nav-item" style="margin-right: 1vw;">
              <a class="nav-link active" aria-current="page" id="anchor_menu_parents" href="#">
                  <i class="fa fa-home fa-fw"></i>Для батьків</a>
          </li>
      </ul>
  </div>
</div>
`);