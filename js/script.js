$(document).ready(function () {

  // :: DAY

    var $select_day = $("#select-day");
    for(var i = 1; i < 32; i++) {
        var day_number = i;
        $('<option>')
            .val(('0' + day_number).slice(-2))
            .text(i)
            .appendTo($select_day);
    }


// :: MONTH
    var $select_month = $("#select-month");
    var options = ["January","February","March","April","May","June", "July","August","September","October","November","December"];
    for(var i = 0; i < options.length; i++) {
        var month_number = i + 1;
        $('<option>')
            .val(('0' + month_number).slice(-2))
            .text(options[i])
            .appendTo($select_month);
    }


// :: YEAR
    var $select_year = $("#select-year");
    var year = new Date().getFullYear();
    var $select_year = $('#select-year').empty();

    for(var i = 0; i < 99; i++) {
        $('<option>')
            .val(year - i)
            .text(year - i)  
            .appendTo($select_year);
    }


});



