using Microsoft.AspNetCore.Mvc;
using Listz_Backend.Models;  // Add this for your model later

namespace Listz_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private static readonly List<Item> Items = new List<Item>
        {
            new Item { Id = 1, Name = "Wood", Quantity = 10 },
            new Item { Id = 2, Name = "Nails", Quantity = 100 }
        };

        // GET: api/items
        [HttpGet]
        public ActionResult<IEnumerable<Item>> GetItems()
        {
            return Items;
        }

        // GET: api/items/5
        [HttpGet("{id}")]
        public ActionResult<Item> GetItem(int id)
        {
            var item = Items.FirstOrDefault(i => i.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return item;
        }

        // POST: api/items
        [HttpPost]
        public ActionResult<Item> CreateItem(Item item)
        {
            item.Id = Items.Max(i => i.Id) + 1;
            Items.Add(item);
            return CreatedAtAction(nameof(GetItem), new { id = item.Id }, item);
        }

        // DELETE: api/items/5
        [HttpDelete("{id}")]
        public IActionResult DeleteItem(int id)
        {
            var item = Items.FirstOrDefault(i => i.Id == id);
            if (item == null)
            {
                return NotFound();
            }

            Items.Remove(item);
            return NoContent();
        }
    }
}