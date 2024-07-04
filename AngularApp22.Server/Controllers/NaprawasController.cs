using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularApp22.Server;
using AngularApp22.Server.Data;

namespace AngularApp22.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class NaprawasController : ControllerBase
    {
        private readonly DataBase _context;

        public NaprawasController(DataBase context)
        {
            _context = context;
        }

        // GET: api/Naprawas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Naprawa>>> GetNaprawa()
        {
            var naprawa = await _context.Naprawa.ToListAsync();
            return Ok(naprawa);
        }

        // GET: api/Naprawas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Naprawa>> GetNaprawa(int id)
        {
            var naprawa = await _context.Naprawa.FindAsync(id);

            if (naprawa == null)
            {
                return NotFound();
            }

            return Ok(naprawa);
        }

        // PUT: api/Naprawas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNaprawa(int id, Naprawa naprawa)
        {
            if (id != naprawa.RepairId)
            {
                return BadRequest();
            }

            _context.Entry(naprawa).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NaprawaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Naprawas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Naprawa>> PostNaprawa(Naprawa naprawa)
        {
            _context.Naprawa.Add(naprawa);
            await _context.SaveChangesAsync();

            return Ok(CreatedAtAction("GetNaprawa", new { id = naprawa.RepairId }, naprawa));
        }

        // DELETE: api/Naprawas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNaprawa(int id)
        {
            var naprawa = await _context.Naprawa.FindAsync(id);
            if (naprawa == null)
            {
                return NotFound();
            }

            _context.Naprawa.Remove(naprawa);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NaprawaExists(int id)
        {
            return _context.Naprawa.Any(e => e.RepairId == id);
        }
    }
}
