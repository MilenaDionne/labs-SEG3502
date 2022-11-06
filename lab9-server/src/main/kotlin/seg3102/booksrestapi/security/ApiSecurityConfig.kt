package seg3102.booksrestapi.security

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.CachingUserDetailsService
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter
import seg3102.booksrestapi.security.jwt.JwtUtils

@Configuration
@EnableWebSecurity
class ApiSecurityConfig: WebSecurityConfigurerAdapter() {

    @Autowired
    private lateinit var userDetailsService: UserDetailsServiceImpl

    @Throws(Exception::class)
    override fun configure(authenticationManagerBuilder: AuthenticationManagerBuilder) {
        authenticationManagerBuilder.inMemoryAuthentication().passwordEncoder(passwordEncoder())
                .withUser("admin").password(passwordEncoder().encode("adminpass"))
                .roles("ADMIN","USER")
                .and()
                .withUser("user")
                .password(passwordEncoder().encode("userpasse")).roles("USER")
        authenticationManagerBuilder.userDetailsService(userDetailsService)
    }

    @Bean
    @Throws(Exception::class)
    override fun authenticationManagerBean(): AuthenticationManager {
        return super.authenticationManagerBean()
    }

    @Bean
    fun passwordEncoder(): PasswordEncoder {
        return BCryptPasswordEncoder()
    }

    @Throws(java.lang.Exception::class)
    override fun configure(http: HttpSecurity) {
        http.csrf().disable()
                .authorizeRequests().antMatchers("/auth/**").permitAll()
                .antMatchers(HttpMethod.GET,"/books-api/**").hasAnyRole("USER", "ADMIN")
                .antMatchers(HttpMethod.POST, "/books-api/**").hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/books-api/**").hasRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/books-api/**").hasRole("ADMIN")
                .antMatchers(HttpMethod.PATCH, "/books-api/**").hasRole("ADMIN")
                .anyRequest().authenticated()
                .and().httpBasic()
                .and().requiresChannel().anyRequest()
    }
}
