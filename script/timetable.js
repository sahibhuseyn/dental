$(document).ready(function(){

         $(document).on('scroll', function(){

        if ($(document).scrollTop() > 30)
        {
            $('.fixed_section').css({
            'width':'100%',
            'position':'fixed',
            'top':'0'
            })
        }
        else
        {
            $('.fixed_section').css({
            'width':'',
            'position':'',
            'top':''
            })
        }
    })

   


    $("#to_top").on("click", function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    $(window).on('scroll', function(){
        if ($(document).scrollTop() > 500)
    {
        $("#to_top").css({
            'visibility' : 'visible',
            'position' : 'fixed',
            'right' : '4rem',
            'bottom' : '4rem'
        })
    }
    else
    {
        $("#to_top").css({
            'visibility' : '',
            'position' : '',
            'right' : '',
            'bottom' : ''
        })
    }
   })
})


adultDentist=[
//Monday
	[	
		["<p>Eric Synder</p>",new Date("April 17, 2017 08:00:00"),new Date("April 17, 2017 12:00:00"), "<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"]	,		
		["<p>Christina Holland</p>",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 16:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>Pediatric Dentist</span>"]			
	],
//Tuesday
	[
		["<p>Carolyn  Hunt</p>",new Date("April 18, 2017 08:00:00"),new Date("April 18, 2017 13:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-carolyn-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dental Hygienist</span>"]			
	],
//Wednesday
	[
		["<p>Eric Synder</p>",new Date("April 19, 2017 13:00:00"),new Date("April 19, 2017 18:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"]	,		
	],
//THursday
	[
		["<p>Carolyn  Hunt</p>",new Date("April 20, 2017 14:00:00"),new Date("April 20, 2017 17:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-carolyn-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>Pediatric Dentist</span>"]			
		
	],
//Friday

	[
		["<p>Eric Synder</p>",new Date("April 21, 2017 09:00:00"),new Date("April 21, 2017 11:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"]	,		
		["<p>Christina Holland</p>",new Date("April 21, 2017 13:00:00"),new Date("April 21, 2017 16:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>Pediatric Dentist</span>"]			
	],
//Saturday
	[
		["<p>Eric Synder</p>",new Date("April 22, 2017 16:00:00"),new Date("April 22, 2017 18:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"],
		["<p>Christina Holland</p>",new Date("April 22, 2017 09:00:00"), new Date("April 22, 2017 14:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"]	
	],
//Sunday
	[
		["<p>Eric Synder</p>",new Date("April 23, 2017 15:00:00"),new Date("April 23, 2017 18:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"]	,		
		["<p>Christina Holland</p>",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 13:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"]			
	]

]

dentist=[
//Monday
	[
		["<p>Christina Holland</p>",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 16:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-carolyn-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"]			
	],
//Tuesday
	[
		["<p>Carolyn  Hunt</p>",new Date("April 18, 2017 08:00:00"),new Date("April 18, 2017 13:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-carolyn-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"],			
		["<p>Carolyn  Hunt</p>",new Date("April 18, 2017 014:00:00"),new Date("April 18, 2017 18:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-carolyn-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"],			
	],
//Wednesday
	[
		["<p>Eric Synder</p>",new Date("April 19, 2017 13:00:00"),new Date("April 19, 2017 18:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"]	,		
		["<p>Eric Synder</p>",new Date("April 19, 2017 09:00:00"),new Date("April 19, 2017 11:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"]	,		
	],
//THursday
	[
		["<p>Carolyn  Hunt</p>",new Date("April 20, 2017 14:00:00"),new Date("April 20, 2017 17:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-carolyn-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"]			
		
	],
//Friday
	[
		["<p>Christina Holland</p>",new Date("April 21, 2017 13:00:00"),new Date("April 21, 2017 16:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"]			
	],
//Saturday
	[
		["<p>Christina Holland</p>",new Date("April 22, 2017 09:00:00"), new Date("April 22, 2017 14:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"]

				
	],
//Sunday

	[
		["<p>Eric Synder</p>",new Date("April 23, 2017 15:00:00"),new Date("April 23, 2017 18:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"]	,		
		["<p>Christina Holland</p>",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 13:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"]			
	]

]

dentalHygienist=[
//Monday
	[
		["<p>Eric Synder</p>",new Date("April 17, 2017 08:00:00"),new Date("April 17, 2017 12:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"]	,		
		["<p>Christina Holland</p>",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 16:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"]			
	],
//Tuesday
	[
		["<p>Carolyn  Hunt</p>",new Date("April 18, 2017 08:00:00"),new Date("April 18, 2017 13:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-carolyn-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>Dental Hygienist</span>"]			
	],
//Wednesday
	[
		["<p>Eric Synder</p>",new Date("April 19, 2017 13:00:00"),new Date("April 19, 2017 18:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"]	,		
	],
//THursday
	[
		["<p>Carolyn  Hunt</p>",new Date("April 20, 2017 14:00:00"),new Date("April 20, 2017 17:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-carolyn-50x50.jpg-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>Dental Hygienist</span>"]			
		
	],
//Friday
	[
		["<p>Eric Synder</p>",new Date("April 21, 2017 09:00:00"),new Date("April 21, 2017 11:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"]	,		
		["<p>Christina Holland</p>",new Date("April 21, 2017 13:00:00"),new Date("April 21, 2017 16:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"]			
	],
//Saturday
	[
		["<p>Eric Synder</p>",new Date("April 22, 2017 16:00:00"),new Date("April 22, 2017 18:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"],
		["<p>Christina Holland</p>",new Date("April 22, 2017 09:00:00"), new Date("April 22, 2017 14:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> ","<span>dentist</span>"]

				
	],
//Sunday
	[
		["Eric Synder",new Date("April 23, 2017 15:00:00"),new Date("April 23, 2017 18:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> "]	,		
		["Christina Holland",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 13:00:00"),"<img src='https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg' width='50' height='50' class='img-responsive img-circle'> "]			
	]
]

cosmeticDentist=[
//Monday
	[

		["Eric Synder",new Date("April 17, 2017 10:00:00"),new Date("April 17, 2017 12:00:00")]	,		
		["Christina Holland",new Date("April 17, 2017 16:00:00"),new Date("April 17, 2017 18:00:00")]			
	],
//Tuesday
	[
		["Carolyn  Hunt",new Date("April 18, 2017 08:00:00"),new Date("April 18, 2017 13:00:00")]			
	],
//Wednesday
	[
		["Eric Synder",new Date("April 19, 2017 13:00:00"),new Date("April 19, 2017 18:00:00")]	,		
		["Eric Synder",new Date("April 19, 2017 08:00:00"),new Date("April 19, 2017 10:00:00")]	,		
	],
//THursday
	[
		["Carolyn  Hunt",new Date("April 20, 2017 14:00:00"),new Date("April 20, 2017 17:00:00")]			
		
	],
//Friday

	[
		["Eric Synder",new Date("April 21, 2017 09:00:00"),new Date("April 21, 2017 11:00:00")]	,		
		["Christina Holland",new Date("April 21, 2017 12:00:00"),new Date("April 21, 2017 16:00:00")]			
	],
//Saturday
	[
		["Eric Synder",new Date("April 22, 2017 12:00:00"),new Date("April 22, 2017 16:00:00")],
		["Christina Holland",new Date("April 22, 2017 09:00:00"), new Date("April 22, 2017 11:00:00")]

	],
//Sunday

	[
		["Eric Synder",new Date("April 23, 2017 15:00:00"),new Date("April 23, 2017 18:00:00")]	,		
		["Christina Holland",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 13:00:00")]			
	]
]

pediatricDentist=[
//Monday
	[
		["Christina Holland",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 16:00:00")]			
	],
//Tuesday
	[
		["Carolyn  Hunt",new Date("April 18, 2017 08:00:00"),new Date("April 18, 2017 13:00:00")]			
	],
//Wednesday
	[
		["Eric Synder",new Date("April 19, 2017 14:00:00"),new Date("April 19, 2017 17:00:00")]			
	],
//THursday
	[
		["Carolyn  Hunt",new Date("April 20, 2017 10:00:00"),new Date("April 20, 2017 13:00:00")],
		["Eric Synder",new Date("April 20, 2017 15:00:00"),new Date("April 20, 2017 18:00:00")]		
		
	],
//Friday
	[
		["Eric Synder",new Date("April 21, 2017 09:00:00"),new Date("April 21, 2017 11:00:00")]	,		
		["Christina Holland",new Date("April 21, 2017 13:00:00"),new Date("April 21, 2017 16:00:00")]			
	],
//Saturday
	[
		["Eric Synder",new Date("April 22, 2017 16:00:00"),new Date("April 22, 2017 18:00:00")],
		["Christina Holland",new Date("April 22, 2017 09:00:00"), new Date("April 22, 2017 14:00:00")]
				
	],
//Sunday

	[
		["Eric Synder",new Date("April 23, 2017 15:00:00"),new Date("April 23, 2017 18:00:00")]	,		
		["Christina Holland",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 13:00:00")]			
	]
]

////////////////////////////////////////////////////////////////////////////////

doctors=[adultDentist,dentist,dentalHygienist,cosmeticDentist,pediatricDentist]


for(var i=1;i<=10;i++){
	tr=$("#timetable table tbody tr:nth-child("+i+")")
	for(var j=0;j<7;j++){
		$('<td></td>').appendTo(tr);
	}
}

/////////////////////////////////////////////////////////////////////////////

function PlaceTimeTable(index){

	$("#timetable table tbody tr td:not(:nth-child(1)").empty()

	for(var j=0; j<7;j++)
	{
		for(var i=0; i<doctors[index][j].length;i++)
		{


			var den=doctors[index][j][i];

			var lengthOfDiv=den[2].getHours()-den[1].getHours();

			var startPosition= den[1].getHours()-8;

			$("<div></div>",{
				class: "fc-event",
				style: " height:"+100*lengthOfDiv+"%",
			}).append(den[3]).append(den[0]).append(den[4]).

			appendTo($("#timetable table tbody tr:nth-child("+(startPosition+1)+") td:nth-child(+"+(j+2)+")"))
			
		}
	}
	
}

$("#timetable ul li").click(function(){

	var index=$("#timetable ul li").index($(this));

	PlaceTimeTable(index)
	$("#timetable ul li").removeClass("active")
	$(this).addClass("active")

	if($(window).width()<600){
		$(this).after($("#timetable #tableScroll"))
	}
})


function CheckForAccordion(){
	if($(window).width()<600){
		$('#timetable ul li').css("display",'block')

		$('#timetable ul .active').after($("#timetable #tableScroll"))

	}
	else{
		$('#timetable ul li').css("display",'inline-block')
		$('#timetable').append($('#timetable #tableScroll'))

	}

}

$(document).ready(function(){
	PlaceTimeTable(0);
	CheckForAccordion()
})

$(window).resize(function(){
	CheckForAccordion()
})

 $('#timetable .horizontal_border_bottom li a').on('click', function(){
            $('#timetable .horizontal_border_bottom li a').removeClass('border_bottom_link');
            $(this).addClass('border_bottom_link');


 })