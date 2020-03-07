using Microsoft.AspNetCore.Mvc;

namespace HelloWorld.Controllers
{
    public class MoTaController : Controller
    {
        public IActionResult Test()
        {
            return View();
        }
        public IActionResult Home()
        {
            return View();
        }
    }
}