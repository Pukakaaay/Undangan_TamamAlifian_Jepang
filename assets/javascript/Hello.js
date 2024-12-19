
   let isPlaying = false;
   const audio = new Audio('assets/audio/Sakura.mp3');

        function showInfoPage() {
            document.getElementById('welcome').style.display = 'none';
            document.getElementById('info').style.display = 'block';
            document.getElementById('navbar').classList.add('info-visible');
            audio.play();
            isPlaying = true;
            document.getElementById('musicToggle').src = 'assets/img_icon/volume.png';
        }

   function toggleMusic() {
    if (audio.paused) {
        audio.play();
        document.getElementById('musicToggle').src = 'assets/img_icon/volume.png';
    } else {
        audio.pause();
        document.getElementById('musicToggle').src = 'assets/img_icon/mute.png';
    }
            isPlaying = !isPlaying;
        }
        AOS.init();
        document.addEventListener('DOMContentLoaded', function () {
          AOS.init({
            duration: 1200, // Durasi animasi
            once: true,     // Animasi hanya sekali
          });
        });