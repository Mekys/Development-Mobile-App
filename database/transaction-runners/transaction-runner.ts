import {QueryConstructor} from "../../EventService/src/repositories/query-constructors/query-constructor";

export interface TransactionRunner<T extends QueryConstructor> {
    run(queries: Array<T>): Promise<any[]>;
}