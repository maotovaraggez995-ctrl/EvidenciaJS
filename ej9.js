/* Tablas de multiplicar del 5 al 9*/

for (let tabla = 5; tabla <= 9; tabla++) {
    console.log(`\nTabla del ${tabla}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${tabla} x ${i} = ${tabla * i}`);
    }
}
