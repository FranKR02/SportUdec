using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportUdec.Data;
using SportUdec.Models;

namespace SportUdec.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FuncionariosController : ControllerBase
    {
        private static Funcionario[] Funcionarios = Enumerable.Range(1, 5).Select(index => new Funcionario
        {
            Id = index,
            Name = "Usuario " + index,
            Email = "usuarioEmail@email.com",
            Password = "asdwdwnoinasd " + index,
            Cedula = 123 + index
        }).ToArray();

        //Obtiene todos los usuario
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Funcionario>>> GetFuncionario()
        {
            return Funcionarios;
        }

        //Obtiene un usuario por id
        [HttpGet("{id}")]
        public async Task<ActionResult<Funcionario>> GetFuncionario(int id)
        {
            var funcionario = Funcionarios.FirstOrDefault(funcionario => funcionario.Id == id);
            return funcionario;
        }

        //Actualiza un usuario
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFuncionario(int id, Funcionario funcionario)
        {
            //SIN HACER
            if (id != funcionario.Id)
            {
                return BadRequest();
            }


            return NoContent();
        }

        //Crea un usuario
        [HttpPost]
        public void PostFuncionario(Funcionario funcionario)
        {
            var lenght = Funcionarios.Length;
            Funcionarios[lenght - 1] = funcionario;

        }

        // Elimina un usuario
        [HttpDelete("{id}")]
        public void DeleteFuncionario(int id)
        {
            var funcionario = Funcionarios.FirstOrDefault(funcionario => funcionario.Id == id);
            if (funcionario != null)
            {
                Funcionarios = Funcionarios.Where(funcionario => funcionario.Id  != id).ToArray();

            }
        }

    }
}
