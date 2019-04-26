export class TableModel {
  public id: number;
  public date: string;
  public logs: string;
  public status: string;

  constructor(id: number, date: string, logs: string, status: string) {
    this.id = id;
    this.date = date;
    this.logs = logs;
    this.status = status;
  }
}
