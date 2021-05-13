class Employee {
    name;
    age;
    address;
    salary;
    totalWorkingHours;
    constructor(name, age, address, salary) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.salary = salary;
    }
    inputWokingHours() {
        this.totalWorkingHours = +prompt("Hãy nhập số giờ làm việc")
    }
    printInfo() {
        document.write(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}, Số giờ làm việc:${this.totalWorkingHours}`);
    }
    calculatorBonus() {
        let bonus = 0;
        let hours = this.totalWorkingHours;
        if (hours >= 200) {
            bonus = this.salary * 0.2;
        } else {
            if (hours >= 100) {
                bonus = this.salary * 0.1
            }
        }
        document.write(`Tiền thưởng là :${bonus} <br>`)
    }
}


let long = new Employee("Long", 30, "177 Điện Biên Phủ", 5000000);
let buu = new Employee("Buu", 20, "109 Kim Long", 4500000);
let nam = new Employee("Nam", 25, "H15 Bầu Vá", 3000000);

long.inputWokingHours();
long.printInfo();
long.calculatorBonus();
buu.inputWokingHours();
buu.printInfo();
buu.calculatorBonus();
nam.inputWokingHours();
nam.printInfo();
nam.calculatorBonus();