document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi partikel
    particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ff69b4' // Warna partikel (pink)
        },
        shape: {
            type: 'heart', // Bentuk partikel (hati)
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ff69b4', // Warna garis yang menghubungkan partikel (pink)
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});


    // Mendapatkan elemen audio
    const bgMusic = document.getElementById('bgMusic');

    // Event listener untuk memainkan audio saat pengguna berinteraksi dengan tombol
    const revealButton = document.getElementById('revealMessage');
    const specialMessage = document.getElementById('specialMessage');

    revealButton.addEventListener('click', () => {
        // Memeriksa apakah audio sedang diputar
        if (bgMusic.paused) {
            // Jika audio sedang tidak diputar, mulai memainkannya
            bgMusic.play()
                .then(() => console.log('Audio dimainkan secara otomatis setelah interaksi pengguna'))
                .catch(error => console.error('Terdapat kesalahan saat memainkan audio:', error));
        }

        // Tampilkan atau sembunyikan pesan spesial
        specialMessage.classList.toggle('hidden');
        revealButton.innerText = specialMessage.classList.contains('hidden') ? 'Pencet Ini😠!' : 'Ini kalo mau tutup pesan';
    });
});
