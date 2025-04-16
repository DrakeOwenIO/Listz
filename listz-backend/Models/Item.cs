namespace Listz_Backend.Models
{
   public class Item
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int Quantity { get; set; }
    public int ListId { get; set; } // Foreign key to a UserList
}
}
