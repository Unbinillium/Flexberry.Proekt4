import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  наименование: DS.attr('string'),
  защСвойства: DS.belongsTo('i-i-s-proekt4-защ-свойства', { inverse: null, async: false }),
  экоКласс: DS.belongsTo('i-i-s-proekt4-эко-класс', { inverse: null, async: false })
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-proekt4-номенклатура.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-proekt4-номенклатура.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  защСвойства: {
    descriptionKey: 'models.i-i-s-proekt4-номенклатура.validations.защСвойства.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  экоКласс: {
    descriptionKey: 'models.i-i-s-proekt4-номенклатура.validations.экоКласс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НоменклатураE', 'i-i-s-proekt4-номенклатура', {
    наименование: attr('Наименование', { index: 0 })
  });

  modelClass.defineProjection('НоменклатураL', 'i-i-s-proekt4-номенклатура', {
    наименование: attr('Наименование', { index: 0 })
  });
};
