function getYoutubeData(link, callback) {
	$.get(`https://vivekfy.cyclic.cloud/hack?url=${link}`, async function (data) {
		if (typeof callback === "function") {
			callback(data);
		}
	});
}
