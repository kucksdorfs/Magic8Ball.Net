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
        public ActionResult Index()
        {
            return new JsonResult(EightBallResponses.GetRandomResponse("", 5000));
        }
    }
}