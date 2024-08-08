let totalSales = 0;

function login() {
    const username =  document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple user validation (for demo purposes)
    if ((username === 'admin' && password === 'admin123') || (username === 'sales' && password === 'sales123')) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('sales-section').style.display = 'block';
    } else {
        alert('Invalid username or password');
    }
}

function registerSale() {
    const customerName = document.getElementById('customer-name').value;
    const customerPhone = document.getElementById('customer-phone').value;
    const saleDate = document.getElementById('sale-date').value;
    const flowerImage = document.getElementById('flower-image').files[0];
    const saleAmount = parseFloat(document.getElementById('sale-amount').value);

    if (customerName && customerPhone && saleDate && flowerImage && saleAmount) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const salesTable = document.getElementById('sales-table').getElementsByTagName('tbody')[0];
            const newRow = salesTable.insertRow();
            newRow.innerHTML = `
                <td>${customerName}</td>
                <td>${customerPhone}</td>
                <td>${saleDate}</td>
                <td><img src="${e.target.result}" alt="Flower" style="width:50px;height:50px;"></td>
                <td>${saleAmount}</td>
            `;

            totalSales += saleAmount;
            document.getElementById('total-sales').textContent = totalSales.toFixed(2);
        }
        reader.readAsDataURL(flowerImage);

        // Clear the form fields after registering the sale
        document.getElementById('customer-name').value = '';
        document.getElementById('customer-phone').value = '';
        document.getElementById('sale-date').value = '';
        document.getElementById('flower-image').value = '';
        document.getElementById('sale-amount').value = '';
    } else {
        alert('Please fill in all the details');
    }
}

// Show the login section initially
document.getElementById('login-section').style.display = 'block';