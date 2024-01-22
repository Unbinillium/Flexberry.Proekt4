import {
  defineNamespace,
  defineProjections,
  Model as ГотПродукцияMixin
} from '../mixins/regenerated/models/i-i-s-proekt4-гот-продукция';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГотПродукцияMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
