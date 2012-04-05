// G LAB Base Objects
var glab = {};
glab.class = {};

// Cookie Class
glab.class.cookie = function () {}

glab.class.cookie.prototype.set = function (name,value,seconds) {
	if (seconds) {
		var date = new Date();
		date.setTime(date.getTime()+(seconds*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

glab.class.cookie.prototype.get = function (name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

glab.class.cookie.prototype.erase = function (name) {
	createCookie(name,"",-1);
}


/************************************************
 * AUTOLOAD CLASSES								*
 ************************************************/

 glab.cookie = new glab.class.cookie();