
$(document).ready(function(){
	for(field in fields){
		if($("#"+field)) {
			$('#'+field).text(fields[field]);
		}
	}
	for(header in headers){
		if($("."+header)) {
			$('.'+header).text(headers[header]);
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