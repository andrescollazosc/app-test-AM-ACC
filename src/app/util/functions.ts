import { IconClassEnum } from '../enum/icon-class.enum';
import { ButtonModel } from '../models/button.model';

export class Functions {

  public static configButton(iconEnum: IconClassEnum, buttonText: string): ButtonModel {
    return {
      buttonClass: iconEnum,
      buttonText: buttonText,
    };
  }

}
