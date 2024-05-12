using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Model.DTO
{
    public class PhotosDTO
    {
        public int Count { get; set; }
        public List<string> URLS { get; set; } = null!;
    }
}
