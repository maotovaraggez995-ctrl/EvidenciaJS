class CuentaBancaria {
  #saldo; // atributo privado

  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldo = saldoInicial;
  }

  // Getter
  obtenerSaldo() {
    return this.#saldo;
  }

  // Setter (depositar)
  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
      console.log(`Has depositado ${monto}. Nuevo saldo: ${this.#saldo}`);
    } else {
      console.log("El monto a depositar debe ser mayor a 0");
    }
  }

  // Nuevo metodo para retirar
  retirar(monto) {
    if (monto > 0 && monto <= this.#saldo) {
      this.#saldo -= monto;
      console.log(`Has retirado ${monto}. Nuevo saldo: ${this.#saldo}`);
    } else if (monto > this.#saldo) {
      console.log("Fondos insuficientes.");
    } else {
      console.log("El monto a retirar debe ser mayor a 0.");
    }
  }
}

const cuenta = new CuentaBancaria("Mauro", 2500000);

console.log(cuenta); // CuentaBancaria { titular: 'Mauro' }

cuenta.depositar(500000); 
cuenta.retirar(1000000);  

console.log("Saldo actual:", cuenta.obtenerSaldo()); // Saldo después de todo
console.log("Titular:", cuenta.titular);

// Esto da undefined porque es privado
console.log(cuenta.saldo); 
