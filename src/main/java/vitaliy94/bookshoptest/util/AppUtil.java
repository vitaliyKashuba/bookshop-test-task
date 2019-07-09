package vitaliy94.bookshoptest.util;

import com.github.javafaker.Faker;
import vitaliy94.bookshoptest.model.Book;

import java.math.BigDecimal;
import java.util.Random;

public class AppUtil
{
    private static final Random random;
    public static final Faker faker;
    private static int bookId;

    static {
        random = new Random();
        faker = new Faker();
        bookId = 1;
    }

    public static Book generateBook()
    {
        return new Book(bookId++,faker.book().title(), getRandomBetween(1950, 2019), faker.chuckNorris().fact(), getRandomPrice(100));
    }

    public static int getRandomBetween(int from, int to)
    {
        if(to <= from)
        {
            throw new IllegalArgumentException("incorrect bounds");
        }
        return random.nextInt(to-from) + from;
    }

    public static double getRandomPrice(int bound)
    {
        BigDecimal price = new BigDecimal(random.nextDouble()*bound);
        return price.setScale(2, BigDecimal.ROUND_CEILING).doubleValue();
    }

    public static void main(String[] args) {
        for(int i =0; i<10; i++)
        {
            System.out.println(generateBook());
        }
    }
}
