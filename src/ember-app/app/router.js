import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proekt4-должность-l');
  this.route('i-i-s-proekt4-должность-e',
  { path: 'i-i-s-proekt4-должность-e/:id' });
  this.route('i-i-s-proekt4-должность-e.new',
  { path: 'i-i-s-proekt4-должность-e/new' });
  this.route('i-i-s-proekt4-защ-свойства-l');
  this.route('i-i-s-proekt4-защ-свойства-e',
  { path: 'i-i-s-proekt4-защ-свойства-e/:id' });
  this.route('i-i-s-proekt4-защ-свойства-e.new',
  { path: 'i-i-s-proekt4-защ-свойства-e/new' });
  this.route('i-i-s-proekt4-контрагенты-l');
  this.route('i-i-s-proekt4-контрагенты-e',
  { path: 'i-i-s-proekt4-контрагенты-e/:id' });
  this.route('i-i-s-proekt4-контрагенты-e.new',
  { path: 'i-i-s-proekt4-контрагенты-e/new' });
  this.route('i-i-s-proekt4-номенклатура-l');
  this.route('i-i-s-proekt4-номенклатура-e',
  { path: 'i-i-s-proekt4-номенклатура-e/:id' });
  this.route('i-i-s-proekt4-номенклатура-e.new',
  { path: 'i-i-s-proekt4-номенклатура-e/new' });
  this.route('i-i-s-proekt4-перемещение-l');
  this.route('i-i-s-proekt4-перемещение-e',
  { path: 'i-i-s-proekt4-перемещение-e/:id' });
  this.route('i-i-s-proekt4-перемещение-e.new',
  { path: 'i-i-s-proekt4-перемещение-e/new' });
  this.route('i-i-s-proekt4-подразделение-l');
  this.route('i-i-s-proekt4-подразделение-e',
  { path: 'i-i-s-proekt4-подразделение-e/:id' });
  this.route('i-i-s-proekt4-подразделение-e.new',
  { path: 'i-i-s-proekt4-подразделение-e/new' });
  this.route('i-i-s-proekt4-сотрудники-l');
  this.route('i-i-s-proekt4-сотрудники-e',
  { path: 'i-i-s-proekt4-сотрудники-e/:id' });
  this.route('i-i-s-proekt4-сотрудники-e.new',
  { path: 'i-i-s-proekt4-сотрудники-e/new' });
  this.route('i-i-s-proekt4-эко-класс-l');
  this.route('i-i-s-proekt4-эко-класс-e',
  { path: 'i-i-s-proekt4-эко-класс-e/:id' });
  this.route('i-i-s-proekt4-эко-класс-e.new',
  { path: 'i-i-s-proekt4-эко-класс-e/new' });
});

export default Router;
