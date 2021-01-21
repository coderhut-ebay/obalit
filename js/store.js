jQuery(document).ready(function(){
	//Right Click Protection
	//$(document).bind("contextmenu",function(e){ return false;});
	
	//Content Area Mods
	//Content Area Mods
	$(".pagecontainer > table:eq(1) tr:first td:first").addClass("org-background");
	$(".org-background table:eq(1)").addClass("org-content");
	$(".org-background table:eq(3)").addClass("content-middle");
	$(".v4stw").addClass("slider-content-middle");
	
	//Getting and Setting Store Categories
	if($("#org-categories").length > 0) {
		if($("#LeftPanel .lcat").length > 0) {
			$("#org-categories").html($("#LeftPanel .lcat").html());
		}
		$("#org-categories ul[class=lev1]").find("li:last").addClass("org-lastitem");
	}
	
	//Search Box
	var stxt = $("#org-search #org-input").find("input[class=v4sbox]").val();
	$("#org-search #org-input").find("input[class=v4sbox]").focus(function(){
		if($("#org-search #org-input").find("input[class=v4sbox]").val() == stxt) {
			$("#org-search #org-input").find("input[class=v4sbox]").val("");
		}
	});
	$("#org-search #org-input").find("input[class=v4sbox]").blur(function(){
		if($("#org-search #org-input").find("input[class=v4sbox]").val() == "") {
			$("#org-search #org-input").find("input[class=v4sbox]").val(stxt);
		}
	});
	$("#org-search #org-submit").find("input").click(function(){
		if($("#org-search #org-input").find("input[class=v4sbox]").val() == stxt) {
			$("#org-search #org-input").find("input[class=v4sbox]").val("");
		}
	});
    
	//Footer
	var d = new Date();
	var footer = "\n\r<div class=\"org-wrapcens\">\r\n<div id=\"org-footer\">\r\n<div class=\"ftr-top\">\r\n<div class=\"container\">\r\n<div class=\"row\">\r\n<div class=\"col-lg-4\">\r\n<div class=\"single-widget\">\r\n<h5 class=\"single-widget-heading\">ABOUT US<\/h5>\r\n<div class=\"single-widget-con about\">\r\n<p>Pars Collections was first introduced to market in 2012, since the first day we have done our best to deliver our commitments by following a simple philosophy, establish a great customer relation by being sincere and give personal attention to every concern and\/or feedback, be creative and strive to bring products to your home that would make it an exceptional experience for you and last but not least, deliver superior product quality to earn your trust and loyalty!<\/p>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<div class=\"col-lg-4 offset-lg-4\">\r\n<div class=\"single-widget\">\r\n<h5 class=\"single-widget-heading\">SIGNUP FOR NEWSLETTER<\/h5>\r\n<div class=\"single-widget-con newsletter\">\r\n<p>Sign up to join the Parscollections to hear about the latest offers, fantastic new products, and chances to win lots of high-quality kitchen utensils and cookware!<\/p>\r\n<a href=\"http:\/\/my.ebay.com\/ws\/eBayISAPI.dll?AcceptSavedSeller&mode=0&preference=0&ssPageName=STRK:MEFS:ADDMP&sellerid=babolii\" target=\"_blank\">Sign up<\/a>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<div class=\"ftr-btm\">\r\n<div class=\"container\">\r\n<div class=\"row\">\r\n<div class=\"col-lg-12\">\r\n<div class=\"copy-right-text\">\r\nCopyright 2021 \u00a9 Parscollections\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>\r\n<\/div>";
	
    if(pageName != "PageAboutMeViewStore") {
		if($(".org-content").length > 0) {
			$(".org-content").after(footer);			
		}
	}
});