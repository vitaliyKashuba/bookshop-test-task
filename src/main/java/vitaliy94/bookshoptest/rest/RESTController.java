package vitaliy94.bookshoptest.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RESTController
{
    @RequestMapping("/")
    public ResponseEntity getCurrency()
    {
        return new ResponseEntity<>("hello world", HttpStatus.OK);
    }

}
