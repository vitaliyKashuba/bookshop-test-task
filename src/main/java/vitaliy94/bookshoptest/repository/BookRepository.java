package vitaliy94.bookshoptest.repository;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import vitaliy94.bookshoptest.model.Book;
import vitaliy94.bookshoptest.util.AppUtil;

import javax.annotation.PostConstruct;
import java.util.*;

@Slf4j
@Service
public class BookRepository
{
    private List<Book> books;
    private static int bookId;

    @PostConstruct
    public void init()
    {
        books = new ArrayList<>();

        for (int i = 0; i < 10; i++)
        {
            books.add(new Book(bookId++,
                    AppUtil.faker.book().title(),
                    AppUtil.getRandomBetween(1950, 2019),
                    AppUtil.faker.chuckNorris().fact(),
                    AppUtil.getRandomPrice(100)));
        }
    }

    public List<Book> getBooks() {
        return books;
    }

    public void deleteBook(int id) {
        Book b = findById(id);
        log.info("deleting " + b);
        books.remove(b);
    }

    private Book findById(int id) {
        return books.stream()
                .filter(book -> book.getId() == id)
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("no such element"));
    }

    public void editBook(int id) {
        Book b = findById(id);


    }
}
