import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.учет-материалов.caption'),
          title: i18n.t('forms.application.sitemap.учет-материалов.title'),
          children: [{
            link: 'i-i-s-proekt4-подразделение-l',
            caption: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proekt4-подразделение-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proekt4-подразделение-l.title'),
            children: null
          }, {
            link: 'i-i-s-proekt4-перемещение-l',
            caption: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proekt4-перемещение-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proekt4-перемещение-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-proekt4-должность-l',
            caption: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proekt4-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proekt4-должность-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-proekt4-эко-класс-l',
            caption: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proekt4-эко-класс-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proekt4-эко-класс-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-proekt4-защ-свойства-l',
            caption: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proekt4-защ-свойства-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proekt4-защ-свойства-l.title'),
            children: null
          }, {
            link: 'i-i-s-proekt4-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proekt4-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proekt4-номенклатура-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-proekt4-контрагенты-l',
            caption: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proekt4-контрагенты-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proekt4-контрагенты-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-proekt4-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proekt4-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proekt4-сотрудники-l.title'),
            icon: 'tasks',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-proekt4-защ-свойства-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-proekt4-защ-свойства-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-proekt4-защ-свойства-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-proekt4-подразделение-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-proekt4-подразделение-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-proekt4-подразделение-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-proekt4-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-proekt4-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-proekt4-сотрудники-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-proekt4-контрагенты-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-proekt4-контрагенты-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-proekt4-контрагенты-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-proekt4-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-proekt4-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-proekt4-номенклатура-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-proekt4-эко-класс-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-proekt4-эко-класс-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-proekt4-эко-класс-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-proekt4-должность-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-proekt4-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-proekt4-должность-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})