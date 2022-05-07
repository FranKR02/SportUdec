using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using SportUdec.Models;

namespace SportUdec.Controllers
{
    [Route("/[controller]")]
    [ApiController]
    public class OfficialsController : ControllerBase
    {
        private readonly SportUdecContext context;

        public OfficialsController(SportUdecContext context)
        {
            this.context = context;
        }

        // GET: api/Officials
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Official>>> GetFuncionarios()
        {
            return await context.Funcionario.ToListAsync();
        }

        // GET: con id
        [HttpGet("{id}")]
        public async Task<ActionResult<Official>> GetOfficial(int id)
        {
            var official = await context.Funcionario.FindAsync(id);

            if (official == null)
            {
                return NotFound();
            }

            return official;
        }

        // UPDATE: CON ID

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOfficial(int id, Official official)
        {
            if (id != official.Id)
            {
                return BadRequest();
            }

            context.Entry(official).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OfficialExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok();
        }

        // ADD : Official User
        [HttpPost]
        public async Task<ActionResult<Official>> AddOfficial(Official official)
        {
            context.Funcionario.Add(official);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetOfficial", new { id = official.Id }, official);
        }

        // DELETE: Official user
        [HttpDelete("{id}")]
        public async Task<ActionResult<Official>> DeleteOfficial(int id)
        {
            var official = await context.Funcionario.FindAsync(id);
            if (official == null)
            {
                return NotFound();
            }

            context.Funcionario.Remove(official);
            await context.SaveChangesAsync();

            return official;
        }

        private bool OfficialExists(int id)
        {
            return context.Funcionario.Any(e => e.Id == id);
        }
        
       
    }
}
