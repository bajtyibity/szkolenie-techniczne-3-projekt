using System.ComponentModel.DataAnnotations;

namespace AngularApp22.Server
{
    public class Naprawa
    {
        [Key]
        public int RepairId { get; set; } // Unikalny identyfikator naprawy

        public string? Description { get; set; } // Opis problemu lub zakresu pracy do wykonania

        public string? RepairDate { get; set; } // Data rozpoczęcia naprawy

        public string? CompletionDate { get; set; } // Data zakończenia naprawy

        public string? PartsUsed { get; set; } // czesci które były naprawiane

        public double? LaborHours { get; set; } // Liczba godzin pracy potrzebnych do wykonania naprawy

        public decimal? LaborCost { get; set; } // Koszt pracy

        public decimal? PartsCost { get; set; } // Koszt części

        public decimal? TotalCost { get; set; } // Całkowity koszt naprawy
    }
}
