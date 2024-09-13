package com.awa.RecetteFacile.service;

import com.awa.RecetteFacile.entite.Recipe;
import com.awa.RecetteFacile.entite.User;

import java.util.ArrayList;
import java.util.List;

public interface RecipeService {
    public Recipe createdRecipe(Recipe recipe, User user);
    public Recipe findRecipeById(Long id)throws Exception;

    public void deleteRecipe(Long id)throws Exception;

    public Recipe updatedRecipe(Recipe recipe, Long id)throws Exception;

    public List<Recipe> findAllRecipe();

    public Recipe likeRecipe(Long recipeId, User user)throws Exception;


}
