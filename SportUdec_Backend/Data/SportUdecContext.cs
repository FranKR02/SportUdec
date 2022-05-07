using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace SportUdec.Models
{
    public partial class SportUdecContext : DbContext
    {
        public SportUdecContext()
        {
        }

        public SportUdecContext(DbContextOptions<SportUdecContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Official> Funcionario { get; set; }
        public virtual DbSet<SportClub> SportClubs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseNpgsql("Host= localhost; Database=sportudec; User Id=postgres; Password=123; Port= 5432");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Spanish_Colombia.1252");

            modelBuilder.Entity<Official>(entity =>
            {
                entity.ToTable("Official", "user_SportUdec");

                entity.Property(e => e.Email).HasColumnType("character varying");

                entity.Property(e => e.Name).HasColumnType("character varying");

                entity.Property(e => e.Password).HasColumnType("character varying");
            });

            modelBuilder.Entity<SportClub>(entity =>
            {
                entity.HasKey(e => e.IdSportclub)
                    .HasName("sportClub_pkey");

                entity.ToTable("sportClub", "user_SportUdec");

                entity.Property(e => e.IdSportclub).HasColumnName("id_Sportclub");

                entity.Property(e => e.Address).HasColumnType("character varying");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ManagerName).HasColumnType("character varying");

                entity.Property(e => e.NameClub).HasColumnType("character varying");

                entity.Property(e => e.Password).HasColumnType("character varying");

                entity.Property(e => e.PhysicalResources).HasColumnName("physicalResources");

                entity.HasOne(d => d.IdNavigation)
                    .WithMany(p => p.SportClubs)
                    .HasForeignKey(d => d.Id)
                    .HasConstraintName("fk_Officail");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
