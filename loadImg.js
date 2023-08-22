// Sử dụng JavaScript để xử lý sự kiện khi nhấn nút "Xem thêm" hoặc "Ẩn bớt"
const viewMoreButton = document.getElementById("viewMoreButton");
const hiddenImages = document.querySelector(".hidden-imgs");

let isHidden = true;

function toggleImages() {
    // Kiểm tra trạng thái hiện tại của ảnh
    if (isHidden) {
        // Nếu ảnh đang ẩn, hiển thị các ảnh trong phần "Xem thêm"
        hiddenImages.style.display = "flex";
        viewMoreButton.innerText = "Ẩn bớt";
    } else {
        // Nếu ảnh đang hiển thị, ẩn các ảnh trong phần "Xem thêm"
        hiddenImages.style.display = "none";
        viewMoreButton.innerText = "Xem thêm";
    }

    // Đảo ngược trạng thái của ảnh
    isHidden = !isHidden;
}

viewMoreButton.addEventListener("click", toggleImages);
