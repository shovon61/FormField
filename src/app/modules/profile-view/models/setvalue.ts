import { FormGroup } from '@angular/forms';

export function SetFormGroupValues(formName: FormGroup, fieldName: string[], fieldData: any[]) {
  for (var i = 0; i < fieldName.length; i++) {
    formName.get(fieldName[i])?.setValue(fieldData[i]);
  }
}
