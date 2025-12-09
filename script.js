const imageCount = 213; // összes kép
const folderPath = 'pic/'; // képek mappája
const extension = '.jpg'; // képek kiterjesztése

const track = document.getElementById('galleryTrack');

// Dinamikus képek betöltése
for(let i = 1; i <= imageCount; i++){
  const div = document.createElement('div');
  div.classList.add('gallery-item');
  
  const img = document.createElement('img');
  img.src = `${folderPath}pic (${i})${extension}`; // <-- ide módosítva
  img.alt = `gallery image ${i}`;
  
  div.appendChild(img);
  track.appendChild(div);
}

// Végtelen loophoz klónozás
const slides = Array.from(track.children);
slides.forEach(slide => track.appendChild(slide.cloneNode(true)));

// Sebesség állítása
const speed = 60; // px/sec
let pos = 0;

function animate(){
  pos -= speed / 60; // 60fps
  if(pos <= -track.scrollWidth / 2){
    pos = 0;
  }
  track.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(animate);
}

animate();



  window.addEventListener('load', () => {
    if(localStorage.getItem('cookiesAccepted')) {
      document.getElementById('cookieBanner').style.display = 'none';
    }
  });

  document.getElementById('acceptCookies').addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', true);
    document.getElementById('cookieBanner').style.display = 'none';
  });

  document.getElementById('declineCookies').addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', false);
    document.getElementById('cookieBanner').style.display = 'none';
  });
