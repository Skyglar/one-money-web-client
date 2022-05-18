import { Currency } from "./currency";
import { EntityBase } from "./entity.base";
import { AccountType } from "./enums/account.type";

export class Account extends EntityBase {
    public Name: string = '';

    public Amount: number = 0;

    public CurrencyId: number = 0;

    public AccountType: AccountType = AccountType.Account;

    public Currency: Currency = new Currency();
}