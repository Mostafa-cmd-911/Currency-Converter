function convertCurrency() {
    const amount = document.querySelector(".amount").value;
    const from = document.querySelector(".from").value;
    const to = document.querySelector(".to").value;
    const resultDiv = document.querySelector(".result");

    if (amount && from && to) {
        fetch(
            `https://v6.exchangerate-api.com/v6/7bd9764b89c977737d5acd44/latest/${from}`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const rate = data.conversion_rates[to];
                const result = (amount * rate).toFixed(2);
                resultDiv.innerHTML = `${amount} ${from} = ${result} ${to}`;
            })
            .catch((error) => {
                resultDiv.innerHTML = `Somthing Went Wrong ${error} `;
            });
    } else {
        result.innerHTML = "Please Fill All Fields";
    }
}
