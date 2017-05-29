const colors = require('colors');

export default class Message {
  private fileName: string;
  private line: number;
  private column: number;

  constructor(fileName: string, line: number, column: number) {
    this.fileName = fileName;
    this.line = line;
    this.column = column;
  }

  public getFileName(): string {
    return colors.bold.underline(this.fileName);
  }

  public output(msg: string) {
    const pluginName: string = '[postcss-console]';
    const where: string = `(${this.line},${this.column})`;
    return `${colors.gray(pluginName)} ${msg} ${colors.gray(where)}`;
  }
}
