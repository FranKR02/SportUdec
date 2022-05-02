using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SportUdec.Models;

namespace SportUdec.Data
{
    public class SportUdecContext : DbContext
    {
        public SportUdecContext (DbContextOptions<SportUdecContext> options)
            : base(options)
        {
        }

        public DbSet<SportUdec.Models.Funcionario> Funcionario { get; set; }
    }
}
