let min, sec ,hrs;

function alignNumbers() {
  let spans = document.querySelectorAll('span');
  let deg=30;
  for (let item of spans) {
    item.style.transform = "rotate("+deg+"deg)";
    deg+=30;
  }
}
alignNumbers()

function time() {
  setInterval(function() {
    let now = new Date();
    hrs = now.getHours()*30;
    min=now.getMinutes()*6;
    sec=now.getSeconds()*6;
    let h=document.querySelector('.hr-needle')
    let m=document.querySelector('.min-needle')
    let s=document.querySelector('.sec-needle')
    let newhr=hrs+(min/12);
    
    if (sec==0) {
      sec=60;
      h.style.transform= 'rotateZ('+newhr+'deg)';
  		m.style.transform= 'rotateZ('+min+'deg)';
      s.style.transform= 'rotateZ('+360+'deg)';
    }else{
      h.style.transform= 'rotateZ('+newhr+'deg)';
  		m.style.transform= 'rotateZ('+min+'deg)';
  		s.style.transform= 'rotateZ('+sec+'deg)';
    }

    
  });
}
time()