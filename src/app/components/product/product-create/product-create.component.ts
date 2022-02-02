import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  // MUDANÇA DE CLASSE DE UM DETERMINADO ATRIBUTO
  // propLegal = "qualquer";

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.showLog("teste");
  }

  // fazerAlgo(): void {
  //   console.log("Fazendo Algo!");
  // }
}
