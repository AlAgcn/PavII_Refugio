using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Gestor;

namespace MiWebApi.Controllers
{
    public class TiposController : ApiController
    {
        public IHttpActionResult Get()
        {
            return Ok(TiposDAO.GetAll());
        }
    }
}
