import { Product } from "./product";

export class ProductResponse{
    friendlyMessage?:string;
    payload: Product[] = [];
    hasError?:string;
    errorMessages?:string;
    httpStatus?:string;
}

