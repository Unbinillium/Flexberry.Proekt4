import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt4-контрагенты', 'Unit | Serializer | i-i-s-proekt4-контрагенты', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proekt4-контрагенты',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
