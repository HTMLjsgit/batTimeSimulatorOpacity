document.body.style.background = "black";
var c = document.getElementById("c2canvas");
c.style.borderRadius = "50%";
c.style.opacity = "0.5";
// setInterval(function(){
// 	c.style.opacity = "0.4";
// }, 100);

		setInterval(function(){
		c.style.opacity = "1";
		setTimeout(function(){
			setInterval(
				function(){
				c.style.opacity = "0.4"
				}, 300)
		},31000)
	}, 500);
	setTimeout(
		function(){
		document.body.style.background = "black";
		setInterval(
			function(){
				c.style.opacity = "0";
			}, 10000)
			setTimeout(
				function(){
					setInterval(function(){
					// c.style.opacity = "0.1"
					document.body.style.background = "blue";
					c.style.opacity = "0";
				}, 6000);
					setInterval(function(){
						document.body.style.background = "black";
						c.style.opacity = "0";
					}, 50);
				},30000);

		}, 5000)
