package vitaliy94.bookshoptest.repository;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import vitaliy94.bookshoptest.model.Book;
import vitaliy94.bookshoptest.util.AppUtil;

import javax.annotation.PostConstruct;
import java.util.*;

/**
 * чтобы тестовое можно было запустить без насройки базы, в репозитории имитация бд
 */
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

        for (int i = 0; i < 100; i++)
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
        books.remove(b);
        log.info("deleting " + b);
    }

    private Book findById(int id) {
        return books.stream()
                .filter(book -> book.getId() == id)
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("no such element"));
    }

    /** типа update запрос к базе */
    public void editBook(Book book) {
        log.info("editing " + book);
        Book b = findById(book.getId());
        books.remove(b);
        books.add(book);
    }

    public void addBook(Book book) {
        log.info("add book " + book);
        book.setId(bookId++);
        books.add(book);
    }
}
