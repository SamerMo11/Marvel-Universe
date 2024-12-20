function gems() {
    const gemdata = [
        {
            name: "gaunlet",
            container: "unknown",
            appearance: "avengers infinity war",
            img: "1",
            col1: "#e61e16",
            col2: "#ea8d0e",
        },
        {
            name: "soul",
            container: "unknown",
            appearance: "avengers infinity war",
            img: "2",
            col1: "#ff7a03",
            col2: "#ff4c12",
        },
        {
            name: "reality",
            container: "aether",
            appearance: "thor the dark world",
            img: "3",
            col1: "#d60117",
            col2: "#fe0f26",
        },
        {
            name: "space",
            container: "tesseract",
            appearance: "thor",
            img: "4",
            col1: "#002e9b",
            col2: "#1a42fe",
        },
        {
            name: "power",
            container: "orb",
            appearance: "guardians of the galaxy",
            img: "5",
            col1: "#b602c1",
            col2: "#a100cb",
        },
        {
            name: "time",
            container: "eye of agamotto",
            appearance: "doctor strange",
            img: "6",
            col1: "#00a50c",
            col2: "#35d230",
        },
        {
            name: "mind",
            container: "vision's forehead",
            appearance: "the avengers",
            img: "7",
            col1: "#ddb800",
            col2: "#ed9e00",
        },
    ];

    const content = document.querySelector(".geminfo");
    const buttons = document.querySelectorAll(".item");

    let activeButton = null; // لتتبع الزر النشط

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const gemName = button.textContent.split(" ")[0].toLowerCase(); // استخراج اسم الجوهرة
            const gem = gemdata.find(g => g.name === gemName); // إيجاد الجوهرة المطابقة

            if (gem) {
                // إزالة التنسيقات من الزر القديم (إن وجد)
                if (activeButton) {
                    activeButton.style.background = ""; // إعادة تعيين الخلفية
                    activeButton.style.color = ""; // إعادة لون النص
                }

                // تحديث الزر بالألوان الخاصة بالجوهرة
                button.style.background = `linear-gradient(45deg, ${gem.col1}, ${gem.col2})`;
                button.style.color = "#fff"; // تغيير لون النص إلى الأبيض

                // تعيين الزر الحالي كزر نشط
                activeButton = button;

                // إزالة الفئة القديمة وإضافة التأثير
                content.classList.remove("fade-in");
                content.classList.add("fade-out");

                setTimeout(() => {
                    // استبدال المحتوى بالجوهرة الجديدة بعد انتهاء تأثير fade-out
                    content.innerHTML = `
                        <div class="info" style="--col1: ${gem.col1}; --col2: ${gem.col2};">
                            <p class="title">${gem.name} gem synopsis</p>
                            <p class="des">Container: ${gem.container},<br> Appearance: ${gem.appearance}</p>
                            <button>view details</button>
                        </div>

                        <div class="card" style="--col1: ${gem.col1}; --col2: ${gem.col2};">
                            <span></span>
                            <span></span>
                            <img src="../gems/${gem.img}.png" alt="${gem.name} gem image" loading="lazy">
                            <p class="name">${gem.name}</p>
                            <p class="stone">stone</p>
                        </div>

                        <div class="his" style="--col1: ${gem.col1}; --col2: ${gem.col2};">
                            <p class="title">${gem.name} gem synopsis</p>
                            <p class="des">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt vel repudiandae aspernatur quo.</p>
                        </div>
                    `;

                    // إزالة تأثير الخروج وإضافة تأثير الدخول
                    content.classList.remove("fade-out");
                    content.classList.add("fade-in");
                }, 0); // زمن تأثير الخروج
            }
        });
    });
}

gems();