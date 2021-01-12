class Bank {

    static getdetails() {
        var data = {
            jofin: { username: "jofin", password: "jo123", balance: 1000 },
            jenny: { username: "jenny", password: "jenny123", balance: 1000 },
            jerin: { username: "jerin", password: "jerin123", balance: 2000 }
        }
        return data;
    }
    static login() {
        let unname = document.querySelector("#uname").value;
        let pass = document.querySelector("#pass").value;
        let data = Bank.getdetails();
        if (unname in data) {
            let password = data[unname]["password"]
            if (password == pass) {
                swal("login!", "Login Successfull!", "success");
                setTimeout(() => window.location.href = "bankmodify.html", 3000);
            } else {
                swal("login!", "Login failed!", "error");
            }

        } else {
            alert("invalid username")
        }
    }

    static deposit() {
        let usname = document.querySelector("#uname").value
        let amount = Number(document.querySelector("#amt").value);
        let result = document.querySelector("#bal")
        let data = Bank.getdetails();
        if (usname in data) {
            //alert(usname)
            Number(data[usname]["balance"] += amount);
            let balan = Number(data[usname]["balance"]);
            result.textContent = "balance is" + balan;

        }
    }
    static withdraw() {
        let wuname = document.querySelector("#wuname").value
        let wamt = document.querySelector("#wamt").value
        let data = Bank.getdetails()
        if (wuname in data) {
            let balance = data["balance"]
            if (balance < wamt) {
                alert("not enough balance")
            } else {
                let balance = data[wuname]["balance"] -= wamt
                bal.textContent = "balance is" + balance;
            }
        }
    }
}