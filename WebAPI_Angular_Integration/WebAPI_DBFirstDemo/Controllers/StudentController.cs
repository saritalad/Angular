using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SQLitePCL;
using System.Linq;
using WebAPI_DBFirstDemo.Models;

namespace WebAPI_DBFirstDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly AppDbContext _context;

        public StudentController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Getstudents()
        {
            var studlist = _context.Students.ToList();
            if(studlist.Count !=0 )
            {
                return Ok(studlist);
            }
            else 
            { return BadRequest(); }

        }

        [HttpGet("{id}")]
        public IActionResult Getstudent(int id ) 
        {
        var data= _context.Students.FirstOrDefault(x => x.Id == id);
            if(data==null)
            { return NotFound("Record Not Found"); }
            else
            { return Ok(data); }
       
        }

        [HttpPost]
        public IActionResult AddStudent(Student newstud)
        {
            if(newstud==null)
            {
                return BadRequest();
            }
            else
            {
                _context.Students.Add(newstud);
                _context.SaveChanges();
                return NoContent();
            }

        }

        [HttpPut]
        public IActionResult Put(int? id,Student student)
        {
            if (id==null)
            { return NotFound(); }
            else
            {
                _context.Entry(student).State = EntityState.Modified;
                   _context.SaveChanges();
                return Ok();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int? id)
        {
            if (id == null)
            { return NotFound(); }
            else
            {
                var data = _context.Students.FirstOrDefault(y => y.Id == id);
                _context.Students.Remove(data);
                _context.SaveChanges();
                return Ok();
            }
        }

    }
}
