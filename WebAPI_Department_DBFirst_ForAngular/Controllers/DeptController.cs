using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI_Department_DBFirst_ForAngular.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI_Department_DBFirst_ForAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeptController : ControllerBase
    {
        public AppDbContext _context { get; }

        // GET: api/<DeptController>
        public DeptController(AppDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        [Route("list")]
        public IEnumerable<Department> list()
        {
            return _context.departments.ToList();
        }

        // GET api/<DeptController>/5
        [HttpGet("{id}")]
        public ActionResult<Department> Get(int id)
        {
            var dept = _context.departments.FirstOrDefault(d => d.id == id);
            if (dept == null)
                return BadRequest();
            else
            return Ok(dept);
        }

        // POST api/<DeptController>
        [HttpPost]
        [Route("AddDept")]
        public ActionResult AddDept([FromBody] Department newdept)
        {
            _context.departments.Add(newdept);
            _context.SaveChanges();
            return Ok();
        }

        // PUT api/<DeptController>/5
        [HttpPut("{id}")]
        [Route("EditDept/{id}")]
        public ActionResult EditDept(int id, [FromBody] Department modifieddept)
        {
            var dept = _context.departments.FirstOrDefault(d => d.id == id);
            if (dept == null)
                return BadRequest();
            else
            {
                dept.deptname = modifieddept.deptname;
                dept.location = modifieddept.location;
               _context.SaveChanges();
                return Ok();
            }

        }

        // DELETE api/<DeptController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var dept = _context.departments.FirstOrDefault(d => d.id == id);
            if (dept == null)
                return NotFound();
            else
            {
                _context.departments.Remove(dept);
                _context.SaveChanges();
                return Ok();
            }
        }
    }
}
