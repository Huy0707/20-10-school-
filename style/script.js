const scene = document.getElementById("scene");
const sparkleContainer = document.getElementById("sparkles");
const audio = document.getElementById("sound");

const texts = [
    "🎉Chúc mừng 20-10 Thảo Nguyên nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
    "🎉Chúc mừng 20-10 nhó🎉",
];

const icons = ["🎂", "🎉", "💖", "🌟", "💐", "🎁", "✨", "💝"];

const qrSection = document.getElementById('qr-section');
const scanSection = document.getElementById('scan-section');
const startBtn = document.getElementById('startBtn');
const readerDiv = document.getElementById('reader');
const qrImage = document.getElementById('qrImage');
let html5QrCode;

function createFallingText() {
    const text = document.createElement("div");
    text.className = "falling-text";
    text.textContent = texts[Math.floor(Math.random() * texts.length)];
    text.style.left = `${Math.random() * window.innerWidth}px`;
    text.style.transform = `translateY(0)`;
    text.style.willChange = "transform, opacity";
    scene.appendChild(text);

    setTimeout(() => {
        if (text.parentElement) text.remove();
    }, 6000);
}

function createFallingIcon() {
    const icon = document.createElement("div");
    icon.className = "falling-icon";
    icon.textContent = icons[Math.floor(Math.random() * icons.length)];
    icon.style.left = `${Math.random() * window.innerWidth}px`;
    icon.style.transform = `translateY(0)`;
    scene.appendChild(icon);

    setTimeout(() => {
        if (icon.parentElement) icon.remove();
    }, 6000);
}

setInterval(() => {
    if (scene.style.display === 'block' && scene.childElementCount < 15) {
        createFallingText();
        createFallingIcon();
    }
}, 500);

function playMusicOnce() {
    if (audio.paused && scene.style.display === 'block') {
        try {
            audio.currentTime = 48;
            audio.play().then(() => {
                console.log("Đã phát nhạc 🎵");
            }).catch(e => {
                console.warn("Không thể phát nhạc:", e);
            });
        } catch (e) {
            console.warn("Lỗi phát nhạc:", e);
        }
    }

    document.removeEventListener("click", playMusicOnce);
    document.removeEventListener("touchstart", playMusicOnce);
}

function createSparkles(count = 20) {
    for (let i = 0; i < count; i++) {
        const s = document.createElement("div");
        s.className = "sparkle";
        s.style.top = `${Math.random() * 95}%`;
        s.style.left = `${Math.random() * 95}%`;
        s.style.animationDuration = `${3 + Math.random() * 3}s`;
        s.style.animationDelay = `${Math.random() * 4}s`;
        sparkleContainer.appendChild(s);
    }
}

createSparkles(40);

// Drag 3D effect
let isDragging = false;
let lastTouch = { x: 0, y: 0 };
let lastMove = 0;

document.addEventListener("mousedown", () => {
    isDragging = true;
    document.body.style.cursor = "grabbing";
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.cursor = "grab";
});

document.addEventListener("mouseleave", () => {
    isDragging = false;
    document.body.style.cursor = "grab";
});

document.addEventListener("mousemove", (e) => {
    const now = Date.now();
    if (!isDragging || now - lastMove < 30) return;
    lastMove = now;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const rotateY = (e.clientX - centerX) * 0.15;
    const rotateX = -(e.clientY - centerY) * 0.15;
    scene.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

document.addEventListener("touchstart", (e) => {
    isDragging = true;
    lastTouch.x = e.touches[0].clientX;
    lastTouch.y = e.touches[0].clientY;
}, { passive: false });

document.addEventListener("touchend", () => {
    isDragging = false;
});

document.addEventListener("touchmove", (e) => {
    const now = Date.now();
    if (!isDragging || now - lastMove < 30) return;
    lastMove = now;

    const touch = e.touches[0];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const rotateY = (touch.clientX - centerX) * 0.15;
    const rotateX = -(touch.clientY - centerY) * 0.15;
    scene.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}, { passive: false });

// QR Logic
function createShareQr() {
    const shareUrl = window.location.origin + window.location.pathname + '?q=loichuc';
    const qrApi = 'https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(shareUrl) + '&size=200x200';
    qrImage.src = qrApi;
}

function checkQueryShowGreeting() {
    const params = new URLSearchParams(window.location.search);
    if ((params.get('q') || '').trim().toLowerCase() === 'loichuc') {
        qrSection.style.display = 'none';
        scanSection.style.display = 'none';
        scene.style.display = 'block';
        document.addEventListener("click", playMusicOnce, { once: true });
        document.addEventListener("touchstart", playMusicOnce, { once: true });
    }
}

startBtn.addEventListener('click', () => {
    qrSection.style.display = 'none';
    scanSection.style.display = 'flex';
    startScan();
});

function startScan() {
    html5QrCode = new Html5Qrcode("reader");
    Html5Qrcode.getCameras().then(devices => {
        if (devices && devices.length) {
            html5QrCode.start(
                devices[0].id,
                { fps: 10, qrbox: 200 },
                (decodedText) => {
                    const text = (decodedText || '').trim().toLowerCase();
                    if (text === "loichuc" || text === window.location.origin + window.location.pathname + '?q=loichuc') {
                        html5QrCode.stop().then(() => {
                            scanSection.style.display = 'none';
                            scene.style.display = 'block';
                            document.addEventListener("click", playMusicOnce, { once: true });
                            document.addEventListener("touchstart", playMusicOnce, { once: true });
                        }).catch(err => {
                            scanSection.style.display = 'none';
                            scene.style.display = 'block';
                            document.addEventListener("click", playMusicOnce, { once: true });
                            document.addEventListener("touchstart", playMusicOnce, { once: true });
                        });
                    }
                },
                () => {}
            ).catch(err => console.error('Start camera failed:', err));
        }
    }).catch(err => console.log('getCameras error:', err));
}
let lastTime = 0;
function animate(time) {
    if (time - lastTime > 500) { // Khoảng cách 500ms
        if (scene.style.display === 'block' && scene.childElementCount < 15) {
            createFallingText();
            createFallingIcon();
        }
        lastTime = time;
    }
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

// Khởi động
createShareQr();
checkQueryShowGreeting();