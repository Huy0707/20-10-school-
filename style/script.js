const scene = document.getElementById("scene");

const sparkleContainer = document.getElementById("sparkles");

const audio = document.getElementById("sound");



const texts = [

    "🎉Chúc mừng 20-10 Hoàng Trần Phúc An 12/1 nhó🎉",

    "🎉Chúc mừng 20-10 Ngô Ngọc Bảo Châu 12/1 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Quỳnh Chi 12/1 nhó🎉",

    "🎉Chúc mừng 20-10 Trần Ngọc Ánh Dương 12/1 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Dương Đà Giang 12/1 nhó🎉",

    "🎉Chúc mừng 20-10 Đặng Thị Thảo My 12/1 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Hoàng Kim Ngân 12/1 nhó🎉",

    "🎉Chúc mừng 20-10 Phạm Ngọc Thảo Nguyen 12/1 nhó🎉",

    "🎉Chúc mừng 20-10 Phạm Thị Mỹ Tuyền 12/1 nhó🎉",

    "🎉Chúc mừng 20-10 Lê Nguyễn Bảo Hân 12/2 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Xuân Mai 12/2 nhó🎉",

    "🎉Chúc mừng 20-10 Trần Thị Phượng Nga 12/2 nhó🎉",

    "🎉Chúc mừng 20-10 Trần Bảo Ngọc 12/2 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Thị Thanh Tuyền 12/2 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Bảo Trân 12/2 nhó🎉",

    "🎉Chúc mừng 20-10 Trần Nguyễn Khánh An 12/3 nhó🎉",

    "🎉Chúc mừng 20-10 Trần Linh Đa 12/3 nhó🎉",

    "🎉Chúc mừng 20-10 Phan Vũ Lê Duyên 12/3 nhó🎉",

    "🎉Chúc mừng 20-10 Tôn Nữ Khánh Hạ 12/3 nhó🎉",

    "🎉Chúc mừng 20-10 Đinh Lê Khánh Hân 12/3 nhó🎉",

    "🎉Chúc mừng 20-10 Hoàng Phương Linh 12/3 nhó🎉",

    "🎉Chúc mừng 20-10 Phạm Thuý Ngân 12/3 nhó🎉",

    "🎉Chúc mừng 20-10 Phạm Lê Phương Ngọc 12/3 nhó🎉",

    "🎉Chúc mừng 20-10 Lê Bảo Nguyên 12/3 nhó🎉",

    "🎉Chúc mừng 20-10 Tống Linh Tâm 12/3 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Mai Anh Thư 12/3 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Huỳnh Thanh Trà 12/3 nhó🎉",

    "🎉Chúc mừng 20-10 Trịnh Thị Tường Vi 12/3 nhó🎉",

    "🎉Chúc mừng 20-10 Ngô Kim Yến 12/3 nhó🎉",

    "🎉Chúc mừng 20-10 Đoàn Ngọc Thuỷ Tiên 12/3 nhó🎉",

    "🎉Chúc mừng 20-10 Hồ Hoàng Tiểu An 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Trần Ngọc Anh 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Lê Trần Quỳnh Hương 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Phạm Trúc Linh 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Vũ Nguyễn Ngọc Minh 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Trần Thị Ái My 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Đặng Trâm Mỹ 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Lê Trần Thủy Ngân 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Lê Trương Khánh Ngọc 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Trương Kim Nguyên 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Cao Tuệ Nhi 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Đặng Thục Yến Nhi 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Lưu Thái Bảo Nhi 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Thị Phương Nhi 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Trần Ngọc Uyên Nhi 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Quỳnh Như 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Phạm Lê Kiều Oanh 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Khúc Thị Yến Phương 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Trần Tố Phương 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Lê Mỹ Quyên 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Văn Ngọc Bảo Quyên 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Như Quỳnh 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Trần Hồng Tâm 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Võ Thị Thanh Thảo 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Thủy Tiên 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Huỳnh Ngọc Thu Trang 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Lê Phương Trâm 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Ngọc Trân 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Đào Phương Trinh 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Thị Tố Trinh 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Tạ Thị Hồng Uyên 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Đặng Thanh Nhã Vy 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Trần Võ Như Ý 12/4 nhó🎉",

    "🎉Chúc mừng 20-10 Trần Lê Vân Anh 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Đõ Nguyễn Xuân Ánh 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Đặng Bảo Hân 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Ngọc Gia Hân 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Hồ Thảo My 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Đỗ Nhất Kỳ 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Phạm Như Ý 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Bảo Hân 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Trần Nguyễn Thảo Trang 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Thuý Hiền 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Thị Cẩm Thuý 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Thuỳ Dương 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Phạm Thị Mai Điệp 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Thị Phước Hội 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Đồng Thị Huỳnh Trân 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Ngô Thuỳ Cơ 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Phạm Lê Thuỳ Linh 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Thị Bảo Ngọc 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Thị Quỳnh Nhi 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Trần Uyên Phương 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Hà Thanh Thảo 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Ngô Hoàng Bảo Trúc 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Thanh Trúc 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Huỳnh Thị Thảo Vy 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Thị Thuý Vy 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Lê Nguyễn Phương Anh 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Phạm Huỳnh Ni Na 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Phạm Hoàng Ngân 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Phan Thị Ngọc Nhi 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Trịnh Nguyễn Đăng Quỳnh 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Phùng Thị Ý Nhi 12/5 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Lê Gia An 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Phúc Thiên Ân 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Võ Hải Anh 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Võ Lan Anh 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Hồ Thị Cảnh 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Phan Hoàng Bảo Châu 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Võ Ngọc Quỳnh Đan 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Hà Nguyễn Ngọc Diễm 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Hồ Ngọc Gia Hân 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Thị Kim Hương 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Trần Phạm Kiều Hương 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Hoàng Thanh Huyền 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Trần Nhật Khánh Linh 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Hạ My 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Huỳnh Thị Uyển Na 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Lê Kim Ngân 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Thị Nhép 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Ngô Thị Quỳnh Như 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Lại Trúc Ny 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Thị Hoài Phương 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Trần Thị Thanh Phương 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Trương Vũ Thục Quyên 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Vũ Phương Thảo 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Vũ Anh Thư 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Mai Thy 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Đoàn Ánh Tiên 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Trần Diễm Trúc 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Trần Mai Nhã Trúc 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Hoàng Yến Vi 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Thị Bảo Yến 12/6 nhó🎉",

    "🎉Chúc mừng 20-10 Hà Lê Thúy An 12/7 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Phạm Hoàng Châu 12/7 nhó🎉",

    "🎉Chúc mừng 20-10 Phùng Mẫn Dy 12/7 nhó🎉",

    "🎉Chúc mừng 20-10 Châu Thị Xuân Loan 12/7 nhó🎉",

    "🎉Chúc mừng 20-10 Phạm Yến My 12/7 nhó🎉",

    "🎉Chúc mừng 20-10 Đào Bảo Ngọc 12/7 nhó🎉",

    "🎉Chúc mừng 20-10 Hồ Bảo Ngọc 12/7 nhó🎉",

    "🎉Chúc mừng 20-10 Phạm Mai Thúy Ngọc 12/7 nhó🎉",

    "🎉Chúc mừng 20-10 Phan Nguyễn Bảo Ngọc 12/7 nhó🎉",

    "🎉Chúc mừng 20-10 Đặng Trần Bảo Nguyên 12/7 nhó🎉",

    "🎉Chúc mừng 20-10 Phạm Quýnh Như 12/7 nhó🎉",

    "🎉Chúc mừng 20-10 Phạm Thị Kiều Oanh 12/7 nhó🎉",

    "🎉Chúc mừng 20-10 Nguyễn Thanh Đỗ Quyên 12/7 nhó🎉",

    "🎉Chúc mừng 20-10 Phạm Huỳnh Minh Thư 12/7 nhó🎉",

    "🎉Chúc mừng 20-10 Phạm Thị Anh Thư 12/7 nhó🎉",

    "🎉Chúc mừng 20-10 Văn Thị Xuân Trinh 12/7 nhó🎉",

    "🎉Chúc mừng 20-10 Võ Phương Trinh 12/7 nhó🎉",

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

    const gridSize = 5;

    const cellWidth = window.innerWidth / gridSize;

    const cellHeight = window.innerHeight / gridSize;

    const gridX = Math.floor(Math.random() * gridSize);

    const gridY = Math.floor(Math.random() * gridSize);


    const left = Math.min(gridX * cellWidth + Math.random() * (cellWidth * 0.8), window.innerWidth - 50);

    const left = gridX * cellWidth + Math.random() * (cellWidth * 0.8);

    text.style.left = `${Math.random() * window.innerWidth}px`;

    text.style.transform = `translateY(0)`;

    text.style.willChange = "transform, opacity";

    const screenHeight = Math.max(document.documentElement.scrollHeight, window.innerHeight);

    const fallDistance = screenHeight + 100; // Thêm 100px để vượt ra ngoài

    const fallTime = (fallDistance / window.innerHeight) * 6; // Tính thời gian dựa trên chiều cao (tối thiểu 6s)



    text.style.animation = `fall ${fallTime}s linear forwards`;

    scene.appendChild(text);



    setTimeout(() => {

        if (text.parentElement) text.remove();

    }, 8000);

}



function createFallingIcon() {

    const icon = document.createElement("div");

    icon.className = "falling-icon";

    icon.textContent = icons[Math.floor(Math.random() * icons.length)];

    const gridSize = 5;

    const cellWidth = window.innerWidth / gridSize;

    const cellHeight = window.innerHeight / gridSize;

    const gridX = Math.floor(Math.random() * gridSize);

    const gridY = Math.floor(Math.random() * gridSize);


    const left = Math.min(gridX * cellWidth + Math.random() * (cellWidth * 0.8), window.innerWidth - 30);

    const left = gridX * cellWidth + Math.random() * (cellWidth * 0.8);

    icon.style.left = `${Math.random() * window.innerWidth}px`;

    icon.style.transform = `translateY(0)`;

    icon.style.willChange = "transform, opacity";

    const screenHeight = Math.max(document.documentElement.scrollHeight, window.innerHeight);

    const fallDistance = screenHeight + 100;

    const fallTime = (fallDistance / window.innerHeight) * 6;



    icon.style.animation = `fall ${fallTime}s linear forwards`;

    scene.appendChild(icon);



    setTimeout(() => {

        if (icon.parentElement) icon.remove();

    }, 8000);

}



setInterval(() => {

    if (scene.style.display === 'block' && scene.childElementCount < 15) {

        createFallingText();

        createFallingIcon();

    }

}, 600);



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

let sparkleCount = 0;



function createSparkles(count = 20) {

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

    if (sparkleCount < 20 && Math.random() < 0.1) { // Thêm sparkle ngẫu nhiên với xác suất thấp

        const s = document.createElement("div");

        s.className = "sparkle";

        s.style.top = `${Math.random() * 95}%`;

        s.style.left = `${Math.random() * 95}%`;

        s.style.animationDuration = `${3 + Math.random() * 3}s`;

        s.style.animationDelay = `${Math.random() * 4}s`;

        sparkleContainer.appendChild(s);

        sparkleCount++;

    }

    requestAnimationFrame(updateSparkles);

}



createSparkles(20); // Khởi tạo ban đầu

requestAnimationFrame(updateSparkles); // Bắt đầu vòng lặp



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