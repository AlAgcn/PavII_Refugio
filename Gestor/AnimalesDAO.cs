using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gestor
{
    public class AnimalesDAO
    {
        static void Main()
        { }

        public static List<Animales> GetAll()
        {
            using (AnimalesEntity db = new AnimalesEntity())
            {
                return db.Animales.ToList();
            }
        }

        public static Animales GetById(int id)
        {
            try
            {
                using (AnimalesEntity db = new AnimalesEntity())
                {
                    return db.Animales.Find(id);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static bool DeleteByID(int Anid)
        {
            try

            {
                using (AnimalesEntity db = new AnimalesEntity())
                {

                    Animales borrar = db.Animales.Where(an => an.id == Anid).Single();
                    db.Animales.Remove(borrar);
                    db.SaveChanges();
                }
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public static bool Modificar(Animales anm)
        {
            try
            {
                using(AnimalesEntity db = new AnimalesEntity())
                {
                    db.Entry(anm).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }
                return true;
            }
            catch(Exception ex)
            {
                return false;
            }
        }

        public static bool Nuevo(Animales anm)
        {
            try
            {
                using (AnimalesEntity db = new AnimalesEntity())
                {
                    db.Animales.Add(anm);
                    db.SaveChanges();
                }
                return true;
            }
            catch (Exception ex)
            {
                return false;
                throw ex;
            }
        }
    }
}
