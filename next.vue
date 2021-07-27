<template>
    <div id = app>
      <title>リスト画面</title>
        <header>生存確認ボタン</header>
        <div id="main">
                <div id="blocka">
                    <p id = "username">名前:</p>
                    <div class="perfect-circle">
                        <p id="outer1" class="outer1"></p>
                        <div class="last_log">
                            <p id="inner1" class="inner1"></p>
                            <p id="comment" class="comment"></p>
                            <p class="inner2">生存確認</p>
                        </div>
                    </div>               
                    <!--<p>生存確認出来ておりません</p>-->
                </div>
        
                <div id="blockb">
                    <p>生存確認履歴</p>
                    <ul id="cp_list" class="cp_list"></ul>
                </div>       
        </div>
    </div>
</template>

<script>
module.exports = {
  created: function() {
    var firebaseConfig = {
        apiKey: "AIzaSyBcDRbJKzMkTGQCHQeiO0Aqn4MISqlqzjM",
        authDomain: "seizonkakunin-67959.firebaseapp.com",
        databaseURL: "https://seizonkakunin-67959-default-rtdb.firebaseio.com",
        projectId: "seizonkakunin-67959",
        storageBucket: "seizonkakunin-67959.appspot.com",
        messagingSenderId: "391069982250",
        appId: "1:391069982250:web:278f20700b29f81884ad53",
        measurementId: "G-24N57HCTJQ"
    };
        if (firebase.apps.length === 0) {
          firebase.initializeApp(firebaseConfig);
        }
      
      var firestore = firebase.firestore();
      var liveData = new Map();
      var liveLog = new Array();
      var maxData = 0; 

      
      const docRef = firestore.collection('commentTest').doc(firebase.auth().currentUser.uid);
      
      docRef.get().then(function(doc) {
        if(doc && doc.exists) {
          const myData = doc.data();
          console.log("This is "+ myData.name);
          console.log("this is "+ myData.pushHistory);
          document.getElementById("username").innerHTML += myData.name;

          liveData = myData.pushHistory;
          maxData = myData.pushHistory.length-1;
          console.log("liveData is"+liveData[0]["comment"]);
          console.log("liveData is"+myData.pushHistory.length);

          for(var i= 0; i < maxData; i++) {
            liveLog.push('<li>'+liveData[i]["timestamp"].toDate().getFullYear() +'/'+ (liveData[i]["timestamp"].toDate().getMonth()+1) +'/'+ 
              liveData[i]["timestamp"].toDate().getDate() +'/'+ liveData[i]["timestamp"].toDate().getHours() +':'+ liveData[i]["timestamp"].toDate().getMinutes()+ ','+ liveData[i]["comment"]+'</li>');
          }

          for(var j = 0; j < maxData; j++) {
            document.getElementById('cp_list').innerHTML += liveLog[j];
          }

          document.getElementById("outer1").innerHTML += liveData[maxData]["timestamp"].toDate().getFullYear()+"年";
          document.getElementById("outer1").innerHTML += (liveData[maxData]["timestamp"].toDate().getMonth()+1)  +"月";
          document.getElementById("outer1").innerHTML += liveData[maxData]["timestamp"].toDate().getDate()+"日";

          document.getElementById("inner1").innerHTML += liveData[maxData]["timestamp"].toDate().getHours()+":";
          document.getElementById("inner1").innerHTML += liveData[maxData]["timestamp"].toDate().getMinutes();

          document.getElementById("comment").innerHTML += liveData[maxData]["comment"];

        }
      }) 
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
div#app {
  width: auto;
  overflow: hidden;
}
div#main {
    width: auto;
    height: auto;
    margin: 10px auto; 
}

div#blocka, ul {
  padding: 8px;
}

header {
  background-color: #A6BF4B;
  color: #FFF;
  font-size:  20px;
  padding: 30px;
}

div#blocka {
  text-align:center;
  float:center;
}

div#blocka > p{
  color: #B1B1AC;
  transform: translate(-13.25%, 20%);
  font-size: 30px;
  height:40px;
}

.perfect-circle{
  position: relative;
  transform: translate(-65%, 20%);
  margin: 0px 0px;
  width: 300px;
  height: 300px;
  border-radius: 75%;
  background: #F2C53D;
  line-height: 100px;
  padding: 0;
  text-align: center;
  color: #FFF;
  display: inline-block;
  border-radius: 50%;
}
.perfect-circle .outer1{
  font-size: 25px;
}

.perfect-circle .inner1{
  position:absolute;
  width: 300px;
  text-align: center;    
  top: 40%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  margin: 0;
  padding: 10px 0;
  font-size: 30px;
}
.perfect-circle .inner2{
  position:absolute;
  width: 250px;
  text-align: center;
  top: 70%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  margin: 0;
  padding: 10px 0;
  font-size: 40px;
  border-top : solid 3px #FFF;
}
.perfect-circle .comment{
  position:absolute;
  width: 250px;
  text-align: center;
  top: 58%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  margin: 0;
  padding: 10px 0;
  font-size: 25px;

}

div#blockb {
  text-align:center;
  border: 3px solid #B1B1AC;
  transform: translate(80%, -70%);
  width: 300px;
  height: 480px;
  margin: 10px auto;
  float:center;
}

div#blockb > p{
  font-size:  20px;
  margin: 0 auto;
  color: #FFF;
  background-color: #B1B1AC;

}

ul.cp_list {
  padding: 0;
  list-style-type: none;
  height: 450px;     /* 高さを制限(※) */
  overflow: scroll;
}

ul.cp_list li {
  font-size:  15px;
  padding: 10px;
  margin-bottom: 5px;
  line-height: 3;
  border: 3px solid #B1B1AC;
  color:#B1B1AC;
}
</style>