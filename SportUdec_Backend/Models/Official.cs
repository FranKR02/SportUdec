using System;
using System.Collections.Generic;

#nullable disable

namespace SportUdec.Models
{
    public partial class Official
    {
        public Official()
        {
            SportClubs = new HashSet<SportClub>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int? Cedula { get; set; }

        public virtual ICollection<SportClub> SportClubs { get; set; }

    }
}
