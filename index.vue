<template>
  <div>
    <div class="header" >
        <h1>LOGIN FORM</h1>
    </div>

      <div class="box" method="post">

          <div class="border1"></div>
          <div class="border2"></div>
          <div class="border3"></div>
          <div class="border4"></div>
          <div class="border5"></div>
          <div class="border6"></div>
  
        <form @submit.prevent="doLogin">

              <div class="user_icon">
                <label for = "email"></label>
                <i class="fa fa-user fa-lg fa-fw" aria-hidden="true" ></i>
                <input type="text" name="" placeholder="NAME" v-model="email" >
              </div>

              <div class="password_icon">
                <label for = "password"></label>
                <i class="fas fa-lock fa-lg fa-fw" aria-hidden="true"></i>
                <input type="password" name="" placeholder="PASSWORD" autocomplete="off" v-model="password">
              <!-- id = "password" -->
            
            <!-- <router-link to ="list" class ="routerLink" > -->
            <button type = "submit">LOG IN</button>
            <!-- </router-link> -->
          
        </form>
      </div>
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {
      email: '',
      password: '',
      // userID: '',
    };
  },
  methods: {
    doLogin: function(e){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log('Success!');
            console.log(user.uid);
            this.$router.push('/list');
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('failed', errorCode, errorMessage);
            alert("ログイン失敗");
            this.$router.go(0);
          });
        }
    },

    created: function(){
      var firebaseConfig = {
        apiKey: "AIzaSyBcDRbJKzMkTGQCHQeiO0Aqn4MISqlqzjM",
        authDomain: "seizonkakunin-67959.firebaseapp.com",
        databaseURL: "https://seizonkakunin-67959-default-rtdb.firebaseio.com",
        projectId: "seizonkakunin-67959",
        storageBucket: "seizonkakunin-67959.appspot.com",
        messagingSenderId: "391069982250",
        appId: "1:391069982250:web:254cda2218218f2e84ad53",
        measurementId: "G-NP53BXTTT2"
      };
      // Initialize Firebase
      // firebase.initializeApp(firebaseConfig);
      //ログインに永続性を付け加える
      // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
      }
    }
}
</script>

<style>
 .header{
    /*ヘッダー*/
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fbd26b;
}

 .box{
    position: absolute;
    width: 30%;
    padding: 30px;
    height: 30%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    border-style: solid;
    border-color: #707070;
    border-width: thin;
}

.box input[type = "text"],.box input[type = "password"]{
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #707070;
    border-width: thin;
    padding: 14px 10px;
    width: 90%;
    outline: none;
    color:#707070;
    border-radius: 24px;
    transition: 0.25;
}

.box button[type = "submit"]{
    border: none;
    background: #FBD26B;
    display: block;
    margin: 20px auto;
    text-align: center;
    padding: 14px 40px;
    width: 60%;
    transform: translate(0%,-30%);
    text-decoration:none;
    outline: none;
    color: white;
    transition: 0.25px;
    cursor: pointer;
}

.routerLink{
  text-decoration:none;
}

/*ユーザーアイコンのデザイン*/
.user_icon {
	position: relative;
	width: 80%;
	margin: 50px auto;
}

.user_icon i {
	position: absolute;
	top: 8px;
	left: 5%;
	padding: 9px 8px;
	transition: 0.3s;
	color: #aaaaaa;
}

/*パスワードアイコン */
.password_icon {
	position: relative;
	width: 80%;
	margin: 40px auto;
}

.password_icon i {
	position: absolute;
	top: 8px;
	left: 5%;
	padding: 9px 8px;
	transition: 0.3s;
	color: #aaaaaa;
}

.border1{
    position: absolute;
    width: 17.0%;
    height: 10%;
    top: 0;
    left: 8.4%;
    transform: translate(-50%, -50%); 
    background-color: #668C4A;
}
.border2{
     position: absolute;
    width: 17.0%;
    height: 10%;
    top: 0;
    left: 25.2%;
    transform: translate(-50%, -50%); 
    background-color: #A6BF4B; 
}
.border3{
    position: absolute;
    width: 17.0%;
    height: 10%;
    top: 0;
    left: 41.6%;
    transform: translate(-50%, -50%); 
    background-color: #F2F0D5; 
}
.border4{
    position: absolute;
    width: 17.0%;
    height: 10%;
    top: 0;
    left: 58.4%;
    transform: translate(-50%, -50%);
    background-color: #668C4A;
}
.border5{
    position: absolute;
    width: 16.7%;
    height: 10%;
    top: 0;
    left: 75.2%;
    transform: translate(-50%, -50%);
    background-color: #A6BF4B;
}
.border6{
    position: absolute;
    width: 17.0%;
    height: 10%;
    top: 0;
    left: 91.9%;
    transform: translate(-50%, -50%);
    background-color: #F2F0D5;
}  
</style>

function newFunction() {
  return 'user.uid';
}
