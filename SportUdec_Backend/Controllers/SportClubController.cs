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
    public class SportClubController : ControllerBase
    {
        private readonly SportUdecContext _context;

        public SportClubController(SportUdecContext context)
        {
            _context = context;
        }

        // GET: SportClub
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SportClub>>> GetSportClubs()
        {
            return await _context.SportClubs.ToListAsync();
        }

        // GET:  SportClub with ID
        [HttpGet("{id}")]
        public async Task<ActionResult<SportClub>> GetSportClub(int id)
        {
            var sportClub = await _context.SportClubs.FindAsync(id);

            if (sportClub == null)
            {
                return NotFound();
            }

            return sportClub;
        }

        // UPDATE: SportClub with Id

        [HttpPut("{id}")]
        public async Task<IActionResult> PutSportClub(int id, SportClub sportClub)
        {
            if (id != sportClub.IdSportclub)
            {
                return BadRequest();
            }

            _context.Entry(sportClub).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SportClubExists(id))
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

        // ADD: SportClub

        [HttpPost]
        public async Task<ActionResult<SportClub>> PostSportClub(SportClub sportClub)
        {
            _context.SportClubs.Add(sportClub);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSportClub", new { id = sportClub.IdSportclub }, sportClub);
        }

        // DELETE: SportClub
        [HttpDelete("{id}")]
        public async Task<ActionResult<SportClub>> DeleteSportClub(int id)
        {
            var sportClub = await _context.SportClubs.FindAsync(id);
            if (sportClub == null)
            {
                return NotFound();
            }

            _context.SportClubs.Remove(sportClub);
            await _context.SaveChangesAsync();

            return sportClub;
        }

        //no es necesario
        private bool SportClubExists(int id)
        {
            return _context.SportClubs.Any(e => e.IdSportclub == id);
        }

        //REVISAR 
        // search : SportClub with name
        SportUdecContext Bd = new SportUdecContext();
        public List<SportClub> GETNAMESportClub(string name)
        {
            
            if (name == null)
            {
                return null;
            }
            else
            {
                using(var list = Bd)
                {
                    return list.SportClubs.Where(x => x.NameClub.Contains(name)).OrderBy(x => x.IdSportclub).ToList();
                }
            }

        }
    }
}

