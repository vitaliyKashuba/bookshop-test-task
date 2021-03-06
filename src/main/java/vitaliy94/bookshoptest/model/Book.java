package vitaliy94.bookshoptest.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Book
{
    int id;
    @NotBlank
    String name;
    @Positive
    int year;
    @NotBlank
    String description;
    @Positive
    double price;
}
