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
    /// Защ свойства.
    /// </summary>
    // *** Start programmer edit section *** (ЗащСвойства CustomAttributes)

    // *** End programmer edit section *** (ЗащСвойства CustomAttributes)
    [AutoAltered()]
    [Caption("Защ свойства")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗащСвойстваE", new string[] {
            "Код as \'Код\'",
            "Наименование as \'Наименование\'"})]
    [View("ЗащСвойстваL", new string[] {
            "Код as \'Код\'",
            "Наименование as \'Наименование\'"})]
    public class ЗащСвойства : ICSSoft.STORMNET.DataObject
    {
        
        private int fКод;
        
        private string fНаименование;
        
        // *** Start programmer edit section *** (ЗащСвойства CustomMembers)

        // *** End programmer edit section *** (ЗащСвойства CustomMembers)

        
        /// <summary>
        /// Код.
        /// </summary>
        // *** Start programmer edit section *** (ЗащСвойства.Код CustomAttributes)

        // *** End programmer edit section *** (ЗащСвойства.Код CustomAttributes)
        public virtual int Код
        {
            get
            {
                // *** Start programmer edit section *** (ЗащСвойства.Код Get start)

                // *** End programmer edit section *** (ЗащСвойства.Код Get start)
                int result = this.fКод;
                // *** Start programmer edit section *** (ЗащСвойства.Код Get end)

                // *** End programmer edit section *** (ЗащСвойства.Код Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗащСвойства.Код Set start)

                // *** End programmer edit section *** (ЗащСвойства.Код Set start)
                this.fКод = value;
                // *** Start programmer edit section *** (ЗащСвойства.Код Set end)

                // *** End programmer edit section *** (ЗащСвойства.Код Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (ЗащСвойства.Наименование CustomAttributes)

        // *** End programmer edit section *** (ЗащСвойства.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (ЗащСвойства.Наименование Get start)

                // *** End programmer edit section *** (ЗащСвойства.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (ЗащСвойства.Наименование Get end)

                // *** End programmer edit section *** (ЗащСвойства.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗащСвойства.Наименование Set start)

                // *** End programmer edit section *** (ЗащСвойства.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (ЗащСвойства.Наименование Set end)

                // *** End programmer edit section *** (ЗащСвойства.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗащСвойстваE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗащСвойстваE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗащСвойстваE", typeof(IIS.Proekt4.ЗащСвойства));
                }
            }
            
            /// <summary>
            /// "ЗащСвойстваL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗащСвойстваL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗащСвойстваL", typeof(IIS.Proekt4.ЗащСвойства));
                }
            }
        }
    }
}
