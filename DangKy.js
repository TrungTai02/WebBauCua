function DangKy(e) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kiểm tra tính hợp lệ của tên đăng nhập và mật khẩu
    if (username.trim() === "" || password.trim() === "") {
        alert("Tên đăng nhập và mật khẩu không được để trống");
        return;
    }

    // Kiểm tra tính duy nhất của tên đăng nhập
    var existingUser = localStorage.getItem(username);
    if (existingUser !== null) {
        alert("Tên đăng nhập đã được sử dụng, vui lòng chọn tên đăng nhập khác");
        return;
    }

    var user = {
        username: username,
        password: password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);

    alert("Đăng ký thành công");
    window.location.href = "login.html";
}
function login(e) {
    //form đăng nhập
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var pass = localStorage.getItem(password);
    var data = JSON.parse(user);
    if (username.trim() === "" || password.trim() === "") {
        alert("Tên đăng nhập và mật khẩu không được để trống");
        return;
    }
    else if (username == data.username && password == data.password) {
        alert("dang nhap thanh cong");
        window.location.href = "game.html";
    } else {
        alert("dang nhap that bai");
    }
}


