namespace WebAPI_DBFirstDemo.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal salary { get; set; }
        public int DepartmentId { get; set; }
    }
}