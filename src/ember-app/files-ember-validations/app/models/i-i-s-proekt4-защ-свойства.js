import {
  defineNamespace,
  defineProjections,
  Model as ЗащСвойстваMixin
} from '../mixins/regenerated/models/i-i-s-proekt4-защ-свойства';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗащСвойстваMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
