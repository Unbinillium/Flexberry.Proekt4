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
    /// Гот продукция.
    /// </summary>
    // *** Start programmer edit section *** (ГотПродукция CustomAttributes)

    // *** End programmer edit section *** (ГотПродукция CustomAttributes)
    [AutoAltered()]
    [Caption("Гот продукция")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ГотПродукцияE", new string[] {
            "Товар as \'Товар\'",
            "КолВо as \'Кол во\'",
            "Одобрено as \'Одобрено\'"})]
    public class ГотПродукция : ICSSoft.STORMNET.DataObject
    {
        
        private string fТовар;
        
        private string fКолВо;
        
        private double fЦена;
        
        private double fСумма;
        
        private bool fОдобрено;
        
        private IIS.Proekt4.Перемещение fПеремещение;
        
        // *** Start programmer edit section *** (ГотПродукция CustomMembers)

        // *** End programmer edit section *** (ГотПродукция CustomMembers)

        
        /// <summary>
        /// КолВо.
        /// </summary>
        // *** Start programmer edit section *** (ГотПродукция.КолВо CustomAttributes)

        // *** End programmer edit section *** (ГотПродукция.КолВо CustomAttributes)
        [StrLen(255)]
        public virtual string КолВо
        {
            get
            {
                // *** Start programmer edit section *** (ГотПродукция.КолВо Get start)

                // *** End programmer edit section *** (ГотПродукция.КолВо Get start)
                string result = this.fКолВо;
                // *** Start programmer edit section *** (ГотПродукция.КолВо Get end)

                // *** End programmer edit section *** (ГотПродукция.КолВо Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ГотПродукция.КолВо Set start)

                // *** End programmer edit section *** (ГотПродукция.КолВо Set start)
                this.fКолВо = value;
                // *** Start programmer edit section *** (ГотПродукция.КолВо Set end)

                // *** End programmer edit section *** (ГотПродукция.КолВо Set end)
            }
        }
        
        /// <summary>
        /// Одобрено.
        /// </summary>
        // *** Start programmer edit section *** (ГотПродукция.Одобрено CustomAttributes)

        // *** End programmer edit section *** (ГотПродукция.Одобрено CustomAttributes)
        public virtual bool Одобрено
        {
            get
            {
                // *** Start programmer edit section *** (ГотПродукция.Одобрено Get start)

                // *** End programmer edit section *** (ГотПродукция.Одобрено Get start)
                bool result = this.fОдобрено;
                // *** Start programmer edit section *** (ГотПродукция.Одобрено Get end)

                // *** End programmer edit section *** (ГотПродукция.Одобрено Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ГотПродукция.Одобрено Set start)

                // *** End programmer edit section *** (ГотПродукция.Одобрено Set start)
                this.fОдобрено = value;
                // *** Start programmer edit section *** (ГотПродукция.Одобрено Set end)

                // *** End programmer edit section *** (ГотПродукция.Одобрено Set end)
            }
        }
        
        /// <summary>
        /// Сумма.
        /// </summary>
        // *** Start programmer edit section *** (ГотПродукция.Сумма CustomAttributes)

        // *** End programmer edit section *** (ГотПродукция.Сумма CustomAttributes)
        public virtual double Сумма
        {
            get
            {
                // *** Start programmer edit section *** (ГотПродукция.Сумма Get start)

                // *** End programmer edit section *** (ГотПродукция.Сумма Get start)
                double result = this.fСумма;
                // *** Start programmer edit section *** (ГотПродукция.Сумма Get end)

                // *** End programmer edit section *** (ГотПродукция.Сумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ГотПродукция.Сумма Set start)

                // *** End programmer edit section *** (ГотПродукция.Сумма Set start)
                this.fСумма = value;
                // *** Start programmer edit section *** (ГотПродукция.Сумма Set end)

                // *** End programmer edit section *** (ГотПродукция.Сумма Set end)
            }
        }
        
        /// <summary>
        /// Товар.
        /// </summary>
        // *** Start programmer edit section *** (ГотПродукция.Товар CustomAttributes)

        // *** End programmer edit section *** (ГотПродукция.Товар CustomAttributes)
        [StrLen(255)]
        public virtual string Товар
        {
            get
            {
                // *** Start programmer edit section *** (ГотПродукция.Товар Get start)

                // *** End programmer edit section *** (ГотПродукция.Товар Get start)
                string result = this.fТовар;
                // *** Start programmer edit section *** (ГотПродукция.Товар Get end)

                // *** End programmer edit section *** (ГотПродукция.Товар Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ГотПродукция.Товар Set start)

                // *** End programmer edit section *** (ГотПродукция.Товар Set start)
                this.fТовар = value;
                // *** Start programmer edit section *** (ГотПродукция.Товар Set end)

                // *** End programmer edit section *** (ГотПродукция.Товар Set end)
            }
        }
        
        /// <summary>
        /// Цена.
        /// </summary>
        // *** Start programmer edit section *** (ГотПродукция.Цена CustomAttributes)

        // *** End programmer edit section *** (ГотПродукция.Цена CustomAttributes)
        public virtual double Цена
        {
            get
            {
                // *** Start programmer edit section *** (ГотПродукция.Цена Get start)

                // *** End programmer edit section *** (ГотПродукция.Цена Get start)
                double result = this.fЦена;
                // *** Start programmer edit section *** (ГотПродукция.Цена Get end)

                // *** End programmer edit section *** (ГотПродукция.Цена Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ГотПродукция.Цена Set start)

                // *** End programmer edit section *** (ГотПродукция.Цена Set start)
                this.fЦена = value;
                // *** Start programmer edit section *** (ГотПродукция.Цена Set end)

                // *** End programmer edit section *** (ГотПродукция.Цена Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Proekt4.Перемещение.
        /// </summary>
        // *** Start programmer edit section *** (ГотПродукция.Перемещение CustomAttributes)

        // *** End programmer edit section *** (ГотПродукция.Перемещение CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Перемещение"})]
        public virtual IIS.Proekt4.Перемещение Перемещение
        {
            get
            {
                // *** Start programmer edit section *** (ГотПродукция.Перемещение Get start)

                // *** End programmer edit section *** (ГотПродукция.Перемещение Get start)
                IIS.Proekt4.Перемещение result = this.fПеремещение;
                // *** Start programmer edit section *** (ГотПродукция.Перемещение Get end)

                // *** End programmer edit section *** (ГотПродукция.Перемещение Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ГотПродукция.Перемещение Set start)

                // *** End programmer edit section *** (ГотПродукция.Перемещение Set start)
                this.fПеремещение = value;
                // *** Start programmer edit section *** (ГотПродукция.Перемещение Set end)

                // *** End programmer edit section *** (ГотПродукция.Перемещение Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ГотПродукцияE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ГотПродукцияE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ГотПродукцияE", typeof(IIS.Proekt4.ГотПродукция));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ГотПродукция.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfГотПродукция CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfГотПродукция CustomAttributes)
    public class DetailArrayOfГотПродукция : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Proekt4.DetailArrayOfГотПродукция members)

        // *** End programmer edit section *** (IIS.Proekt4.DetailArrayOfГотПродукция members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ГотПродукция by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ГотПродукция.
        /// </summary>
        public DetailArrayOfГотПродукция(IIS.Proekt4.Перемещение fПеремещение) : 
                base(typeof(ГотПродукция), ((ICSSoft.STORMNET.DataObject)(fПеремещение)))
        {
        }
        
        public IIS.Proekt4.ГотПродукция this[int index]
        {
            get
            {
                return ((IIS.Proekt4.ГотПродукция)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Proekt4.ГотПродукция dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
