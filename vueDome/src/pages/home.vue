<template>
	<div class="navMenu">  
		<!-- <h2>content</h2> -->
		<div class="starry">
			<div class="circle">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<!-- <ul>
				<li></li>
				<li class="Venus common"></li>
				<li class="Earth common"></li>
				<li class="Mars common"></li>
				<li class="Jupiter common"></li>
				<li class="Saturn common"></li>
				<li class="Uranus common"></li>
				<li class="Neptune common"></li>
			</ul> -->
			<div class="planet">
				<div class="planet_track planet_track_Mercury">
					<div class="Mercury common">
						<h2>水星</h2>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
				<div class="planet_track planet_track_Venus">
					<div class="Venus common">
						<h2>金星</h2>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
				<div class="planet_track planet_track_Earth">
					<div class="Earth common">
						<h2>地球</h2>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
				<div class="planet_track planet_track_Mars">
					<div class="Mars common">
						<h2>火星</h2>

						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
				<div class="planet_track planet_track_Jupiter">
					<div class="Jupiter common">
						<h2>木星</h2>

						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
				<div class="planet_track planet_track_Saturn">
					<div class="Saturn common">
						<h2>土星</h2>

						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
				<div class="planet_track planet_track_Uranus">
					<div class="Uranus common">
						<h2>天王星</h2>

						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
				<div class="planet_track planet_track_Neptune">
					<div class="Neptune common">
						<h2>海王星</h2>

						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
		
		<div style="height:500px">
			<div id="xuanzhun" style="width: 400px; height: 400px;">
				<div>前</div>
				<div>后</div>
				<div>左</div>
				<div>右</div>
				<div>上</div>
				<div>下</div>
			</div>
			<div id="drag" ref="darg" style="width: 400px; height: 400px;">
				<div>前</div>
				<div>后</div>
				<div>左</div>
				<div>右</div>
				<div>上</div>
				<div>下</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
	name:"home",
	data(){
		return {

		}
	},
	mounted(){
		this.listenMouseEvent();
	},
	beforeDestroy(){
		document.onmousedown=null;
	},
	methods:{
		listenMouseEvent(){
			document.onmousedown=ev=>{
				let x=ev.clientX;
				let y=ev.clientY;
				document.onmousemove=ev=>{
					let xl=ev.clientX-x+20;
					let yl=ev.clientY-y-20;
					this.$refs.darg.style.transform=`perspective(1000px) rotateY(${xl}deg) rotateX(${-yl}deg)`
				};
				document.onmouseup=()=>{
					document.onmousemove=null;
				}
			}
		}
	}
}
</script>

<style lang="scss" scoped>
*{
margin: 0;
padding: 0;
list-style: none;
}
.starry{
	width: 100%;
	background: url(../assets/img/timg.jpeg) repeat-x center;
	position: relative;
	perspective: 1000px;
	perspective-origin: 50% 0%;
	.circle::after{
		content: "";
		height: 100px; 
		width: 1px; 
		position: absolute;
		left: 50%;
		top: 50%;
		background:red;
	}
	.circle {
		height: 200px; 
		width: 200px; 
		margin: 0;
		transform-style: preserve-3d;
		transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(-10deg) translate(-50%,-50%);
		position: absolute;
		left: 45%;
		top: 20%;
		animation: centerRotate 5s linear .2s infinite;
		transform: translate(-50%,-50%);
		div{
			border-radius: 50%;
			border: 1px solid #B80F0F;
			width: 150px;
			height: 150px;
			position: absolute;
			left: 0;
			top: 0;
			right:0;
			bottom: 0;
			margin: auto;
			box-shadow: 1px 1px 3px #B80F0F;
		}
		
		div:nth-child(1){
			transform:rotateX(90deg) ;
		}
		div:nth-child(2){
			transform:rotateY(0deg) ;
		}
		div:nth-child(3){
			transform:rotateY(18deg);
		}
		div:nth-child(4){
			transform:rotateY(36deg);
		}
		div:nth-child(5){
			transform:rotateY(54deg);
		}
		div:nth-child(6){
			transform:rotateY(72deg);
		}
		div:nth-child(7){
			transform:rotateY(90deg);
		}
		div:nth-child(8){
			transform:rotateY(108deg);
		}
		div:nth-child(9){
			transform:rotateY(126deg);
		}
		div:nth-child(10){
			transform:rotateY(144deg);
		}
		div:nth-child(11){
			transform:rotateY(162deg);
		}
	}
	.planet{
		width: 100%;
		height: 900px;
		position: relative;
		transform-style: preserve-3d;
		transform: rotateX(-10deg) rotateY(60deg) rotateZ(-5deg);
		.planet_track{
			border-radius: 50%;
			border:1px solid #fff;
			position: absolute;
			animation: track 60s linear .2s infinite;
			// transform: translate(-50%,-50%);
		}
		.common{
			position: absolute;
			width: 50px;
			height: 50px;
			top: 390px;
			left: 0px;
			transform-style: preserve-3d;
			transform: perspective(1000px) rotateZ(10deg);
			h2{
				color: white;
				position: absolute;
				left: 0;
				top: 0;
				// transform: rotateZ(90deg)
			}
			div{
				position: absolute;
				left: 0px;
				top: 0px;
				border-radius: 50%;
			}
			div:nth-child(1){
				transform: rotateX(90deg)
			}
			div:nth-child(2){
				transform: rotateY(0deg)
			}
			div:nth-child(3){
				transform: rotateY(18deg)
			}
			div:nth-child(4){
				transform: rotateY(36deg)
			}
			div:nth-child(5){
				transform: rotateY(54deg)
			}
			div:nth-child(6){
				transform: rotateY(72deg)
			}
			div:nth-child(7){
				transform: rotateY(90deg)
			}
			div:nth-child(8){
				transform:rotateY(108deg);
			}
			div:nth-child(9){
				transform:rotateY(126deg);
			}
			div:nth-child(10){
				transform:rotateY(144deg);
			}
			div:nth-child(11){
				transform:rotateY(162deg);
			}
		}
		.planet_track_Neptune{
			width:1120px;
			height: 1120px;
			// left:220px;
			top: -350px;
			// top: -260px;
			// left:338px;
			left:240px;

			animation: track 30s linear .2s infinite;

		}
		.planet_track_Uranus{
			animation: track_Reverse 20s linear .2s infinite;

			width: 1050px;
			height: 1050px;
			left: 282px;
			top: -290px;	
    		// top: -248px;
		}
		.planet_track_Saturn{
			animation: track_Reverse 10s linear .2s infinite;

			width: 965px;
			height: 965px;
			left: 345px;
			top: -230px;		
		}
		.planet_track_Jupiter{
			animation: track 40s linear .2s infinite;

			width: 850px;
			height: 850px;
			left: 388px;
			top: -168px;		
		}
		.planet_track_Mars{
			animation: track_Reverse 30s linear .2s infinite;

			width: 735px;
			height: 735px;
			left: 455px;
			top: -90px;		
		}
		// .planet_track_Saturn{
		.planet_track_Earth{

			width: 620px;
			height: 620px;
			left: 505px;
			top: -25px;		
		}
		.planet_track_Venus{
			animation: track 3s linear .2s infinite;
			width: 515px;
			height: 515px;
			left: 560px;
			top: 38px;		
		}
		.planet_track_Mercury{
			animation: track_Reverse 10s linear .2s infinite;
			width: 400px;
			height: 400px;
			left: 615px;
			top: 100px;
		}
		// 水星
		.Mercury{
			animation: rotaition 30s linear 0.2s infinite;
			top:270px;
			div{
				width: 50px;
				height: 50px;
				border: 1px solid #757575;
				box-shadow: 1px 1px 1px #757575;

			}
		}
		// 金星

		.Venus{
			width: 30px;
			top: 340px;
			animation: rotaition 10s linear 0.1s infinite;
			div{
				width: 30px;
				height: 30px;
				border: 1px solid #D7A769;
				box-shadow: 1px 1px 1px #D7A769;

			}
		}
		.Earth{
			width: 30px;
			animation: rotaition 10s linear 0.1s infinite;
			div{
				width: 50px;
				height: 50px;
				border: 1px solid #61ADFA;
				box-shadow: 1px 1px 1px #61ADFA;
			}
		}
		// 火星

		.Mars{
			width: 70px;
			top: 500px;
			animation: rotaition 5s linear 0.1s infinite;
			div{
				width: 70px;
				height: 70px;
				border: 1px solid #D7A769;
				box-shadow: 1px 1px 1px #D7A769;
			}
		}
		// 木星

		.Jupiter{
			width: 40px;
			top: 260px;

			animation: rotaition 3s linear 0.1s infinite;
			div{
				width: 40px;
				height: 40px;
				border: 1px solid #F8F8F9;
				box-shadow: 1px 1px 1px #F8F8F9;
			}
		}
		// 土星

		.Saturn{
			width: 30px;
			animation: rotaition 30s linear 0.1s infinite;
			div{
				width: 40px;
				height: 40px;
				border: 1px solid #D7A769;
				box-shadow: 1px 1px 1px #D7A769;
			}
		}
		// 天王星
		.Uranus{
			width: 30px;
			animation: rotaition 1s linear 0.1s infinite;
			div{
				width: 30px;
				height: 30px;
				border: 1px solid #F8F8F9;
				box-shadow: 1px 1px 1px #F8F8F9;
			}
		}
		// 海王星
		.Neptune{
			width: 30px;
			animation: rotaition 40s linear 0.1s infinite;
			div{
				width: 30px;
				height: 30px;
				border: 1px solid #61ADFA;
				box-shadow: 1px 1px 1px #61ADFA;
			}
		}
	}
}
		@-webkit-keyframes centerRotate{
			0%{-webkit-transform: rotateZ(-10deg) rotateY(0deg) }
			100%{-webkit-transform:  rotateZ(-10deg) rotateY(360deg) }
		}
		@-webkit-keyframes track{
			0%{-webkit-transform:  rotateZ(0deg) rotateY(0deg) rotateX(90deg) }
			100%{-webkit-transform:  rotateZ(0deg) rotateY(360deg) rotateX(90deg)}
		}
		@-webkit-keyframes rotaition {
			0%{transform:  rotateY(0deg)  rotateZ(10deg)}
			100%{transform:  rotateY(360deg) rotateZ(10deg)}
		}
		@-webkit-keyframes track_Reverse {
			0%{-webkit-transform:  rotateZ(0deg) rotateY(360deg) rotateX(90deg) }
			100%{-webkit-transform:  rotateZ(0deg) rotateY(0deg) rotateX(90deg)}
		}

ul{
	width: 100%;
	height: 900px;
	position: relative;
}
li{
	width:90%;
	height: 90%;
	border-radius: 50%;
	border:1px solid #fff;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%) rotateY(0deg) rotateZ(-10deg) rotateX(0deg);
}
// li:before{
// content: "";
// 	position: absolute;
// 	width: 10px;
// 	height: 10px;
// 	border-radius: 50%;
// 	background: pink;
// 	box-shadow: 0 0 2px 1px rgba(255,255,255,0.8);
// 	left: 100px;
// 	top: 100px;
// }
// li:nth-child(1):before{
// top: 66px;
// }
// li:nth-child(2):before{
// top: -1px;
// left: 214px;
// }

li:nth-child(1){
animation: rotates 2s ease-in-out .2s infinite;
}
li:nth-child(2){
animation: rotates 1.5s ease  infinite;
}
li:nth-child(3){
animation: rotates .5s ease-in-out .4s infinite;
}
li:nth-child(4){
animation: rotates 3.6s ease-in .7s infinite;
}
li:nth-child(5){
animation: rotates 1.4s ease-out .24s infinite;
}
li:nth-child(6){
animation: rotates 2s ease-in-out .2s infinite;
}
li:nth-child(2){
width: 80%;
height: 80%;
}
li:nth-child(3){
width: 70%;
height: 70%;
}
li:nth-child(4){
width: 60%;
height: 60%;
}
li:nth-child(5){
width: 50%;
height: 50%;
}
li:nth-child(6){
width: 40%;
height: 40%;
}
li:nth-child(7){
width: 30%;
height: 30%;
}
li:nth-child(8){
width: 20%;
height: 20%;
}
li:nth-child(9){
width: 10%;
height: 10%;
}

// @keyframes rotates{
// 	from{transform:translate(-50%,-50%) rotateY(0deg) rotateZ(-10deg) rotateX(0deg);}
// 	to{transform:translate(-50%,-50%) rotateY(360deg) rotateZ(-10deg) rotateX(0deg);}
// }


// 自动旋转
#xuanzhun{
 	-webkit-transition-property: -webkit-transform;
    -webkit-transition-duration: 1s;
    -moz-transition-property: -moz-transform;
    -moz-transition-duration: 1s;
    -webkit-animation: rotate 3s linear infinite;
    -moz-animation: rotate 3s linear infinite;
    -o-animation: rotate 3s linear infinite;
    animation: rotate 3s linear infinite;
	float: left;
	position: relative;
	transform-style: preserve-3d;
	transform: perspective(1000px) rotateX(-30deg) rotateY(-30deg) rotateZ(0deg);
	div{
		position: absolute;
		left: 100px;
		top: 200px;
		width: 200px;
		height: 200px;
		border: 1px solid #eee;
		text-align: center;
		line-height: 200px;
		background: aquamarine;
	}
	div:nth-child(1){
		transform:translateZ(100px);
		background: rgba(0,0,255,0.2)
	}
	div:nth-child(2){
		transform: translateZ(-100px);
		background:rgba(0,255,0,0.2)
	}
	div:nth-child(3){
		transform:rotateY(90deg) translateZ(100px);
		background:rgba(255,0,0,0.2)
	}
	div:nth-child(4){
		transform:rotateY(90deg) translateZ(-100px);
		background:rgba(0,255,0,0.2)
	}
	div:nth-child(5){
		transform:rotateX(90deg) translateZ(100px);
		background:rgba(255,0,0,0.2)
	}
	div:nth-child(6){
		transform:rotateX(90deg) translateZ(-100px);
		background:rgba(0,255,0,0.2)
	}

}

@-webkit-keyframes rotate{from{-webkit-transform: rotateX(0deg) rotateY(0deg)}
    to{-webkit-transform: rotateX(359deg) rotateY(359deg)}
}
@-moz-keyframes rotate{from{-moz-transform: rotate(0deg) rotateY(0deg)}
    to{-moz-transform: rotate(359deg) rotateY(359deg)}
}
@-o-keyframes rotate{from{-o-transform: rotate(0deg) rotateY(0deg)}
    to{-o-transform: rotate(359deg) rotateY(359deg)}
}
@keyframes rotate{from{transform: rotate(0deg) rotateY(0deg)}
    to{transform: rotate(359deg) rotateY(359deg)}
}

// 拖拽
#drag{
	position: relative;
	transform-style: preserve-3d;
	transform: perspective(1000px) rotateX(-30deg) rotateY(-30deg) rotateZ(0deg);
	float: right;
	div{
		position: absolute;
		left: 100px;
		top: 200px;
		width: 200px;
		height: 200px;
		border: 1px solid #eee;
		text-align: center;
		line-height: 200px;
		background: aquamarine;
	}
	div:nth-child(1){
		transform:translateZ(100px);
		background: rgba(0,0,255,0.2)
	}
	div:nth-child(2){
		transform: translateZ(-100px);
		background:rgba(0,255,0,0.2)
	}
	div:nth-child(3){
		transform:rotateY(90deg) translateZ(100px);
		background:rgba(255,0,0,0.2)
	}
	div:nth-child(4){
		transform:rotateY(90deg) translateZ(-100px);
		background:rgba(0,176,0,0.2)
	}
	div:nth-child(5){
		transform:rotateX(90deg) translateZ(100px);
		background:rgba(176,0,0,0.2)
	}
	div:nth-child(6){
		transform:rotateX(90deg) translateZ(-100px);
		background:rgba(0,0,176,0.2)
	}

}

</style>