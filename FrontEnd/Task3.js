    document.addEventListener("DOMContentLoaded", function () {
        const amountInput = document.getElementById("amount");
        const loadButton = document.querySelector(".load-btn");
        const clearButton = document.querySelector(".clear-btn");
        const imageContainer = document.getElementById("imageContainer"); // Sử dụng ID từ HTML

        // Hàm load ảnh
        loadButton.addEventListener("click", async function () {
            const amount = parseInt(amountInput.value, 10);
            if (amount < 1 || isNaN(amount)) return;

            try {
                const response = await fetch(`https://dog.ceo/api/breeds/image/random/${amount}`);
                const data = await response.json();

                // Xóa ảnh cũ trước khi hiển thị ảnh mới
                imageContainer.innerHTML = "";

                data.message.forEach(imgUrl => {
                    const img = document.createElement("img");
                    img.src = imgUrl;
                    img.style.width = "150px";
                    img.style.height = "150px";
                    img.style.objectFit = "cover";
                    img.style.borderRadius = "10px";
                    img.style.border = "2px solid #ccc";
                    imageContainer.appendChild(img);
                });
            } catch (error) {
                console.error("Lỗi khi tải ảnh:", error);
            }
        });

        // Hàm xóa ảnh
        clearButton.addEventListener("click", function () {
            imageContainer.innerHTML = "";
        });
    });
