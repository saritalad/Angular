using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WEbAPI_WithDBLTIB.Models;

namespace WEbAPI_WithDBLTIB
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // to access data from this web api into other client application 
            // the Cross Origin Resource sharing CORS  s security policy is to be configured as follows 
            services.AddDbContext<AppDbContext>(item =>
            item.UseSqlServer(Configuration.GetConnectionString("MyConStr")));
            services.AddCors(setup =>
            {
                setup.AddPolicy("default", options =>
                {
                    options.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod();
                    // httpverbs : HTTPMethods HttpGet ,HttpPost , HttpPUt, HttpDelete 
                });

            });
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();
            app.UseCors("default");
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
