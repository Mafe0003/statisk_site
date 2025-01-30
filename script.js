let productId = 1571;
let productContainer = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())

  .then((data) => {
    productContainer.innerHTML = `
    <div class="grid_1-1-1">
            <div>
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="hvide sko">
            </div>
            <div class="grid_1-1">
                <div class="description">
                    <h2>Product information</h2>
                    <h3>Model name</h3>
                    <p>${data.productdisplayname}</p>
                    <h3>Color</h3>
                    <p>${data.basecolour}</p>
                    <h3>Inventory number</h3>
                    <p>${data.relid}</p>
                    <h2 class="Kalenji">${data.brandname}</h2>
                    <p>Kalenji, creating experiences for todays's athletes</p>
                </div>

                <div class="basket">
                    <h2>${data.productdisplayname}</h2>
                    <p>${data.brandname}</p>
                    <div class="grid_3-1">
                        <p>Choose a size </p>
                        <p class="knap1">S ↓</p>
                    </div>
                    <p class="knap2">Add to basket</p>
                </div>
            </div>
        </div>`;
  });
