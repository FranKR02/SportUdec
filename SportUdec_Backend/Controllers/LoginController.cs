using Microsoft.AspNetCore.Mvc;
using SportUdec.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportUdec.Controllers
{

    [Route("/[controller]")]
    [ApiController]
    public class LoginController:ControllerBase
    {
        private readonly SportUdecContext context;
        public LoginController(SportUdecContext context)
        {
            this.context = context;
        }
        [HttpPost]
        public IActionResult LoginOfficial(Login login)
        {

            SportClub club = new SportClub();
            using (var db = new SportUdecContext())
            {
                club = db.SportClubs.Where(x => x.Address.Equals(login.Correo) && x.Password.Equals(login.Clave)).FirstOrDefault();
            }
            if (club != null)
            {
                return Ok(new
                {
                    club = club,
                    cargo = "club"
                });
            }
            else
            {
                Official official = new Official();
                using (var db = new SportUdecContext())
                {
                    official = db.Funcionario.Where(x => x.Email.Equals(login.Correo) && x.Password.Equals(login.Clave)).FirstOrDefault();
                }
                if(official != null)
                {
                    return Ok(new
                    {
                        funcionario = official,
                        cargo = "funcionario"
                        
                    });
                }
                else
                {
                    return NotFound("No se ha encontrado el usuario " + login.Correo + " en nuestra base de datos");
                }

            }
            
        }
    }
}
