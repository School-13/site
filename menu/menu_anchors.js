document.addEventListener("DOMContentLoaded", function(){

    // menu structure
    // ----------------
    // anchor_logo_menu_index
    // img_menu_logo
    // anchor_menu_index
    // anchor_menu_map
    // anchor_menu_about_1,2
    // anchor_menu_school_control_1, 2, 3, 4_1, 4_2, 5, 6, 7
    // anchor_menu_open_info_1, 2, 3, 4
    // anchor_menu_educational_activity_1, 2, 3, 4
    // anchor_menu_distance_learning_1, 2
    // anchor_menu_additionally_1, 2, 3, 4_1, 4_2, 4_3, 4_4, 5, 6, 7_1, 7_2, 7_3

    function compute_attribute(val='', is_index=true, is_img=false){
        let path = '';
        if (is_index){
            if (is_img){ path = "img/"} 
            else if (val=="index.html"){ path = ""} 
            else { path = "pages/"}
        } else {
            if (is_img){ path = "../img/"} 
            else if (val=="index.html"){ path = "../"} 
            else { path = ""}
        }
        return path + val
    };

    function fillAnchors(is_index=true){
        document.querySelector('#anchor_logo_menu_index').setAttribute("href", compute_attribute("index.html", is_index));
        document.querySelector('#img_menu_logo').setAttribute("src", compute_attribute("emblem2.png", is_index, true));
        document.querySelector('#anchor_menu_index').setAttribute("href", compute_attribute("index.html", is_index));
        document.querySelector('#anchor_menu_map').setAttribute("href", compute_attribute("page.html", is_index));
    }

    var index_menu = document.querySelector('#nav_index_page');
    if (index_menu) {
        fillAnchors();
    };
   

    

});