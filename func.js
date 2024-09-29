

const suggestions = [
    // Nội thất Phòng Khách
    "Ghế sofa", "Bàn trà", "Kệ tivi", "Thảm trải sàn", "Đèn trang trí", "Rèm cửa", 
    "Kệ sách", "Ghế đơn", "Tủ trưng bày", "Bàn console", "Đồng hồ treo tường", 
    "Tranh trang trí", "Kệ góc", "Chậu cây cảnh", "Tủ giày", "Quạt đứng", "Bình hoa", 
    "Loa âm thanh", "Đèn sàn", "Tủ rượu", "Bộ đĩa nhạc, phim", "Đèn LED dây", 
    "Tủ đa năng", "Bàn làm việc nhỏ", "Gối tựa lưng", "Bàn góc", "Đế tivi xoay", 
    "Khung tranh ảnh", "Máy lọc không khí", "Quạt trần", "Bàn để đồ", "Bộ cốc ly", 
    "Giá treo áo khoác", "Gương trang trí",

    // Nội thất Nhà Bếp
    "Bàn ăn", "Ghế ăn", "Tủ bếp", "Kệ đựng gia vị", "Nồi cơm điện", "Lò vi sóng", 
    "Máy xay sinh tố", "Nồi chiên không dầu", "Máy rửa chén", "Chảo chống dính", 
    "Bộ dao kéo", "Máy hút mùi", "Tủ lạnh", "Máy lọc nước", "Bàn đảo bếp", "Ấm siêu tốc", 
    "Bộ bát đĩa", "Lò nướng", "Nồi áp suất", "Giá đựng bát đĩa", "Bình đựng nước", 
    "Thớt gỗ", "Máy pha cà phê", "Bộ ly tách", "Kệ để nồi chảo", "Kệ đựng khăn bếp", 
    "Đèn treo bếp", "Tủ đựng đồ khô", "Rổ, rá", "Lò nướng bánh mì", "Thùng rác bếp", 
    "Máy làm bánh", "Hộp đựng thực phẩm", "Máy đánh trứng",

    // Nội thất Phòng Ngủ
    "Giường ngủ", "Tủ quần áo", "Đèn ngủ", "Bàn trang điểm", "Kệ đầu giường", "Gối đầu", 
    "Chăn ga gối đệm", "Tủ đầu giường", "Rèm cửa", "Thảm trải sàn", "Gương soi", 
    "Kệ treo đồ", "Tủ giày", "Máy điều hòa", "Quạt", "Đèn đọc sách", "Tranh ảnh treo tường", 
    "Ghế ngồi", "Tủ trang sức", "Kệ sách", "Giá treo quần áo", "Bộ drap giường", 
    "Kệ tivi", "Loa âm thanh nhỏ", "Bộ bàn làm việc", "Thùng rác nhỏ", "Máy phun sương", 
    "Đèn bàn", "Bàn học", "Giá sách nhỏ", "Chăn điện", "Rổ đựng đồ", "Gối tựa lưng", "Gối ôm",

    // Nội thất Phòng Tắm
    "Bồn tắm", "Bồn rửa tay", "Gương phòng tắm", "Kệ để đồ", "Máy nước nóng", 
    "Vòi sen", "Đèn phòng tắm", "Rèm che", "Thảm lót chân", "Giá để khăn", "Khăn tắm", 
    "Bàn chải đánh răng", "Máy sấy tóc", "Máy cạo râu", "Tủ để đồ", "Xà phòng", 
    "Giỏ đựng quần áo", "Bồn vệ sinh", "Đèn trang trí", "Thảm chống trượt", "Tủ để khăn tắm", 
    "Hộp đựng xà phòng", "Máy giặt", "Bộ gương soi toàn thân", "Hộp đựng bàn chải", 
    "Máy sưởi", "Giá để dép", "Bàn ủi", "Ghế ngồi nhỏ", "Kệ để dầu gội", "Hộp đựng mỹ phẩm", 
    "Cây treo khăn", "Tủ gương phòng tắm", "Giá để giấy vệ sinh",

    // Nội thất Nhà Ăn
    "Bàn ăn lớn", "Ghế ngồi", "Đèn chùm", "Khăn trải bàn", "Bộ bát đĩa ăn", "Ly, cốc thủy tinh", 
    "Đồ trang trí bàn", "Nĩa, dao", "Bình nước", "Kệ đựng gia vị", "Ghế ăn trẻ em", 
    "Tủ ly tách", "Bình hoa trang trí", "Thảm trải bàn ăn", "Đèn treo", "Tủ rượu", 
    "Kệ để khăn ăn", "Rèm che", "Gương trang trí", "Hộp đựng thức ăn", "Chậu cây nhỏ", 
    "Kệ để đồ ăn", "Bộ ly uống rượu", "Bộ đũa", "Kệ đựng bánh", "Bộ dụng cụ mở rượu", 
    "Bộ trà", "Lọ đựng gia vị", "Lò nướng", "Tủ đựng đồ dùng ăn", "Đĩa salad", "Ghế quầy bar", 
    "Khay đựng thực phẩm", "Nến trang trí",

    // Vật dụng khác
    "Đèn LED trang trí", "Bộ dao cắt giấy", "Kệ để đồ trang trí", "Giá treo quần áo di động", 
    "Đèn năng lượng mặt trời", "Camera an ninh", "Két sắt mini", "Ghế xếp du lịch", 
    "Đèn pin", "Tủ đựng đồ lặt vặt", "Máy lọc không khí", "Kệ đựng sách báo", 
    "Bàn ghế xếp ngoài trời", "Bình chữa cháy", "Hộp đựng giấy", "Giá treo trang sức", 
    "Chậu cây mini", "Bộ dụng cụ vệ sinh", "Kệ để nến", "Máy làm mát không khí", 
    "Kệ đựng hồ sơ", "Quạt cầm tay", "Đèn bàn di động", "Kệ đựng dép", "Bộ dụng cụ sửa chữa", 
    "Rổ đựng đồ giặt", "Máy phun tinh dầu", "Kệ đựng đồ trang điểm", "Bàn làm việc gấp", 
    "Tủ đựng chăn màn", "Máy xông hơi", "Đồng hồ báo thức", "Bộ khay đựng mỹ phẩm", 
    "Quạt mini USB"
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
        suggestionsList.style.display = "block"; 
    } else {
        suggestionsList.style.display = "none"; 
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

