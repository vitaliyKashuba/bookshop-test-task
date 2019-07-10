package vitaliy94.bookshoptest.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vitaliy94.bookshoptest.model.Book;
import vitaliy94.bookshoptest.repository.BookRepository;
import vitaliy94.bookshoptest.util.AppUtil;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/book")
public class RESTController
{
    @Autowired
    BookRepository bookRepository;

    @GetMapping("/")
    public ResponseEntity getBooks()
    {
        return ResponseEntity.ok(bookRepository.getBooks());
    }

    @PutMapping("/")
    public ResponseEntity addBook(@RequestBody Book book)
    {
        bookRepository.addBook(book);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteBook(@PathVariable int id)
    {
        System.out.println("delete " + id);
        bookRepository.deleteBook(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/{id}")
    public ResponseEntity editBook(@PathVariable int id, @RequestBody Book book)
    {
        if(!AppUtil.isValide(book))
        {
            return ResponseEntity.badRequest().body("Unvalid");
        }
        else {
            bookRepository.editBook(book);
        }

        return ResponseEntity.ok().build();
    }
}
