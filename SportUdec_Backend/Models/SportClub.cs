using System;
using System.Collections.Generic;

#nullable disable

namespace SportUdec.Models
{
    public partial class SportClub
    {
        public int IdSportclub { get; set; }
        public string NameClub { get; set; }
        public string Address { get; set; }
        public string Password { get; set; }
        public long? NumberStudens { get; set; }
        public string ManagerName { get; set; }
        public int? Id { get; set; }
        public string PhysicalResources { get; set; }

        public virtual Official IdNavigation { get; set; }

    }
}
