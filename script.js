const summaryItems = document.getElementById("summary-items");
      const summaryTotal = document.getElementById("summary-total");
      const summaryButton = document.getElementById("summary-button");
      let totalQuant;

      function updateSummary() {
        
        const products = document.getElementsByClassName("product");

        let items = 0;
        let total = 0;

        for (let product of products) {
          let name = product.dataset.name;
          let price = parseInt(product.dataset.price);
          let quantity = parseInt(product.querySelector("input").value);

          items += quantity;
          total += price * quantity;
        }
        totalQuant = items;
        if(totalQuant > 8){
            alert("The total number of items in the custom pack should not exceed 8")
            return;
        }
        summaryItems.innerHTML = "";

        for (let product of products) {
          let name = product.dataset.name;
          let quantity = parseInt(product.querySelector("input").value);

          if (quantity > 0) {
            let summaryItem = document.createElement("li");

            summaryItem.innerHTML = `<span>${name}</span> x ${quantity}`;

            summaryItems.appendChild(summaryItem);
          }
        }

        summaryTotal.innerHTML = `Total: ₹${total}`;

        if (items == 8) {
          summaryButton.disabled = false;
        } else {
          summaryButton.disabled = true;
        }
      }

      function placeOrder() {
        alert("Your order has been placed successfully!");
      }