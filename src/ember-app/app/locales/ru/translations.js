import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProekt4ДолжностьLForm from './forms/i-i-s-proekt4-должность-l';
import IISProekt4ЗащСвойстваLForm from './forms/i-i-s-proekt4-защ-свойства-l';
import IISProekt4КонтрагентыLForm from './forms/i-i-s-proekt4-контрагенты-l';
import IISProekt4НоменклатураLForm from './forms/i-i-s-proekt4-номенклатура-l';
import IISProekt4ПеремещениеLForm from './forms/i-i-s-proekt4-перемещение-l';
import IISProekt4ПодразделениеLForm from './forms/i-i-s-proekt4-подразделение-l';
import IISProekt4СотрудникиLForm from './forms/i-i-s-proekt4-сотрудники-l';
import IISProekt4ЭкоКлассLForm from './forms/i-i-s-proekt4-эко-класс-l';
import IISProekt4ДолжностьEForm from './forms/i-i-s-proekt4-должность-e';
import IISProekt4ЗащСвойстваEForm from './forms/i-i-s-proekt4-защ-свойства-e';
import IISProekt4КонтрагентыEForm from './forms/i-i-s-proekt4-контрагенты-e';
import IISProekt4НоменклатураEForm from './forms/i-i-s-proekt4-номенклатура-e';
import IISProekt4ПеремещениеEForm from './forms/i-i-s-proekt4-перемещение-e';
import IISProekt4ПодразделениеEForm from './forms/i-i-s-proekt4-подразделение-e';
import IISProekt4СотрудникиEForm from './forms/i-i-s-proekt4-сотрудники-e';
import IISProekt4ЭкоКлассEForm from './forms/i-i-s-proekt4-эко-класс-e';
import IISProekt4ГотПродукцияModel from './models/i-i-s-proekt4-гот-продукция';
import IISProekt4ДолжностьModel from './models/i-i-s-proekt4-должность';
import IISProekt4ЗащСвойстваModel from './models/i-i-s-proekt4-защ-свойства';
import IISProekt4КонтрагентыModel from './models/i-i-s-proekt4-контрагенты';
import IISProekt4НоменклатураModel from './models/i-i-s-proekt4-номенклатура';
import IISProekt4ПеремещениеModel from './models/i-i-s-proekt4-перемещение';
import IISProekt4ПодразделениеModel from './models/i-i-s-proekt4-подразделение';
import IISProekt4СотрудникиModel from './models/i-i-s-proekt4-сотрудники';
import IISProekt4ЭкоКлассModel from './models/i-i-s-proekt4-эко-класс';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proekt4-гот-продукция': IISProekt4ГотПродукцияModel,
    'i-i-s-proekt4-должность': IISProekt4ДолжностьModel,
    'i-i-s-proekt4-защ-свойства': IISProekt4ЗащСвойстваModel,
    'i-i-s-proekt4-контрагенты': IISProekt4КонтрагентыModel,
    'i-i-s-proekt4-номенклатура': IISProekt4НоменклатураModel,
    'i-i-s-proekt4-перемещение': IISProekt4ПеремещениеModel,
    'i-i-s-proekt4-подразделение': IISProekt4ПодразделениеModel,
    'i-i-s-proekt4-сотрудники': IISProekt4СотрудникиModel,
    'i-i-s-proekt4-эко-класс': IISProekt4ЭкоКлассModel
  },

  'application-name': 'Proekt4',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proekt4',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proekt4',
          title: 'Proekt4'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'учет-материалов': {
          caption: 'Учет материалов',
          title: 'Учет материалов',
          'i-i-s-proekt4-подразделение-l': {
            caption: 'Подразделение',
            title: ''
          },
          'i-i-s-proekt4-перемещение-l': {
            caption: 'Перемещение',
            title: ''
          },
          'i-i-s-proekt4-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-proekt4-эко-класс-l': {
            caption: 'Эко класс',
            title: ''
          },
          'i-i-s-proekt4-защ-свойства-l': {
            caption: 'Защ свойства',
            title: ''
          },
          'i-i-s-proekt4-номенклатура-l': {
            caption: 'Номенклатура',
            title: ''
          },
          'i-i-s-proekt4-контрагенты-l': {
            caption: 'Контрагенты',
            title: ''
          },
          'i-i-s-proekt4-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-proekt4-защ-свойства-l': {
            caption: 'ЗащСвойстваL',
            title: 'Защ свойства'
          },
          'i-i-s-proekt4-подразделение-l': {
            caption: 'ПодразделениеL',
            title: 'Подразделение'
          },
          'i-i-s-proekt4-сотрудники-l': {
            caption: 'СотрудникиL',
            title: 'Сотрудники'
          },
          'i-i-s-proekt4-контрагенты-l': {
            caption: 'КонтрагентыL',
            title: 'Контрагенты'
          },
          'i-i-s-proekt4-номенклатура-l': {
            caption: 'НоменклатураL',
            title: 'Номенклатура'
          },
          'i-i-s-proekt4-эко-класс-l': {
            caption: 'ЭкоКлассL',
            title: 'Эко класс'
          },
          'i-i-s-proekt4-должность-l': {
            caption: 'ДолжностьL',
            title: 'Должность'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proekt4-должность-l': IISProekt4ДолжностьLForm,
    'i-i-s-proekt4-защ-свойства-l': IISProekt4ЗащСвойстваLForm,
    'i-i-s-proekt4-контрагенты-l': IISProekt4КонтрагентыLForm,
    'i-i-s-proekt4-номенклатура-l': IISProekt4НоменклатураLForm,
    'i-i-s-proekt4-перемещение-l': IISProekt4ПеремещениеLForm,
    'i-i-s-proekt4-подразделение-l': IISProekt4ПодразделениеLForm,
    'i-i-s-proekt4-сотрудники-l': IISProekt4СотрудникиLForm,
    'i-i-s-proekt4-эко-класс-l': IISProekt4ЭкоКлассLForm,
    'i-i-s-proekt4-должность-e': IISProekt4ДолжностьEForm,
    'i-i-s-proekt4-защ-свойства-e': IISProekt4ЗащСвойстваEForm,
    'i-i-s-proekt4-контрагенты-e': IISProekt4КонтрагентыEForm,
    'i-i-s-proekt4-номенклатура-e': IISProekt4НоменклатураEForm,
    'i-i-s-proekt4-перемещение-e': IISProekt4ПеремещениеEForm,
    'i-i-s-proekt4-подразделение-e': IISProekt4ПодразделениеEForm,
    'i-i-s-proekt4-сотрудники-e': IISProekt4СотрудникиEForm,
    'i-i-s-proekt4-эко-класс-e': IISProekt4ЭкоКлассEForm
  },

});

export default translations;
