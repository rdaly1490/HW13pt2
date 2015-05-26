$(document).on('ready', start);

function start(eventObj) {

$loading = $("#loadingBtn");
$loading.on("click", disabledBtn);

function disabledBtn(e) {
	$loading.disabled = true;
	$loading.html("Loading...");
	$loading.css("color", "#b7b7c2");
	$loading.css("backgroundColor", "#dcdce1");
	setTimeout(enable, 4000);
}

function enable(e) {
	$loading.disabled = false;
	$loading.html("Submit");
	$loading.css("color", "black");
	$loading.css("backgroundColor", "gray");
}

$loading.css("height", "50px");
$loading.css("width", "100px");
$loading.css("backgroundColor", "gray");













}