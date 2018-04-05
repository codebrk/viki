var $ = new BaseJS();

$.ready(function() {
	var result = $.select("#result");
	result.html("");
	$.select("#message").on("keyup").call(function(e) {
		if (e.keyCode == 13 && this.value.trim() !== "") {
			$.http("http://anyms.pythonanywhere.com/" + encodeURI(this.value)).get().ready(function(res) {
				if (res.readyState === 4 && res.status == 200) {
					txt = res.responseText;
					if (txt.trim() === "") {
						txt = "?";
					}
					result.append("<div class='bot'><span>" + txt + "</span></div>");
					result[0].scrollTop = result[0].scrollHeight;
				}
			});

			result.append("<div class='you'><span>" + this.value + "</span></div>");
			this.value = "";
			result[0].scrollTop = result[0].scrollHeight;
		}
	});
});