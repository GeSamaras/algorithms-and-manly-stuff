function sumModulo() {
    let totalModulo = 0; // Initialize the variable to store the total modulo sum

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            let sum = i + j;
            let result = sum % 10;
            totalModulo += result; // Accumulate the modulo result
            console.log(`i: ${i}, j: ${j}, Modulo sum: ${result}`);
        }
    }

    return totalModulo; // Return the total modulo sum
}

// Call the function to execute the loops and get the total modulo sum
let total = sumModulo();
console.log("Total modulo sum:", total);
