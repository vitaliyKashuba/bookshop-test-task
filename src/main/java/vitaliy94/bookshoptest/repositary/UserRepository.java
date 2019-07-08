package vitaliy94.bookshoptest.repositary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import vitaliy94.bookshoptest.model.Role;
import vitaliy94.bookshoptest.model.User;

import javax.annotation.PostConstruct;
import java.util.*;

@Service
public class UserRepository
{
    @Autowired
    PasswordEncoder encoder;

    private List<User> users;

    @PostConstruct
    public void init() {
        users = new ArrayList<>();

        User user = new User("name", "username", "email@mail.com", encoder.encode("password"));
        Set<Role> roles = new HashSet<>();
        roles.add(Role.ROLE_ADMIN);
        user.setRoles(roles);

        users.add(user);
    }

    public Optional<User> findByUsername(String username)
    {
        return users.stream().filter(u -> u.getUsername().equals(username)).findFirst();
    }
}
