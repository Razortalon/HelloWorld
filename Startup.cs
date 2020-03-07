using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using HelloWorld.Repositories;


namespace HelloWorld
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public static void ConfigureServices(IServiceCollection services)
        {
            services.AddRazorPages();
            services.AddTransient<TutorialDbContext>();
            services.AddControllersWithViews();
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public static void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();//静态文件
            app.UseRouting();//根据请求找到endpoints
            app.UseAuthentication();
            app.UseEndpoints(endpoints =>//执行endpoints
            {
                endpoints.MapControllerRoute(
                    name: "View",
                    pattern: "{controller=MoTa}/{action=Home}"
                    );
                
            });
        }
    }
}
