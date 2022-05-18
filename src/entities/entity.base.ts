export abstract class EntityBase {
    public Id: number = 0;

    public NetUid: string = '00000000-0000-0000-0000-000000000000';
    
    public Created: Date = new Date();

    public Updated: Date = new Date();

    public Deleted: boolean = false;
}