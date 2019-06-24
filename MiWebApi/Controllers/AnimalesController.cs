using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Gestor;

namespace MiWebApi.Controllers
{
    public class AnimalesController : ApiController
    {
        public IHttpActionResult Get()
        {
            return Ok(AnimalesDAO.GetAll());
        }

        public IHttpActionResult Get(int id)
        {
            return Ok(AnimalesDAO.GetById(id));
        }

        public IHttpActionResult Delete(int id)
        {
            if (AnimalesDAO.DeleteByID(id))
                return Ok("Animal borrado exitosamente");
            else
                return BadRequest("No se pudo borrar");
        }

        public IHttpActionResult Put(Animales an)
        {
            if (AnimalesDAO.Modificar(an))
                return Ok("Animal actualizado correctamente");
            else
                return BadRequest("No se pudo actualizar animal");
        }

        public IHttpActionResult Post(Animales an)
        {
            if (AnimalesDAO.Nuevo(an))
                return Ok("Animal insertado correctamente");
            else
                return BadRequest("No se pudo insertar animal");
        }
    }
}
