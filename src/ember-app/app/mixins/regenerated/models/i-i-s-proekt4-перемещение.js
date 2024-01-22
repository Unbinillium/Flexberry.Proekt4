import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  контрагент: DS.attr('string'),
  ответственный: DS.attr('string'),
  контрагенты: DS.belongsTo('i-i-s-proekt4-контрагенты', { inverse: null, async: false }),
  номенклатура: DS.belongsTo('i-i-s-proekt4-номенклатура', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-proekt4-сотрудники', { inverse: null, async: false }),
  готПродукция: DS.hasMany('i-i-s-proekt4-гот-продукция', { inverse: 'перемещение', async: false })
});

export let ValidationRules = {
  контрагент: {
    descriptionKey: 'models.i-i-s-proekt4-перемещение.validations.контрагент.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ответственный: {
    descriptionKey: 'models.i-i-s-proekt4-перемещение.validations.ответственный.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-proekt4-перемещение.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-proekt4-перемещение.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-proekt4-перемещение.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  готПродукция: {
    descriptionKey: 'models.i-i-s-proekt4-перемещение.validations.готПродукция.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПеремещениеE', 'i-i-s-proekt4-перемещение', {
    ответственный: attr('Ответственный', { index: 0 }),
    контрагент: attr('Контрагент', { index: 1 })
  });

  modelClass.defineProjection('ПеремещениеL', 'i-i-s-proekt4-перемещение', {
    ответственный: attr('Ответственный', { index: 0 }),
    контрагент: attr('Контрагент', { index: 1 })
  });
};
