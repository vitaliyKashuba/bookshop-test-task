package vitaliy94.bookshoptest.util;

import com.github.javafaker.Faker;
import lombok.extern.slf4j.Slf4j;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.math.BigDecimal;
import java.util.Random;
import java.util.Set;

@Slf4j
public class AppUtil
{
    private static final Random random;
    public static final Faker faker;
    private static Validator validator;

    static {
        random = new Random();
        faker = new Faker();

        ValidatorFactory vf = Validation.buildDefaultValidatorFactory();
        validator = vf.getValidator();
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

    /**
     * validate objects from model via javax.validation api
     */
    public static boolean isValide(Object o) {
        Set<ConstraintViolation<Object>> constraintViolations = validator.validate(o);
        constraintViolations.forEach(cv -> log.error(cv.getMessage()));
        return constraintViolations.size() == 0;
    }
}
