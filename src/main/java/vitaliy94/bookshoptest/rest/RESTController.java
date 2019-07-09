package vitaliy94.bookshoptest.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vitaliy94.bookshoptest.model.Book;
import vitaliy94.bookshoptest.repository.BookRepository;

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

//    @GetMapping("/{id}")
//    public ResponseEntity getBooks1(@PathVariable int id)
//    {
//        System.out.println(id);
//        return ResponseEntity.ok(bookRepository.getBooks());
//    }

    @PutMapping("/{id}")
    public ResponseEntity addBook(@PathVariable int id, @RequestBody Book book)
    {
        return ResponseEntity.ok("ok");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteBook(@PathVariable int id)
    {
        System.out.println("delete " + id);
        bookRepository.deleteBook(id);
        return ResponseEntity.ok().build();
    }
}
