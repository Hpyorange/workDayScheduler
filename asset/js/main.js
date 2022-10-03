const currentDay = moment().format('dddd, MMM DD YYYY');
$('#currentDay').text(currentDay);

const time  = moment().format('HH:mm:ss');
$('#time').text(time)

$('.saveBtn').on('click',function(){

    let content = $(this).siblings(".description").val();
    console.log(content);
    let id = $(this).parent().attr("id");

    localStorage.setItem(id,content);

})

$('#8 .description').val(localStorage.getItem('8'));
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));
$('#18 .description').val(localStorage.getItem('18'));
$('#19 .description').val(localStorage.getItem('19'));
$('#20 .description').val(localStorage.getItem('20'));

function tracker(){

    const now = moment().hour();

    $('.time-block').each(function(){
        const timeBlock = parseInt($(this).attr("id"));
        console.log(timeBlock);

        if (timeBlock < now){
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
        }
        else if (timeBlock === now ){
            $(this).addClass('present');
            $(this).removeClass('future');
            $(this).removeClass('past');
        }
        else{
            $(this).addClass('future');
            $(this).removeClass('present');
            $(this).removeClass('past');
        }
    })    
}

tracker();