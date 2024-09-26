

const suggestions = [
    "Xi măng", "Gạch", "Cát", "Đá", "Thép", "Gỗ", "Sơn", "Kính", 
    "Sắt", "Tấm lợp", "Nhựa đường", "Vữa", "Gạch men", "Gỗ công nghiệp"
];

// Hiển thị gợi ý khi nhập từ khóa
function showSuggestions() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const suggestionsList = document.getElementById("suggestions-list");
    suggestionsList.innerHTML = ""; 
    if (input.length > 0) {
        const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(input));
        filteredSuggestions.forEach(suggestion => {
            const li = document.createElement("li");
            li.textContent = suggestion;
            li.onclick = () => selectSuggestion(suggestion);
            suggestionsList.appendChild(li);
        });
        suggestionsList.style.display = "block"; // Hiển thị gợi ý
    } else {
        suggestionsList.style.display = "none"; // Ẩn gợi ý khi không có từ khóa
    }
}

// Chọn gợi ý và điền vào ô tìm kiếm
function selectSuggestion(suggestion) {
    document.getElementById("search-input").value = suggestion;
    document.getElementById("suggestions-list").innerHTML = ""; 
}

// Nạp lại trang khi bấm vào logo
function reloadPage() {
    location.reload();
}

// Bật/Tắt sidebar
const toggleButton = document.getElementById("toggle-sidebar");
const sidebar = document.getElementById("sidebar");

toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar-open");
});

// Đăng nhập và đăng ký
function login() {
    alert("Đăng nhập hệ thống");
}

function register() {
    alert("Đăng ký hệ thống");
}
