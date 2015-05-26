$(document).on('ready', start);

function start(eventObj) {

$loading = $("#loadingBtn");
$loading.on("click", disabledBtn);

function disabledBtn(e) {
	$loading.disabled = true;
	$loading.html("Loading...");
	setTimeout(enable, 4000);
}

function enable(e) {
	$loading.disabled = false;
	$loading.html("Submit");
}

$loading.css("height", "50px");
$loading.css("width", "100px");
$loading.css("backgroundColor", "gray");













}