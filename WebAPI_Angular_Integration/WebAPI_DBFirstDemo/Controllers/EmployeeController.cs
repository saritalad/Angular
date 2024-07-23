using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SQLitePCL;
using System.Linq;
using WebAPI_DBFirstDemo.Models;

namespace WebAPI_DBFirstDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly AppDbContext _context;
        public EmployeeController(AppDbContext context) {
            
            _context = context;
                
                
                }

        [HttpGet]
        public IActionResult Get()
        {
            var data=_context.Employees.ToList();
        return Ok(data);
        
        }
    }
}
