import { TempConverterService } from "src/app/services/temp-converter.service";
import { TempConverterComponent } from "./temp-converter.component";

describe('shallow test - pretty dumb', () => {

  it('can convert...', () => {
    const component = new TempConverterComponent(new TempConverterService());

    component.convertToC(212);

    expect(component.convertedTemp).toBe(100);
  });

});
