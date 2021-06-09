import { TempConverterService } from "./temp-converter.service";

describe('temp converter service', () => {

  let service: TempConverterService;
  beforeEach(() => {
    service = new TempConverterService();
  });

  it('can convert from 212', () => {
    expect(service.convertToC(212)).toBe(100);
  });

  it('can convert from 32', () => {
    expect(service.convertToC(32)).toBe(0);
  });
  // etc. etc.
});
