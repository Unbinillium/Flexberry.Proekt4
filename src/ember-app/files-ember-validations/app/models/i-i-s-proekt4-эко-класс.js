import {
  defineNamespace,
  defineProjections,
  Model as ЭкоКлассMixin
} from '../mixins/regenerated/models/i-i-s-proekt4-эко-класс';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЭкоКлассMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
