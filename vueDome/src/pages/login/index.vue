<template>
	<div id="login">
		<!-- <img src="@/assets/img/sky.jpg" alt=""> -->
        <div class="login_wrap flipInY animated">
            <h3>Vue Study</h3>
            <h3>欢迎使用后台系统</h3>
            <el-form ref="formUser" :model="userInfo" :rules="loginRules" label-width="0px">
                <el-form-item prop="name">
                    <el-input placeholder="请输入用户名" v-model="userInfo.name"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="请输入密码" v-model="userInfo.password" type="password"></el-input>
                </el-form-item>
               <el-form-item>
                    <el-row type="flex" justify="space-between">
                        <el-checkbox v-model="isMemery" style="color:#eee">记住密码</el-checkbox>
                        <a href="" @click.prevent="openMsg"  style="color:#eee">忘记密码</a>
                    </el-row>
                </el-form-item> 
                 <el-form-item>
                    <el-button type="primary" style="width:100%" @click="Login(userInfo)">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
		<vue-particles
            style="width:100%;height:100%"
			color="#dedede"
			:particleOpacity="1"
			:particlesNumber="100"
			shapeType="star"
			:particleSize="4"
			linesColor="#dedede"
			:linesWidth="1"
			:lineLinked="true"
			:lineOpacity="0.4"
			:linesDistance="150"
			:moveSpeed="3"
			:hoverEffect="true"
			hoverMode="grab"
			:clickEffect="true"
			clickMode="push">
      </vue-particles>
	</div>
</template>
<script type="text/ecmascript-6" src="./login.js"></script>
<style lang="scss" scoped src="./login.scss"></style>

