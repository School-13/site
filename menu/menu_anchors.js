document.addEventListener("DOMContentLoaded", function(){

    // menu structure
    // ----------------
    // anchor_logo_menu_index
    // img_menu_logo
    // anchor_menu_index
    // anchor_menu_map -
    // anchor_menu_about_1,2
    // anchor_menu_school_control_1, 2, 3, 4_1, 4_2, 5, 6, 7
    // anchor_menu_open_info_1, 2, 3
    // anchor_menu_educational_activity_1, 2, 3, 4, 5
    // anchor_menu_SPS_1, 2, 3, 4
    // anchor_menu_VR_1, 2

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
        document.querySelector('#anchor_menu_about_1').setAttribute("href", compute_attribute("about_1.html", is_index));
        document.querySelector('#anchor_menu_about_2').setAttribute("href", compute_attribute("about_2.html", is_index));
        document.querySelector('#anchor_menu_school_control_1').setAttribute("href", compute_attribute("school_control_1.html", is_index));
        document.querySelector('#anchor_menu_school_control_2').setAttribute("href", compute_attribute("school_control_2.html", is_index));
        document.querySelector('#anchor_menu_school_control_3').setAttribute("href", compute_attribute("school_control_3.html", is_index));
        document.querySelector('#anchor_menu_school_control_4').setAttribute("href", compute_attribute("school_control_4.html", is_index));
        document.querySelector('#anchor_menu_school_control_5').setAttribute("href", compute_attribute("school_control_5.html", is_index));
        document.querySelector('#anchor_menu_open_info_1').setAttribute("href", compute_attribute("open_info_1.html", is_index));
        document.querySelector('#anchor_menu_open_info_2').setAttribute("href", compute_attribute("open_info_2.html", is_index));
        document.querySelector('#anchor_menu_educational_activity_1').setAttribute("href", compute_attribute("educational_activity_1.html", is_index));
        document.querySelector('#anchor_menu_educational_activity_2').setAttribute("href", compute_attribute("educational_activity_2.html", is_index));
        document.querySelector('#anchor_menu_educational_activity_3').setAttribute("href", compute_attribute("educational_activity_3.html", is_index));
        document.querySelector('#anchor_menu_educational_activity_4').setAttribute("href", compute_attribute("educational_activity_4.html", is_index));
        document.querySelector('#anchor_menu_educational_activity_5').setAttribute("href", compute_attribute("educational_activity_5.html", is_index));
        document.querySelector('#anchor_menu_educational_activity_6').setAttribute("href", compute_attribute("educational_activity_6.html", is_index));
        document.querySelector('#anchor_menu_educational_activity_7').setAttribute("href", compute_attribute("educational_activity_7.html", is_index));
        document.querySelector('#anchor_menu_SPS_1').setAttribute("href", compute_attribute("SPS_1.html", is_index));
        document.querySelector('#anchor_menu_SPS_2').setAttribute("href", compute_attribute("SPS_2.html", is_index));
        document.querySelector('#anchor_menu_SPS_3').setAttribute("href", compute_attribute("SPS_3.html", is_index));
        document.querySelector('#anchor_menu_SPS_4').setAttribute("href", compute_attribute("SPS_4.html", is_index));
        document.querySelector('#anchor_menu_VR_1').setAttribute("href", compute_attribute("VR_1.html", is_index));
        document.querySelector('#anchor_menu_VR_2').setAttribute("href", compute_attribute("VR_2.html", is_index));
        document.querySelector('#anchor_menu_parents').setAttribute("href", compute_attribute("parents.html", is_index));

    };
    var index_menu = document.querySelector('#nav_index_page');
    if (index_menu) {
        fillAnchors();
    };
    var pages_menu = document.querySelector('#nav_pages_page');
    if (pages_menu) {
        fillAnchors(false);
    };
});