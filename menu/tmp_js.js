window.addEventListener("load", function(event) {

    document.querySelector('#brand').setAttribute("href", "http://google.com");


    // menu structure
    // anchor_menu_index
    // img_menu_logo
    // anchor_menu_map
    // anchor_menu_about_1,2
    // anchor_menu_school_control_1, 2, 3, 4_1, 4_2, 5, 6, 7
    // anchor_menu_open_info_1, 2, 3, 4
    // anchor_menu_educational_activity_1, 2, 3, 4
    // anchor_menu_distance_learning_1, 2
    // anchor_menu_additionally_1, 2, 3, 4_1, 4_2, 4_3, 4_4, 5, 6, 7_1, 7_2, 7_3

    
    

    // Bootstrap version
    var menu_elements = [];
    var menu_before = [
        '<nav class="navbar navbar-expand-lg navbar-light bg-light">',
            '<div class="container-fluid">',
                '<a class="navbar-brand" href="#">',
                    '<img src="img/emblem2.png">',
                '</a>',
                '<div class="collapse navbar-collapse" id="navbarSupportedContent">',
                    '<ul class="navbar-nav me-auto mb-2 mb-lg-0">'
    ];
    var menu_ord_li_start = [
        '<li class="nav-item" style="margin-right: 1vw;">'
    ];
    var menu_drpd_li_start = [
        '<li class="nav-item dropdown">'
    ];
    var menu_li_end = [
        '</li>'
    ];
    var menu_after = [
                        
                    '</ul>',
                '</div>',
            '</div>',
        '</nav>'
    ];
    

    //// Index menu items
    var index_menu_home = [
        ''
    ];
    var index_menu_map = [
        '',
    ];
    var index_menu_about = [
    
    ];
    var index_menu_school_control = [
   
    ];
    var index_menu_school_open_info = [
        
    ];
    var index_menu_school_educational_activity = [
     
    ];
    var index_menu_school_distance_learning = [
        
    ];
    var index_menu_additionally = [
        '<li class="nav-item dropdown" id="myDropdown_additionally">',
            '<a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">',
                'Додатково',
            '</a>',
            '<ul class="dropdown-menu" aria-labelledby="myDropdown">',
                '<li><a class="dropdown-item" href="#">Харчування учнів</a></li>',
                '<li><a class="dropdown-item" href="#">Цифрова грамотність</a></li>',
                '<li><a class="dropdown-item" href="#">Твої права і безпека</a></li>',
                '<li><a class="dropdown-item" href="#">ВИХОВНА РОБОТА &raquo;</a>',
                    '<ul class="submenu dropdown-menu">',
                        '<li><a class="dropdown-item" href="#">ВИХОВНА РОБОТА</a></li>',
                        '<li><a class="dropdown-item" href="#">ДІЯЛЬНІСТЬ</a></li>',
                        '<li><a class="dropdown-item" href="#">НАГОРОДИ</a></li>',
                        '<li><a class="dropdown-item" href="#">Всеукраїнська дитячо-юнацька <br>', 
                            'військово-патріотична гра</a></li>',
                    '</ul>',
                '</li>',
                '<li><a class="dropdown-item" href="#">Протидія булінгу</a></li>',
                '<li><a class="dropdown-item" href="#">Для батьків</a></li>',
                '<li><a class="dropdown-item" href="#">Соціально-психологічна служба &raquo;</a>',
                    '<ul class="submenu dropdown-menu">',
                        '<li><a class="dropdown-item" href="#">Соціально-психологічна <br>',
                            'служба</a></li>',
                        '<li><a class="dropdown-item" href="#">Поради психолога</a></li>',
                        '<li><a class="dropdown-item" href="#">Поради соціального педагога</a></li>',
                    '</ul>',
                '</li>',
            '</ul>',
        '</li>',
    ];

    var lesson_menu_header = [
        '<a class="nav-link active" aria-current="page" href="../../../index.html"><i class="fa fa-home fa-fw"></i>&nbsp;Home</a>'
    ];
    var task_menu_header = [
        '<a class="nav-link active" aria-current="page" href="../../../../index.html"><i class="fa fa-home fa-fw"></i>&nbsp;Home</a>'
    ];
    
    var index_elem_bootstrap = document.querySelector('#index_menu_bootsrap');
    if (index_elem_bootstrap) {
        menu_elements.push(menu_before.join(''));
        menu_elements.push(menu_ord_li_start);
        menu_elements.push(index_menu_home);
        menu_elements.push(menu_li_end);
        menu_elements.push(menu_ord_li_start);
        menu_elements.push(index_menu_map);
        menu_elements.push(menu_li_end);
        menu_elements.push(menu_drpd_li_start);
        menu_elements.push(index_menu_about.join(''));
        menu_elements.push(menu_li_end);
        menu_elements.push(menu_drpd_li_start);
        menu_elements.push(index_menu_school_control.join(''));
        menu_elements.push(menu_li_end);
        menu_elements.push(menu_drpd_li_start);
        menu_elements.push(index_menu_school_open_info.join(''));
        menu_elements.push(menu_li_end);
        menu_elements.push(menu_drpd_li_start);
        menu_elements.push(index_menu_school_educational_activity.join(''));
        menu_elements.push(menu_li_end);
        menu_elements.push(menu_drpd_li_start);
        menu_elements.push(index_menu_school_distance_learning.join(''));
        menu_elements.push(menu_li_end);
        menu_elements.push(index_menu_additionally.join(''));

        menu_elements.push(menu_after.join(''));
        menu_elements.join();
        
        // menu_elements[2] = index_menu_map;
        // menu_elements[3] = index_menu_about;

        index_elem_bootstrap.innerHTML = menu_elements.join('');
    };
    var lesson_elem_bootstrap = document.querySelector('#lesson_menu_bootsrap');
    if (lesson_elem_bootstrap) {
        menu_elements[1] = lesson_menu_header;
        menu_elements[3] = lesson_menu_example;
        menu_elements[5] = lesson_menu_students;

        lesson_elem_bootstrap.innerHTML = menu_elements.join('');
    };
    var task_elem_bootstrap = document.querySelector('#task_menu_bootsrap');
    if (task_elem_bootstrap) {
        menu_elements[1] = task_menu_header;
        menu_elements[3] = task_menu_example;
        menu_elements[5] = task_menu_students;

        task_elem_bootstrap.innerHTML = menu_elements.join('');
    };

    window.scrollTo( 0, 0);

});