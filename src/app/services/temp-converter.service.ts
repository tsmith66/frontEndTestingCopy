

export class TempConverterService {


  convertToC(tempInF: number) {
    return (5 / 9) * (tempInF - 32);
  }
}
