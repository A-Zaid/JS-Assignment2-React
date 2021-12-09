import { Guid } from "guid-typescript";

export default interface Transaction {
    id: string;
    type: string;
    amount: string;
}
