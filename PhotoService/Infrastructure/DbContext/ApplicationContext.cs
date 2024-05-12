using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Model.Entity;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.DbContext
{
    public class ApplicationContext: Microsoft.EntityFrameworkCore.DbContext
    {
        public DbSet<Album> Albums { get; set; } = null!;
    }
}
