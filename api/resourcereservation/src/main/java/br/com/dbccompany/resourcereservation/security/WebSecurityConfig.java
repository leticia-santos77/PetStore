package br.com.dbccompany.resourcereservation.security;

import br.com.dbccompany.resourcereservation.dto.UserDTO;
import br.com.dbccompany.resourcereservation.model.User;
import br.com.dbccompany.resourcereservation.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.headers().frameOptions().sameOrigin().and().cors().and()
                .csrf().disable().authorizeRequests()
                .antMatchers("/home").permitAll()
                .antMatchers(HttpMethod.POST, "/login").permitAll()
                .anyRequest().authenticated()
                .and().addFilterBefore(new JWTLoginFilter("/login", authenticationManager()),
                UsernamePasswordAuthenticationFilter.class)

                .addFilterBefore(new JWTAuthenticationFilter(),
                        UsernamePasswordAuthenticationFilter.class);
    }

    @Autowired
    public void authenticationManager(AuthenticationManagerBuilder builder, UserService userService) throws Exception {
        if (userService.count() == 0) {
            UserDTO dto = new UserDTO();
            dto.setUsername("admin");
            dto.setPassword("admin");
            userService.save(dto);
        }
        builder.userDetailsService(username -> new MyUserDetails(userService.findByUsername(username)));
    }
}