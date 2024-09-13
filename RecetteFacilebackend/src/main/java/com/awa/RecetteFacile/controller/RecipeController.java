package com.awa.RecetteFacile.controller;

import com.awa.RecetteFacile.entite.Recipe;
import com.awa.RecetteFacile.entite.User;

import com.awa.RecetteFacile.service.RecipeService;
import com.awa.RecetteFacile.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recipes")
@CrossOrigin(origins = "*", maxAge = 3600)

public class RecipeController {
   @Autowired
    private RecipeService recipeService;

    @Autowired
    private UserService userService;

/*
    @PostMapping("/users/{userid}")
    public Recipe createdRecipe(@RequestBody Recipe recipe, @PathVariable Long userid) throws Exception {

        User user = userService.findUserById(userid);
        Recipe createdRecipe = recipeService.createdRecipe(recipe, user);
        return createdRecipe;
    }

*/


   @PostMapping()
    public Recipe createdRecipe(@RequestBody Recipe recipe, @RequestHeader ("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwt(jwt);


        Recipe createdRecipe = recipeService.createdRecipe(recipe, user);
        return createdRecipe;
    }
    @GetMapping()
    public List<Recipe> getAllRecipe() throws Exception {

        List<Recipe> recipes = recipeService.findAllRecipe();
        return recipes;
    }

    @PutMapping("/{id}")
    public Recipe updatedRecipe(@RequestBody Recipe recipe, @PathVariable Long id) throws Exception {

        Recipe updatedRecipe = recipeService.updatedRecipe(recipe, id);
        return updatedRecipe;
    }

    @DeleteMapping("/{recipeId}")
    public String  deleteRecipe(@PathVariable Long recipeId) throws Exception {
        recipeService.deleteRecipe(recipeId);
        return "Recipe delete successfully";

    }

   /* @PutMapping("/{id}/like/users/{userid}")
    public Recipe likeRecipe( @PathVariable Long userid, @PathVariable Long id) throws Exception {

        User user = userService.findUserById(userid);

        Recipe updatedRecipe = recipeService.likeRecipe(id,user);
        return updatedRecipe;
    }*/

  @PutMapping("/{id}/like")
    public Recipe likeRecipe( @RequestHeader ("Authorization") String jwt, @PathVariable Long id) throws Exception {

        User user = userService.findUserByJwt(jwt);

        Recipe updateRecipe = recipeService.likeRecipe(id,user);
        return updateRecipe;
    }


    }
