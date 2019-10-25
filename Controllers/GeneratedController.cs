namespace Magic8Ball.Net.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Diagnostics;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Magic8Ball.Net.Models;

    public class GeneratedController : Controller
    {

        //[ResponseCache()]
        public ActionResult ResponseTypes()
        {
            Response.ContentType = "text/javascript";


            return View(typeof(Magic8Ball));
            //return null;
        }

    }
}
