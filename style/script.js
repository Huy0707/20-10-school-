const scene = document.getElementById("scene");
const sparkleContainer = document.getElementById("sparkles");
const audio = document.getElementById("sound");

const texts = [
    "Chúc mừng sinh nhật 🎉",
    "Happy Birthday 🎂",
    "15 - 07",
    "Bùi Hạnh",
    "Chúc Mừng Sinh Nhật Bùi Hạnh 🥳",
    "Wishing you endless joy 💫",
    "Luôn cười thật tươi nhé 😊",
    "Hope all your dreams come true ✨",
    "Yêu thương luôn bên em ❤️"
];

const icons = ["🎂", "🎉", "💖", "🌟", "💐", "🎁", "✨", "💝"];

const qrSection = document.getElementById('qr-section');
const scanSection = document.getElementById('scan-section');
const startBtn = document.getElementById('startBtn');
const readerDiv = document.getElementById('reader');
const qrImage = document.getElementById('qrImage');
let html5QrCode;

let activeTexts = []; // Mảng lưu trữ các phần tử đang rơi
let sparkleCount = 0;

function createFallingText() {
    const text = document.createElement("div");
    text.className = "falling-text";
    text.textContent = texts[Math.floor(Math.random() * texts.length)];
    const gridSize = 5;
    const cellWidth = window.innerWidth / gridSize;
    const cellHeight = window.innerHeight / gridSize;
    const gridX = Math.floor(Math.random() * gridSize);
    const left = Math.min(gridX * cellWidth + Math.random() * (cellWidth * 0.8), window.innerWidth - 50);

    // Tính toán top ban đầu và tránh chồng lấn
    let top = -10 * (Math.random() + 0.1) * vhToPx(1); // Bắt đầu từ -10vh ngẫu nhiên
    let overlap = true;

    while (overlap) {
        overlap = false;
        for (let activeText of activeTexts) {
            const activeTop = parseFloat(activeText.style.top) || 0;
            const activeHeight = activeText.getBoundingClientRect().height;
            const newHeight = text.getBoundingClientRect().height;
            if (Math.abs(top - activeTop) < (activeHeight + newHeight)) { // Tăng điều kiện chồng lấn
                overlap = true;
                top -= activeHeight + 20; // Tăng khoảng cách lên 20px
                break;
            }
        }
    }

    text.style.left = `${left}px`;
    text.style.top = `${top}px`;
    text.style.transform = `translateY(0)`;
    text.style.willChange = "transform, opacity";

    // Tính chiều cao thực tế và thời gian rơi
    const screenHeight = Math.max(document.documentElement.scrollHeight, window.innerHeight);
    const fallDistance = screenHeight + 100;
    const fallTime = (fallDistance / window.innerHeight) * 6;

    text.style.animation = `fall ${fallTime}s linear forwards`;
    scene.appendChild(text);
    activeTexts.push(text);

    setTimeout(() => {
        if (text.parentElement) {
            text.remove();
            activeTexts = activeTexts.filter(t => t !== text);
        }
    }, fallTime * 1000);
}

function createFallingIcon() {
    const icon = document.createElement("div");
    icon.className = "falling-icon";
    icon.textContent = icons[Math.floor(Math.random() * icons.length)];
    const gridSize = 5;
    const cellWidth = window.innerWidth / gridSize;
    const cellHeight = window.innerHeight / gridSize;
    const gridX = Math.floor(Math.random() * gridSize);
    const left = Math.min(gridX * cellWidth + Math.random() * (cellWidth * 0.8), window.innerWidth - 30);

    // Tính toán top ban đầu và tránh chồng lấn
    let top = -10 * (Math.random() + 0.1) * vhToPx(1);
    let overlap = true;

    while (overlap) {
        overlap = false;
        for (let activeText of activeTexts) {
            const activeTop = parseFloat(activeText.style.top) || 0;
            const activeHeight = activeText.getBoundingClientRect().height;
            const newHeight = icon.getBoundingClientRect().height;
            if (Math.abs(top - activeTop) < (activeHeight + newHeight)) {
                overlap = true;
                top -= activeHeight + 20;
                break;
            }
        }
    }

    icon.style.left = `${left}px`;
    icon.style.top = `${top}px`;
    icon.style.transform = `translateY(0)`;
    icon.style.willChange = "transform, opacity";

    const screenHeight = Math.max(document.documentElement.scrollHeight, window.innerHeight);
    const fallDistance = screenHeight + 100;
    const fallTime = (fallDistance / window.innerHeight) * 6;

    icon.style.animation = `fall ${fallTime}s linear forwards`;
    scene.appendChild(icon);
    activeTexts.push(icon);

    setTimeout(() => {
        if (icon.parentElement) {
            icon.remove();
            activeTexts = activeTexts.filter(t => t !== icon);
        }
    }, fallTime * 1000);
}

// Hàm chuyển đổi vh thành px
function vhToPx(vh) {
    return (vh * window.innerHeight) / 100;
}

function createSparkles(count = 12) {
    for (let i = 0; i < count; i++) {
        const s = document.createElement("div");
        s.className = "sparkle";
        s.style.top = `${Math.random() * 95}%`;
        s.style.left = `${Math.random() * 95}%`;
        s.style.animationDuration = `${3 + Math.random() * 3}s`;
        s.style.animationDelay = `${Math.random() * 4}s`;
        sparkleContainer.appendChild(s);
        sparkleCount++;
    }
}

function updateSparkles() {
    if (sparkleContainer.childElementCount < 12 && Math.random() < 0.05) {
        const s = document.createElement("div");
        s.className = "sparkle";
        s.style.top = `${Math.random() * 95}%`;
        s.style.left = `${Math.random() * 95}%`;
        s.style.animationDuration = `${3 + Math.random() * 3}s`;
        s.style.animationDelay = `${Math.random() * 4}s`;
        sparkleContainer.appendChild(s);
    }
    requestAnimationFrame(updateSparkles);
}

createSparkles(12);
requestAnimationFrame(updateSparkles);

// Tự động phát nhạc
window.onload = function() {
    if (audio) {
        audio.currentTime = 48;
        audio.muted = false;
        audio.play().then(() => {
            console.log("Đã phát nhạc tự động 🎵");
        }).catch(error => {
            console.warn("Không thể phát nhạc tự động do chính sách trình duyệt:", error);
            document.addEventListener("click", () => audio.play(), { once: true });
            document.addEventListener("touchstart", () => audio.play(), { once: true });
        });
    }
};

// Drag 3D effect (chỉ trên desktop)
let isDragging = false;
let lastTouch = { x: 0, y: 0 };
let lastMove = 0;

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

document.addEventListener("mousedown", () => {
    if (!isMobile) {
        isDragging = true;
        document.body.style.cursor = "grabbing";
    }
});

document.addEventListener("mouseup", () => {
    if (!isMobile) {
        isDragging = false;
        document.body.style.cursor = "grab";
    }
});

document.addEventListener("mouseleave", () => {
    if (!isMobile) {
        isDragging = false;
        document.body.style.cursor = "grab";
    }
});

document.addEventListener("mousemove", (e) => {
    const now = Date.now();
    if (!isMobile && isDragging && now - lastMove < 30) return;
    lastMove = now;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const rotateY = (e.clientX - centerX) * 0.15;
    const rotateX = -(e.clientY - centerY) * 0.15;
    scene.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

document.addEventListener("touchstart", (e) => {
    if (!isMobile) {
        isDragging = true;
        lastTouch.x = e.touches[0].clientX;
        lastTouch.y = e.touches[0].clientY;
    }
}, { passive: false });

document.addEventListener("touchend", () => {
    if (!isMobile) isDragging = false;
});

document.addEventListener("touchmove", (e) => {
    const now = Date.now();
    if (!isMobile && !isDragging || now - lastMove < 30) return;
    lastMove = now;

    const touch = e.touches[0];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const rotateY = (touch.clientX - centerX) * 0.15;
    const rotateX = -(touch.clientY - centerY) * 0.15;
    scene.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}, { passive: false});

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
                        }).catch(err => {
                            scanSection.style.display = 'none';
                            scene.style.display = 'block';
                        });
                    }
                },
                () => {}
            ).catch(err => console.error('Start camera failed:', err));
        }
    }).catch(err => console.log('getCameras error:', err));
}

createShareQr();
checkQueryShowGreeting();