window.onload = function () {

    function forSkillStar() {
        
        for(let j = 0; j < 8; j++){
    
            var star_image = document.getElementsByClassName('sp-star');/* object */

            var new_element = document.createElement('p');

            var sp_category = document.getElementsByClassName("sp-category")

            new_element.classList.add("star");

            star_image[j].appendChild(new_element);

        function createIcon(){

            var star_icon = document.getElementsByClassName('star');

            var new_icon = document.createElement('i');

            new_icon.classList.add("fas", "fa-star"); 

            star_icon[j].appendChild(new_icon);}

            var total_image = document.getElementsByClassName('sp-all')

            total = total_image[j].dataset.total;

        function createIconFor() {

            for (let i = 0; i < total; i++) {
                createIcon();
            }
        }
        
        createIconFor()

        }
    }
    forSkillStar();
};




/* window.onload = function () {


    var star_image = document.getElementById('sp-star');

    var new_element = document.createElement('p');

    new_element.id = 'star';

    star_image.appendChild(new_element);

function createIcon(){

    var star_icon = document.getElementById('star');

    var new_icon = document.createElement('i');

    new_icon.classList.add("far", "fa-star"); 

    star_icon.appendChild(new_icon);}

    total = $('.sp-all').data("total");

function createIconFor() {

    for (let i = 0; i < total; i++) {
        createIcon();
      }
}

createIconFor()
};
 */
