
$(document).ready(function(){
	for(field in fields){
		if($("#"+field)) {
			$('#'+field).html(fields[field]);
		}
	}
	for(header in headers){
		if($("."+header)) {
			$('.'+header).html(headers[header]);
		}
	}
})

$.get("https://ipinfo.io", function(response) {
	var subject = "Interest from - ";
    var location = "City: " + response.city;
    location += " / Region: " + response.region;
    location += " / Country: " + response.country;
    $('#subjectLine')[0].value = subject + location;
}, "jsonp");