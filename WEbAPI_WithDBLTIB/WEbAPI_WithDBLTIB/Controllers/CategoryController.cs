using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WEbAPI_WithDBLTIB.Models;

namespace WEbAPI_WithDBLTIB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {

        public CategoryController(AppDbContext context)
        {
            _context = context;

        }

        public AppDbContext _context { get; }
        [HttpGet]
        public ActionResult get()
        {
             return Ok(_context.Categories.ToList());// create array in angular 
        }

        [HttpGet("{id}")]
        public ActionResult get(int id )
        {
            var data = _context.Categories.FirstOrDefault(c => c.CatId == id);// craete single Object in angular 
            return Ok(data);
        }
        [HttpPut("{id}")]
        public ActionResult put(int? id, Category modifiedobj)
        {
            if (id == null)
                return NotFound();
            else
            {// select productId,productname,price  from products where productid=id
                var data = _context.Categories.FirstOrDefault(c => c.CatId == id);

                data.Catname = modifiedobj.Catname;
                              _context.SaveChanges();

                return Ok();
            }

        }


    }
}
