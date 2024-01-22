import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колВо: DS.attr('string'),
  одобрено: DS.attr('boolean'),
  сумма: DS.attr('decimal'),
  товар: DS.attr('string'),
  цена: DS.attr('decimal'),
  перемещение: DS.belongsTo('i-i-s-proekt4-перемещение', { inverse: 'готПродукция', async: false })
});

export let ValidationRules = {
  колВо: {
    descriptionKey: 'models.i-i-s-proekt4-гот-продукция.validations.колВо.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  одобрено: {
    descriptionKey: 'models.i-i-s-proekt4-гот-продукция.validations.одобрено.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-proekt4-гот-продукция.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-proekt4-гот-продукция.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-proekt4-гот-продукция.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  перемещение: {
    descriptionKey: 'models.i-i-s-proekt4-гот-продукция.validations.перемещение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГотПродукцияE', 'i-i-s-proekt4-гот-продукция', {
    товар: attr('Товар', { index: 0 }),
    колВо: attr('Кол во', { index: 1 }),
    одобрено: attr('Одобрено', { index: 2 })
  });
};
