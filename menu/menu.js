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
          <li class="nav-item" style="margin-right: 1vw;">
              <a class="nav-link active" aria-current="page" id="anchor_menu_map" href="#">
                  <i class="fa fa-home fa-fw"></i>Карта сайту</a>
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
                  Управління школою
              </a>
              <ul class="dropdown-menu" aria-labelledby="myDropdown_school_control">
                  <li><a class="dropdown-item" id="anchor_menu_school_control_1" href="#">Нормативно-правова база</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_school_control_2" href="#">Схема управління навчальним закладом</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_school_control_3" href="#">До нового 2022-2023 навчального року</a></li>
                  <li><a class="dropdown-item" href="#">Документи школи &raquo;</a>
                      <ul class="submenu dropdown-menu">
                          <li><a class="dropdown-item" id="anchor_menu_school_control_4_1" href="#">Документи школи</a></li>
                          <li><a class="dropdown-item" id="anchor_menu_school_control_4_2" href="#">Положення  про моніторинг якості освіти та освітньої діяльності</a></li>
                      </ul>
                  </li>
                  <li><a class="dropdown-item" id="anchor_menu_school_control_5" href="#">Державно-громадське управління  СЗШ №13</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_school_control_6" href="#">Батьківський комітет</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_school_control_7" href="#">Матеріально-технічне забезпечення</a></li>
              </ul>
          </li>
          <li class="nav-item dropdown" id="myDropdown_open_info">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                  Інформаційна відкритість закладу
              </a>
              <ul class="dropdown-menu" aria-labelledby="myDropdown_open_info">
                  <li><a class="dropdown-item" id="anchor_menu_open_info_1" href="#">Документи школи</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_open_info_2" href="#">Звіт керівника</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_open_info_3" href="#">Кошторис навчального закладу</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_open_info_4" href="#">Фінансовий звіт</a></li>
              </ul>
          </li>
          <li class="nav-item dropdown" id="myDropdown_educational_activity">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                  Освітня діяльність
              </a>
              <ul class="dropdown-menu" aria-labelledby="myDropdown_educational_activity">
                  <li><a class="dropdown-item" id="anchor_menu_educational_activity_1" href="#">Шкільні підручники</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_educational_activity_2" href="#">Замовлення підручників</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_educational_activity_3" href="#">Моніторинг якості освіти</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_educational_activity_4" href="#">Мережа класів та учнів на 2022-2023 н.р.</a></li>
              </ul>
          </li>
          <li class="nav-item dropdown" id="myDropdown_distance_learning">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                  Дистанційне навчання
              </a>
              <ul class="dropdown-menu" aria-labelledby="myDropdown_distance_learning">
                  <li><a class="dropdown-item" id="anchor_menu_distance_learning_1" href="#">Наша платформа</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_distance_learning_2" href="#">Правила роботи та взаємодії</a></li>
              </ul>
          </li>
          <li class="nav-item dropdown" id="myDropdown_additionally">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                  Додатково
              </a>
              <ul class="dropdown-menu" aria-labelledby="myDropdown_additionally">
                  <li><a class="dropdown-item" id="anchor_menu_additionally_1" href="#">Харчування учнів</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_additionally_2" href="#">Цифрова грамотність</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_additionally_3" href="#">Твої права і безпека</a></li>
                  <li><a class="dropdown-item" href="#">ВИХОВНА РОБОТА &raquo;</a>
                      <ul class="submenu dropdown-menu">
                          <li><a class="dropdown-item" id="anchor_menu_additionally_4_1" href="#">ВИХОВНА РОБОТА</a></li>
                          <li><a class="dropdown-item" id="anchor_menu_additionally_4_2" href="#">ДІЯЛЬНІСТЬ</a></li>
                          <li><a class="dropdown-item" id="anchor_menu_additionally_4_3" href="#">НАГОРОДИ</a></li>
                          <li><a class="dropdown-item" id="anchor_menu_additionally_4_4" href="#">Всеукраїнська дитячо-юнацька <br>
                              військово-патріотична гра</a></li>
                      </ul>
                  </li>
                  <li><a class="dropdown-item" id="anchor_menu_additionally_5" href="#">Протидія булінгу</a></li>
                  <li><a class="dropdown-item" id="anchor_menu_additionally_6" href="#">Для батьків</a></li>
                  <li><a class="dropdown-item" href="#">Соціально-психологічна служба &raquo;</a>
                      <ul class="submenu dropdown-menu">
                          <li><a class="dropdown-item" id="anchor_menu_additionally_7_1" href="#">Соціально-психологічна <br>
                              служба</a></li>
                          <li><a class="dropdown-item" id="anchor_menu_additionally_7_2" href="#">Поради психолога</a></li>
                          <li><a class="dropdown-item" id="anchor_menu_additionally_7_3" href="#">Поради соціального педагога</a></li>
                      </ul>
                  </li>
              </ul>
          </li>
      </ul>
  </div>
</div>
`);