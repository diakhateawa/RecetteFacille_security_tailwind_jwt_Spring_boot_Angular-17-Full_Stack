package com.awa.RecetteFacile.service;

import com.awa.RecetteFacile.entite.User;

import java.security.cert.Extension;

public interface UserService {
   public User findUserById(Long userId) throws Exception;
    public User findUserByJwt(String jwt) throws Exception;

}

