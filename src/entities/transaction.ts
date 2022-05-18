import { Account } from "./account";
import { Category } from "./category";
import { EntityBase } from "./entity.base";
import { TransactionType } from "./enums/transaction.type";

export class Transaction extends EntityBase {
    public Amount: number = 0;

    public Comment: string = '';

    public AccountId: number = 0;

    public CategoryId: number = 0;

    public TransactionType: TransactionType = TransactionType.Expense;

    public Account: Account = new Account();

    public Category: Category = new Category();
}