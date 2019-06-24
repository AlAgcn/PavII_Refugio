using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gestor
{
    public class TiposDAO
    {
        public static List<Tipos> GetAll()
        {
            using(AnimalesEntity db = new AnimalesEntity())
            {
                return db.Tipos.ToList();
            }
        }
    }
}
