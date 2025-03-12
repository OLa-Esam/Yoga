const bar=document.querySelector(".fa-bars")
const join=document.querySelector(".join")
const joinNow=document.querySelector(".joinnow")
const send=document.querySelector(".submit>span")
const home=document.querySelector(".home")
 
 
const X=document.querySelector(".X")
const nav2=document.querySelector(".nav2")
const header=document.querySelectorAll(".header")
const cont =document.querySelector(".cont ")
const elp =document.querySelector("p")
const eltitle =document.querySelector(".title")


const buttons=document.querySelector(".buttons")
const button=document.querySelectorAll("button")
home.addEventListener("click",(eo) => {
  if(eo.target==send){


      joinNow.classList.add("cnone")
   
  }
})


 console.log(elp)
header.forEach((ele) => {
  ele.addEventListener("click",(eo) => {
     if( eo.target ==bar){
      nav2.style.top="0px";
      bar.style.display="none";
      X.style.display="block";
    }
    if(eo.target==join){
 joinNow.classList.toggle("class-block")
  }
    
     else if (eo.target.className =="fa-regular fa-circle-xmark"){
       nav2.style.top="-1000px"; 
    X.style.display="none";
    bar.style.display="block";
    } 
  })
  
});

button.forEach((el) => {
  el.addEventListener("click",(eo) => {
    cont.querySelector(".active").classList.remove("active")
eo.target.classList.add("active")
   

  

  
  let data={
"English":{
  "title":"hello",
  "description"
  :
  "For every woman who cares about staying in shape,our ladies-only fitness center in Yoga Gym 180° is the ultimatefitness hub, where you can take your fitness journey to awhole new level. Our gym features premium gym equipment, sessions supervised by our instructors and using gadgets from international sports companies. Furthermore, Technoshapesessions, group fitness challenges, and professional personaltrainers, are all available in a fun and motivating environment!Contact us to get your free consultation with our specialists."
},
"Arbic":{
    "title": " اهلا",
"description"
:"لكل امرأة تهتم بالحفاظ على لياقتها ،  مركز اللياقة البدنية للسيدات فقط في  جيم يوغا180 درجة هو الأفضل مركز للياقة البدنية ، حيث يمكنك أن تأخذ رحلة لياقتك إلى أ  مستوى جديد كليا. تتميز صالة الألعاب الرياضية لدينا بمعدات رياضية متميزة ،  الجلسات التي يشرف عليها مدربونا وباستخدام الأدوات   من الشركات الرياضية العالمية. علاوة على ذلك ، Technoshape  جلسات ، مجموعة تحديات اللياقة البدنية ، والمهنية الشخصية  المدربين ، جميعهم متاحون في بيئة ممتعة ومحفزة!  اتصل بنا للحصول على استشارة مجانية مع متخصصينا."
}
,
  "Indian":{
    "title":"नमस्ते",
"description":"हर महिला के लिए जो आकार में रहने की परवाह करती है,शारजाह में हमारा केवल महिलाओं के लिए फिटनेस सेंटर बेहतरीन हैफिटनेस हब, जहां आप अपनी फिटनेस यात्रा कर सकते हैंपूरा नया स्तर। हमारे जिम में प्रीमियम जिम उपकरण हैं,हमारे प्रशिक्षकों द्वारा पर्यवेक्षित सत्र और गैजेट का उपयोग करनाअंतरराष्ट्रीय खेल कंपनियों से। इसके अलावा, टेक्नोशेपसत्र, समूह फिटनेस चुनौतियां और पेशेवर व्यक्तिगतप्रशिक्षक, सभी मज़ेदार और प्रेरक वातावरण में उपलब्ध हैं!हमारे विशेषज्ञों से निःशुल्क परामर्श प्राप्त करने के लिए हमसे संपर्क करें।"
}

}
  const attr = el.getAttribute('language');
  elp.textContent = data[attr].description;
  eltitle.textContent = data[attr].title;
})  
});
 
