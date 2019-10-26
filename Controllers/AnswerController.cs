namespace Magic8Ball.Net.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Diagnostics;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Magic8Ball.Net.Models;
    public class AnswerController : Controller
    {
        public ActionResult Index(String q, int ttl)
        {
            if (ttl < 1000)
            {
                ttl = 1000;
            }

            return new JsonResult(EightBallResponses.GetRandomResponse());
        }
    }
}