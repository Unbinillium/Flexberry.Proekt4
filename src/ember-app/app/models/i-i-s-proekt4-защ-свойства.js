import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗащСвойстваMixin
} from '../mixins/regenerated/models/i-i-s-proekt4-защ-свойства';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗащСвойстваMixin, Validations, {
});

defineProjections(Model);

export default Model;
