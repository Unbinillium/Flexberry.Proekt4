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
    /// Сотрудники.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудники CustomAttributes)

    // *** End programmer edit section *** (Сотрудники CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникиE", new string[] {
            "Оклад as \'Оклад\'"})]
    [View("СотрудникиL", new string[] {
            "Оклад as \'Оклад\'"})]
    public class Сотрудники : ICSSoft.STORMNET.DataObject
    {
        
        private string fФамилия;
        
        private string fИмя;
        
        private string fОтчество;
        
        private double fОклад;
        
        private IIS.Proekt4.Должность fДолжность;
        
        private IIS.Proekt4.Подразделение fПодразделение;
        
        // *** Start programmer edit section *** (Сотрудники CustomMembers)

        // *** End programmer edit section *** (Сотрудники CustomMembers)

        
        /// <summary>
        /// Имя.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Имя CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Имя CustomAttributes)
        [StrLen(255)]
        public virtual string Имя
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Имя Get start)

                // *** End programmer edit section *** (Сотрудники.Имя Get start)
                string result = this.fИмя;
                // *** Start programmer edit section *** (Сотрудники.Имя Get end)

                // *** End programmer edit section *** (Сотрудники.Имя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Имя Set start)

                // *** End programmer edit section *** (Сотрудники.Имя Set start)
                this.fИмя = value;
                // *** Start programmer edit section *** (Сотрудники.Имя Set end)

                // *** End programmer edit section *** (Сотрудники.Имя Set end)
            }
        }
        
        /// <summary>
        /// Оклад.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Оклад CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Оклад CustomAttributes)
        public virtual double Оклад
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Оклад Get start)

                // *** End programmer edit section *** (Сотрудники.Оклад Get start)
                double result = this.fОклад;
                // *** Start programmer edit section *** (Сотрудники.Оклад Get end)

                // *** End programmer edit section *** (Сотрудники.Оклад Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Оклад Set start)

                // *** End programmer edit section *** (Сотрудники.Оклад Set start)
                this.fОклад = value;
                // *** Start programmer edit section *** (Сотрудники.Оклад Set end)

                // *** End programmer edit section *** (Сотрудники.Оклад Set end)
            }
        }
        
        /// <summary>
        /// Отчество.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Отчество CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Отчество CustomAttributes)
        [StrLen(255)]
        public virtual string Отчество
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Отчество Get start)

                // *** End programmer edit section *** (Сотрудники.Отчество Get start)
                string result = this.fОтчество;
                // *** Start programmer edit section *** (Сотрудники.Отчество Get end)

                // *** End programmer edit section *** (Сотрудники.Отчество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Отчество Set start)

                // *** End programmer edit section *** (Сотрудники.Отчество Set start)
                this.fОтчество = value;
                // *** Start programmer edit section *** (Сотрудники.Отчество Set end)

                // *** End programmer edit section *** (Сотрудники.Отчество Set end)
            }
        }
        
        /// <summary>
        /// Фамилия.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Фамилия CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Фамилия CustomAttributes)
        [StrLen(255)]
        public virtual string Фамилия
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Фамилия Get start)

                // *** End programmer edit section *** (Сотрудники.Фамилия Get start)
                string result = this.fФамилия;
                // *** Start programmer edit section *** (Сотрудники.Фамилия Get end)

                // *** End programmer edit section *** (Сотрудники.Фамилия Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Фамилия Set start)

                // *** End programmer edit section *** (Сотрудники.Фамилия Set start)
                this.fФамилия = value;
                // *** Start programmer edit section *** (Сотрудники.Фамилия Set end)

                // *** End programmer edit section *** (Сотрудники.Фамилия Set end)
            }
        }
        
        /// <summary>
        /// Сотрудники.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Должность CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Должность CustomAttributes)
        [PropertyStorage(new string[] {
                "Должность"})]
        [NotNull()]
        public virtual IIS.Proekt4.Должность Должность
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Должность Get start)

                // *** End programmer edit section *** (Сотрудники.Должность Get start)
                IIS.Proekt4.Должность result = this.fДолжность;
                // *** Start programmer edit section *** (Сотрудники.Должность Get end)

                // *** End programmer edit section *** (Сотрудники.Должность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Должность Set start)

                // *** End programmer edit section *** (Сотрудники.Должность Set start)
                this.fДолжность = value;
                // *** Start programmer edit section *** (Сотрудники.Должность Set end)

                // *** End programmer edit section *** (Сотрудники.Должность Set end)
            }
        }
        
        /// <summary>
        /// Сотрудники.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Подразделение CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Подразделение CustomAttributes)
        [PropertyStorage(new string[] {
                "Подразделение"})]
        [NotNull()]
        public virtual IIS.Proekt4.Подразделение Подразделение
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Подразделение Get start)

                // *** End programmer edit section *** (Сотрудники.Подразделение Get start)
                IIS.Proekt4.Подразделение result = this.fПодразделение;
                // *** Start programmer edit section *** (Сотрудники.Подразделение Get end)

                // *** End programmer edit section *** (Сотрудники.Подразделение Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Подразделение Set start)

                // *** End programmer edit section *** (Сотрудники.Подразделение Set start)
                this.fПодразделение = value;
                // *** Start programmer edit section *** (Сотрудники.Подразделение Set end)

                // *** End programmer edit section *** (Сотрудники.Подразделение Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиE", typeof(IIS.Proekt4.Сотрудники));
                }
            }
            
            /// <summary>
            /// "СотрудникиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиL", typeof(IIS.Proekt4.Сотрудники));
                }
            }
        }
    }
}
