const suggestions = [
  // Nội thất Phòng Khách
  "Ghế sofa",
  "Bàn trà",
  "Kệ tivi",
  "Thảm trải sàn",
  "Đèn trang trí",
  "Rèm cửa",
  "Kệ sách",
  "Ghế đơn",
  "Tủ trưng bày",
  "Bàn console",
  "Đồng hồ treo tường",
  "Tranh trang trí",
  "Kệ góc",
  "Chậu cây cảnh",
  "Tủ giày",
  "Quạt đứng",
  "Bình hoa",
  "Loa âm thanh",
  "Đèn sàn",
  "Tủ rượu",
  "Bộ đĩa nhạc, phim",
  "Đèn LED dây",
  "Tủ đa năng",
  "Bàn làm việc nhỏ",
  "Gối tựa lưng",
  "Bàn góc",
  "Đế tivi xoay",
  "Khung tranh ảnh",
  "Máy lọc không khí",
  "Quạt trần",
  "Bàn để đồ",
  "Bộ cốc ly",
  "Giá treo áo khoác",
  "Gương trang trí",

  // Nội thất Nhà Bếp
  "Bàn ăn",
  "Ghế ăn",
  "Tủ bếp",
  "Kệ đựng gia vị",
  "Nồi cơm điện",
  "Lò vi sóng",
  "Máy xay sinh tố",
  "Nồi chiên không dầu",
  "Máy rửa chén",
  "Chảo chống dính",
  "Bộ dao kéo",
  "Máy hút mùi",
  "Tủ lạnh",
  "Máy lọc nước",
  "Bàn đảo bếp",
  "Ấm siêu tốc",
  "Bộ bát đĩa",
  "Lò nướng",
  "Nồi áp suất",
  "Giá đựng bát đĩa",
  "Bình đựng nước",
  "Thớt gỗ",
  "Máy pha cà phê",
  "Bộ ly tách",
  "Kệ để nồi chảo",
  "Kệ đựng khăn bếp",
  "Đèn treo bếp",
  "Tủ đựng đồ khô",
  "Rổ, rá",
  "Lò nướng bánh mì",
  "Thùng rác bếp",
  "Máy làm bánh",
  "Hộp đựng thực phẩm",
  "Máy đánh trứng",

  // Nội thất Phòng Ngủ
  "Giường ngủ",
  "Tủ quần áo",
  "Đèn ngủ",
  "Bàn trang điểm",
  "Kệ đầu giường",
  "Gối đầu",
  "Chăn ga gối đệm",
  "Tủ đầu giường",
  "Rèm cửa",
  "Thảm trải sàn",
  "Gương soi",
  "Kệ treo đồ",
  "Tủ giày",
  "Máy điều hòa",
  "Quạt",
  "Đèn đọc sách",
  "Tranh ảnh treo tường",
  "Ghế ngồi",
  "Tủ trang sức",
  "Kệ sách",
  "Giá treo quần áo",
  "Bộ drap giường",
  "Kệ tivi",
  "Loa âm thanh nhỏ",
  "Bộ bàn làm việc",
  "Thùng rác nhỏ",
  "Máy phun sương",
  "Đèn bàn",
  "Bàn học",
  "Giá sách nhỏ",
  "Chăn điện",
  "Rổ đựng đồ",
  "Gối tựa lưng",
  "Gối ôm",

  // Nội thất Phòng Tắm
  "Bồn tắm",
  "Bồn rửa tay",
  "Gương phòng tắm",
  "Kệ để đồ",
  "Máy nước nóng",
  "Vòi sen",
  "Đèn phòng tắm",
  "Rèm che",
  "Thảm lót chân",
  "Giá để khăn",
  "Khăn tắm",
  "Bàn chải đánh răng",
  "Máy sấy tóc",
  "Máy cạo râu",
  "Tủ để đồ",
  "Xà phòng",
  "Giỏ đựng quần áo",
  "Bồn vệ sinh",
  "Đèn trang trí",
  "Thảm chống trượt",
  "Tủ để khăn tắm",
  "Hộp đựng xà phòng",
  "Máy giặt",
  "Bộ gương soi toàn thân",
  "Hộp đựng bàn chải",
  "Máy sưởi",
  "Giá để dép",
  "Bàn ủi",
  "Ghế ngồi nhỏ",
  "Kệ để dầu gội",
  "Hộp đựng mỹ phẩm",
  "Cây treo khăn",
  "Tủ gương phòng tắm",
  "Giá để giấy vệ sinh",

  // Nội thất Nhà Ăn
  "Bàn ăn lớn",
  "Ghế ngồi",
  "Đèn chùm",
  "Khăn trải bàn",
  "Bộ bát đĩa ăn",
  "Ly, cốc thủy tinh",
  "Đồ trang trí bàn",
  "Nĩa, dao",
  "Bình nước",
  "Kệ đựng gia vị",
  "Ghế ăn trẻ em",
  "Tủ ly tách",
  "Bình hoa trang trí",
  "Thảm trải bàn ăn",
  "Đèn treo",
  "Tủ rượu",
  "Kệ để khăn ăn",
  "Rèm che",
  "Gương trang trí",
  "Hộp đựng thức ăn",
  "Chậu cây nhỏ",
  "Kệ để đồ ăn",
  "Bộ ly uống rượu",
  "Bộ đũa",
  "Kệ đựng bánh",
  "Bộ dụng cụ mở rượu",
  "Bộ trà",
  "Lọ đựng gia vị",
  "Lò nướng",
  "Tủ đựng đồ dùng ăn",
  "Đĩa salad",
  "Ghế quầy bar",
  "Khay đựng thực phẩm",
  "Nến trang trí",

  // Vật dụng khác
  "Đèn LED trang trí",
  "Bộ dao cắt giấy",
  "Kệ để đồ trang trí",
  "Giá treo quần áo di động",
  "Đèn năng lượng mặt trời",
  "Camera an ninh",
  "Két sắt mini",
  "Ghế xếp du lịch",
  "Đèn pin",
  "Tủ đựng đồ lặt vặt",
  "Máy lọc không khí",
  "Kệ đựng sách báo",
  "Bàn ghế xếp ngoài trời",
  "Bình chữa cháy",
  "Hộp đựng giấy",
  "Giá treo trang sức",
  "Chậu cây mini",
  "Bộ dụng cụ vệ sinh",
  "Kệ để nến",
  "Máy làm mát không khí",
  "Kệ đựng hồ sơ",
  "Quạt cầm tay",
  "Đèn bàn di động",
  "Kệ đựng dép",
  "Bộ dụng cụ sửa chữa",
  "Rổ đựng đồ giặt",
  "Máy phun tinh dầu",
  "Kệ đựng đồ trang điểm",
  "Bàn làm việc gấp",
  "Tủ đựng chăn màn",
  "Máy xông hơi",
  "Đồng hồ báo thức",
  "Bộ khay đựng mỹ phẩm",
  "Quạt mini USB",
];

// Hiển thị gợi ý khi nhập từ khóa
function showSuggestions() {
  const input = document.getElementById("search-input").value.toLowerCase();
  const suggestionsList = document.getElementById("suggestions-list");
  suggestionsList.innerHTML = "";
  if (input.length > 0) {
    const filteredSuggestions = suggestions.filter((item) =>
      item.toLowerCase().includes(input)
    );
    filteredSuggestions.forEach((suggestion) => {
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

// Hiển thị form đăng nhập khi nhấn vào nút Đăng nhập
document.getElementById("login-btn").addEventListener("click", function () {
  document.getElementById("register-web").style.display = "none";
  document.getElementById("login-web").style.display = "block";
});

// Sinh mã OTP ngẫu nhiên
function generateRandomOTP() {
  const otp = Math.floor(100000 + Math.random() * 900000); // Tạo OTP 6 chữ số ngẫu nhiên
  document.getElementById("otp").value = otp; // Tự động điền OTP vào trường input
}

// Hiển thị form đăng ký và sinh OTP khi nhấn vào nút Đăng ký
document.getElementById("register-btn").addEventListener("click", function () {
  document.getElementById("login-web").style.display = "none";
  document.getElementById("register-web").style.display = "block";
  generateRandomOTP(); // Gọi hàm sinh OTP
});

// Kiểm tra nếu thông tin tài khoản đã được lưu trong LocalStorage
document.addEventListener("DOMContentLoaded", function () {
  const rememberedUsername = localStorage.getItem("username");
  const rememberedPassword = localStorage.getItem("password");

  if (rememberedUsername && rememberedPassword) {
    document.getElementById("username").value = rememberedUsername;
    document.getElementById("password").value = rememberedPassword;
    document.getElementById("remember_me").checked = true;
  }
});

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("remember_me").checked;
  const loginNotification = document.getElementById("notification");

  // Kiểm tra nếu người dùng muốn ghi nhớ thông tin đăng nhập
  if (rememberMe) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password); // Hãy mã hóa mật khẩu trước khi lưu ở đây.

    loginNotification.textContent = "Tên đăng nhập hoặc mật khẩu không đúng!";
    loginNotification.classList.remove("hide", "success");
    loginNotification.classList.add("error", "show");
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Thực hiện logic đăng nhập
  console.log("Đăng nhập với tài khoản: ", username, password);

  // Ví dụ: Chuyển hướng người dùng sau khi đăng nhập
  // window.location.href = "/home";
}


function register() {
  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const otp = document.getElementById("otp").value;
  const registerNotification = document.getElementById("notification");



  registerNotification.classList.remove("show");
  "show", "error", "success";
  registerNotification.classList.add("hide");

  // Kiểm tra thông tin hợp lệ
  if (password !== confirmPassword) {
    registerNotification.textContent = "Mật khẩu không hợp lệ!";
    registerNotification.classList.remove("show");
    registerNotification.classList.add("error", "hide");
  } else {
    registerNotification.textContent = "Tài khoản đăng ký thành công!";
    registerNotification.classList.remove("hide", "error");
    registerNotification.classList.add("success", "show");
  }
  if (
    username === "" ||
    password === "" ||
    confirmPassword === "" ||
    otp === ""
  ) {
    registerNotification.textContent = "Vui lòng điền đầy đủ thông tin!";
    registerNotification.classList.remove("hide");
    registerNotification.classList.add("error", "show");
 } else if (password !== confirmPassword) {
    document.getElementById("register-password").value = "";
    document.getElementById("confirm-password").value = "";

    registerNotification.textContent = "Mật khẩu không khớp!";
    registerNotification.classList.remove("hide");
    registerNotification.classList.add("error", "show");
  } else {
    registerNotification.textContent = "Tài khoản đăng ký thành công!";
    registerNotification.classList.remove("hide");
    registerNotification.classList.add("success", "show");
     
    setTimeout(() => {
      closeRegistrationWindow();
    }, 1000);


    
    
  }

  // Lưu tài khoản vào file SQL (Chỉ là một ví dụ, cần có server để thực hiện)
  const sql = `INSERT INTO users (username, password) VALUES ('${username}', '${password}');`;
  console.log("Lưu vào SQL:", sql);

  // // Reset form đăng ký
}

function closeRegistrationWindow() {
  const registrationWindow = document.getElementById("register-web");
  registrationWindow.style.display = "none";
  document.getElementById("registerForm").reset();
}

function closeLoginWindow() {
  const loginWindow = document.getElementById("login-web");
  loginWindow.style.display = "none";
}
function closeChatBox() {
  const chatbox = document.getElementById("chat-container");
  chatbox.style.display = "none";
}
 

function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        console.log("Mở chat box");
        chatContainer.style.display = 'block';
    } else {
        console.log("Đóng chat box");
        chatContainer.style.display = 'none';
    }
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const chatBox = document.getElementById('chatBox');
    
    if (input.value.trim() !== "") {
        const message = document.createElement('div');
        message.textContent = input.value;
        chatBox.appendChild(message);
        input.value = ""; // Xóa input sau khi gửi
        chatBox.scrollTop = chatBox.scrollHeight; // Cuộn xuống tin nhắn mới
    } else {
        console.log("Tin nhắn rỗng không được gửi");
    }
     
}

  window.onload = function() {
  document.getElementById('sale-popup').style.display = 'flex';
}

// Đóng popup khi nhấn nút "X"
  document.getElementById('close-popup').addEventListener('click', function() {
  document.getElementById('sale-popup').style.display = 'none';

});
function closeForm() {
  const loginWindow = document.getElementById("login-web");
  const registrationWindow = document.getElementById("register-web");
  loginWindow.style.display = "none";
  registrationWindow.style.display = "none";
}


const images = [
  "https://noithattrevietnam.com/uploaded/2018/08/1-mau-nha-dep-noi-that-hien-dai-can-80m2%20%281%29.jpg",  // Hình 1
  "https://donggia.vn/wp-content/uploads/2020/08/thi-cong-noi-that-phong-khach-biet-thu-dep-2020.jpg",    // Hình 2
  "https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-2.jpg"     // Hình 3
];

let currentImageIndex = 0;

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateBanner();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateBanner();
}

function updateBanner() {
  document.getElementById('bannerImage').src = images[currentImageIndex];
}