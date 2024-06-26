$(document).ready(function(){

    function createGrid(){
        let container = $('#container');
        for (let i = 0; i < 4; i++){
        let row = $('<div class = "row"></div>');
        for (let j = 0; j < 4; j++){
            let box = ('<div class = "box"></div>');
            row.append(box);
        }
        container.append(row);
    }
}
$('#container').on('click', '.box', function(){
    $(this).toggleClass('colored');
});
createGrid();
});