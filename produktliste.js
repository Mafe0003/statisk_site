let listContainer = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())

  .then((data) => showList(data));

function showList(products) {
  console.log(products);

  let markup = "";

  products
    .map((product) => {
      markup += `<div class="produkt">
                <a href="produkt.html">
                    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="hvide sko">
                </a>
                <div>
                    <p class="overskrift">${product.productdisplayname}</p>
                    <p class="underoverskrift">${product.brandname}</p>
                    <p class="pris">DKK ${product.price}-</p>
                    <a class="read_more" href="produkt.html">Read more</a>
                </div>
            </div>`;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
