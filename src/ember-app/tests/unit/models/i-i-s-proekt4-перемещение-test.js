import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt4-перемещение', 'Unit | Model | i-i-s-proekt4-перемещение', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proekt4-гот-продукция',
    'model:i-i-s-proekt4-должность',
    'model:i-i-s-proekt4-защ-свойства',
    'model:i-i-s-proekt4-контрагенты',
    'model:i-i-s-proekt4-номенклатура',
    'model:i-i-s-proekt4-перемещение',
    'model:i-i-s-proekt4-подразделение',
    'model:i-i-s-proekt4-сотрудники',
    'model:i-i-s-proekt4-эко-класс',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
