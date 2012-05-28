var Helper = function() {};

// Cookie Class
Helper.cookie = function() {};

Helper.cookie.prototype.set = function(name,value,seconds) {
	var expires;

	if (seconds) {
		var date = new Date();
		date.setTime(date.getTime() + (seconds * 60 * 1000));
		expires = '; expires=' + date.toGMTString();
	}
	else {
		expires = '';
	}

	document.cookie = name + '=' + value + expires + '; path=/';
};

Helper.cookie.prototype.get = function(name) {
	var nameEQ = name + '=';
	var ca = document.cookie.split(';');

	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];

		while (c.charAt(0) === ' ') {
			c = c.substring(1, c.length);
		}

		if (c.indexOf(nameEQ) === 0) {
			return c.substring(nameEQ.length, c.length);
		}
	}
	return null;
};

Helper.cookie.prototype.erase = function(name) {
	GLAB.cookie.set(name, '', -1);
};
