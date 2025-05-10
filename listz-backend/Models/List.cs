using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class List
{
    [Key]
    public int Id { get; set; }

    [Required]
    public int UserId { get; set; }

    [Required]
    public string Name { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public ICollection<ListColumn> Columns { get; set; }
    public ICollection<ListItem> Items { get; set; }
}

public class ListColumn
{
    [Key]
    public int Id { get; set; }

    [Required]
    public int ListId { get; set; }

    [ForeignKey("ListId")]
    public List List { get; set; }

    [Required]
    public string Name { get; set; }

    public string DataType { get; set; } = "string";  // Could be string, number, date, etc.

    public int OrderIndex { get; set; } = 0;

    public ICollection<ListItemValue> Values { get; set; }
}

public class ListItem
{
    [Key]
    public int Id { get; set; }

    [Required]
    public int ListId { get; set; }

    [ForeignKey("ListId")]
    public List List { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public ICollection<ListItemValue> Values { get; set; }
}

public class ListItemValue
{
    [Key]
    public int Id { get; set; }

    [Required]
    public int ItemId { get; set; }

    [ForeignKey("ItemId")]
    public ListItem Item { get; set; }

    [Required]
    public int ColumnId { get; set; }

    [ForeignKey("ColumnId")]
    public ListColumn Column { get; set; }

    [Required]
    public string Value { get; set; }
}
