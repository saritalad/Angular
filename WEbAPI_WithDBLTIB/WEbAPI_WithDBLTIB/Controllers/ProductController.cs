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
    public class ProductController : ControllerBase
    {
        public ProductController(AppDbContext context)
        {
            _context = context;
        }

        public  AppDbContext _context { get; }

        [HttpGet]
        public ActionResult get()
        {
            var data = _context.Products.ToList();
            return Ok(data);
        }

        [HttpGet("{id}")]
        public ActionResult get(int id)
        {
            var data = _context.Products.FirstOrDefault(p => p.ProductId == id);
            return Ok(data);
        }
        // for new record
        [HttpPost]
        public ActionResult post(Product newproduct)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();

            }
            else
            {
                _context.Products.Add(newproduct);

                _context.SaveChanges();

                return Ok();
            }
        }
        //to update record 
        [HttpPut("{id}")]
        public ActionResult put(int? id, Product modifiedproduct)
        {
            if (id == null)
                return NotFound();
            else
            {// select productId,productname,price  from products where productid=id
                var data = _context.Products.FirstOrDefault(p => p.ProductId == id);

                 data.productname = modifiedproduct.productname;
                 data.price = modifiedproduct.price;
              
                _context.SaveChanges();

                return Ok();
                                }
            
                   }

        // to delete record us httpdelete
        [HttpDelete("{id}")]
        public ActionResult delete(int? id)
        {// select * from products where productId=id
            var data = _context.Products.FirstOrDefault(p => p.ProductId == id);
            if (data == null)
                return NotFound();
             else
            {
            
                _context.Products.Remove(data);
                _context.SaveChanges();
                return Ok();
            }



        }



    }
}
