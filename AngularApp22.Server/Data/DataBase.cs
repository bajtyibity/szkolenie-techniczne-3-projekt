using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AngularApp22.Server;

namespace AngularApp22.Server.Data
{
    public class DataBase : DbContext
    {
        public DataBase (DbContextOptions<DataBase> options)
            : base(options)
        {
        }

        public DbSet<AngularApp22.Server.Naprawa> Naprawa { get; set; } = default!;
    }
}
