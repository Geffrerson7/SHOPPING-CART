import products from "../../services/products";
import { type Product } from "../../interfaces/products";
import { useEffect, useState } from "react";
import { Header } from "../../components";
import Swal from "sweetalert2";

export default function Home() {
  const [nItem, setNum] = useState(
    Number(JSON.parse(localStorage.getItem("n_item") ?? "[0]"))
  );

  const addProducts = (product: Product) => {
    const productsCart = JSON.parse(
      localStorage.getItem("products_cart") || "[]"
    );

    product.product_code = `${product.id}_${new Date().getTime()}`;
    productsCart.push(product);
    setNum(nItem + 1);
    localStorage.setItem("products_cart", JSON.stringify(productsCart));

    Swal.fire({
      position: "center",
      icon: "success",
      title: "¡Añadido correctamente!",
      showConfirmButton: false,
      background: "#242424",
      color: "#fff",
      timer: 1250,
    });
  };

  useEffect(() => {
    localStorage.setItem("n_item", JSON.stringify(nItem));
  }, [nItem]);

  return (
    <>
      <Header />
      <div className="container px-4 mb-5">
        <h1 className="mt-3 text-center text-light">Lista de Cursos</h1>
        <div className="row gap-4 mt-5 justify-content-center">
          {products.map((product: Product) => (
            <div
              className="col-md-4 card text-center"
              key={product.product_code}
              style={{
                width: "21rem",
              }}
            >
              <img
                className="card-img-top mt-4"
                style={{
                  width: "90%",
                  margin: "auto",
                  border: "1px solid #ddd",
                  boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)",
                }}
                src={product.image}
                alt=""
              />
              <div className="card-body">
                <h4>{product.name}</h4>
                <p>{product.type}</p>
                <p style={{ textAlign: "justify" }}>{product.description}</p>
                <p>$ {product.price}</p>
                <div className="d-grid">
                  <button
                    className="btn btn-primary"
                    onClick={() => addProducts(product)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
