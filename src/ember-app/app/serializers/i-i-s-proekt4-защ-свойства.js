import { Serializer as ЗащСвойстваSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt4-защ-свойства';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗащСвойстваSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
