import { Serializer as ЭкоКлассSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt4-эко-класс';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЭкоКлассSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
