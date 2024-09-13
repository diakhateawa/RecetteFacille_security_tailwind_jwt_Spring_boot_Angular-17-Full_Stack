package com.awa.RecetteFacile.service;

import com.awa.RecetteFacile.config.JwtProvider;
import com.awa.RecetteFacile.entite.Recipe;
import com.awa.RecetteFacile.entite.User;
import com.awa.RecetteFacile.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
/*
    @Override
    public User findUserById(Long userId) throws Exception {
        Optional<User> opt = userRepository.findById(userId);
        if (opt.isPresent()){
            return opt.get();
        }
        throw  new Exception("user not found with id"+userId);
    }*/


    @Autowired
    private JwtProvider jwtProvider;
    @Override
    public User findUserById(Long userId) throws Exception {
        Optional<User> opt = userRepository.findById(userId);
        if(opt.isPresent()){
            return opt.get();
        }
        throw new Exception("user not found with id"+userId);

    }

    @Override
    public User findUserByJwt(String jwt) throws Exception {
        String email = jwtProvider.getEmailFromJwtToken(jwt);
        if(email==null){
            throw new Exception("provider valid jwt token ...");

        }

        User user = userRepository.findByEmail(email);

        if(user==null){
            throw new Exception("user not found with email"+email);

        }
        return user;
    }



}
