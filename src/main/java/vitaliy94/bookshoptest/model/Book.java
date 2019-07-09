package vitaliy94.bookshoptest.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Book
{
    int id;
    String name;
    int year;
    String description;
    double price;
}
