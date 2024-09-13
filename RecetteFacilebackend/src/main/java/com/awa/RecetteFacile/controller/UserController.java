package com.awa.RecetteFacile.controller;


import com.awa.RecetteFacile.entite.User;
import com.awa.RecetteFacile.repository.UserRepository;
import com.awa.RecetteFacile.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UserController {

 /*   @Autowired
    private UserRepository userRepository;*/

    @Autowired
    private UserService userService;

/*
@PostMapping("/users")
public User createUser(@RequestBody User user){
    return user;
}*/


    @GetMapping("/api/users/profile")
    public User findUserByJwt(@RequestHeader("Authorization")String jwt) throws Exception {
        User user = userService.findUserByJwt(jwt);
        return user;

    }


     /* public User findByEmail(String email) throws Exception {

        User isExist = findByEmail(user.getEmail());
        User user = userRepository.findByEmail(email);
        if(user==null){
            throw new  Exception("user not found white email"+email);

        }
        return  user;
    }
*/

  /*  @PostMapping("/users")
    public User createUser(@RequestBody User user) throws Exception {

        User isExist = userRepository.findByEmail(user.getEmail());
        if(isExist!=null){
            throw new  Exception("user is exist with"+user.getEmail());
        }

        User savedUser = userRepository.save(user);
        return savedUser;

    }

    @GetMapping("/users")
    public List<User> getAllUsers() throws Exception {
        List<User> users = userRepository.findAll();
       return users;

    }


  @DeleteMapping("/users/{userId}")
    public String deleteUser(@PathVariable Long userId) throws Exception {
        userRepository.deleteById(userId);
        return ("User delete successfully");

    }
*/

}
