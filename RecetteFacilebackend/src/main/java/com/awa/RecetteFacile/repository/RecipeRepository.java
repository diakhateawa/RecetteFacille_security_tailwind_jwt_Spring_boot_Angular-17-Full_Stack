package com.awa.RecetteFacile.repository;

import com.awa.RecetteFacile.entite.Recipe;
import com.awa.RecetteFacile.entite.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
}
