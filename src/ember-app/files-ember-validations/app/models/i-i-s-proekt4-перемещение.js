import {
  defineNamespace,
  defineProjections,
  Model as ПеремещениеMixin
} from '../mixins/regenerated/models/i-i-s-proekt4-перемещение';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПеремещениеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
