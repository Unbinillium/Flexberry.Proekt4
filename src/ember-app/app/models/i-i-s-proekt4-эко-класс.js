import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЭкоКлассMixin
} from '../mixins/regenerated/models/i-i-s-proekt4-эко-класс';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЭкоКлассMixin, Validations, {
});

defineProjections(Model);

export default Model;
