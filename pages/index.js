import ProductCart from "@/Components/ProductCart/ProductCart";
import products from "../db.json";
import OffCanvasMenu from "@/Components/OffCanvasMenu/OffCanvasMenu";
import { useContext } from "react";
export default function Home() {

  return (
    <>
    <div className="section">

    <div className="container" >
        <h1>لپ تاپ(laptop)</h1>
        <div className="row" style={{ justifyContent: "center" }}>
          {products.laptops.slice(0, 4).map((laptop) => {
            return (
              <div className="col">
                <ProductCart key={laptop.id} {...laptop} />
              </div>
            );
          })}
        </div>


  
        <h1> دوربین(camera)</h1>
        <div className="row" style={{ justifyContent: "center" }}>
          {products.cameras.slice(0, 4).map((camera) => {
            return (
              <div className="col">
                <ProductCart key={camera.id} {...camera} />
              </div>
            );
          })}
        </div>


      </div>
    </div>

    </>
  );
}
