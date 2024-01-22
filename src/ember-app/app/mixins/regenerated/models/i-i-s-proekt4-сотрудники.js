import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  оклад: DS.attr('decimal'),
  отчество: DS.attr('string'),
  фамилия: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-proekt4-должность', { inverse: null, async: false }),
  подразделение: DS.belongsTo('i-i-s-proekt4-подразделение', { inverse: null, async: false })
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-proekt4-сотрудники.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оклад: {
    descriptionKey: 'models.i-i-s-proekt4-сотрудники.validations.оклад.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-proekt4-сотрудники.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-proekt4-сотрудники.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-proekt4-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  подразделение: {
    descriptionKey: 'models.i-i-s-proekt4-сотрудники.validations.подразделение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-proekt4-сотрудники', {
    оклад: attr('Оклад', { index: 0 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-proekt4-сотрудники', {
    оклад: attr('Оклад', { index: 0 })
  });
};
