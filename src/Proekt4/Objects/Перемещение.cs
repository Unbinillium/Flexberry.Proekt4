﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proekt4
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Перемещение.
    /// </summary>
    // *** Start programmer edit section *** (Перемещение CustomAttributes)

    // *** End programmer edit section *** (Перемещение CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПеремещениеE", new string[] {
            "Ответственный as \'Ответственный\'",
            "Контрагент as \'Контрагент\'"})]
    [View("ПеремещениеL", new string[] {
            "Ответственный as \'Ответственный\'",
            "Контрагент as \'Контрагент\'"})]
    public class Перемещение : ICSSoft.STORMNET.DataObject
    {
        
        private string fОтветственный;
        
        private string fКонтрагент;
        
        private IIS.Proekt4.Контрагенты fКонтрагенты;
        
        private IIS.Proekt4.Сотрудники fСотрудники;
        
        private IIS.Proekt4.Номенклатура fНоменклатура;
        
        private IIS.Proekt4.DetailArrayOfГотПродукция fГотПродукция;
        
        // *** Start programmer edit section *** (Перемещение CustomMembers)

        // *** End programmer edit section *** (Перемещение CustomMembers)

        
        /// <summary>
        /// Контрагент.
        /// </summary>
        // *** Start programmer edit section *** (Перемещение.Контрагент CustomAttributes)

        // *** End programmer edit section *** (Перемещение.Контрагент CustomAttributes)
        [StrLen(255)]
        public virtual string Контрагент
        {
            get
            {
                // *** Start programmer edit section *** (Перемещение.Контрагент Get start)

                // *** End programmer edit section *** (Перемещение.Контрагент Get start)
                string result = this.fКонтрагент;
                // *** Start programmer edit section *** (Перемещение.Контрагент Get end)

                // *** End programmer edit section *** (Перемещение.Контрагент Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Перемещение.Контрагент Set start)

                // *** End programmer edit section *** (Перемещение.Контрагент Set start)
                this.fКонтрагент = value;
                // *** Start programmer edit section *** (Перемещение.Контрагент Set end)

                // *** End programmer edit section *** (Перемещение.Контрагент Set end)
            }
        }
        
        /// <summary>
        /// Ответственный.
        /// </summary>
        // *** Start programmer edit section *** (Перемещение.Ответственный CustomAttributes)

        // *** End programmer edit section *** (Перемещение.Ответственный CustomAttributes)
        [StrLen(255)]
        public virtual string Ответственный
        {
            get
            {
                // *** Start programmer edit section *** (Перемещение.Ответственный Get start)

                // *** End programmer edit section *** (Перемещение.Ответственный Get start)
                string result = this.fОтветственный;
                // *** Start programmer edit section *** (Перемещение.Ответственный Get end)

                // *** End programmer edit section *** (Перемещение.Ответственный Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Перемещение.Ответственный Set start)

                // *** End programmer edit section *** (Перемещение.Ответственный Set start)
                this.fОтветственный = value;
                // *** Start programmer edit section *** (Перемещение.Ответственный Set end)

                // *** End programmer edit section *** (Перемещение.Ответственный Set end)
            }
        }
        
        /// <summary>
        /// Перемещение.
        /// </summary>
        // *** Start programmer edit section *** (Перемещение.Контрагенты CustomAttributes)

        // *** End programmer edit section *** (Перемещение.Контрагенты CustomAttributes)
        [PropertyStorage(new string[] {
                "Контрагенты"})]
        [NotNull()]
        public virtual IIS.Proekt4.Контрагенты Контрагенты
        {
            get
            {
                // *** Start programmer edit section *** (Перемещение.Контрагенты Get start)

                // *** End programmer edit section *** (Перемещение.Контрагенты Get start)
                IIS.Proekt4.Контрагенты result = this.fКонтрагенты;
                // *** Start programmer edit section *** (Перемещение.Контрагенты Get end)

                // *** End programmer edit section *** (Перемещение.Контрагенты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Перемещение.Контрагенты Set start)

                // *** End programmer edit section *** (Перемещение.Контрагенты Set start)
                this.fКонтрагенты = value;
                // *** Start programmer edit section *** (Перемещение.Контрагенты Set end)

                // *** End programmer edit section *** (Перемещение.Контрагенты Set end)
            }
        }
        
        /// <summary>
        /// Перемещение.
        /// </summary>
        // *** Start programmer edit section *** (Перемещение.Номенклатура CustomAttributes)

        // *** End programmer edit section *** (Перемещение.Номенклатура CustomAttributes)
        [PropertyStorage(new string[] {
                "Номенклатура"})]
        [NotNull()]
        public virtual IIS.Proekt4.Номенклатура Номенклатура
        {
            get
            {
                // *** Start programmer edit section *** (Перемещение.Номенклатура Get start)

                // *** End programmer edit section *** (Перемещение.Номенклатура Get start)
                IIS.Proekt4.Номенклатура result = this.fНоменклатура;
                // *** Start programmer edit section *** (Перемещение.Номенклатура Get end)

                // *** End programmer edit section *** (Перемещение.Номенклатура Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Перемещение.Номенклатура Set start)

                // *** End programmer edit section *** (Перемещение.Номенклатура Set start)
                this.fНоменклатура = value;
                // *** Start programmer edit section *** (Перемещение.Номенклатура Set end)

                // *** End programmer edit section *** (Перемещение.Номенклатура Set end)
            }
        }
        
        /// <summary>
        /// Перемещение.
        /// </summary>
        // *** Start programmer edit section *** (Перемещение.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (Перемещение.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.Proekt4.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (Перемещение.Сотрудники Get start)

                // *** End programmer edit section *** (Перемещение.Сотрудники Get start)
                IIS.Proekt4.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (Перемещение.Сотрудники Get end)

                // *** End programmer edit section *** (Перемещение.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Перемещение.Сотрудники Set start)

                // *** End programmer edit section *** (Перемещение.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (Перемещение.Сотрудники Set end)

                // *** End programmer edit section *** (Перемещение.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Перемещение.
        /// </summary>
        // *** Start programmer edit section *** (Перемещение.ГотПродукция CustomAttributes)

        // *** End programmer edit section *** (Перемещение.ГотПродукция CustomAttributes)
        public virtual IIS.Proekt4.DetailArrayOfГотПродукция ГотПродукция
        {
            get
            {
                // *** Start programmer edit section *** (Перемещение.ГотПродукция Get start)

                // *** End programmer edit section *** (Перемещение.ГотПродукция Get start)
                if ((this.fГотПродукция == null))
                {
                    this.fГотПродукция = new IIS.Proekt4.DetailArrayOfГотПродукция(this);
                }
                IIS.Proekt4.DetailArrayOfГотПродукция result = this.fГотПродукция;
                // *** Start programmer edit section *** (Перемещение.ГотПродукция Get end)

                // *** End programmer edit section *** (Перемещение.ГотПродукция Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Перемещение.ГотПродукция Set start)

                // *** End programmer edit section *** (Перемещение.ГотПродукция Set start)
                this.fГотПродукция = value;
                // *** Start programmer edit section *** (Перемещение.ГотПродукция Set end)

                // *** End programmer edit section *** (Перемещение.ГотПродукция Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПеремещениеE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПеремещениеE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПеремещениеE", typeof(IIS.Proekt4.Перемещение));
                }
            }
            
            /// <summary>
            /// "ПеремещениеL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПеремещениеL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПеремещениеL", typeof(IIS.Proekt4.Перемещение));
                }
            }
        }
    }
}
