package vitaliy94.bookshoptest.message;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

@Data
@AllArgsConstructor
public class JwtResponse
{
    private String token;
    private final String type = "Bearer";
    private String username;
    private Collection<? extends GrantedAuthority> authorities;
}
