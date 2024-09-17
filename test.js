// OOP - Encapsulation
// Public fields: Trường công khai, trường công cộng
// Private fields: Trường riêng tư
// Public method: Phương thức công khai
// Private method: Phương thức riêng tư 
// Sử dụng dấu #
class Wallet {
	#pin;
	#balance;
	#isPinEntered = false;
	constructor(bankName, pin) {
		this.bankName = bankName;
		this.#pin = pin;
		this.#balance = 0;
	}

	deposit(value) { // Nạp tiền vào tk
		if (!this.#isPinEntered) {
			console.log("Sai mã pin!");
			return;
		}
		this.#balance += value;
	}

	// Private Method
	#validatePin(pin) {
		return this.#pin === pin;
	}

	enterPin(pin) {
		if (this.#validatePin(pin)) {
			this.#isPinEntered = true;
		} else {
			console.log("Invalid Pin");
		}
	}

	withdraw(value) {
		if (!this.#isPinEntered) {
			console.log("Sai mã pin!");
			return;
		} else {
			if (value > this.#balance) {
				console.log("Số tiền không đủ!");
			} else {
				this.#balance -= value;
				console.log("Rút thành công!")
			}
		}
	}

	// Getter
	get balance() {
		if (!this.#isPinEntered) {
			console.log("Kiểm tra lại mã pin!");
			return;
		} else {
			return this.#balance;
		}
	}
}

const wallet = new Wallet("MB Bank", "1234");
wallet.enterPin("1234");
wallet.deposit(5000);
wallet.withdraw(2000);
console.log(wallet.balance);