(function () {

var Avocado = {
	elements :[],

	getById: function() {
		var tempElems = [];
		for(var i = 0; i<arguments.length; i++) {
			if (typeof arguments[i] === 'string') {
				tempElems.push(document.getElementById(arguments[i]));
			}
		}
		this.elements = tempElems;
		return this;
	},

	getByClass: function(name, type, parent) {
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

	getByTag: function() {
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

	getByName: function() {
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

	boxShadow: function(shadow) {
		for(var i = 0; i<this.elements.length; i++) {
			if (shadow == 'light') {this.elements[i].style.boxShadow='0 1px 2px 0 rgba(0, 0, 0, 0.05)';}
			if (shadow == 'medium') {this.elements[i].style.boxShadow='0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';}
			if (shadow == 'heavy') {this.elements[i].style.boxShadow='0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';}
		}
		return this;
	},

	checked: function(bool) {
		for(var i=0;i<this.elements.length;i++) {
			if (this.elements[i].nodeName.toLowerCase() === 'input' && (this.elements[i].getAttribute('type') == 'checkbox' || this.elements[i].getAttribute('type') == 'radio')){
				this.elements[i].checked = bool;
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
			if (attr == 'none') {
				this.elements[i].style.display='none';
			}
			if (attr == 'inline') {
				this.elements[i].style.display='inline';
			}
			if (attr == 'block') {
				this.elements[i].style.display='block';
			}
			if (attr == 'contents') {
				this.elements[i].style.display='contents';
			}
			if (attr == 'flex') {
				this.elements[i].style.display='flex';
			}
			if (attr == 'grid') {
				this.elements[i].style.display='grid';
			}
			if (attr == 'table') {
				this.elements[i].style.display='table';
			}
			if (attr == 'inline-block') {
				this.elements[i].style.display='inline-block';
			}
			if (attr == 'inline-flex') {
				this.elements[i].style.display='inline-flex';
			}
			if (attr == 'inline-grid') {
				this.elements[i].style.display='inline-grid';
			}
			if (attr == 'inline-table') {
				this.elements[i].style.display='inline-table';
			}
			if (attr == 'list-item') {
				this.elements[i].style.display='list-item';
			} else if (!['none',"block","inline","contents","flex","grid","table","inline-block","inline-flex","inline-grid","inline-table","list-item",].includes(attr)) {
				console.log('%c🥑 >>> Error at display() function, attribut incorrect : '+attr, "color: red; font-weight: bold;");
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

	innerHTML: function(html) {
		for(var i = 0; i<this.elements.length; i++) {
			this.elements[i].innerHTML=html;
		}
		return this;
	},

	innerText: function(text) {
		for(var i = 0; i<this.elements.length; i++) {
			this.elements[i].textContent=text;
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

	removeClass: function(name) {
		for(var i = 0; i<this.elements.length; i++) {
			this.elements[i].classList.remove(name);
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

	screenHeight: function() {
		return screen.availHeight;
		return this;
	},

	screenWidth: function() {
		return screen.availWidth;
		return this;
	},

	src: function(source) {
		for(var i = 0; i<this.elements.length; i++) {
			return this.elements[i].src=source;
		}
		return this;
	},

	style: function(objStyle){
		for(var i = 0; i < this.elements.length;i++) {
			for(var k in objStyle) {
				this.elements[i].style[k] = objStyle[k];
			}
		}
		return this;
	}, // .style({color:'red', backgroundColor:'blue'})

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

	value: function() {
		for(var i = 0; i<this.elements.length; i++) {
			return this.elements[i].value;
		}
		return this;
	},

}
if(!window.$$){window.$$=Avocado;}
if(!window.Avocado){window.Avocado=Avocado;}
}) ();