export class CiCdTableModel {
  constructor(public command: string, public time: Date, public logs: string, public status: string, public deployed: boolean) {}

}
