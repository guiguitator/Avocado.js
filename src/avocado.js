(function () {
var Avocado = {
	elements :[],
	// getById
	ID: function() {
		var tempElems = [];
		for(var i = 0; i<arguments.length; i++) {
			if (typeof arguments[i] === 'string') {
				tempElems.push(document.getElementById(arguments[i]));
			}
		}
		this.elements = tempElems;
		return this;
	},
	// getByClass
	CLASS: function(name, type, parent) {
		var tempElems = [];
		var pattern = new RegExp("(^| )" + name + "( |$)");
		var e = (parent || document).getElementsByTagName(type || '*')  
		for(var i=0;i<e.length;i++) {
			if(pattern.test(e[i].className)) {
				tempElems.push(e[i]);
			}
		}
		this.elements = tempElems;
		return this;
	},
	// getByTag
	TAG: function() {
		var tempElems = [];
		for(var i = 0;i<arguments.length;i++) {
			if(typeof arguments[i] === 'string') {
				var e = document.getElementsByTagName(arguments[i]); 
				for(var j=0;j<e.length;j++) {
					tempElems.push(e[j]);
				}
			}
		}
		this.elements = tempElems;
		return this;
	},
	// getByName
	NAME: function() {
		var tempElems = [];
		for(var i = 0;i<arguments.length;i++) {
			if(typeof arguments[i] === 'string') {
				var e = document.getElementsByName(arguments[i]);
				for(var j=0;j<e.length;j++) {
					tempElems.push(e[j]);
				}
			}
		}
		this.elements = tempElems; 
		return this;
	},

	addClass: function(name) {
		for(var i = 0; i<this.elements.length; i++) {
			this.elements[i].classList.add(name);
		}
		return this;
	},

	addId: function(id) {
		for(var i = 0; i<this.elements.length; i++) {
			this.elements[i].id=id;
		}
		return this;
	},

	alert: function(text) {
		alert(text);
		return this;
	},

	boxShadow: function(shadow) {
		for(var i = 0; i<this.elements.length; i++) {
			if (shadow == 'light') {this.elements[i].style.boxShadow='0 1px 2px 0 rgba(0, 0, 0, 0.05)';}
			if (shadow == 'medium') {this.elements[i].style.boxShadow='0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';}
			if (shadow == 'heavy') {this.elements[i].style.boxShadow='0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';}
		}
		return this;
	},

	capitalize: function(text) {
		for(var i = 0; i<this.elements.length; i++) {
			if (text == undefined) {
				this.elements[i].style.textTransform='capitalize';
			} else {
				const words = text.split(" ");
				for (let i = 0; i < words.length; i++) {
					words[i] = words[i][0].toUpperCase() + words[i].substr(1);
				}
				return words.join(' ');
			}
		}
		return this;
	},

	checked: function(bool) {
		for(var i=0;i<this.elements.length;i++) {
			if (this.elements[i].nodeName.toLowerCase() === 'input' && (this.elements[i].getAttribute('type') == 'checkbox' || this.elements[i].getAttribute('type') == 'radio')){
				if (bool == undefined) {
					if (this.elements[i].checked == true) {
						this.elements[i].checked = false;
					} else if (this.elements[i].checked == false) {
						this.elements[i].checked = true;
					}
				} else {
					this.elements[i].checked = bool;
				}
		}
	}
		return this;
	},

	consoleInfo: function(text) {
		console.log('%c🌐 > '+text, 'color: rgb(59, 130, 246);');
		return this;
	},

	consoleError: function(text) {
		console.log('%c❌ > '+text, 'color: rgb(239, 68, 68);');
		return this;
	},

	consoleSuccess: function(text) {
		console.log('%c✔️ > '+text, 'color: rgb(16, 185, 129);');
		return this;
	},

	consoleWarn: function(text) {
		console.log('%c⚠️ > '+text, 'color: rgb(251, 191, 36);');
		return this;
	},

	copy: function() {
		for(var i = 0; i<this.elements.length; i++) {
			this.elements[i].select();
			this.elements[i].setSelectionRange(0, 99999);
			document.execCommand("copy");
		}
		return this;
	},

	// ⚠️ PROTOTYPE
	delay: function(ms) {
		for(var i = 0; i<this.elements.length; i++) {
			setTimeout(function () {
				// Hum...
			}, 5000);
		}
		return this;
	},

	display: function(attr) {
		for(var i = 0; i<this.elements.length; i++) {
			if (attr != undefined) {
				this.elements[i].style.display=attr;
			} else {
				return this.elements[i].style.display;
			}
		}
		return this;
	},

	fadeIn: function(duration) {
		for(var i = 0; i<this.elements.length; i++) {
			this.elements[i].style.opacity = 0;
			var ms = duration / 10;
			var obj = this.elements[i];
			var callCount = 1;
			var fade = function () {
				if (callCount <= 10) {
					fade;
					if (callCount == 1) {obj.style.opacity=0.1}
					if (callCount == 2) {obj.style.opacity=0.2}
					if (callCount == 3) {obj.style.opacity=0.3}
					if (callCount == 4) {obj.style.opacity=0.4}
					if (callCount == 5) {obj.style.opacity=0.5}
					if (callCount == 6) {obj.style.opacity=0.6}
					if (callCount == 7) {obj.style.opacity=0.7}
					if (callCount == 8) {obj.style.opacity=0.8}
					if (callCount == 9) {obj.style.opacity=0.9}
					if (callCount == 10) {obj.style.opacity=1}
					callCount += 1;
				} else {
					clearInterval(repeater);
				}
			};
		}
		var repeater = setInterval(fade, ms)
		return this;
	},

	fadeOut: function(duration) {
		for(var i = 0; i<this.elements.length; i++) {
			this.elements[i].style.opacity = 1;
			var ms = duration / 10;
			var obj = this.elements[i];
			var callCount = 1;
			var fade = function () {
				if (callCount <= 10) {
					fade;
					if (callCount == 1) {obj.style.opacity=0.9}
					if (callCount == 2) {obj.style.opacity=0.8}
					if (callCount == 3) {obj.style.opacity=0.7}
					if (callCount == 4) {obj.style.opacity=0.6}
					if (callCount == 5) {obj.style.opacity=0.5}
					if (callCount == 6) {obj.style.opacity=0.4}
					if (callCount == 7) {obj.style.opacity=0.3}
					if (callCount == 8) {obj.style.opacity=0.2}
					if (callCount == 9) {obj.style.opacity=0.1}
					if (callCount == 10) {obj.style.opacity=0}
					callCount += 1;
				} else {
					clearInterval(repeater);
				}
			};
		}
		var repeater = setInterval(fade, ms)
		return this;
	},

	fullscreen: function(bool) {
		for(var i = 0; i<this.elements.length; i++) {
			element = this.elements[i];
			if (bool == true) {
				if (element.requestFullscreen) {
					element.requestFullscreen();
				} else if (element.webkitRequestFullscreen) {
					element.webkitRequestFullscreen();
				} else if (element.msRequestFullscreen) {
					element.msRequestFullscreen();
				}
			} else if (bool == false) {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.webkitExitFullscreen) {
					document.webkitExitFullscreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				}
			}
		}
		return this;
	},

	hover: function(callbackIn, callbackOut){
		if (this.elements[0].addEventListener) {
			for(var i = 0; i<this.elements.length; i++) {
				this.elements[i].addEventListener('mouseenter', callbackIn, false);
				this.elements[i].addEventListener('mouseout', callbackOut, false);
			}
		} else if (this.elements[0].attachEvent) {
			for(var i = 0; i<this.elements.length; i++) {
				this.elements[i].attachEvent('on'+'mouseenter', callbackIn);
				this.elements[i].attachEvent('on'+'mouseout', callbackOut);
			}
		}
		return this;
	},

	html: function(html) {
		for(var i = 0; i<this.elements.length; i++) {
			if (html == undefined) {
				return this.elements[i].innerHTML;
			} else {
				this.elements[i].innerHTML=html;
			}
		}
		return this;
	},

	lenght: function() {
		for(var i = 0; i<this.elements.length; i++) {
			return this.elements.length;
		}
		return this;
	},

	lowercase: function(text) {
		for(var i = 0; i<this.elements.length; i++) {
			if (text == undefined) {
				this.elements[i].style.textTransform='lowercase';
			} else {
				return text.toLowerCase();
			}
		}
		return this;
	},

	// ⚠️ PROTOTYPE
	openWindow: function(link, title, width, height) {
		if (link == 'none') {
			window.open('', title, 'width='+width+', height='+height);
		} else {
			window.open(link, title, 'width='+width+', height='+height);
		}
		return this;
	},

	on: function(action, callback){
		if (this.elements[0].addEventListener) {
			for(var i = 0; i<this.elements.length; i++) {
				this.elements[i].addEventListener(action, callback, false);
			}
		} else if (this.elements[0].attachEvent) {
			for(var i = 0; i<this.elements.length; i++) {
				this.elements[i].attachEvent('on'+action, callback);
			}
		}
		return this;
	},

	passwordGenerator: function(length, strength) {
		if (strength == 'hard') {
			var size = 12;
			if (length != undefined) {
				size = length;
			}
			var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
			var password = "";
			for (var i = 0, n = charset.length; i < size; ++i) {
				password += charset.charAt(Math.floor(Math.random() * n));
			}
		} else if (strength == undefined || 'normal') {
			var size = 8;
			if (length != undefined) {
				size = length;
			}
			var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
			var password = "";
			for (var i = 0, n = charset.length; i < size; ++i) {
				password += charset.charAt(Math.floor(Math.random() * n));
			}
		}
		return password;
		return this;
	},

	randomBool: function(probability) {
		if (probability == undefined) {
			return Math.random() < 0.5;
		} else {
			return Math.random() < probability;
		}
		return this;
	},

	randomColor: function() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
		return this;
	},

	randomFloat: function(min, max) {
		if (max == undefined || min == undefined) {
			return Math.random();
		} else {
			return Math.random() * (max - min) + min;
		}
		return this;
	},

	randomInt: function(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
		return this;
	},

	randomGradient: function(type, deg) {
		var letters = '0123456789ABCDEF';
		var color_primary = '#';
		var color_secondary = '#'
		var gradient_type = 'linear-gradient';
		var gradient_deg = 54+'deg';
		if (deg != undefined) {
			gradient_deg = deg+'deg';
		} if (type == 'linear') {
			gradient_type = 'linear-gradient';
		} else if (type == 'radial') {
			gradient_type = 'radial-gradient';
			gradient_deg = 'circle';
		}
		for (var i = 0; i < 6; i++) {
			color_primary += letters[Math.floor(Math.random() * 16)];
			color_secondary += letters[Math.floor(Math.random() * 16)];
		}
		var gradient = gradient_type+'('+gradient_deg+', '+color_primary+' 0%, '+color_secondary+' 100%) fixed';
		return gradient;
		return this;
	},

	removeClass: function(name) {
		for(var i = 0; i<this.elements.length; i++) {
			this.elements[i].classList.remove(name);
		}
		return this;
	},

	removeId: function() {
		for(var i = 0; i<this.elements.length; i++) {
			this.elements[i].removeAttribute('id');
		}
		return this;
	},

	rollingNumber: function(start, end, duration) {
		for(var i = 0; i< this.elements.length; i++) {
				let startTimestamp = null;
				var obj = this.elements[i];
				const step = (timestamp) => {
				if (!startTimestamp) startTimestamp = timestamp;
					const progress = Math.min((timestamp - startTimestamp) / duration, 1);
					obj.innerHTML = Math.floor(progress * (end - start) + start);
					if (progress < 1) {
						window.requestAnimationFrame(step);
					}
				};
				window.requestAnimationFrame(step);
		}
		return this;
	},

	rotate: function(deg) {
		for(var i = 0; i<this.elements.length; i++) {
			this.elements[i].style.transform='rotate('+deg+'deg)';
		}
		return this;
	},

	screenHeight: function() {
		return screen.availHeight;
		return this;
	},

	screenWidth: function() {
		return screen.availWidth;
		return this;
	},

	select: function() {
		for(var i = 0; i<this.elements.length; i++) {
			this.elements[i].select();
			this.elements[i].setSelectionRange(0, 99999);
		}
		return this;
	},

	src: function(source) {
		for(var i = 0; i<this.elements.length; i++) {
			if (source == undefined) {
				return this.elements[i].src;
			} else {
				this.elements[i].src=source;
			}
		}
		return this;
	},

	showPassword: function(bool) {
		for(var i = 0; i<this.elements.length; i++) {
			if (bool == true) {
				this.elements[i].type = "text";
			} else if (bool == false) {
				this.elements[i].type = "password";
			}
			else if (bool == undefined) {
				if (this.elements[i].type == "password") {
					this.elements[i].type = "text";
				} else if (this.elements[i].type == "text") {
					this.elements[i].type = "password";
				}
			}
		}
		return this;
	},

	spin: function(time) {
		for(var i = 0; i<this.elements.length; i++) {
			return this.elements[i].animate([
				{transform:'rotate(0deg)'},
				{transform: 'rotate(360deg)'}
			], {
				duration: time,
				iterations: Infinity
			});
		}
		return this;
	},

	style: function(objStyle) {
		for(var i = 0; i < this.elements.length;i++) {
			for(var k in objStyle) {
				this.elements[i].style[k] = objStyle[k];
			}
		}
		return this;
	}, // .style({color:'red', backgroundColor:'blue'})

	text: function(text) {
		for(var i = 0; i<this.elements.length; i++) {
			if (text == undefined) {
				return this.elements[i].innerText;
			} else {
				this.elements[i].textContent=text;
			}
		}
		return this;
	},

	title: function(text) {
		for(var i = 0; i<this.elements.length; i++) {
			if (text == undefined) {
				return document.title;
			} else {
				document.title=text;
			}
		}
		return this;
	},

	toCamelCase: function(str) {
		for(var i = 0; i<this.elements.length; i++) {
			if (str == undefined) {
				const words = this.elements[i].value.match(/[a-zàâäèéêëîïôœùûüÿç]+/gi);
				if (!words) return "";
				var first_word = words[0].toLowerCase();
				delete words[0];
				this.elements[i].value=first_word + words.map(function(word) {
					return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
				}).join("");
			} else {
				const words = str.match(/[a-zàâäèéêëîïôœùûüÿç]+/gi);
				if (!words) return "";
				var first_word = words[0].toLowerCase();
				delete words[0];
				return first_word + words.map(function(word) {
					return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
				}).join("");
			}
		}
		return this;
	},

	toKebabCase: function(str) {
		for(var i = 0; i<this.elements.length; i++) {
			if (str == undefined) {
				this.elements[i].value=this.elements[i].value && this.elements[i].value.match(/[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]{2,}(?=[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ][a-zàâäèéêëîïôœùûüÿç]+[0-9]*|\b)|[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]?[a-zàâäèéêëîïôœùûüÿç]+[0-9]*|[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]|[0-9]+/g).map(s => s.toLowerCase()).join('-');
			} else {
				return str && str.match(/[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]{2,}(?=[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ][a-zàâäèéêëîïôœùûüÿç]+[0-9]*|\b)|[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]?[a-zàâäèéêëîïôœùûüÿç]+[0-9]*|[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]|[0-9]+/g).map(s => s.toLowerCase()).join('-');
			}
		}
		return this;
	},
	
	toPascalCase: function(str) {
		for(var i = 0; i<this.elements.length; i++) {
			if (str == undefined) {
				const words = this.elements[i].value.match(/[a-zàâäèéêëîïôœùûüÿç]+/gi);
				if (!words) return "";
				this.elements[i].value=words.map(function(word) {return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();}).join("");
				} else {
				const words = str.match(/[a-zàâäèéêëîïôœùûüÿç]+/gi);
				if (!words) return "";
				return words.map(function(word) {return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();}).join("");
			}
		}
		return this;
	},

	toScreamingSnakeCase: function(str) {
		for(var i = 0; i<this.elements.length; i++) {
			if (str == undefined) {
				this.elements[i].value=this.elements[i].value && this.elements[i].value.match(/[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]{2,}(?=[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ][a-zàâäèéêëîïôœùûüÿç]+[0-9]*|\b)|[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]?[a-zàâäèéêëîïôœùûüÿç]+[0-9]*|[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]|[0-9]+/g).map(s => s.toUpperCase()).join('_');
			} else {
				return str && str.match(/[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]{2,}(?=[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ][a-zàâäèéêëîïôœùûüÿç]+[0-9]*|\b)|[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]?[a-zàâäèéêëîïôœùûüÿç]+[0-9]*|[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]|[0-9]+/g).map(s => s.toUpperCase()).join('_');
				// àâäèéêëîïôœùûüÿç ÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ
			}
		}
		return this;
	},

	toSnakeCase: function(str) {
		for(var i = 0; i<this.elements.length; i++) {
			if (str == undefined) {
				this.elements[i].value=this.elements[i].value && this.elements[i].value.match(/[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]{2,}(?=[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ][a-zàâäèéêëîïôœùûüÿç]+[0-9]*|\b)|[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]?[a-zàâäèéêëîïôœùûüÿç]+[0-9]*|[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]|[0-9]+/g).map(s => s.toLowerCase()).join('_');
			} else {
				return str && str.match(/[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]{2,}(?=[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ][a-zàâäèéêëîïôœùûüÿç]+[0-9]*|\b)|[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]?[a-zàâäèéêëîïôœùûüÿç]+[0-9]*|[A-ZÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]|[0-9]+/g).map(s => s.toLowerCase()).join('_');
				// àâäèéêëîïôœùûüÿç ÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ
			}
		}
		return this;
	},

	typeWriter: function(text, speed) {
		for(var i = 0; i<this.elements.length; i++) {
			var y = 0;
			var obj = this.elements[i];
			const writer = () => {
				if (i < text.length) {
					obj.innerHTML += text.charAt(y);
					y++;
					setTimeout(writer, speed);
				}
			}
			window.requestAnimationFrame(writer);
		}
		return this;
	},

	uppercase: function(text) {
		for(var i = 0; i<this.elements.length; i++) {
			if (text == undefined) {
				this.elements[i].style.textTransform='uppercase';
			} else {
				return text.toUpperCase();
			}
		}
		return this;
	},

	value: function(value) {
		for(var i = 0; i<this.elements.length; i++) {
			if (value == undefined) {
				return this.elements[i].value;
			} else {
				this.elements[i].value=value;
			}
		}
		return this;
	},

	modal: function(title, width, height, id) {
		for(var i = 0; i<this.elements.length; i++) {
			this.elements[i].innerHTML=`
			<div id="${id}-core" class="modal-core" style="width: ${width}px; height: ${height}px; background-color: #f1f1f1;">
				<div id="${id}-header" class="modal-header" style="background-color: #d9d9d9; width: 100%; height: 30px; display: flex; align-items: center; user-select: none;">
					<span id="${id}-title" class="modal-title" style="margin: 0; padding-left: 5px;">${title}</span>
					<div id="${id}-close" onmouseover="this.style.color='white';" onmouseleave="this.style.color='#161616';" class="modal-close" style="background-color: #eb2f21; display: flex; height: 100%; color: #161616; margin-left: auto; cursor: pointer;">
						<svg width="100%" height="100%" fill="none" viewBox="0 0 24 24">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L6.75 17.25"></path>
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75L17.25 17.25"></path>
						</svg>
					</div>
				</div>
				<div id="${id}-body" class="modal-body" style="background-color: transparent; width: 100%; height: 100%; margin: 5px;">
					
				</div>
			</div>
			`;
		}
		return this;
	},

	icon: function(type, color, fill, size) {
		for(var i = 0; i<this.elements.length; i++) {
			var svg_color = 'currentColor';
			var svg_fill = 'transparent';
			var svg_size = '24';
				// Parameters
			if (color != undefined) {
				if (color == 'current') {
					svg_color = 'currentColor';
				}
				else {
					svg_color = color;
				}
			}
			if (fill != undefined) {
				svg_fill = fill;
			}
			if (size != undefined) {
				svg_size = size;
			}
				// Motifs
			if (type == 'arrow-down') {
				this.elements[i].innerHTML=`
				<svg width="${svg_size}" height="${svg_size}" fill="${svg_fill}" viewBox="0 0 24 24">
					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 13.75L12 19.25L6.75 13.75"></path>
					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18.25V4.75"></path>
				</svg>`;
			}
			if (type == 'arrow-left') {
				this.elements[i].innerHTML=`
				<svg width="${svg_size}" height="${svg_size}" fill="${svg_fill}" viewBox="0 0 24 24">
					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 6.75L4.75 12L10.25 17.25"></path>
					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 12H5"></path>
				</svg>`;
			}
			if (type == 'arrow-right') {
				this.elements[i].innerHTML=`
				<svg width="${svg_size}" height="${svg_size}" fill="${svg_fill}" viewBox="0 0 24 24">
 					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"></path>
 					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H4.75"></path>
				</svg>`;
			}
			if (type == 'arrow-up') {
				this.elements[i].innerHTML=`
				<svg width="${svg_size}" height="${svg_size}" fill="${svg_fill}" viewBox="0 0 24 24">
					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 10.25L12 4.75L6.75 10.25"></path>
					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19.25V5.75"></path>
				</svg>`;
			}
			if (type == 'close') {
				this.elements[i].innerHTML=`
				<svg width="${svg_size}" height="${svg_size}" fill="${svg_fill}" viewBox="0 0 24 24">
					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L6.75 17.25"></path>
					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75L17.25 17.25"></path>
				</svg>`;
			}
			if (type == 'copy') {
				this.elements[i].innerHTML=`
				<svg width="${svg_size}" height="${svg_size}" fill="${svg_fill}" viewBox="0 0 24 24">
					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.5 15.25V15.25C5.5335 15.25 4.75 14.4665 4.75 13.5V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H13.5C14.4665 4.75 15.25 5.5335 15.25 6.5V6.5"></path>
					<rect width="10.5" height="10.5" x="8.75" y="8.75" stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="2"></rect>
				</svg>`;
			}
			if (type == 'download') {
				this.elements[i].innerHTML=`
				<svg width="${svg_size}" height="${svg_size}" fill="${svg_fill}" viewBox="0 0 24 24">
					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"></path>
					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14.25L12 4.75"></path>
					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.75 10.75L12 14.25L15.25 10.75"></path>
				</svg>`;
			}
			if (type == 'edit') {
				this.elements[i].innerHTML=`
				<svg width="${svg_size}" height="${svg_size}" fill="${svg_fill}" viewBox="0 0 24 24">
					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 19.25L9 18.25L18.2929 8.95711C18.6834 8.56658 18.6834 7.93342 18.2929 7.54289L16.4571 5.70711C16.0666 5.31658 15.4334 5.31658 15.0429 5.70711L5.75 15L4.75 19.25Z"></path>
					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 19.25H13.75"></path>
				</svg>`;
			}
			if (type == 'hearth') {
				this.elements[i].innerHTML=`
				<svg width="${svg_size}" height="${svg_size}" fill="${svg_fill}" viewBox="0 0 24 24">
					<path fill-rule="evenodd" stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
				</svg>`;
			}
			if (type == 'help') {
				this.elements[i].innerHTML=`
				<svg width="${svg_size}" height="${svg_size}" fill="${svg_fill}" viewBox="0 0 24 24">
					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"></path>
					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 10C9.75 10 10 7.75 12 7.75C14 7.75 14.25 9 14.25 10C14.25 10.7513 13.8266 11.5027 12.9798 11.8299C12.4647 12.0289 12 12.4477 12 13V13.25"></path>
					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" d="M12.5 16C12.5 16.2761 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.2761 11.5 16C11.5 15.7239 11.7239 15.5 12 15.5C12.2761 15.5 12.5 15.7239 12.5 16Z"></path>
				</svg>`;
			}
			if (type == 'search') {
				this.elements[i].innerHTML=`
				<svg width="${svg_size}" height="${svg_size}" fill="${svg_fill}" viewBox="0 0 24 24">
					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"></path>
				</svg>`;
			}
			if (type == 'user') {
				this.elements[i].innerHTML=`
				<svg width="${svg_size}" height="${svg_size}" fill="${svg_fill}" viewBox="0 0 24 24">
					<circle cx="12" cy="8" r="3.25" stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle>
					<path stroke="${svg_color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.8475 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6408 17.2584C17.8563 15.7731 16.068 14 12 14C7.93201 14 6.14367 15.7731 5.35924 17.2584C4.82597 18.2681 5.70558 19.25 6.8475 19.25Z"></path>
				</svg>`;
			}
		}
		return this;
	},
}

if(!window.$$){window.$$=Avocado;}
if(!window.Avocado){window.Avocado=Avocado;}
}) ();
